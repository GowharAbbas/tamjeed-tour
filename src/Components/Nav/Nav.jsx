import { useState } from "react";
import Logoimg from "../../assets/logoimg.jpg";

const links = [
  ["Home", "#homepage"],
  ["Packages", "#packagespage"],
  ["Destinations", "#destinationspage"],
  ["About", "#aboutpage"],
  ["Contact", "#contactpage"],
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <nav className="site-nav">
        <button
          className="mobile-menu"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
        >
          <i className={`bi ${open ? "bi-x-lg" : "bi-list"}`} />
        </button>
        <div className={`nav-side nav-left ${open ? "nav-open" : ""}`}>
          {links.slice(0, 3).map(([label, href]) => (
            <a key={label} href={href} onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
        </div>
        <a
          className="brand-lockup"
          href="#homepage"
          aria-label="Tamjeed Tours and Travels home"
        >
          <img src={Logoimg} alt="Tamjeed Tours logo" />
          <span>
            <strong>TAMJEED</strong>
            <small>TOURS &amp; TRAVELS</small>
          </span>
        </a>
        <div className="nav-side nav-right">
          {links.slice(3).map(([label, href]) => (
            <a key={label} href={href}>
              {label}
            </a>
          ))}
          <a className="nav-book" href="#contactpage">
            Book now
          </a>
        </div>
      </nav>
    </header>
  );
}
