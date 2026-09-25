import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ABOUT } from "../data/about.js";
import { ICONS } from "../data/aboutIcons.js";
import { SKILL_MARKS } from "../data/skillMarks.js";
import { asset } from "../data/paths.js";
import { Icon } from "../components/Icon.jsx";
import "../styles/about.css";

export default function About() {
  const [hasPhoto, setHasPhoto] = useState(false);

  useEffect(() => {
    document.title = ABOUT.pageTitle || "Arjun Soundarajan — About";
  }, []);

  const resumeHref = asset(ABOUT.resumeUrl || "docs/Arjun%27s_Resume.pdf");

  return (
    <>
      <main>
        <section className="top-row" aria-label="About intro">
          <div className="bio-col">
            <div className="section-tag">{ABOUT.tag}</div>
            <h1>
              {ABOUT.headlineBefore}
              <span className="accent">{ABOUT.headlineAccent}</span>
            </h1>
            <div className="role">{ABOUT.role}</div>
            <p className="bio">{ABOUT.bio}</p>
            <div className="location">
              <span className="dot" aria-hidden="true" />
              <span>{ABOUT.location}</span>
            </div>
            <div className="btn-row">
              <a className="btn btn-primary" href={resumeHref} download="Arjun_Soundarajan_Resume.pdf">
                <Icon svg={ICONS.download} />
                Download Resume
              </a>
              <Link className="btn btn-text" to="/contact">
                Get in touch →
              </Link>
            </div>
          </div>

          <div className="portrait-col">
            <div className={`portrait-frame${hasPhoto ? " has-photo" : ""}`}>
              <img
                src={asset(ABOUT.photo)}
                alt="Portrait of Arjun Soundarajan"
                onLoad={() => setHasPhoto(true)}
                onError={(e) => {
                  setHasPhoto(false);
                  e.currentTarget.removeAttribute("src");
                }}
              />
              <div className="portrait-placeholder">
                <div className="initials">{ABOUT.initials || "AS"}</div>
                <div className="hint">Add assets/about_photo.png</div>
              </div>
              <div className="status-pill">
                <span className="live" aria-hidden="true" />
                <span>{ABOUT.status}</span>
              </div>
            </div>
          </div>

          <aside className="services-card" aria-label="What I do">
            <div className="card-title">
              <span className="dot" aria-hidden="true" />
              <span>{ABOUT.servicesTitle}</span>
            </div>
            {(ABOUT.services || []).map((s) => (
              <div className="service-item" key={s.title}>
                <div className={`service-icon ${s.color || ""}`}>
                  <Icon svg={ICONS[s.icon]} />
                </div>
                <div className="service-text">
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
              </div>
            ))}
          </aside>
        </section>

        <section className="mid-row" aria-label="Journey and skills">
          <div>
            <div className="section-tag">{ABOUT.journeyTag}</div>
            <h2>
              {ABOUT.journeyHeadlineBefore}
              <span className="accent">{ABOUT.journeyHeadlineAccent}</span>
            </h2>
            <div className="timeline">
              {(ABOUT.journey || []).map((j) => (
                <div className={`tl-item${j.active ? " active" : ""}`} key={j.years + j.title}>
                  <span className="node" aria-hidden="true" />
                  <div className="years">{j.years}</div>
                  <h3>{j.title}</h3>
                  <p>{j.desc}</p>
                  {j.link && (
                    <Link className="tl-link" to="/projects">
                      {j.link.text || "View projects →"}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="section-tag">{ABOUT.skillsTag}</div>
            <h2>
              {ABOUT.skillsHeadlineBefore}
              <span className="accent">{ABOUT.skillsHeadlineAccent}</span>
            </h2>
            <div className="skills-grid">
              {(ABOUT.skills || []).map((name) => {
                const mark = SKILL_MARKS[name] || { bg: "#8a9099", label: String(name).slice(0, 2) };
                return (
                  <div className="skill-tile" key={name}>
                    <div className="mark" style={{ background: mark.bg }}>
                      {mark.label}
                    </div>
                    <div className="name">{name}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="stats-bar" aria-label="Highlights">
          {(ABOUT.stats || []).map((s) => (
            <div className="stat" key={s.label}>
              <div className="stat-icon">
                <Icon svg={ICONS[s.icon]} />
              </div>
              <div className="num">{s.num}</div>
              <div className="label">{s.label}</div>
            </div>
          ))}
        </section>
      </main>
      <footer>Arjun // ABOUT</footer>
    </>
  );
}
