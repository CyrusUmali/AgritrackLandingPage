import './Footer.css';

const FOOTER_LINKS = ['Dashboard', 'Farms', 'Reports', 'Support'];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <a href="#" className="footer__logo">
          <div className="footer__logo-mark">
            <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" width="12" height="12">
              <path d="M12 2C12 2 6 8 6 14a6 6 0 0012 0C18 8 12 2 12 2z"/>
            </svg>
          </div>
          <span className="footer__logo-text">AgriTrack</span>
        </a>

        <div className="footer__links">
          {FOOTER_LINKS.map(l => <a key={l} href="#">{l}</a>)}
        </div>

        <div className="footer__copy">
          © 2026 AgriTrack · Department of Agriculture · San Pablo City
        </div>
      </div>
    </footer>
  );
}
