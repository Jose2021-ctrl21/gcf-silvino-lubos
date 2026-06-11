function SectionOverview({ section }) {
  return (
    <section id={section.id} className={`section ${section.altBackground ? 'alt-background' : ''}`}>
      <div className="container">
        <div className="section-header">
          <p className="eyebrow">{section.eyebrow}</p>
          <h2>{section.title}</h2>
        </div>
        {section.text && <p className="section-text">{section.text}</p>}

        <div className={section.gridClass ?? 'feature-grid'}>
          {section.cards.map((card) => (
            <article key={card.title} className={section.cardClass ?? 'card'}>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
              {card.time && <p className="service-time">{card.time}</p>}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SectionOverview
