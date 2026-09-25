/* =========================================================
   SITE CONFIG — easy to edit
========================================================= */
const SITE = {
  brand: "Arjun //",
  pageTitle: "Arjun Soundarajan",
  eyebrow: "Arjun // WORKING SET",
  headlineBefore: "Things I've built for ",
  headlineAccent: "my desk.",
  subtitle: "Software, automation, IoT and experiments — collected like a shelf of CDs.",
  blankCd: "assets/cds/CD_without_artwork.png",
  startIndex: 2,
  /* arc carousel: arrow nudges by 1 index */
};

// ============ EDIT YOUR PROJECTS HERE ============
// Swap image paths, titles, tags, features, links.
// Finished samples use full jewel-case composites (assets/cds/*.png).
// Placeholders use assets/cds/CD_without_artwork.png + title overlay.
// =================================================
const PROJECTS = [
  {
    id: "airlium",
    title: "Airlium",
    subtitle: "ESP32 Air-Quality Sensor",
    description:
      "An ESP32-based room air monitor built on ESPHome — reads temperature, pressure and air quality from a Bosch BME680/BMP280 and streams it live into Home Assistant.",
    tags: ["ESP32", "ESPHome", "BME680", "Home Assistant"],
    features: [
      { icon: "spark", label: "Temperature, pressure & IAQ readings" },
      { icon: "bolt", label: "Live Home Assistant sensors" },
      { icon: "cpu", label: "BSEC air-quality library" },
      { icon: "code", label: "Open source" },
    ],
    image: "assets/cds/airlium.png",
    link: "https://github.com/312arjun/air",
    github: "https://github.com/312arjun/air",
  },
  {
    id: "bedside-console",
    title: "Bedside Console",
    subtitle: "3D-Printed MQTT Control Station",
    description:
      "A custom 3D-printed bedside console with a NodeMCU and OLED clock — physical buttons toggle the fan and tube light over MQTT without reaching for a phone.",
    tags: ["ESP8266", "ESPHome", "MQTT", "3D Printing"],
    features: [
      { icon: "layers", label: "Custom 3D-printed enclosure" },
      { icon: "bolt", label: "One-tap fan & light buttons" },
      { icon: "monitor", label: "OLED clock synced from HA" },
      { icon: "code", label: "Open source" },
    ],
    image: "assets/cds/bedside_console.png",
    link: "https://github.com/312arjun/bed_side_console",
    github: "https://github.com/312arjun/bed_side_console",
  },
  {
    id: "ha-dock",
    title: "HA Dock",
    subtitle: "Home Assistant Desktop Dock",
    description:
      "A screen-edge notch widget for Windows that docks Home Assistant controls right into the desktop — lamps, fans, sensors and a pull-chain Lampcord you tug like the real thing.",
    tags: ["Windows", "Python", "PySide6", "Home Assistant"],
    features: [
      { icon: "monitor", label: "Responsive desktop widget" },
      { icon: "bolt", label: "Real-time device controls" },
      { icon: "spark", label: "Lampcord pull-chain physics" },
      { icon: "code", label: "Open source" },
    ],
    image: "assets/cds/cd_ha_dock.png",
    link: "https://github.com/312arjun/ha-dockX",
    github: "https://github.com/312arjun/ha-dockX",
  },
  {
    id: "iphone-companion",
    title: "iPhone Companion",
    subtitle: "iPhone → Windows",
    description:
      "Bridges an iPhone's notifications, calls and now-playing media into a native Windows app over Bluetooth LE (ANCS/AMS) — no cables, no cloud relay.",
    tags: ["Windows", "Python", "Bluetooth LE", "v2.1.0"],
    features: [
      { icon: "bell", label: "Notifications over Bluetooth LE" },
      { icon: "phone", label: "Calls & media relay" },
      { icon: "layers", label: "Rules engine & notification feed" },
      { icon: "code", label: "Open source" },
    ],
    image: "assets/cds/cd_iphone_companion.png",
    link: "https://github.com/312arjun/iphone-companion",
    github: "https://github.com/312arjun/iphone-companion",
  },
  {
    id: "home-server",
    title: "Home Server",
    subtitle: "Home Assistant Configuration",
    description:
      "The configuration behind the house — Home Assistant setup, scripts, custom icons and the ESPHome firmware for switches and NeoPixel accents that tie every device together.",
    tags: ["Home Assistant", "YAML", "Raspberry Pi", "ESPHome"],
    features: [
      { icon: "terminal", label: "Central Home Assistant hub" },
      { icon: "layers", label: "Automations & scripts" },
      { icon: "spark", label: "Custom icons & dashboards" },
      { icon: "code", label: "Open source" },
    ],
    image: "assets/cds/home_server.png",
    link: "https://github.com/312arjun/hass_server",
    github: "https://github.com/312arjun/hass_server",
  },
  {
    id: "iot-hub",
    title: "IoT Hub",
    subtitle: "ESPHome Device Fleet",
    description:
      "A collection of ESPHome device definitions — desk clock, switch box, server LEDs and more — all flashed over the air and integrated natively with Home Assistant.",
    tags: ["ESP32", "ESP8266", "ESPHome", "MQTT"],
    features: [
      { icon: "cpu", label: "Reusable device configs" },
      { icon: "radio", label: "OTA firmware updates" },
      { icon: "home", label: "Native Home Assistant API" },
      { icon: "code", label: "Open source" },
    ],
    image: "assets/cds/iot_hub.png",
    link: "https://github.com/312arjun/esphome",
    github: "https://github.com/312arjun/esphome",
  },
  {
    id: "mtd",
    title: "MTD",
    subtitle: "Motion · Temperature · Display",
    description:
      "A compact NodeMCU sensor in a 3D-printed case combining a PIR motion sensor, DHT11 temperature & humidity and an SH1106 OLED showing time and room climate.",
    tags: ["ESP8266", "ESPHome", "PIR", "OLED"],
    features: [
      { icon: "eye", label: "PIR motion detection" },
      { icon: "spark", label: "Temperature & humidity" },
      { icon: "monitor", label: "OLED clock + climate readout" },
      { icon: "code", label: "Open source" },
    ],
    image: "assets/cds/mtd.png",
    link: "https://github.com/312arjun/motion_sensor",
    github: "https://github.com/312arjun/motion_sensor",
  },
  {
    id: "rf-ir-blaster",
    title: "RF / IR Blaster",
    subtitle: "433 MHz + Infrared Transmitter",
    description:
      "A small ESP transmitter that replays 433 MHz RF and infrared codes, turning remote-only appliances into Home Assistant-controllable devices, with a companion IR receiver for capturing codes.",
    tags: ["ESP32", "ESPHome", "IR", "RF 433MHz"],
    features: [
      { icon: "radio", label: "RF & IR transmit" },
      { icon: "eye", label: "IR code capture receiver" },
      { icon: "bolt", label: "Control legacy appliances from HA" },
      { icon: "code", label: "Open source" },
    ],
    image: "assets/cds/rf_ir_blaster.png",
    link: "https://github.com/312arjun/rf_transmitter",
    github: "https://github.com/312arjun/rf_transmitter",
  },
  {
    id: "security-panel",
    title: "Security Panel",
    subtitle: "DIY Home Alarm Keypad",
    description:
      "An angular cyberpunk-styled alarm panel with a 16×2 LCD, membrane keypad, status indicators and a glowing chevron light strip — designed in Onshape and Blender for 3D printing.",
    tags: ["Onshape", "Blender", "3D Printing", "Keypad"],
    features: [
      { icon: "lock", label: "Keypad arm / disarm panel" },
      { icon: "monitor", label: "16×2 LCD status display" },
      { icon: "layers", label: "Parametric Onshape enclosure" },
      { icon: "spark", label: "Chevron light strip" },
    ],
    image: "assets/cds/secuirty_panel.png",
    link: "#",
    github: "#",
  },
  {
    id: "sky-ceiling",
    title: "Sky Ceiling",
    subtitle: "Live Aircraft Over Bengaluru",
    description:
      "A projector-friendly live flight radar using the OpenSky Network — aircraft glide across the ceiling as glowing glyphs with comet trails, colour-graded by altitude at a smooth 60 fps.",
    tags: ["Python", "Flask", "OpenSky API", "Canvas"],
    features: [
      { icon: "spark", label: "Live OpenSky aircraft data" },
      { icon: "bolt", label: "Smooth 60 fps dead-reckoning" },
      { icon: "monitor", label: "Ceiling-projector mode" },
      { icon: "code", label: "Open source" },
    ],
    image: "assets/cds/sky_ceiling.png",
    link: "https://github.com/312arjun/flight_tracker",
    github: "https://github.com/312arjun/flight_tracker",
  },
  {
    id: "smart-blinds",
    title: "Smart Blinds",
    subtitle: "Stepper-Driven Roller Blind",
    description:
      "Motorises an existing roller blind with a NEMA-17 stepper, DRV8825 driver and 3D-printed mount, controlled from Home Assistant through ESPHome.",
    tags: ["ESP8266", "ESPHome", "Stepper", "3D Printing"],
    features: [
      { icon: "home", label: "Motorised open / close" },
      { icon: "cpu", label: "NEMA-17 + DRV8825 drive" },
      { icon: "layers", label: "3D-printed motor mount" },
      { icon: "code", label: "Open source" },
    ],
    image: "assets/cds/smart_blinds.png",
    link: "https://github.com/312arjun/blinds",
    github: "https://github.com/312arjun/blinds",
  },
  {
    id: "smart-door-lock",
    title: "Smart Door Lock",
    subtitle: "RFID + Keypad Entry",
    description:
      "Keyless entry for the front door using an ESP-based RFID reader, keypad and relay-driven lock — access logged and controllable from Home Assistant.",
    tags: ["ESP8266", "RFID", "ESPHome", "Relay"],
    features: [
      { icon: "lock", label: "RFID card access" },
      { icon: "grid", label: "PIN keypad entry" },
      { icon: "bolt", label: "Relay-controlled lock" },
      { icon: "code", label: "Open source" },
    ],
    image: "assets/cds/smart_door_lock.png",
    link: "https://github.com/312arjun/Door_lock",
    github: "https://github.com/312arjun/Door_lock",
  },
  {
    id: "srt-gen",
    title: "SRT Gen",
    subtitle: "Whisper-Powered Subtitles",
    description:
      "Generates SRT subtitle files from any video using Whisper speech recognition — ffmpeg extracts the audio, faster-whisper transcribes it with timestamps, locally and offline.",
    tags: ["Python", "Whisper", "ffmpeg", "CUDA"],
    features: [
      { icon: "doc", label: "Automatic SRT generation" },
      { icon: "cpu", label: "faster-whisper, GPU accelerated" },
      { icon: "layers", label: "Any ffmpeg video format" },
      { icon: "code", label: "Open source" },
    ],
    image: "assets/cds/srt_gen.png",
    link: "https://github.com/312arjun/subtitle_generator",
    github: "https://github.com/312arjun/subtitle_generator",
  },
  {
    id: "thermostat",
    title: "Thermostat",
    subtitle: "3D-Printed Thermostat Enclosure",
    description:
      "A round 3D-printed thermostat housing with dial guide and cover, designed to hold a temperature sensor and display for a wall-mounted climate controller.",
    tags: ["3D Printing", "STL", "Enclosure", "Climate"],
    features: [
      { icon: "home", label: "Wall-mounted thermostat" },
      { icon: "layers", label: "Printable cover + guide" },
      { icon: "grid", label: "Ready-to-slice STLs" },
      { icon: "code", label: "Open source" },
    ],
    image: "assets/cds/thermostat.png",
    link: "https://github.com/312arjun/termostat",
    github: "https://github.com/312arjun/termostat",
  },
  {
    id: "water-reminder",
    title: "Water Reminder",
    subtitle: "Hydration Tracker for Windows",
    description:
      "A lightweight WPF app that reminds you to drink water with native toasts, tracks a daily goal on a progress ring and shows streaks and a 7-day chart — with a droplet mascot.",
    tags: ["Windows", "C#", "WPF", ".NET 8"],
    features: [
      { icon: "spark", label: "Daily goal progress ring" },
      { icon: "bell", label: "Native toast reminders" },
      { icon: "layers", label: "Streaks & 7-day stats" },
      { icon: "code", label: "Open source" },
    ],
    image: "assets/cds/water_reminder_cd.png",
    link: "https://github.com/312arjun/water_reminder",
    github: "https://github.com/312arjun/water_reminder",
  },
];

/* =========================================================
   ICONS
========================================================= */
const ICONS = {
  grid: '<svg viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg>',
  bolt: '<svg viewBox="0 0 24 24"><path d="M13 2L3 14h8l-1 8 10-12h-8l1-8z"/></svg>',
  doc: '<svg viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><path d="M8 13h8M8 17h5"/></svg>',
  code: '<svg viewBox="0 0 24 24"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>',
  eye: '<svg viewBox="0 0 24 24"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8S1 12 1 12z"/><circle cx="12" cy="12" r="3"/></svg>',
  layers: '<svg viewBox="0 0 24 24"><path d="M12 2l10 6-10 6L2 8l10-6z"/><path d="M2 12l10 6 10-6"/><path d="M2 16l10 6 10-6"/></svg>',
  cpu: '<svg viewBox="0 0 24 24"><rect x="5" y="5" width="14" height="14" rx="2"/><path d="M9 1v4M15 1v4M9 19v4M15 19v4M1 9h4M1 15h4M19 9h4M19 15h4"/><rect x="9" y="9" width="6" height="6"/></svg>',
  home: '<svg viewBox="0 0 24 24"><path d="M3 11l9-8 9 8"/><path d="M5 10v10h14V10"/></svg>',
  monitor: '<svg viewBox="0 0 24 24"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>',
  spark: '<svg viewBox="0 0 24 24"><path d="M12 2l1.5 6.5L20 10l-6.5 1.5L12 18l-1.5-6.5L4 10l6.5-1.5L12 2z"/></svg>',
  bell: '<svg viewBox="0 0 24 24"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>',
  phone: '<svg viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92z"/></svg>',
  mic: '<svg viewBox="0 0 24 24"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><path d="M12 19v4M8 23h8"/></svg>',
  lock: '<svg viewBox="0 0 24 24"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>',
  terminal: '<svg viewBox="0 0 24 24"><polyline points="4 17 10 11 4 5"/><path d="M12 19h8"/></svg>',
  radio: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="2"/><path d="M16.24 7.76a6 6 0 0 1 0 8.49M7.76 16.24a6 6 0 0 1 0-8.49M19.07 4.93a10 10 0 0 1 0 14.14M4.93 19.07a10 10 0 0 1 0-14.14"/></svg>',
};

function isBlankImage(src) {
  return !src || src.includes("CD_without_artwork");
}

function featureIcon(name) {
  return ICONS[name] || ICONS.spark;
}

/* =========================================================
   APPLY SITE CONFIG
========================================================= */
(function applySite() {
  const setText = (id, text) => {
    const el = document.getElementById(id);
    if (el) el.textContent = text;
  };
  const setHtml = (id, html) => {
    const el = document.getElementById(id);
    if (el) el.innerHTML = html;
  };
  setHtml("brandLogo", SITE.brand.replace("//", '<span class="slash">//</span>'));
  setText("heroEyebrow", SITE.eyebrow);
  setHtml(
    "heroHeadline",
    SITE.headlineBefore + '<span class="accent">' + SITE.headlineAccent + "</span>"
  );
  setText("heroSub", SITE.subtitle);
  document.title = SITE.pageTitle || SITE.eyebrow;
})();

/* =========================================================
   BUILD SHELF + DETAIL PANEL
========================================================= */
const stageEl = document.getElementById("cdStage");
const totalEl = document.getElementById("total");
const counterEl = document.getElementById("counter");
const sceneEl = document.getElementById("turntableScene");
const trayEl = document.getElementById("tray");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

if (totalEl) totalEl.textContent = String(PROJECTS.length).padStart(2, "0");

let cards = [];
let current = Math.min(Math.max(SITE.startIndex || 0, 0), PROJECTS.length - 1);

/* Continuous float index: which project sits at center */
let angle = current;
let velocity = 0;
let dragging = false;
let lastX = 0;
let pointerId = null;
let moved = 0;
let hitCardIndex = null;
let snapping = false;
let snapTarget = null;
let snapFrom = 0;
let snapStart = 0;
const SNAP_MS = 380;

/* Arc geometry — wide shallow crescent on platter back rim */
const ARC = {
  stepDeg: 14.5,     // degrees between neighboring slots (wide arc)
  radiusX: 540,      // large radiusX → wide shallow crescent
  radiusY: 36,       // slight vertical follow of platter rim
  depth: 110,        // limited z depth (NOT a full cylinder)
  rotFactor: 0.32,   // subtle face-in rotateY
  scaleCenter: 1.0,  // 158×330 at center
  scaleEdge: 0.58,   // edges ~58% of center (~50%+ bigger at center)
  yLift: 22,         // lift center CD a bit
  baseY: 8,          // sit on back rim
};

function wrapOffset(i, a, n) {
  let o = i - a;
  while (o > n / 2) o -= n;
  while (o <= -n / 2) o += n;
  return o;
}

function shortestDelta(from, to, n) {
  let d = ((to - from) % n + n) % n;
  if (d > n / 2) d -= n;
  return d;
}

function buildShelf() {
  if (!stageEl) return;
  stageEl.innerHTML = "";
  cards = [];

  PROJECTS.forEach((project, index) => {
    const blank = isBlankImage(project.image);
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
    overlay.innerHTML =
      '<div class="slot">PROJECT</div><div class="name"></div>';
    overlay.querySelector(".name").textContent = project.title;
    btn.appendChild(overlay);

    btn.addEventListener("click", (e) => {
      if (e.detail === 0) goToIndex(index, true);
    });

    stageEl.appendChild(btn);
    cards.push(btn);
  });
}

function layoutCards() {
  const n = PROJECTS.length;
  if (!n || !cards.length) return;

  let nearest = 0;
  let nearestAbs = Infinity;

  cards.forEach((card, i) => {
    const offset = wrapOffset(i, angle, n);
    const thetaDeg = offset * ARC.stepDeg;
    const theta = (thetaDeg * Math.PI) / 180;
    const cos = Math.cos(theta);
    const sin = Math.sin(theta);

    const x = sin * ARC.radiusX;
    const y = -Math.abs(cos) * ARC.radiusY + (1 - Math.abs(offset) / (n / 2)) * ARC.yLift + ARC.baseY;
    const z = cos * ARC.depth - ARC.depth; // center closer to camera (less negative / more positive)
    // Remap: center (offset~0, cos~1) → z = 0; edges → z = -depth*(1-cos)
    const zPos = (cos - 1) * ARC.depth;

    const ao = Math.abs(offset);
    // Gaussian-ish falloff so center is clearly ~50%+ larger than edges
    // and immediate neighbors shrink noticeably
    const proximity = Math.exp(-(ao * ao) / 1.6);
    const scale =
      ARC.scaleEdge + (ARC.scaleCenter - ARC.scaleEdge) * proximity;
    const t = Math.min(1, ao / (n / 2));

    const rotY = -thetaDeg * ARC.rotFactor;

    card.style.transform =
      "translate3d(" +
      x.toFixed(2) +
      "px," +
      y.toFixed(2) +
      "px," +
      zPos.toFixed(2) +
      "px) rotateY(" +
      rotY.toFixed(2) +
      "deg) scale(" +
      scale.toFixed(4) +
      ")";

    // z-index by proximity to center
    const zIndex = Math.round(100 - Math.abs(offset) * 10);
    card.style.zIndex = String(zIndex);

    const abs = Math.abs(offset);
    if (abs < nearestAbs) {
      nearestAbs = abs;
      nearest = i;
    }
  });

  // Active glow on nearest-to-center
  if (nearest !== current || !cards[current]?.classList.contains("is-active")) {
    // only update panel when snapped / settled nearest changes meaningfully
  }
  cards.forEach((card, i) => {
    card.classList.toggle("is-active", i === nearest);
  });

  return nearest;
}

function updateDetail(index) {
  if (!PROJECTS.length) return;
  if (index < 0) index = PROJECTS.length - 1;
  if (index >= PROJECTS.length) index = 0;
  current = index;

  if (counterEl) counterEl.textContent = String(current + 1).padStart(2, "0");

  const p = PROJECTS[current];
  const blank = isBlankImage(p.image);

  const previewWrap = document.getElementById("previewWrap");
  const previewImg = document.getElementById("projectPreviewImg");
  const previewOverlay = document.getElementById("previewOverlay");
  if (previewWrap) previewWrap.classList.toggle("is-blank", blank);
  if (previewImg) {
    previewImg.src = p.image;
    previewImg.alt = p.title;
  }
  if (previewOverlay) previewOverlay.textContent = blank ? p.title : "";

  document.getElementById("projectTitle").textContent = p.title;
  document.getElementById("projectSubtitle").textContent = p.subtitle;
  document.getElementById("projectDescription").textContent = p.description;

  const tagsEl = document.getElementById("projectTags");
  tagsEl.innerHTML = "";
  (p.tags || []).forEach((tag) => {
    const span = document.createElement("span");
    span.className = "tag";
    span.textContent = tag;
    tagsEl.appendChild(span);
  });

  const link = document.getElementById("projectLink");
  const gh = document.getElementById("projectGithub");
  if (link) {
    link.href = p.link || "#";
    link.style.display = p.link && p.link !== "#" ? "" : "none";
  }
  if (gh) {
    gh.href = p.github || "#";
    gh.style.display = p.github && p.github !== "#" ? "" : "none";
  }

  const featuresEl = document.getElementById("projectFeatures");
  featuresEl.innerHTML = "";
  (p.features || []).forEach((f) => {
    const row = document.createElement("div");
    row.className = "feature";
    row.innerHTML =
      '<div class="feature-icon">' +
      featureIcon(f.icon) +
      "</div><div>" +
      f.label +
      "</div>";
    featuresEl.appendChild(row);
  });
}

function goToIndex(index, animate) {
  const n = PROJECTS.length;
  if (!n) return;
  index = ((index % n) + n) % n;
  const delta = shortestDelta(angle, index, n);
  const target = angle + delta;
  if (!animate) {
    angle = target;
    snapping = false;
    snapTarget = null;
    velocity = 0;
    layoutCards();
    updateDetail(index);
    lastNearest = index;
  } else {
    beginSnapTo(target);
  }
}

/* =========================================================
   TURNTABLE DRAG + INERTIA (CDs slide along arc; tray fixed)
   Time-based physics so snap works under throttled rAF too.
========================================================= */
const DRAG_SENSITIVITY = 0.012; // px → index units
const WHEEL_SENSITIVITY = 0.0045; // wheel deltaY/X → index units (trackpad + mouse)
const MAX_VELOCITY = 14;        // indices per second
const CLICK_THRESHOLD = 6;
const FRICTION = 6;             // 1/sec exponential decay
const VELOCITY_STOP = 0.12;     // indices/sec

let lastNearest = current;
let lastTs = null;
let lastMoveTs = 0;

function wrapIndex(i) {
  const n = PROJECTS.length;
  return ((Math.round(i) % n) + n) % n;
}

function finishSnap() {
  angle = snapTarget;
  snapping = false;
  snapTarget = null;
  velocity = 0;
  const idx = wrapIndex(angle);
  updateDetail(idx);
  lastNearest = idx;
}

function beginSnapTo(target) {
  snapFrom = angle;
  snapTarget = target;
  snapStart = performance.now();
  snapping = true;
  velocity = 0;
}

function tick(ts) {
  if (lastTs == null) lastTs = ts;
  const dt = Math.min(0.064, (ts - lastTs) / 1000);
  lastTs = ts;

  if (!dragging) {
    if (snapping && snapTarget != null) {
      const t = Math.min(1, (performance.now() - snapStart) / SNAP_MS);
      const eased = 1 - Math.pow(1 - t, 3); // ease-out cubic
      angle = snapFrom + (snapTarget - snapFrom) * eased;
      if (t >= 1) finishSnap();
    } else if (Math.abs(velocity) > VELOCITY_STOP) {
      angle += velocity * dt;
      velocity *= Math.exp(-FRICTION * dt);
      if (Math.abs(velocity) <= VELOCITY_STOP) {
        beginSnapTo(Math.round(angle));
      }
    } else if (Math.abs(angle - Math.round(angle)) > 0.001) {
      beginSnapTo(Math.round(angle));
    }
  }

  const nearest = layoutCards();
  if (nearest != null && counterEl) {
    counterEl.textContent = String(nearest + 1).padStart(2, "0");
  }

  requestAnimationFrame(tick);
}

function onPointerDown(e) {
  if (e.button != null && e.button !== 0) return;
  if (e.target.closest && e.target.closest(".arrow")) return;

  dragging = true;
  snapping = false;
  snapTarget = null;
  pointerId = e.pointerId;
  lastX = e.clientX;
  lastMoveTs = performance.now();
  moved = 0;
  velocity = 0;
  sceneEl.classList.add("is-dragging");

  const card = e.target.closest && e.target.closest(".cd-card");
  hitCardIndex = card ? Number(card.dataset.index) : null;

  try {
    sceneEl.setPointerCapture(pointerId);
  } catch (_) {}
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
  if (pointerId != null && e && e.pointerId != null && e.pointerId !== pointerId) return;

  dragging = false;
  sceneEl.classList.remove("is-dragging");

  const pid = pointerId;
  pointerId = null;
  try {
    if (pid != null) sceneEl.releasePointerCapture(pid);
  } catch (_) {}

  if (moved < CLICK_THRESHOLD && hitCardIndex != null && !Number.isNaN(hitCardIndex)) {
    goToIndex(hitCardIndex, true);
  } else {
    // Project coast: ∫ v e^{-Ft} dt = v/F, then snap to nearest index
    const coast = velocity / FRICTION;
    beginSnapTo(Math.round(angle + coast));
  }

  hitCardIndex = null;
}


function onWheel(e) {
  // Hover + scroll/trackpad: spin the CD arc like drag (don't scroll the page).
  if (!sceneEl) return;
  e.preventDefault();
  if (dragging) return;

  snapping = false;
  snapTarget = null;

  // Prefer the dominant axis so horizontal trackpad swipes also work.
  const raw =
    Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
  const delta = raw * WHEEL_SENSITIVITY;
  if (!delta) return;

  angle += delta;

  // Seed inertia so the shared tick loop coasts + snaps after the gesture.
  let v = delta * 28;
  if (v > MAX_VELOCITY) v = MAX_VELOCITY;
  if (v < -MAX_VELOCITY) v = -MAX_VELOCITY;
  velocity = v;
  lastMoveTs = performance.now();
}

if (sceneEl) {
  sceneEl.addEventListener("pointerdown", onPointerDown);
  sceneEl.addEventListener("pointermove", onPointerMove);
  sceneEl.addEventListener("pointerup", endDrag);
  sceneEl.addEventListener("pointercancel", endDrag);
  sceneEl.addEventListener("wheel", onWheel, { passive: false });
}

function nudge(dir) {
  const n = PROJECTS.length;
  const target = Math.round(angle) + dir;
  goToIndex(((target % n) + n) % n, true);
}

if (prevBtn) prevBtn.addEventListener("click", (e) => { e.stopPropagation(); nudge(-1); });
if (nextBtn) nextBtn.addEventListener("click", (e) => { e.stopPropagation(); nudge(1); });

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft") nudge(-1);
  if (e.key === "ArrowRight") nudge(1);
});

/* Nav active state on scroll */
const navLinks = document.querySelectorAll(".nav-links a");
navLinks.forEach((a) => {
  a.addEventListener("click", () => {
    navLinks.forEach((n) => n.classList.remove("active"));
    a.classList.add("active");
  });
});

buildShelf();
updateDetail(current);
layoutCards();
requestAnimationFrame(tick);
