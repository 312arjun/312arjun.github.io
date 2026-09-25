/* =========================================================
   CONTACT CONFIG — edit this block only
========================================================= */
const CONTACT = {
  brand: "Arjun",
  pageTitle: "Arjun Soundarajan — Contact",

  tag: "04. CONTACT",
  headlineBefore: "Let's Build Something ",
  headlineAccent: "Amazing.",
  bio:
    "I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Whether you have a question or just want to say hi, feel free to reach out — I'll do my best to get back to you!",

  email: "soundarajan.arjun@gmail.com",
  location: "Bengaluru, India",
  timezone: "IST (UTC +5:30)",

  formTitle: "Send a Message",
  formHelper:
    "Have a project in mind, a job opportunity or just want to say hi? Fill out the form and I'll get back to you soon.",

  socials: {
    github: "https://github.com/312arjun",
    linkedin: "#",
    twitter: "#",
  },

  mailtoSubjectPrefix: "",
};

/* =========================================================
   RENDER + FORM (mailto)
========================================================= */
document.title = CONTACT.pageTitle || "Arjun Soundarajan — Contact";

const setText = (id, value) => {
  const el = document.getElementById(id);
  if (el && value != null) el.textContent = value;
};

setText("contactTag", CONTACT.tag);
document.getElementById("contactHeadline").innerHTML =
  `${CONTACT.headlineBefore || ""}<span class="accent">${CONTACT.headlineAccent || ""}</span>`;
setText("contactBio", CONTACT.bio);
setText("formTitle", CONTACT.formTitle);
setText("formHelper", CONTACT.formHelper);
setText("infoLocation", CONTACT.location);
setText("infoTimezone", CONTACT.timezone);
setText("footerText", `${CONTACT.brand || "Arjun"} // CONTACT`);

const emailEl = document.getElementById("infoEmail");
emailEl.textContent = CONTACT.email;
emailEl.href = `mailto:${CONTACT.email}`;

const gh = CONTACT.socials?.github || "#";
const li = CONTACT.socials?.linkedin || "#";
const tw = CONTACT.socials?.twitter || "#";
const mailHref = `mailto:${CONTACT.email}`;

document.getElementById("socialGithub").href = gh;
document.getElementById("socialLinkedin").href = li;
document.getElementById("socialTwitter").href = tw;
document.getElementById("socialEmail").href = mailHref;

document.getElementById("altGithub").href = gh;
document.getElementById("altLinkedin").href = li;
document.getElementById("altEmail").href = mailHref;

const form = document.getElementById("contactForm");
const statusEl = document.getElementById("formStatus");
const fields = {
  name: document.getElementById("fieldName"),
  email: document.getElementById("fieldEmail"),
  subject: document.getElementById("fieldSubject"),
  message: document.getElementById("fieldMessage"),
};

function clearInvalid() {
  Object.values(fields).forEach((f) => f.classList.remove("invalid"));
  statusEl.textContent = "";
  statusEl.className = "form-status";
}

function isValidEmail(v) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  clearInvalid();

  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const subject = form.subject.value.trim();
  const message = form.message.value.trim();

  let ok = true;
  if (!name) { fields.name.classList.add("invalid"); ok = false; }
  if (!email || !isValidEmail(email)) { fields.email.classList.add("invalid"); ok = false; }
  if (!subject) { fields.subject.classList.add("invalid"); ok = false; }
  if (!message) { fields.message.classList.add("invalid"); ok = false; }

  if (!ok) {
    statusEl.textContent = "Please fill in all required fields.";
    statusEl.className = "form-status error";
    return;
  }

  const prefix = CONTACT.mailtoSubjectPrefix || "";
  const mailSubject = encodeURIComponent(prefix + subject);
  const mailBody = encodeURIComponent(
    `Hi Arjun,\n\n${message}\n\n— ${name}\n${email}`
  );
  const href = `mailto:${CONTACT.email}?subject=${mailSubject}&body=${mailBody}`;

  statusEl.textContent = "Opening your email client…";
  statusEl.className = "form-status ok";
  window.location.href = href;
});

["name", "email", "subject", "message"].forEach((id) => {
  form[id].addEventListener("input", () => {
    fields[id].classList.remove("invalid");
    if (statusEl.classList.contains("error")) {
      statusEl.textContent = "";
      statusEl.className = "form-status";
    }
  });
});
