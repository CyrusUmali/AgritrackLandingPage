import { useEffect, useState } from 'react';
import { NAV_LINKS } from '../../constants/data';
import './Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const ids = NAV_LINKS.map(l => l.id);
    const observers = ids.map(id => {
      const el = document.getElementById(id);
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveId(id); },
        { threshold: 0.3, rootMargin: '-60px 0px -40% 0px' }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach(o => o?.disconnect());
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner">
        <a href="https://agritrack-theta.vercel.app/" className="navbar__logo">
          {/* <div className="navbar__logo-mark">
            <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8" width="16" height="16">
              <path d="M12 2C12 2 6 8 6 14a6 6 0 0012 0C18 8 12 2 12 2z"/>
              <line x1="12" y1="14" x2="12" y2="22"/>
            </svg>
          </div> */}

          <img className="navbar__logo-mark" src="./images/DA_image.png" alt="" />
          <span className="navbar__logo-text">AgriTrack</span>
        </a>

        <div className="navbar__links">
          {NAV_LINKS.map(link => (
            <a
              key={link.id}
              href={link.href}
              className={`navbar__link ${activeId === link.id ? 'navbar__link--active' : ''}`}
            >
              {link.label}
            </a>
          ))}
          <a href="https://agritrack-theta.vercel.app/" className="navbar__link navbar__link--cta">Sign in →</a>
        </div>
      </div>
    </nav>
  );
}
