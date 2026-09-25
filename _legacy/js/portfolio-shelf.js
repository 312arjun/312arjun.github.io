  // ---- swap in real screenshots later by changing `art` to an <img> if you like ----
  const APPS = [
    {
      id: "ha-dock",
      title: "HA Dock",
      spine: "HA DOCK",
      color: "#ffb347",
      blurb: "A screen-edge notch widget for Windows that docks Home Assistant controls right into the desktop — including Lampcord, a pull-chain light switch you tug like the real thing.",
      tags: ["Windows", "PySide6", "Home Assistant"],
      links: [{ label: "GitHub →", href: "https://github.com/312arjun/ha-dockX" }],
      art: `<svg viewBox="0 0 100 100" fill="none">
        <rect x="18" y="30" width="64" height="46" rx="10" stroke="#ffb347" stroke-width="3"/>
        <path d="M40 30 Q50 14 60 30" stroke="#ffb347" stroke-width="3" fill="none"/>
        <circle cx="50" cy="53" r="10" fill="#ffb347" opacity=".85"/>
        <line x1="50" y1="63" x2="50" y2="80" stroke="#ffb347" stroke-width="2.5"/>
        <circle cx="50" cy="83" r="3" fill="#ffb347"/>
      </svg>`
    },
    {
      id: "iphone-companion",
      title: "iPhone Companion",
      spine: "IPHONE COMPANION",
      color: "#4fd1c5",
      blurb: "Bridges an iPhone's notifications, calls, and now-playing media into a native Windows app over Bluetooth LE (ANCS/AMS) — no cables, no cloud relay, just your two devices talking directly.",
      tags: ["Windows", "Bluetooth LE", "v2.1.0"],
      links: [{ label: "GitHub →", href: "https://github.com/312arjun/iphone-companion" }],
      art: `<svg viewBox="0 0 100 100" fill="none">
        <rect x="35" y="14" width="30" height="72" rx="9" stroke="#4fd1c5" stroke-width="3"/>
        <line x1="42" y1="24" x2="58" y2="24" stroke="#4fd1c5" stroke-width="2.5"/>
        <path d="M68 40 L80 50 L68 60 M68 60 L80 50 M62 30 L62 70" stroke="#4fd1c5" stroke-width="2.5" opacity=".8"/>
        <circle cx="80" cy="50" r="2.6" fill="#4fd1c5"/>
      </svg>`
    },
    {
      id: "notifi",
      title: "notifi",
      spine: "NOTIFI",
      color: "#7ee787",
      blurb: "Forwards Windows toast notifications straight to WhatsApp through a self-hosted OpenWA gateway, so you never miss a desktop alert while you're away from the machine.",
      tags: ["Windows", "OpenWA", "Gateway"],
      links: [],
      art: `<svg viewBox="0 0 100 100" fill="none">
        <rect x="16" y="26" width="46" height="32" rx="7" stroke="#7ee787" stroke-width="3"/>
        <path d="M24 58 L24 68 L34 58" stroke="#7ee787" stroke-width="3" fill="none"/>
        <path d="M52 42 L84 42 M52 52 L74 52" stroke="#7ee787" stroke-width="3" opacity=".55"/>
        <path d="M64 66 L76 78 M76 66 L64 78" stroke="#7ee787" stroke-width="3" opacity=".9"/>
      </svg>`
    }
  ];

  const stage = document.getElementById("stage");
  const shelf = document.getElementById("shelf");
  const dotsEl = document.getElementById("dots");
  let selected = 0;

  APPS.forEach((app, i) => {
    const el = document.createElement("div");
    el.className = "case";
    el.dataset.index = i;
    el.innerHTML = `
      <div class="back"></div>
      <div class="spine"><span>${app.spine}</span></div>
      <div class="cover">
        <div class="art">${app.art}</div>
        <div class="cover-title">${app.title}<small>${app.tags[0]}</small></div>
      </div>`;
    el.addEventListener("click", () => {
      const offset = signedOffset(i, selected, APPS.length);
      if (offset === 0) return;
      selected = i;
      render();
    });
    stage.appendChild(el);

    const dot = document.createElement("div");
    dot.className = "dot";
    dot.addEventListener("click", () => { selected = i; render(); });
    dotsEl.appendChild(dot);
  });

  function signedOffset(index, sel, total) {
    let raw = index - sel;
    if (raw > total / 2) raw -= total;
    if (raw < -total / 2) raw += total;
    return raw;
  }

  function render() {
    [...stage.children].forEach((el, i) => {
      const offset = signedOffset(i, selected, APPS.length);
      el.dataset.offset = offset;
      const rotY = offset * -34;
      const tx = offset * 150;
      const tz = -Math.abs(offset) * 70;
      const scale = 1 - Math.abs(offset) * 0.16;
      el.style.transform = `translateX(${tx}px) translateZ(${tz}px) rotateY(${rotY}deg) scale(${scale})`;
      el.style.opacity = Math.abs(offset) > 2 ? "0" : "1";
    });
    [...dotsEl.children].forEach((d, i) => d.classList.toggle("active", i === selected));

    const app = APPS[selected];
    document.getElementById("fasciaLed").style.background = app.color;
    document.getElementById("fasciaLed").style.boxShadow = `0 0 8px 2px ${app.color}aa`;
    document.getElementById("detailLed").style.background = app.color;
    document.getElementById("detailLed").style.color = app.color;
    document.getElementById("detailTitle").textContent = app.title;
    document.getElementById("detailBlurb").textContent = app.blurb;
    document.getElementById("detailTags").innerHTML = app.tags.map(t => `<span class="tag">${t}</span>`).join("");
    document.getElementById("detailLinks").innerHTML = app.links.length
      ? app.links.map(l => `<a href="${l.href}" target="_blank" rel="noopener">${l.label}</a>`).join("")
      : `<span class="tag">Private repo</span>`;
  }

  document.getElementById("prevBtn").addEventListener("click", () => {
    selected = (selected - 1 + APPS.length) % APPS.length; render();
  });
  document.getElementById("nextBtn").addEventListener("click", () => {
    selected = (selected + 1) % APPS.length; render();
  });
  window.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") document.getElementById("prevBtn").click();
    if (e.key === "ArrowRight") document.getElementById("nextBtn").click();
  });

  // drag to browse
  let dragging = false, startX = 0, moved = 0;
  shelf.addEventListener("pointerdown", (e) => {
    dragging = true; startX = e.clientX; moved = 0;
    shelf.classList.add("dragging");
  });
  window.addEventListener("pointermove", (e) => {
    if (!dragging) return;
    moved = e.clientX - startX;
  });
  window.addEventListener("pointerup", () => {
    if (!dragging) return;
    dragging = false;
    shelf.classList.remove("dragging");
    if (Math.abs(moved) > 60) {
      if (moved < 0) document.getElementById("nextBtn").click();
      else document.getElementById("prevBtn").click();
    }
  });

  render();
