import heroImg from '../assets/gcf_logo.jpg'
import { navLinks } from '../data/content.js'

function Header({ menuOpen, onToggle }) {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <div className="brand">
          <img src={heroImg} alt="Greenhills Christian Fellowship" className="brand-logo" />
          <div>
            <p className="eyebrow">Greenhills Christian Fellowship</p>
            <h1>Welcome to GCF Silvino Lubos</h1>
            <p className="tagline">A warm church community rooted in faith, service, and love.</p>
          </div>
        </div>

        <button
          className={`hamburger-button ${menuOpen ? 'open' : ''}`}
          onClick={() => onToggle((open) => !open)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`main-nav ${menuOpen ? 'open' : ''}`} aria-label="Primary navigation">
          {navLinks.map((link) => (
            <div key={link.id} className={`nav-item ${link.subLinks ? 'nav-with-submenu' : ''}`}>
              <a href={link.href} onClick={() => onToggle(false)}>
                {link.label}
              </a>
              {link.subLinks ? (
                <div className="submenu-card" aria-label={`${link.label} submenu`}>
                  <h3>{link.label}</h3>
                  {link.subLinks.map((subLink) => (
                    <a key={subLink.id} href={subLink.href} onClick={() => onToggle(false)}>
                      {subLink.label}
                    </a>
                  ))}
                </div>
              ) : null}
            </div>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Header
