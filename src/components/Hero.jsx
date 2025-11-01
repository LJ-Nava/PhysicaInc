import './Hero.scss'

function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">Tu Salud, Nuestra Prioridad</h1>
          <p className="hero-subtitle">
            Atención médica de calidad con profesionales comprometidos con tu bienestar
          </p>
          <div className="hero-buttons">
            <button className="btn btn-primary">Agendar Cita</button>
            <button className="btn btn-secondary">Conocer Más</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
