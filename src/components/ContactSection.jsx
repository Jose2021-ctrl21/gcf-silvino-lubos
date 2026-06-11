function ContactSection({ section }) {
  return (
    <section id={section.id} className="section alt-background container contact-section">
      <div className="section-header">
        <p className="eyebrow">{section.eyebrow}</p>
        <h2>{section.title}</h2>
      </div>
      <div className="contact-grid">
        <div>
          {section.details.map((line) => (
            <p key={line}>
              {line}
              <br />
            </p>
          ))}
        </div>
        <div>
          <p>{section.description}</p>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
