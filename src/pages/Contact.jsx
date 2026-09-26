import { useEffect, useState } from "react";
import { CONTACT } from "../data/contact.js";
import { absAsset } from "../data/paths.js";
import "../styles/contact.css";

export default function Contact() {
  const [status, setStatus] = useState({ type: "", message: "" });
  const [invalid, setInvalid] = useState({});
  const [sending, setSending] = useState(false);

  useEffect(() => {
    document.title = CONTACT.pageTitle || "Arjun Soundarajan � Contact";
    document.body.classList.add("page-contact");
    document.body.style.setProperty("--page-bg", `url("${absAsset("assets/backgrounds/contact_bg.png")}")`);
    return () => {
      document.body.classList.remove("page-contact");
      document.body.style.removeProperty("--page-bg");
    };
  }, []);

  async function onSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const subject = form.subject.value.trim();
    const message = form.message.value.trim();
    const next = {};
    if (!name) next.name = true;
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = true;
    if (!subject) next.subject = true;
    if (!message) next.message = true;
    setInvalid(next);
    if (Object.keys(next).length) {
      setStatus({ type: "error", message: "Please fill in all required fields." });
      return;
    }

    const key = CONTACT.web3formsAccessKey;
    if (!key) {
      // Fallback: no form backend configured, open the visitor's own email client.
      const body = `Hi Arjun,\n\n${message}\n\n— ${name}\n${email}`;
      const mailto = `mailto:${CONTACT.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.location.href = mailto;
      setStatus({ type: "ok", message: "Opening your email client…" });
      return;
    }

    setSending(true);
    setStatus({ type: "", message: "" });
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: key,
          name,
          email,
          subject: `Portfolio contact: ${subject}`,
          message,
          from_name: "arjun.runs-on.dev",
        }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus({ type: "ok", message: "Message sent — I'll get back to you soon!" });
        form.reset();
      } else {
        throw new Error(data.message || "Submission failed");
      }
    } catch (err) {
      setStatus({
        type: "error",
        message: "Couldn't send that — please try emailing me directly instead.",
      });
    } finally {
      setSending(false);
    }
  }

  return (
    <>
      <main>
        <div className="contact-grid">
          <section className="left-col" aria-label="Contact info">
            <div className="section-tag">{CONTACT.tag}</div>
            <h1>
              {CONTACT.headlineBefore}
              <span className="accent">{CONTACT.headlineAccent}</span>
            </h1>
            <p className="bio">{CONTACT.bio}</p>

            <div className="info-grid">
              <div className="info-card">
                <div className="info-icon email" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 7 9-7"/></svg>
                </div>
                <div className="info-meta">
                  <div className="label">Email</div>
                  <a className="value" href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
                </div>
              </div>
              <div className="info-card">
                <div className="info-icon location" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 21s-7-5.33-7-11a7 7 0 1 1 14 0c0 5.67-7 11-7 11z"/><circle cx="12" cy="10" r="2.5"/></svg>
                </div>
                <div className="info-meta">
                  <div className="label">Location</div>
                  <div className="value">{CONTACT.location}</div>
                </div>
              </div>
              <div className="info-card">
                <div className="info-icon timezone" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>
                </div>
                <div className="info-meta">
                  <div className="label">Timezone</div>
                  <div className="value">{CONTACT.timezone}</div>
                </div>
              </div>
            </div>

            <div className="social-row" aria-label="Social links">
              <a className="social-btn" href={CONTACT.socials?.github || "https://github.com/312arjun"} target="_blank" rel="noopener noreferrer" aria-label="GitHub" title="GitHub">
                <svg viewBox="0 0 16 16"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>
              </a>
              {CONTACT.socials?.linkedin && CONTACT.socials.linkedin !== "#" && (
                <a className="social-btn" href={CONTACT.socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" title="LinkedIn">
                  <svg viewBox="0 0 24 24"><path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8.5h4V23h-4V8.5zM8.5 8.5h3.8v2h.05c.53-1 1.82-2.05 3.75-2.05 4.01 0 4.75 2.64 4.75 6.07V23h-4v-6.6c0-1.57-.03-3.59-2.19-3.59-2.19 0-2.53 1.71-2.53 3.48V23h-4V8.5z"/></svg>
                </a>
              )}
              <a className="social-btn stroke-icon" href={`mailto:${CONTACT.email}`} aria-label="Email" title="Email">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 7 9-7"/></svg>
              </a>
            </div>
          </section>

          <aside className="form-card" aria-label="Send a message">
            <div className="form-title"><span className="dot" aria-hidden="true" /><span>{CONTACT.formTitle}</span></div>
            <p className="form-helper">{CONTACT.formHelper}</p>
            <form onSubmit={onSubmit} noValidate>
              <div className={`field${invalid.name ? " invalid" : ""}`}>
                <label htmlFor="name">Name <span className="req">*</span></label>
                <div className="input-wrap">
                  <input type="text" id="name" name="name" placeholder="Your name" required autoComplete="name" />
                </div>
              </div>
              <div className={`field${invalid.email ? " invalid" : ""}`}>
                <label htmlFor="email">Email <span className="req">*</span></label>
                <div className="input-wrap">
                  <input type="email" id="email" name="email" placeholder="your.email@example.com" required autoComplete="email" />
                </div>
              </div>
              <div className={`field${invalid.subject ? " invalid" : ""}`}>
                <label htmlFor="subject">Subject <span className="req">*</span></label>
                <div className="input-wrap">
                  <input type="text" id="subject" name="subject" placeholder="Project discussion, Job opportunity, etc." required />
                </div>
              </div>
              <div className={`field${invalid.message ? " invalid" : ""}`}>
                <label htmlFor="message">Message <span className="req">*</span></label>
                <div className="input-wrap textarea-wrap">
                  <textarea id="message" name="message" placeholder="Write your message here..." required />
                </div>
              </div>
              <button type="submit" className="btn-send" disabled={sending}>
                {sending ? "Sending…" : "Send Message →"}
              </button>
              <div className={`form-status${status.type ? " " + status.type : ""}`} role="status">{status.message}</div>
            </form>

            <div className="or-divider">OR</div>
            <div className="alt-actions">
              <a className="alt-btn" href={CONTACT.socials?.github || "https://github.com/312arjun"} target="_blank" rel="noopener noreferrer">
                <span className="alt-left">View GitHub</span><span className="alt-arrow">→</span>
              </a>
              <a className="alt-btn" href={`mailto:${CONTACT.email}`}>
                <span className="alt-left">Email Me</span><span className="alt-arrow">→</span>
              </a>
            </div>
          </aside>
        </div>
      </main>
      <footer>Arjun // CONTACT</footer>
    </>
  );
}
