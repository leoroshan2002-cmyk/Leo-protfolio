import { NAV_LINKS } from '../data';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__grid">
          {/* Brand */}
          <div className="footer__brand">
            <div className="footer__brand-logo">
              <div className="footer__brand-icon">LEO</div>
              <div>
                <div className="footer__brand-name">Leo<span>Prakash</span></div>
                <div className="footer__brand-sub">MERN STACK</div>
              </div>
            </div>
            <p className="footer__brand-desc">
              Building full-stack applications with MongoDB, Express, React, and Node.js. Open to exciting opportunities worldwide.
            </p>
           
          </div>

          {/* Navigation */}
          <div>
            <div className="footer__col-title">Navigation</div>
            {NAV_LINKS.map(l => (
              <a key={l.label} href={l.href} className="footer__link">{l.label}</a>
            ))}
          </div>

          {/* Contact */}
          <div>
            <div className="footer__col-title">Contact</div>
            {['leo@merndev.io', 'GitHub', 'LinkedIn', 'Twitter'].map(c => (
              <a key={c} href="https://github.com/leoroshan2002-cmyk" className="footer__link">{c}</a>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="footer__bottom">
          
          <div className="footer__status">
            <span className="footer__status-dot" />
            All systems operational
          </div>
        </div>
      </div>
    </footer>
  );
}
