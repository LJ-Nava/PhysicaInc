import { Link } from 'react-router-dom';
import {
  LuMapPin,
  LuPhone,
  LuMail,
  LuClock,
  LuFacebook,
  LuInstagram,
  LuLinkedin,
  LuArrowUpRight
} from 'react-icons/lu';
import './Footer.scss';

function Footer() {
  const currentYear = new Date().getFullYear();

  const navigation = [
    { label: 'Services', href: '/services' },
    { label: 'Our Team', href: '/team' },
    { label: 'About Us', href: '/about' },
    { label: 'Contact', href: '/contact' }
  ];

  const specialties = [
    'Sports Rehabilitation',
    'Manual Therapy',
    'Orthopedic Care',
    'Pain Management'
  ];

  return (
    <footer className="Footer">
      {/* Main Content - Minimalist Design */}
      <div className="Footer__main">
        <div className="Footer__container">
          {/* Top Section - Brand & Contact */}
          <div className="Footer__top">
            {/* Brand */}
            <div className="Footer__brand-section">
              <h2 className="Footer__brand-title">Physica Inc</h2>
              <p className="Footer__brand-subtitle">Excellence in Physical Therapy</p>
              <p className="Footer__brand-description">
                Transforming lives through expert physical therapy.
                23+ years of dedicated care and proven results.
              </p>

              {/* Social Links */}
              <div className="Footer__social">
                <a href="https://facebook.com" className="Footer__social-link" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <LuFacebook />
                </a>
                <a href="https://instagram.com" className="Footer__social-link" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <LuInstagram />
                </a>
                <a href="https://linkedin.com" className="Footer__social-link" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <LuLinkedin />
                </a>
              </div>
            </div>

            {/* Contact Info - Modern Cards */}
            <div className="Footer__contact-grid">
              <a href="tel:+1234567890" className="Footer__contact-card">
                <LuPhone className="Footer__contact-card-icon" />
                <span className="Footer__contact-card-label">Call Us</span>
                <span className="Footer__contact-card-value">(123) 456-7890</span>
              </a>

              <a href="mailto:info@physicainc.com" className="Footer__contact-card">
                <LuMail className="Footer__contact-card-icon" />
                <span className="Footer__contact-card-label">Email Us</span>
                <span className="Footer__contact-card-value">info@physicainc.com</span>
              </a>

              <div className="Footer__contact-card">
                <LuClock className="Footer__contact-card-icon" />
                <span className="Footer__contact-card-label">Hours</span>
                <span className="Footer__contact-card-value">Mon-Fri: 8AM-8PM</span>
              </div>

              <div className="Footer__contact-card">
                <LuMapPin className="Footer__contact-card-icon" />
                <span className="Footer__contact-card-label">Visit Us</span>
                <span className="Footer__contact-card-value">New York, NY</span>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="Footer__divider"></div>

          {/* Bottom Section - Navigation */}
          <div className="Footer__bottom-section">
            <div className="Footer__nav">
              <span className="Footer__nav-label">Navigate</span>
              <div className="Footer__nav-links">
                {navigation.map((item, index) => (
                  <Link key={index} to={item.href} className="Footer__nav-link">
                    {item.label}
                    <LuArrowUpRight className="Footer__nav-link-icon" />
                  </Link>
                ))}
              </div>
            </div>

            <div className="Footer__specialties">
              <span className="Footer__specialties-label">Specialties</span>
              <div className="Footer__specialties-list">
                {specialties.map((specialty, index) => (
                  <span key={index} className="Footer__specialty-tag">
                    {specialty}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar - Minimal */}
      <div className="Footer__bottom-bar">
        <div className="Footer__container Footer__bottom-bar-content">
          <p className="Footer__copyright">
            © {currentYear} Physica Inc. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
