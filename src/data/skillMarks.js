export const SKILL_MARKS = {
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

/** Colored bordered abbr box SVG — matches legacy / screenshot cards */
export function skillMarkSvg(name) {
  const m = SKILL_MARKS[name] || { bg: "#8a9099", label: String(name).slice(0, 2) };
  const short = m.label.length > 3 ? m.label.slice(0, 3) : m.label;
  const fs = short.length >= 3 ? 8 : 10;
  return (
    '<svg viewBox="0 0 26 26" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">' +
    '<rect x="1.5" y="1.5" width="23" height="23" rx="6" fill="' + m.bg +
    '" fill-opacity=".18" stroke="' + m.bg + '" stroke-opacity=".9" stroke-width="1.5"/>' +
    '<text x="13" y="16.5" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="' +
    fs + '" font-weight="700" fill="' + m.bg + '">' + short + "</text></svg>"
  );
}
