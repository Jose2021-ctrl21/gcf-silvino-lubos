import { heroContent } from '../data/content.js'

function HeroSection() {
  const { badge, title, description, primaryButton, secondaryButton, card } = heroContent

  return (
    <section className="hero-section container">
      <div className="hero-copy">
        <span className="badge">{badge}</span>
        <h2>{title}</h2>
        <p>{description}</p>
        <div className="action-buttons">
          <a href={primaryButton.href} className="button primary">
            {primaryButton.label}
          </a>
          <a href={secondaryButton.href} className="button secondary">
            {secondaryButton.label}
          </a>
        </div>
      </div>
      <div className="hero-card">
        <h3>{card.title}</h3>
        <p>{card.description}</p>
        <ul>
          {card.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default HeroSection
