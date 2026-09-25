import { useMemo, useState, useEffect } from "react";
import { PROJECTS_PAGE } from "../data/projectsPage.js";
import { PROJECTS } from "../data/gridProjects.js";
import { asset } from "../data/paths.js";
import "../styles/projects.css";

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const [query, setQuery] = useState("");

  useEffect(() => {
    document.title = PROJECTS_PAGE.pageTitle || "Arjun Soundarajan — Projects";
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return PROJECTS.filter((p) => {
      if (filter !== "All" && p.filter !== filter) return false;
      if (!q) return true;
      const hay = [p.title, p.description, p.category, ...(p.tags || [])].join(" ").toLowerCase();
      return hay.includes(q);
    });
  }, [filter, query]);

  return (
    <>
      <main>
        <div className="section-tag">{PROJECTS_PAGE.tag}</div>
        <h1 className="page-headline">
          {PROJECTS_PAGE.headlineBefore}
          <span className="accent">{PROJECTS_PAGE.headlineAccent}</span>
        </h1>
        <div className="intro-row">
          <p>{PROJECTS_PAGE.introLeft}</p>
          <p>{PROJECTS_PAGE.introRight}</p>
        </div>

        <div className="toolbar">
          <div className="filter-pills" role="tablist" aria-label="Filter projects">
            {(PROJECTS_PAGE.filters || ["All"]).map((name) => (
              <button
                key={name}
                type="button"
                role="tab"
                aria-selected={filter === name}
                className={`pill${filter === name ? " active" : ""}`}
                onClick={() => setFilter(name)}
              >
                {name}
              </button>
            ))}
          </div>
          <div className="search-wrap">
            <span className="search-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="7" fill="none" stroke="currentColor" strokeWidth="2"/><path d="M20 20l-3.5-3.5" fill="none" stroke="currentColor" strokeWidth="2"/></svg>
            </span>
            <input
              type="search"
              placeholder="Search projects..."
              aria-label="Search projects"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
        </div>

        <div className="projects-grid" aria-live="polite">
          {filtered.map((p) => {
            const gh = p.github && p.github !== "#" ? p.github : null;
            const link = p.link && p.link !== "#" ? p.link : null;
            return (
              <article className="project-card" key={p.id || p.title}>
                <div className={`jewel${p.image ? " has-art" : ""}`} data-tone={p.tone || "slate"} aria-hidden="true">
                  <div className="jewel-bg" />
                  {p.image ? (
                    <img className="cd-art" src={asset(p.image)} alt="" loading="lazy" />
                  ) : null}
                </div>
                <div className="card-body">
                  <div className="card-cat"><span className="dot" /><span>{p.category}</span></div>
                  <h2 className="card-title">{p.title}</h2>
                  <p className="card-desc">{p.description}</p>
                  <div className="card-footer">
                    <div className="tech-tags">
                      {(p.tags || []).map((t) => <span className="tech-tag" key={t}>{t}</span>)}
                    </div>
                    <div className="card-links">
                      {gh && (
                        <a href={gh} target="_blank" rel="noopener noreferrer" aria-label="GitHub" title="GitHub">
                          <svg className="fill" viewBox="0 0 16 16"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>
                        </a>
                      )}
                      {link && (
                        <a href={link} target="_blank" rel="noopener noreferrer" aria-label="Open project" title="Open project">
                          <svg className="stroke" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 4h6v6"/><path d="M10 14L20 4"/><path d="M20 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h5"/></svg>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
        <div className="empty-state" hidden={filtered.length > 0}>No projects match your filters.</div>
      </main>
      <footer>Arjun // PROJECTS</footer>
    </>
  );
}

