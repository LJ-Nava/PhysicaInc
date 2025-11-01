import { useState } from 'react'
import './Header.scss'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="header">
      <div className="container">
        <nav className="navbar">
          <div className="logo">
            <h1>Physica Inc</h1>
          </div>

          <button
            className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            <li><a href="#inicio" onClick={() => setIsMenuOpen(false)}>Inicio</a></li>
            <li><a href="#servicios" onClick={() => setIsMenuOpen(false)}>Servicios</a></li>
            <li><a href="#nosotros" onClick={() => setIsMenuOpen(false)}>Nosotros</a></li>
            <li><a href="#contacto" onClick={() => setIsMenuOpen(false)}>Contacto</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
