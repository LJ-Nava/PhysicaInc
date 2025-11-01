import { useState } from 'react'
import './Contact.scss'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Aquí iría la lógica para enviar el formulario
    alert('Gracias por contactarnos. Te responderemos pronto.')
    setFormData({ name: '', email: '', phone: '', message: '' })
  }

  return (
    <section id="contacto" className="section contact">
      <div className="container">
        <h2 className="section-title">Contáctanos</h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3>Información de Contacto</h3>
            <div className="info-item">
              <span className="icon">📍</span>
              <div>
                <h4>Dirección</h4>
                <p>Av. Principal #123, Ciudad</p>
              </div>
            </div>
            <div className="info-item">
              <span className="icon">📞</span>
              <div>
                <h4>Teléfono</h4>
                <p>+1 (555) 123-4567</p>
              </div>
            </div>
            <div className="info-item">
              <span className="icon">✉️</span>
              <div>
                <h4>Email</h4>
                <p>contacto@physicainc.com</p>
              </div>
            </div>
            <div className="info-item">
              <span className="icon">🕒</span>
              <div>
                <h4>Horario</h4>
                <p>Lun - Vie: 8:00 AM - 8:00 PM</p>
                <p>Sáb: 9:00 AM - 2:00 PM</p>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Nombre Completo</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Teléfono</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Mensaje</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Enviar Mensaje</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
