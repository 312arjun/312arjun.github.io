import { useEffect, useMemo, useRef, useState } from "react";
import { createCdShelf } from "../lib/cdShelf.js";
import { SITE } from "../data/site.js";
import { PROJECTS } from "../data/shelfProjects.js";
import { ICONS } from "../data/shelfIcons.js";
import { asset } from "../data/paths.js";
import { Icon } from "../components/Icon.jsx";
import "../styles/work.css";

export default function Work() {
  const sceneRef = useRef(null);
  const stageRef = useRef(null);
  const shelfRef = useRef(null);
  const [index, setIndex] = useState(SITE.startIndex || 0);
  const [fadeKey, setFadeKey] = useState(0);

  const projects = useMemo(
    () => PROJECTS.map((p) => ({ ...p, image: asset(p.image || SITE.blankCd) })),
    []
  );

  useEffect(() => {
    document.title = SITE.pageTitle || "Arjun Soundarajan";
    document.body.classList.add("page-work");
    document.body.style.setProperty("--page-bg", `url("${asset("assets/backgrounds/background.png")}")`);
    return () => {
      document.body.classList.remove("page-work");
      document.body.style.removeProperty("--page-bg");
    };
  }, []);

  useEffect(() => {
    if (!sceneRef.current || !stageRef.current) return;
    const shelf = createCdShelf({
      stageEl: stageRef.current,
      sceneEl: sceneRef.current,
      projects,
      startIndex: SITE.startIndex || 0,
      onChange: (i) => {
        setIndex(i);
        setFadeKey((k) => k + 1);
      },
    });
    shelfRef.current = shelf;
    return () => shelf.destroy();
  }, [projects]);

  const p = projects[index] || projects[0];
  const blank = !p?.image || String(p.image).includes("CD_without_artwork");
  const hasLink = p?.link && p.link !== "#";
  const hasGh = p?.github && p.github !== "#";

  return (
    <>
      <main>
        <section className="hero" id="work">
          <div className="eyebrow">{SITE.eyebrow}</div>
          <h1>
            {SITE.headlineBefore}
            <span className="accent">{SITE.headlineAccent}</span>
          </h1>
          <p>{SITE.subtitle}</p>
        </section>

        <section className="shelf-section" aria-label="Project turntable shelf">
          <div className="turntable-scene" ref={sceneRef}>
            <button className="shelf-arrow prev" type="button" aria-label="Previous project" onClick={() => shelfRef.current?.nudge(-1)}>{"<"}</button>
            <button className="shelf-arrow next" type="button" aria-label="Next project" onClick={() => shelfRef.current?.nudge(1)}>{">"}</button>
            <img className="tray" src={asset("assets/backgrounds/shelf.png")} alt="" draggable="false" />
            <div className="cd-stage" ref={stageRef} />
          </div>
          <div className="shelf-caption">
            <span>{String(index + 1).padStart(2, "0")}</span>
            &nbsp;/&nbsp;
            <span>{String(projects.length).padStart(2, "0")}</span> PROJECTS
            &nbsp;//&nbsp; DRAG TO SPIN · CLICK A CD
          </div>
        </section>

        <section className="project-panel" aria-live="polite">
          <div key={fadeKey} className="detail-fade" style={{ display: "contents" }}>
            <div className={`preview${blank ? " is-blank" : ""}`}>
              <img src={p?.image} alt={p?.title || ""} />
              <div className="preview-overlay">{blank ? p?.title : ""}</div>
            </div>
            <div className="project-main">
              <div className="project-title"><h2>{p?.title}</h2></div>
              <div className="project-subtitle">{p?.subtitle}</div>
              <p className="project-description">{p?.description}</p>
              <div className="tags">
                {(p?.tags || []).map((tag) => (
                  <span className="tag" key={tag}>{tag}</span>
                ))}
              </div>
              <div className="buttons">
                {hasLink && (
                  <a className="btn btn-primary" href={p.link} target="_blank" rel="noopener noreferrer">
                    View project&nbsp;→
                  </a>
                )}
                {hasGh && (
                  <a className="btn btn-github" href={p.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <svg viewBox="0 0 16 16" aria-hidden="true"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>
                  </a>
                )}
              </div>
            </div>
            <div className="features">
              {(p?.features || []).map((f) => (
                <div className="feature" key={f.label}>
                  <div className="feature-icon">
                    <Icon svg={ICONS[f.icon] || ICONS.code || Object.values(ICONS)[0]} />
                  </div>
                  <div>{f.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <footer>Arjun Soundarajan</footer>
    </>
  );
}
