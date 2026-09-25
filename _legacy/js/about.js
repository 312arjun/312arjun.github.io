/* =========================================================
   ABOUT / SITE CONFIG — edit this block only
========================================================= */
const ABOUT = {
  brand: "Arjun",
  pageTitle: "Arjun Soundarajan — About",

  /* Portrait — drop a photo at this path; placeholder shows if missing */
  photo: "assets/about_photo.png",
  initials: "AS",
  status: "Building software, IoT and automation.",

  tag: "01. ABOUT",
  headlineBefore: "Hi, I'm ",
  headlineAccent: "Arjun Soundarajan",
  role: "Software Developer",
  bio:
    "Experienced Software Developer with 5+ years of expertise in building secure, scalable, and high-performance enterprise and system-level applications. I work on Windows applications, web applications, cloud services and IoT/embedded projects. Passionate about building practical tools, home automation and solving real-world problems through software and hardware.",
  location: "Bengaluru, India",

  resumeUrl: "docs/Arjun%27s_Resume.pdf",
  contactHref: "contact.html",

  servicesTitle: "What I Do",
  services: [
    {
      icon: "monitor",
      color: "blue",
      title: "Windows & Web Applications",
      desc: "Build desktop and web apps with C#, .NET, React and TypeScript.",
    },
    {
      icon: "gear",
      color: "green",
      title: "Backend & Cloud Systems",
      desc: "Design APIs, microservices and cloud solutions with Node.js, .NET and AWS.",
    },
    {
      icon: "cube",
      color: "amber",
      title: "IoT & Smart Home",
      desc: "Build IoT and embedded projects with Raspberry Pi, ESP32, Home Assistant and MQTT.",
    },
    {
      icon: "shield",
      color: "purple",
      title: "Security & Networking",
      desc: "VPN solutions, secure architectures, authentication and encrypted communication (WireGuard, LDAP).",
    },
  ],

  journeyTag: "02. JOURNEY",
  journeyHeadlineBefore: "My ",
  journeyHeadlineAccent: "Journey",
  journey: [
    {
      years: "Oct 2023 – Present",
      title: "Senior Software Developer @ Simplify3x Software Pvt Ltd",
      desc: "Work on government, healthcare and enterprise systems using .NET, React, TypeScript and cloud technologies.",
      active: true,
      link: { text: "View projects →", href: "projects.html" },
    },
    {
      years: "2019 – 2023",
      title: "Software Developer",
      desc: "Multiple projects in healthcare, payment processing and secure platforms using .NET, Node.js, React and PostgreSQL.",
      active: false,
    },
    {
      years: "2015 – 2019",
      title: "Early Career",
      desc: "Learning, building and exploring system design and full-stack development.",
      active: false,
    },
  ],

  skillsTag: "03. SKILLS",
  skillsHeadlineBefore: "Technologies I ",
  skillsHeadlineAccent: "Work With",
  skills: [
    "C#", ".NET", "C++", "TypeScript", "JavaScript", "React",
    "Node.js", "Python", "ASP.NET MVC", "Web API", "HTML5", "CSS3",
    "SQL Server", "PostgreSQL", "AWS", "Docker", "Git", "CI/CD",
    "WireGuard", "Home Assistant", "ESP32", "Raspberry Pi", "MQTT", "Linux",
  ],

  stats: [
    { icon: "laptop", num: "5+", label: "Years Experience" },
    { icon: "cube", num: "8+", label: "Projects Completed" },
    { icon: "users", num: "4+", label: "Domains (Enterprise, Web, IoT, Cloud)" },
    { icon: "pin", num: "1", label: "Base Location: Bengaluru, India" },
  ],
};

/* =========================================================
   SVG ICONS
========================================================= */
const ICONS = {
  monitor: '<svg viewBox="0 0 24 24"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>',
  gear: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>',
  cube: '<svg viewBox="0 0 24 24"><path d="M12 2l9 5v10l-9 5-9-5V7l9-5z"/><path d="M12 12l9-5M12 12v10M12 12L3 7"/></svg>',
  cloud: '<svg viewBox="0 0 24 24"><path d="M18 18H7a4 4 0 0 1-.5-8 6 6 0 0 1 11.5-1.5A3.5 3.5 0 0 1 18 18z"/></svg>',
  shield: '<svg viewBox="0 0 24 24"><path d="M12 3l8 3v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-3z"/><path d="M9 12l2 2 4-4"/></svg>',
  laptop: '<svg viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="12" rx="2"/><path d="M2 20h20"/></svg>',
  users: '<svg viewBox="0 0 24 24"><circle cx="9" cy="8" r="3"/><path d="M3 19c0-3 2.5-5 6-5s6 2 6 5"/><circle cx="17" cy="9" r="2.5"/><path d="M21 19c0-2.2-1.5-3.8-3.5-4.5"/></svg>',
  pin: '<svg viewBox="0 0 24 24"><path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11z"/><circle cx="12" cy="10" r="2.5"/></svg>',
  download: '<svg viewBox="0 0 24 24"><path d="M12 3v12"/><path d="M7 10l5 5 5-5"/><path d="M5 21h14"/></svg>',
};

/* Simple colored skill marks (SVG initials — no brand logo assets) */
const SKILL_MARKS = {
  "C#": { bg: "#68217a", label: "C#" },
  ".NET": { bg: "#512bd4", label: ".N" },
  "C++": { bg: "#00599c", label: "C+" },
  "TypeScript": { bg: "#3178c6", label: "TS" },
  "JavaScript": { bg: "#f7df1e", label: "JS" },
  "React": { bg: "#61dafb", label: "Re" },
  "Node.js": { bg: "#68a063", label: "N" },
  "Python": { bg: "#3776ab", label: "Py" },
  "ASP.NET MVC": { bg: "#512bd4", label: "MV" },
  "Web API": { bg: "#e34c26", label: "API" },
  "HTML5": { bg: "#e34f26", label: "H5" },
  "CSS3": { bg: "#1572b6", label: "C3" },
  "SQL Server": { bg: "#cc2927", label: "SQL" },
  "PostgreSQL": { bg: "#336791", label: "PG" },
  "AWS": { bg: "#ff9900", label: "AWS" },
  "Docker": { bg: "#2496ed", label: "Dk" },
  "Git": { bg: "#f05032", label: "Git" },
  "CI/CD": { bg: "#ff9f00", label: "CI" },
  "WireGuard": { bg: "#88171a", label: "WG" },
  "Home Assistant": { bg: "#41bdf5", label: "HA" },
  "ESP32": { bg: "#e7352b", label: "32" },
  "Raspberry Pi": { bg: "#c51a4a", label: "Pi" },
  "MQTT": { bg: "#660066", label: "MQ" },
  "Linux": { bg: "#fcc624", label: "Lx" },
};

function skillMarkSvg(name) {
  const m = SKILL_MARKS[name] || { bg: "#8a9099", label: name.slice(0, 2) };
  const short = m.label.length > 3 ? m.label.slice(0, 3) : m.label;
  const fs = short.length >= 3 ? 8 : 10;
  return (
    '<svg viewBox="0 0 26 26" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">' +
    '<rect x="1.5" y="1.5" width="23" height="23" rx="6" fill="' + m.bg + '" fill-opacity=".18" stroke="' + m.bg + '" stroke-opacity=".55" stroke-width="1.2"/>' +
    '<text x="13" y="16.5" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="' + fs + '" font-weight="700" fill="' + m.bg + '">' +
    short +
    "</text></svg>"
  );
}

function escapeHtml(s) {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/* =========================================================
   RENDER
========================================================= */
document.title = ABOUT.pageTitle;

document.getElementById("aboutTag").textContent = ABOUT.tag;
document.getElementById("aboutHeadline").innerHTML =
  ABOUT.headlineBefore + '<span class="accent">' + escapeHtml(ABOUT.headlineAccent) + "</span>";
document.getElementById("aboutRole").textContent = ABOUT.role || "";
document.getElementById("aboutBio").textContent = ABOUT.bio;
document.getElementById("aboutLocation").textContent = ABOUT.location;
document.getElementById("statusText").textContent = ABOUT.status;
document.getElementById("portraitInitials").textContent = ABOUT.initials;
document.getElementById("servicesTitle").textContent = ABOUT.servicesTitle;
document.getElementById("journeyTag").textContent = ABOUT.journeyTag;
document.getElementById("journeyHeadline").innerHTML =
  ABOUT.journeyHeadlineBefore + '<span class="accent">' + escapeHtml(ABOUT.journeyHeadlineAccent) + "</span>";
document.getElementById("skillsTag").textContent = ABOUT.skillsTag;
document.getElementById("skillsHeadline").innerHTML =
  ABOUT.skillsHeadlineBefore + '<span class="accent">' + escapeHtml(ABOUT.skillsHeadlineAccent) + "</span>";
document.getElementById("footerText").textContent = ABOUT.brand + " // ABOUT";

const resumeBtn = document.getElementById("resumeBtn");
resumeBtn.href = ABOUT.resumeUrl || "#";
if (!ABOUT.resumeUrl || ABOUT.resumeUrl === "#") {
  resumeBtn.removeAttribute("download");
  resumeBtn.addEventListener("click", (e) => {
    e.preventDefault();
  });
  resumeBtn.title = "Add resumeUrl in ABOUT config";
} else {
  resumeBtn.setAttribute("download", "Arjun_Soundarajan_Resume.pdf");
  resumeBtn.removeAttribute("title");
}
document.getElementById("contactBtn").href = ABOUT.contactHref || "contact.html";

/* Portrait: try photo; fall back to placeholder */
(function initPortrait() {
  const frame = document.getElementById("portraitFrame");
  const img = document.getElementById("portraitImg");
  const path = ABOUT.photo;
  if (!path) return;
  img.alt = "Portrait";
  img.onerror = function () {
    frame.classList.remove("has-photo");
    img.removeAttribute("src");
  };
  img.onload = function () {
    frame.classList.add("has-photo");
  };
  img.src = path;
})();

/* Services */
const servicesList = document.getElementById("servicesList");
ABOUT.services.forEach((s) => {
  const el = document.createElement("div");
  el.className = "service-item";
  el.innerHTML =
    '<div class="service-icon ' + s.color + '" aria-hidden="true">' +
    (ICONS[s.icon] || ICONS.cube) +
    "</div>" +
    '<div class="service-text"><h3>' + escapeHtml(s.title) + "</h3><p>" + escapeHtml(s.desc) + "</p></div>";
  servicesList.appendChild(el);
});

/* Journey */
const timeline = document.getElementById("timeline");
ABOUT.journey.forEach((j) => {
  const el = document.createElement("div");
  el.className = "tl-item" + (j.active ? " active" : "");
  let html =
    '<span class="node" aria-hidden="true"></span>' +
    '<div class="years">' + escapeHtml(j.years) + "</div>" +
    "<h3>" + escapeHtml(j.title) + "</h3>" +
    "<p>" + escapeHtml(j.desc) + "</p>";
  if (j.link && j.link.href && j.link.text) {
    html +=
      '<a class="tl-link" href="' + escapeHtml(j.link.href) + '">' +
      escapeHtml(j.link.text) +
      "</a>";
  }
  el.innerHTML = html;
  timeline.appendChild(el);
});

/* Skills */
const skillsGrid = document.getElementById("skillsGrid");
ABOUT.skills.forEach((name) => {
  const el = document.createElement("div");
  el.className = "skill-tile";
  el.innerHTML =
    '<div class="mark">' + skillMarkSvg(name) + "</div>" +
    '<div class="name">' + escapeHtml(name) + "</div>";
  skillsGrid.appendChild(el);
});

/* Stats */
const statsBar = document.getElementById("statsBar");
ABOUT.stats.forEach((s) => {
  const el = document.createElement("div");
  el.className = "stat";
  el.innerHTML =
    '<div class="stat-icon" aria-hidden="true">' + (ICONS[s.icon] || ICONS.cube) + "</div>" +
    '<div class="num">' + escapeHtml(s.num) + "</div>" +
    '<div class="label">' + escapeHtml(s.label) + "</div>";
  statsBar.appendChild(el);
});
