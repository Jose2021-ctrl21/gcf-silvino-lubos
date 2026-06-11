import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header.jsx'
import HeroSection from './components/HeroSection.jsx'
import SectionOverview from './components/SectionOverview.jsx'
import ContactSection from './components/ContactSection.jsx'
import Footer from './components/Footer.jsx'
import {
  aboutSection,
  contactSection,
  footerContent,
  ministriesSection,
  serviceSection,
} from './data/content.js'

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
      <Header menuOpen={menuOpen} onToggle={setMenuOpen} />
      <main>
        <HeroSection />
        <SectionOverview section={aboutSection} />
        <SectionOverview section={serviceSection} />
        <SectionOverview section={ministriesSection} />
        <ContactSection section={contactSection} />
      </main>

      <button
        type="button"
        className={`scroll-top-button ${showTopButton ? 'visible' : ''}`}
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        ↑
      </button>

      <Footer footer={footerContent} />
    </div>
  )
}

export default App
