import { NavLink } from "react-router-dom";
import "../styles/nav.css";

const links = [
  { to: "/", label: "WORK", end: true },
  { to: "/about", label: "ABOUT" },
  { to: "/projects", label: "PROJECTS" },
  { to: "/contact", label: "CONTACT" },
];

export default function Nav() {
  return (
    <nav className="navbar">
      <NavLink className="logo" to="/">
        Arjun <span className="slash">//</span>
      </NavLink>
      <ul className="nav-links">
        {links.map((l) => (
          <li key={l.to}>
            <NavLink to={l.to} end={l.end} className={({ isActive }) => (isActive ? "active" : undefined)}>
              {l.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
