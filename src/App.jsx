import { useEffect, useState } from 'react'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [showTopButton, setShowTopButton] = useState(false)

  useEffect(() => {
    const handleScroll = () => setShowTopButton(window.scrollY > 200)
    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="app-shell">
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
            onClick={() => setMenuOpen((open) => !open)}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            <span />
            <span />
            <span />
          </button>
          <nav className={`main-nav ${menuOpen ? 'open' : ''}`} aria-label="Primary navigation">
            <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
            <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
            <a href="#ministries" onClick={() => setMenuOpen(false)}>Ministries</a>
            <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero-section container">
          <div className="hero-copy">
            <span className="badge">Join Us This Sunday</span>
            <h2>Growing Together in Christ</h2>
            <p>
              Greenhills Christian Fellowship invites you to worship, connect, and serve with us. We are a family-focused church
              committed to sharing faith, hope, and community in the heart of Greenhills.
            </p>
            <div className="action-buttons">
              <a href="#services" className="button primary">Service Times</a>
              <a href="#contact" className="button secondary">Visit Us</a>
            </div>
          </div>
          <div className="hero-card">
            <h3>Weekly Worship</h3>
            <p>Join us for inspiring worship, Scripture teaching, and fellowship.</p>
            <ul>
              <li>Sunday Worship: 8:00 AM & 11:00 AM</li>
              <li>Midweek Prayer: Wednesday 6:00 PM</li>
              <li>Youth Gathering: Saturday 6:00 PM</li>
            </ul>
          </div>
        </section>

        <section id="about" className="section container">
          <div className="section-header">
            <p className="eyebrow">About GCF</p>
            <h2>Who We Are</h2>
          </div>
          <p className="section-text">
            Greenhills Christian Fellowship is a welcoming church family gathered around the Gospel of Jesus Christ. We worship
            together, disciple one another, and reach out with compassion to our neighborhood and beyond.
          </p>
          <div className="feature-grid">
            <article className="card">
              <h3>Faith</h3>
              <p>Building lives on Scripture, centered on Jesus, and empowered by the Holy Spirit.</p>
            </article>
            <article className="card">
              <h3>Community</h3>
              <p>Welcoming families, young adults, and seniors into a spiritual home of care and belonging.</p>
            </article>
            <article className="card">
              <h3>Service</h3>
              <p>Sharing God's love through local outreach, youth ministries, and ministries for every generation.</p>
            </article>
          </div>
        </section>

        <section id="services" className="section alt-background">
          <div className="container">
            <div className="section-header">
              <p className="eyebrow">Service Times</p>
              <h2>Worship and Prayer</h2>
            </div>
            <div className="service-grid">
              <div className="service-card">
                <h3>Sunday Worship</h3>
                <p>Join us for heartfelt music, Scripture, and a message of hope.</p>
                <p className="service-time">9:00 AM & 11:00 AM</p>
              </div>
              <div className="service-card">
                <h3>Midweek Prayer</h3>
                <p>Gather with believers for prayer, encouragement, and community.</p>
                <p className="service-time">Wednesday 7:00 PM</p>
              </div>
              <div className="service-card">
                <h3>Youth Group</h3>
                <p>Engaging young hearts with fellowship, study, and fun activities.</p>
                <p className="service-time">Friday 6:30 PM</p>
              </div>
            </div>
          </div>
        </section>

        <section id="ministries" className="section container">
          <div className="section-header">
            <p className="eyebrow">Ministries</p>
            <h2>Where You Can Serve</h2>
          </div>
          <div className="feature-grid">
            <article className="card">
              <h3>Children</h3>
              <p>Safe, joyful programs for children to learn about God's love.</p>
            </article>
            <article className="card">
              <h3>Small Groups</h3>
              <p>Deepen your faith in groups for study, prayer, and support.</p>
            </article>
            <article className="card">
              <h3>Outreach</h3>
              <p>Care for our neighbors through service, meals, and community projects.</p>
            </article>
          </div>
        </section>

        <section id="contact" className="section alt-background container contact-section">
          <div className="section-header">
            <p className="eyebrow">Get in Touch</p>
            <h2>Visit Greenhills Christian Fellowship Silvino Lubos</h2>
          </div>
          <div className="contact-grid">
            <div>
              <p>Poblacion 1<br />Silvino Lubos Northern Samar, 1614</p>
              <p>Email: hello@gcfchurch.org<br />Phone: (02) 1234-5678</p>
            </div>
            <div>
              <p>We welcome visitors every week. Come as you are for worship, prayer, and fellowship.</p>
              <p>Meet our pastors, join a small group, or learn more about how you can belong.</p>
            </div>
          </div>
        </section>
      </main>

      <button
        type="button"
        className={`scroll-top-button ${showTopButton ? 'visible' : ''}`}
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        ↑
      </button>

      <footer className="site-footer">
        <div className="container footer-inner">
          <p>Greenhills Christian Fellowship — Building faith, growing community.</p>
          <p>© 2026 GCF</p>
        </div>
      </footer>
    </div>
  )
}

export default App
