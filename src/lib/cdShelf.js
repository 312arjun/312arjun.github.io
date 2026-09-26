/** CD turntable physics — ported from the static portfolio index.js */
export function createCdShelf({ stageEl, sceneEl, projects, startIndex = 0, onChange }) {
  const ARC = {
    stepDeg: 14.5,
    radiusX: 540,
    radiusY: 36,
    depth: 110,
    rotFactor: 0.32,
    scaleCenter: 1,
    scaleEdge: 0.58,
    yLift: 22,
    baseY: 8,
  };
  const SNAP_MS = 420;
  const DRAG_SENSITIVITY = 0.012;
  const WHEEL_SENSITIVITY = 0.0045;
  const MAX_VELOCITY = 14;
  const CLICK_THRESHOLD = 6;
  const FRICTION = 6;
  const VELOCITY_STOP = 0.12;

  let cards = [];
  let angle = startIndex;
  let velocity = 0;
  let dragging = false;
  let pointerId = null;
  let lastX = 0;
  let moved = 0;
  let hitCardIndex = null;
  let snapping = false;
  let snapFrom = 0;
  let snapTarget = null;
  let snapStart = 0;
  let lastTs = null;
  let lastMoveTs = 0;
  let current = startIndex;
  let raf = 0;
  let destroyed = false;

  const wrapOffset = (i, a, n) => {
    let d = i - a;
    while (d > n / 2) d -= n;
    while (d < -n / 2) d += n;
    return d;
  };
  const shortestDelta = (from, to, n) => {
    let d = to - from;
    while (d > n / 2) d -= n;
    while (d < -n / 2) d += n;
    return d;
  };
  const wrapIndex = (i) => {
    const n = projects.length;
    return ((Math.round(i) % n) + n) % n;
  };
  const isBlank = (src) => !src || String(src).includes("CD_without_artwork");

  function build() {
    stageEl.innerHTML = "";
    cards = [];
    projects.forEach((project, index) => {
      const blank = isBlank(project.image);
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "cd-card" + (blank ? " is-blank" : "");
      btn.dataset.index = String(index);
      btn.setAttribute("aria-label", project.title);
      const img = document.createElement("img");
      img.src = project.image;
      img.alt = project.title;
      img.draggable = false;
      btn.appendChild(img);
      const overlay = document.createElement("div");
      overlay.className = "cd-overlay";
      overlay.innerHTML = '<div class="slot">PROJECT</div><div class="name"></div>';
      overlay.querySelector(".name").textContent = project.title;
      btn.appendChild(overlay);
      stageEl.appendChild(btn);
      cards.push(btn);
    });
  }

  function layout() {
    const n = projects.length;
    if (!n || !cards.length) return 0;
    let nearest = 0;
    let nearestAbs = Infinity;
    cards.forEach((card, i) => {
      const offset = wrapOffset(i, angle, n);
      const thetaDeg = offset * ARC.stepDeg;
      const theta = (thetaDeg * Math.PI) / 180;
      const cos = Math.cos(theta);
      const sin = Math.sin(theta);
      const x = sin * ARC.radiusX;
      const y =
        -Math.abs(cos) * ARC.radiusY +
        (1 - Math.abs(offset) / (n / 2)) * ARC.yLift +
        ARC.baseY;
      const zPos = (cos - 1) * ARC.depth;
      const ao = Math.abs(offset);
      const proximity = Math.exp(-(ao * ao) / 1.6);
      const scale = ARC.scaleEdge + (ARC.scaleCenter - ARC.scaleEdge) * proximity;
      const rotY = -thetaDeg * ARC.rotFactor;
      card.style.transform = `translate3d(${x.toFixed(2)}px,${y.toFixed(2)}px,${zPos.toFixed(2)}px) rotateY(${rotY.toFixed(2)}deg) scale(${scale.toFixed(4)})`;
      card.style.zIndex = String(Math.round(100 - Math.abs(offset) * 10));
      if (ao < nearestAbs) {
        nearestAbs = ao;
        nearest = i;
      }
    });
    cards.forEach((c, i) => c.classList.toggle("is-active", i === nearest));
    return nearest;
  }

  function beginSnapTo(target) {
    snapFrom = angle;
    snapTarget = target;
    snapStart = performance.now();
    snapping = true;
    velocity = 0;
  }
  function finishSnap() {
    angle = snapTarget;
    snapping = false;
    snapTarget = null;
    velocity = 0;
    current = wrapIndex(angle);
    onChange && onChange(current);
  }
  function goToIndex(index, animate = true) {
    const n = projects.length;
    if (!n) return;
    index = ((index % n) + n) % n;
    const target = angle + shortestDelta(angle, index, n);
    if (!animate) {
      angle = target;
      snapping = false;
      snapTarget = null;
      velocity = 0;
      layout();
      current = index;
      onChange && onChange(index);
    } else beginSnapTo(target);
  }
  function nudge(dir) {
    goToIndex(wrapIndex(Math.round(angle) + dir), true);
  }

  function tick(ts) {
    if (lastTs == null) lastTs = ts;
    const dt = Math.min(0.064, (ts - lastTs) / 1000);
    lastTs = ts;
    if (!dragging) {
      if (snapping && snapTarget != null) {
        const t = Math.min(1, (performance.now() - snapStart) / SNAP_MS);
        const eased = 1 - Math.pow(1 - t, 3);
        angle = snapFrom + (snapTarget - snapFrom) * eased;
        if (t >= 1) finishSnap();
      } else if (Math.abs(velocity) > VELOCITY_STOP) {
        angle += velocity * dt;
        velocity *= Math.exp(-FRICTION * dt);
        if (Math.abs(velocity) <= VELOCITY_STOP) beginSnapTo(Math.round(angle));
      } else if (Math.abs(angle - Math.round(angle)) > 0.001) {
        beginSnapTo(Math.round(angle));
      }
    }
    layout();
  }

  function onPointerDown(e) {
    if (e.button != null && e.button !== 0) return;
    if (e.target.closest?.(".shelf-arrow")) return;
    dragging = true;
    snapping = false;
    snapTarget = null;
    pointerId = e.pointerId;
    lastX = e.clientX;
    lastMoveTs = performance.now();
    moved = 0;
    velocity = 0;
    sceneEl.classList.add("is-dragging");
    const card = e.target.closest?.(".cd-card");
    hitCardIndex = card ? Number(card.dataset.index) : null;
    try { sceneEl.setPointerCapture(pointerId); } catch (_) {}
  }
  function onPointerMove(e) {
    if (!dragging || (pointerId != null && e.pointerId !== pointerId)) return;
    const now = performance.now();
    const dt = Math.max(0.008, (now - lastMoveTs) / 1000);
    lastMoveTs = now;
    const dx = e.clientX - lastX;
    lastX = e.clientX;
    moved += Math.abs(dx);
    const delta = -dx * DRAG_SENSITIVITY;
    angle += delta;
    let v = delta / dt;
    if (v > MAX_VELOCITY) v = MAX_VELOCITY;
    if (v < -MAX_VELOCITY) v = -MAX_VELOCITY;
    velocity = v;
  }
  function endDrag(e) {
    if (!dragging) return;
    if (pointerId != null && e?.pointerId != null && e.pointerId !== pointerId) return;
    dragging = false;
    sceneEl.classList.remove("is-dragging");
    const pid = pointerId;
    pointerId = null;
    try { if (pid != null) sceneEl.releasePointerCapture(pid); } catch (_) {}
    if (moved < CLICK_THRESHOLD && hitCardIndex != null && !Number.isNaN(hitCardIndex)) {
      goToIndex(hitCardIndex, true);
    } else {
      beginSnapTo(Math.round(angle + velocity / FRICTION));
    }
    hitCardIndex = null;
  }
  function onWheel(e) {
    e.preventDefault();
    if (dragging) return;
    snapping = false;
    snapTarget = null;
    const raw = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
    const delta = raw * WHEEL_SENSITIVITY;
    if (!delta) return;
    angle += delta;
    let v = delta * 28;
    if (v > MAX_VELOCITY) v = MAX_VELOCITY;
    if (v < -MAX_VELOCITY) v = -MAX_VELOCITY;
    velocity = v;
  }
  function onKey(e) {
    if (e.key === "ArrowLeft") nudge(-1);
    if (e.key === "ArrowRight") nudge(1);
  }

  build();
  layout();
  onChange && onChange(current);
  const loop = (ts) => {
    if (destroyed) return;
    tick(ts);
    raf = requestAnimationFrame(loop);
  };
  raf = requestAnimationFrame(loop);

  sceneEl.addEventListener("pointerdown", onPointerDown);
  sceneEl.addEventListener("pointermove", onPointerMove);
  sceneEl.addEventListener("pointerup", endDrag);
  sceneEl.addEventListener("pointercancel", endDrag);
  sceneEl.addEventListener("wheel", onWheel, { passive: false });
  document.addEventListener("keydown", onKey);

  return {
    nudge,
    goToIndex,
    destroy() {
      destroyed = true;
      cancelAnimationFrame(raf);
      sceneEl.removeEventListener("pointerdown", onPointerDown);
      sceneEl.removeEventListener("pointermove", onPointerMove);
      sceneEl.removeEventListener("pointerup", endDrag);
      sceneEl.removeEventListener("pointercancel", endDrag);
      sceneEl.removeEventListener("wheel", onWheel);
      document.removeEventListener("keydown", onKey);
    },
  };
}
