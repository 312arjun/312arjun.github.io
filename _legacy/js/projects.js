/* =========================================================
   PROJECTS PAGE CONFIG — edit this block
========================================================= */
const PROJECTS_PAGE = {
  brand: "Arjun",
  pageTitle: "Arjun Soundarajan — Projects",

  tag: "02. PROJECTS",
  headlineBefore: "Things I've ",
  headlineAccent: "Built.",

  introLeft:
    "A collection of software applications, desktop tools, cloud systems and IoT projects.",
  introRight:
    "From enterprise applications to personal hardware projects, here are some of the things I've worked on.",

  filters: [
    "All",
    "Web Applications",
    "Desktop Tools",
    "Cloud & DevOps",
    "IoT & Embedded",
    "System & Networking",
  ],
};

/**
 * filter  — must match a PROJECTS_PAGE.filters value (except "All")
 * category — display label under the amber dot
 * icon    — fallback SVG key if image missing: web | health | vpn | payment | desktop | home | chip | docker | tools | cloud | car | code
 * tone    — amber | blue | green | purple | slate  (jewel gradient fallback)
 * image   — site-relative CD art path, e.g. "assets/projects/cds/01_estamp_duty_system.png"
 */
const PROJECTS = [
  {
    id: "estamp",
    title: "E-Stamp Duty System (LHDN Malaysia)",
    category: "Web Application",
    filter: "Web Applications",
    description:
      "Government-grade electronic stamp duty platform for legal document stamping, duty calculation and certificate management.",
    tags: [".NET 8", "ASP.NET MVC", "Oracle"],
    icon: "web",
    tone: "amber",
    image: "assets/projects/cds/01_estamp_duty_system.png",
    github: "#",
    link: "#",
  },
  {
    id: "healthcare",
    title: "Healthcare Management System",
    category: "Web Application",
    filter: "Web Applications",
    description:
      "Enterprise healthcare platform with patient care, billing, financials and reporting modules.",
    tags: [".NET", "TypeScript", "SQL Server"],
    icon: "health",
    tone: "blue",
    image: "assets/projects/cds/02_healthcare_management_system.png",
    github: "#",
    link: "#",
  },
  {
    id: "vpn",
    title: "Secure VPN Platform",
    category: "Cloud & Networking",
    filter: "System & Networking",
    description:
      "Enterprise-grade VPN solution with WireGuard, multi-platform clients, real-time connections and a centralized dashboard.",
    tags: ["WireGuard", "Node.js", "React"],
    icon: "vpn",
    tone: "green",
    image: "assets/projects/cds/03_secure_vpn_platform.png",
    github: "#",
    link: "#",
  },
  {
    id: "payment",
    title: "Payment Service (Microservices)",
    category: "Backend System",
    filter: "Web Applications",
    description:
      "Microservices-based payment platform with ACH, card payments, tokenization, refunds and Azure Service Bus integration.",
    tags: [".NET", "Azure", "SQL Server"],
    icon: "payment",
    tone: "purple",
    image: "assets/projects/cds/04_payment_service_microservices.png",
    github: "#",
    link: "#",
  },
  {
    id: "jarvis",
    title: "JARVIS Desktop Assistant",
    category: "Desktop Application",
    filter: "Desktop Tools",
    description:
      "AI-powered desktop assistant built with .NET 9 WinForms — speech recognition, OpenAI integration and a personal knowledge base.",
    tags: [".NET 9", "WinForms", "OpenAI"],
    icon: "desktop",
    tone: "slate",
    image: "assets/projects/cds/05_jarvis_desktop_assistant.png",
    github: "#",
    link: "#",
  },
  {
    id: "home-auto",
    title: "Home Automation Setup",
    category: "IoT & Smart Home",
    filter: "IoT & Embedded",
    description:
      "Custom smart home solution using Raspberry Pi, ESP32, Home Assistant and MQTT for automation, monitoring and control.",
    tags: ["Raspberry Pi", "ESP32", "Home Assistant"],
    icon: "home",
    tone: "amber",
    image: "assets/projects/cds/06_home_automation_setup.png",
    github: "#",
    link: "#",
  },
  {
    id: "smart-devices",
    title: "Smart Devices & Prototypes",
    category: "IoT & Embedded",
    filter: "IoT & Embedded",
    description:
      "ESP32/NodeMCU projects including sensors, relays, custom enclosures and IoT integrations.",
    tags: ["ESP32", "Arduino", "MQTT"],
    icon: "chip",
    tone: "green",
    image: "assets/projects/cds/07_smart_devices_prototypes.png",
    github: "#",
    link: "#",
  },
  {
    id: "wg-cli",
    title: "WireGuard CLI & Docker Setup",
    category: "System & Networking",
    filter: "System & Networking",
    description:
      "Command-line VPN client and Dockerized setup for secure tunneling with automated configuration.",
    tags: ["Docker", "WireGuard", "Linux"],
    icon: "docker",
    tone: "blue",
    image: "assets/projects/cds/08_wireguard_cli_docker_setup.png",
    github: "#",
    link: "#",
  },
  {
    id: "internal-tools",
    title: "Internal Tools & Portals",
    category: "Web Application",
    filter: "Web Applications",
    description:
      "Enterprise web applications and internal tools built with React, TypeScript and .NET Web APIs.",
    tags: ["React", "TypeScript", ".NET"],
    icon: "tools",
    tone: "slate",
    image: "assets/projects/cds/09_internal_tools_portals.png",
    github: "#",
    link: "#",
  },
  {
    id: "win-utils",
    title: "Windows Utilities",
    category: "Desktop Tool",
    filter: "Desktop Tools",
    description:
      "Custom Windows applications and system utilities for productivity and automation.",
    tags: ["C#", ".NET", "Windows API"],
    icon: "desktop",
    tone: "purple",
    image: "assets/projects/cds/10_windows_utilities.png",
    github: "#",
    link: "#",
  },
  {
    id: "infra",
    title: "Infrastructure & CI/CD",
    category: "Cloud & DevOps",
    filter: "Cloud & DevOps",
    description:
      "Deployment pipelines, AWS infrastructure, Docker containerization and self-hosted services.",
    tags: ["AWS", "Docker", "CI/CD"],
    icon: "cloud",
    tone: "blue",
    image: "assets/projects/cds/11_infrastructure_ci_cd.png",
    github: "#",
    link: "#",
  },
  {
    id: "car-iot",
    title: "Car & IoT Experiments",
    category: "Personal Project",
    filter: "IoT & Embedded",
    description:
      "BLE-based car unlock prototype, sensors and custom hardware projects with 3D-printed enclosures.",
    tags: ["ESP32", "BLE", "3D Printing"],
    icon: "car",
    tone: "amber",
    image: "assets/projects/cds/12_car_iot_experiments.png",
    github: "#",
    link: "#",
  },
];

/* =========================================================
   ICONS + RENDER
========================================================= */
const ICONS = {
  web: '<path d="M4 6h16v12H4z"/><path d="M4 10h16"/><circle cx="7" cy="8" r=".6" fill="currentColor" stroke="none"/>',
  health: '<path d="M12 21s-7-4.8-7-11a4.5 4.5 0 0 1 8.2-2.5A4.5 4.5 0 0 1 19 10c0 6.2-7 11-7 11z"/>',
  vpn: '<path d="M12 3l8 4v5c0 5-3.4 8.4-8 10-4.6-1.6-8-5-8-10V7l8-4z"/><path d="M9.5 12l1.8 1.8L15 10"/>',
  payment: '<rect x="3" y="6" width="18" height="12" rx="2"/><path d="M3 10h18"/><path d="M7 15h4"/>',
  desktop: '<rect x="3" y="4" width="18" height="12" rx="1.5"/><path d="M8 20h8M12 16v4"/>',
  home: '<path d="M3 11l9-7 9 7"/><path d="M5 10v10h14V10"/><path d="M10 20v-6h4v6"/>',
  chip: '<rect x="7" y="7" width="10" height="10" rx="1.5"/><path d="M10 4v3M14 4v3M10 17v3M14 17v3M4 10h3M4 14h3M17 10h3M17 14h3"/>',
  docker: '<path d="M4 14h3v3H4zM8 14h3v3H8zM12 14h3v3h-3zM8 10h3v3H8zM12 10h3v3h-3z"/><path d="M3 18c2 2 5 3 9 3s7-1 9-3c-1-3-3-5-5-6"/>',
  tools: '<path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L4 17l3 3 5.3-5.3a4 4 0 0 0 5.4-5.4l-2.5 2.5-2.5-2.5 2.5-2.5z"/>',
  cloud: '<path d="M18 18H7a4 4 0 0 1-.3-8A6 6 0 0 1 18.5 12 3.5 3.5 0 0 1 18 18z"/>',
  car: '<path d="M4 14l1.5-4.5A2 2 0 0 1 7.4 8h9.2a2 2 0 0 1 1.9 1.5L20 14"/><path d="M3 14h18v3a1 1 0 0 1-1 1h-1a2 2 0 0 1-4 0H9a2 2 0 0 1-4 0H4a1 1 0 0 1-1-1v-3z"/>',
  code: '<path d="M8 8l-4 4 4 4M16 8l4 4-4 4M13 5l-2 14"/>',
};

function escapeHtml(s) {
  return String(s ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

document.title = PROJECTS_PAGE.pageTitle || "Arjun Soundarajan — Projects";
document.getElementById("pageTag").textContent = PROJECTS_PAGE.tag;
document.getElementById("pageHeadline").innerHTML =
  escapeHtml(PROJECTS_PAGE.headlineBefore || "") +
  '<span class="accent">' + escapeHtml(PROJECTS_PAGE.headlineAccent || "") + "</span>";
document.getElementById("introLeft").textContent = PROJECTS_PAGE.introLeft || "";
document.getElementById("introRight").textContent = PROJECTS_PAGE.introRight || "";
document.getElementById("footerText").textContent =
  (PROJECTS_PAGE.brand || "Arjun") + " // PROJECTS";

const pillsEl = document.getElementById("filterPills");
const gridEl = document.getElementById("projectsGrid");
const emptyEl = document.getElementById("emptyState");
const searchEl = document.getElementById("searchInput");

let activeFilter = "All";
let searchQuery = "";

(PROJECTS_PAGE.filters || ["All"]).forEach((name, i) => {
  const btn = document.createElement("button");
  btn.type = "button";
  btn.className = "pill" + (i === 0 ? " active" : "");
  btn.textContent = name;
  btn.setAttribute("role", "tab");
  btn.setAttribute("aria-selected", i === 0 ? "true" : "false");
  btn.addEventListener("click", () => {
    activeFilter = name;
    pillsEl.querySelectorAll(".pill").forEach((p) => {
      const on = p.textContent === name;
      p.classList.toggle("active", on);
      p.setAttribute("aria-selected", on ? "true" : "false");
    });
    applyFilters();
  });
  pillsEl.appendChild(btn);
});

function jewelIcon(key) {
  return ICONS[key] || ICONS.code;
}

function cardHtml(p) {
  const tags = (p.tags || [])
    .map((t) => `<span class="tech-tag">${escapeHtml(t)}</span>`)
    .join("");
  const gh = p.github || "#";
  const link = p.link || "#";
  return `
  <article class="project-card" data-filter="${escapeHtml(p.filter || "")}" data-search="${escapeHtml(
    [p.title, p.description, p.category, ...(p.tags || [])].join(" ").toLowerCase()
  )}">
    <div class="jewel${p.image ? " has-art" : ""}" data-tone="${escapeHtml(p.tone || "slate")}" aria-hidden="true">
      <div class="jewel-bg"></div>
      ${p.image
        ? `<img class="cd-art" src="${escapeHtml(p.image)}" alt="" loading="lazy" />`
        : `<svg class="icon" viewBox="0 0 24 24">${jewelIcon(p.icon)}</svg>`}
    </div>
    <div class="card-body">
      <div class="card-cat"><span class="dot"></span><span>${escapeHtml(p.category || "")}</span></div>
      <h2 class="card-title">${escapeHtml(p.title || "")}</h2>
      <p class="card-desc">${escapeHtml(p.description || "")}</p>
      <div class="card-footer">
        <div class="tech-tags">${tags}</div>
        <div class="card-links">
          <a href="${escapeHtml(gh)}" ${gh !== "#" ? 'target="_blank" rel="noopener"' : ""} aria-label="GitHub" title="GitHub">
            <svg class="fill" viewBox="0 0 16 16"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>
          </a>
          <a href="${escapeHtml(link)}" ${link !== "#" ? 'target="_blank" rel="noopener"' : ""} aria-label="Open project" title="Open project">
            <svg class="stroke" viewBox="0 0 24 24"><path d="M14 4h6v6"/><path d="M10 14L20 4"/><path d="M20 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h5"/></svg>
          </a>
        </div>
      </div>
    </div>
  </article>`;
}

gridEl.innerHTML = PROJECTS.map(cardHtml).join("");

function applyFilters() {
  const q = searchQuery.trim().toLowerCase();
  let visible = 0;
  gridEl.querySelectorAll(".project-card").forEach((card) => {
    const f = card.getAttribute("data-filter") || "";
    const hay = card.getAttribute("data-search") || "";
    const okFilter = activeFilter === "All" || f === activeFilter;
    const okSearch = !q || hay.includes(q);
    const show = okFilter && okSearch;
    card.hidden = !show;
    if (show) visible++;
  });
  emptyEl.hidden = visible > 0;
}

searchEl.addEventListener("input", () => {
  searchQuery = searchEl.value || "";
  applyFilters();
});

applyFilters();
