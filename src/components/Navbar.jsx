import { useState, useEffect } from 'react';
import { NAV_LINKS } from '../data';
import { useScrolled, useActiveSection } from '../hooks';

export default function Navbar() {
  const scrolled = useScrolled(20);
  const active = useActiveSection();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => { if (window.innerWidth > 768) setOpen(false); };
    window.addEventListener('resize', fn);
    return () => window.removeEventListener('resize', fn);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const handleNav = (href) => {
    setOpen(false);
    setTimeout(() => {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 50);
  };

  return (
    <>
      <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
        {/* Logo */}
        <a href="#home" className="navbar__logo"
          onClick={e => { e.preventDefault(); handleNav('#home'); }}>
          <div className="navbar__logo-icon">leo</div>
          <div>
            <div className="navbar__logo-name">
              leo<span> prakash</span>
            </div>
            <div className="navbar__logo-sub"></div>
          </div>
        </a>

        {/* Desktop links */}
        <ul className="navbar__links">
          {NAV_LINKS.map(l => (
            <NavItem key={l.label} link={l}
              isActive={active === l.href.slice(1)}
              onNav={handleNav} />
          ))}
        </ul>

        {/* Actions */}
        <div className="navbar__actions">
          <a href="#contact" className="navbar__cta"
            onClick={e => { e.preventDefault(); handleNav('#contact'); }}>
            Hire Me
          </a>
          <button className="navbar__hamburger" aria-label="Toggle menu"
            onClick={() => setOpen(!open)}>
            {open ? '✕' : '☰'}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      {open && (
        <div className="navbar__drawer">
          {NAV_LINKS.map((l, i) => (
            <button key={l.label}
              className={`navbar__drawer-link${active === l.href.slice(1) ? ' active' : ''}`}
              onClick={() => handleNav(l.href)}
              style={{ animation: `fadeUp .3s ease ${i * .06}s both` }}>
              <span className="navbar__drawer-link-num">0{i}</span>
              {l.label}
            </button>
          ))}
          <a href="mailto:alex@example.com" className="navbar__drawer-cta">
            Get In Touch
          </a>
        </div>
      )}
    </>
  );
}

function NavItem({ link, isActive, onNav }) {
  return (
    <li>
      <button
        className={`navbar__link-btn${isActive ? ' active' : ''}`}
        onClick={() => onNav(link.href)}>
        {link.label}
      </button>
    </li>
  );
}
