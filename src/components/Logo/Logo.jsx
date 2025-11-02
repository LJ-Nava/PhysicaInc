import { useState, useEffect } from 'react';
import './Logo.scss';

function Logo() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`Logo ${isScrolled ? 'Logo--scrolled' : ''}`}>
      <div className="Logo__container">
        <div className="Logo__brand">
          <div className="Logo__icon">
            <svg viewBox="0 0 100 100" className="Logo__svg">
              {/* Medical cross with elegant design */}
              <circle cx="50" cy="50" r="45" fill="#5F6F52" opacity="0.1"/>
              <path
                d="M50 20 L50 80 M20 50 L80 50"
                stroke="#5F6F52"
                strokeWidth="8"
                strokeLinecap="round"
              />
              <circle cx="50" cy="50" r="12" fill="#5F6F52"/>
              <circle cx="50" cy="50" r="8" fill="#A4AC96"/>
            </svg>
          </div>
          <div className="Logo__text">
            <h1 className="Logo__name">Physica Inc</h1>
            <p className="Logo__tagline">Excellence in Healthcare</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Logo;
