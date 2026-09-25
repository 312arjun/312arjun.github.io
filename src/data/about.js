export const ABOUT = {
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
}
