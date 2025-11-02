import {
  LuMapPin,
  LuPhone,
  LuMail,
  LuClock
} from 'react-icons/lu';
import './Contact.scss';

function Contact() {
  const contactInfo = [
    {
      Icon: LuMapPin,
      title: 'Visit Us',
      details: ['17911 Sky Park Circle', 'Ste L & M', 'Irvine, CA 92614'],
      link: null
    },
    {
      Icon: LuPhone,
      title: 'Call Us',
      details: ['(949) 123-4567'],
      link: 'tel:+19491234567'
    },
    {
      Icon: LuMail,
      title: 'Email Us',
      details: ['info@physicainc.com'],
      link: 'mailto:info@physicainc.com'
    },
    {
      Icon: LuClock,
      title: 'Hours',
      details: ['Every Day: 9:00 AM - 6:00 PM'],
      link: null
    }
  ];

  return (
    <section id="contact" className="Contact">
      <div className="Contact__container">
        {/* Section Header */}
        <div className="Contact__header">
          <span className="Contact__tagline">Get in Touch</span>
          <h2 className="Contact__title">Contact Us</h2>
          <p className="Contact__description">
            Ready to start your recovery journey? Contact us directly to schedule an appointment or ask any questions.
            Our team is available by phone or email during business hours.
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="Contact__info-grid">
          {contactInfo.map((info, index) => {
            const IconComponent = info.Icon;
            const CardTag = info.link ? 'a' : 'div';
            const cardProps = info.link ? { href: info.link } : {};

            return (
              <CardTag
                key={index}
                className="Contact__info-card"
                {...cardProps}
              >
                <div className="Contact__info-icon-wrapper">
                  <IconComponent className="Contact__info-icon" />
                </div>
                <div className="Contact__info-content">
                  <h3 className="Contact__info-title">{info.title}</h3>
                  {info.details.map((detail, i) => (
                    <p key={i} className="Contact__info-detail">
                      {detail}
                    </p>
                  ))}
                </div>
              </CardTag>
            );
          })}
        </div>

        {/* Map Section */}
        <div className="Contact__map-section">
          <div className="Contact__map">
            <img
              src="https://images.pexels.com/photos/1098515/pexels-photo-1098515.jpeg?auto=compress&cs=tinysrgb&w=1600&h=1200&dpr=2"
              alt="Physica Inc Location - Irvine, California"
              className="Contact__map-image"
              loading="lazy"
            />
            <div className="Contact__map-overlay"></div>
            <div className="Contact__map-marker">
              <LuMapPin className="Contact__map-marker-icon" />
            </div>
          </div>
        </div>

        {/* Direct Contact CTAs */}
        <div className="Contact__cta-section">
          <h3 className="Contact__cta-title">Prefer to Reach Out Directly?</h3>
          <p className="Contact__cta-subtitle">
            Give us a call or send an email. We'll respond to all inquiries during business hours.
          </p>
          <div className="Contact__cta-buttons">
            <a href="tel:+19491234567" className="Contact__cta-button Contact__cta-button--primary">
              <LuPhone size={20} />
              Call (949) 123-4567
            </a>
            <a href="mailto:info@physicainc.com" className="Contact__cta-button Contact__cta-button--secondary">
              <LuMail size={20} />
              Email Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
