function Footer({ footer }) {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <p>{footer.tagline}</p>
        <p>{footer.copyright}</p>
      </div>
    </footer>
  )
}

export default Footer
