import './Footer.scss'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Physica Inc</h3>
            <p>Comprometidos con tu salud y bienestar desde 2008</p>
          </div>

          <div className="footer-section">
            <h4>Enlaces Rápidos</h4>
            <ul>
              <li><a href="#inicio">Inicio</a></li>
              <li><a href="#servicios">Servicios</a></li>
              <li><a href="#nosotros">Nosotros</a></li>
              <li><a href="#contacto">Contacto</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Servicios</h4>
            <ul>
              <li>Medicina General</li>
              <li>Especialidades</li>
              <li>Diagnóstico</li>
              <li>Urgencias 24/7</li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Síguenos</h4>
            <div className="social-links">
              <a href="#" aria-label="Facebook">📘</a>
              <a href="#" aria-label="Instagram">📷</a>
              <a href="#" aria-label="Twitter">🐦</a>
              <a href="#" aria-label="LinkedIn">💼</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Physica Inc. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
