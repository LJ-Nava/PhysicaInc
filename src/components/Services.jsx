import './Services.scss'

function Services() {
  const services = [
    {
      title: 'Medicina General',
      description: 'Atención médica integral para toda la familia con profesionales experimentados.',
      icon: '🏥'
    },
    {
      title: 'Especialidades',
      description: 'Consultas con especialistas en diversas áreas de la medicina.',
      icon: '⚕️'
    },
    {
      title: 'Diagnóstico',
      description: 'Laboratorio y estudios diagnósticos con tecnología de última generación.',
      icon: '🔬'
    },
    {
      title: 'Terapias',
      description: 'Programas de rehabilitación y terapias personalizadas.',
      icon: '💪'
    },
    {
      title: 'Urgencias',
      description: 'Atención de urgencias las 24 horas del día, los 7 días de la semana.',
      icon: '🚑'
    },
    {
      title: 'Prevención',
      description: 'Programas de prevención y chequeos médicos regulares.',
      icon: '🛡️'
    }
  ]

  return (
    <section id="servicios" className="section services">
      <div className="container">
        <h2 className="section-title">Nuestros Servicios</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
