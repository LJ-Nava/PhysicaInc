import './About.scss'

function About() {
  return (
    <section id="nosotros" className="section about">
      <div className="container">
        <h2 className="section-title">Sobre Nosotros</h2>
        <div className="about-content">
          <div className="about-text">
            <h3>Comprometidos con tu Bienestar</h3>
            <p>
              En Physica Inc, nos dedicamos a proporcionar atención médica de la más alta calidad,
              combinando experiencia profesional con tecnología moderna y un trato humano y cálido.
            </p>
            <p>
              Nuestro equipo de profesionales altamente calificados está comprometido con tu salud
              y bienestar, ofreciendo servicios médicos integrales para toda la familia.
            </p>
            <div className="about-stats">
              <div className="stat">
                <h4>15+</h4>
                <p>Años de experiencia</p>
              </div>
              <div className="stat">
                <h4>50+</h4>
                <p>Profesionales</p>
              </div>
              <div className="stat">
                <h4>10K+</h4>
                <p>Pacientes atendidos</p>
              </div>
            </div>
          </div>
          <div className="about-image">
            <div className="image-placeholder">
              <span>🏥</span>
              <p>Physica Inc</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
