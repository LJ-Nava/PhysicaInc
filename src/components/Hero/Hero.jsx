import { useState, useEffect, useRef } from 'react';
import './Hero.scss';

function Hero() {
  const [yearsCount, setYearsCount] = useState(0);
  const [patientsCount, setPatientsCount] = useState(0);
  const [satisfactionCount, setSatisfactionCount] = useState(0);
  const statsRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            animateCounter(setYearsCount, 23, 2000);
            animateCounter(setPatientsCount, 23400, 2000);
            animateCounter(setSatisfactionCount, 96, 2000);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, [hasAnimated]);

  const animateCounter = (setter, target, duration) => {
    const startTime = Date.now();
    const endTime = startTime + duration;

    const updateCounter = () => {
      const now = Date.now();
      const progress = Math.min((now - startTime) / duration, 1);
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentValue = Math.floor(easeOutQuart * target);

      setter(currentValue);

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      } else {
        setter(target);
      }
    };

    requestAnimationFrame(updateCounter);
  };

  return (
    <section id="home" className="Hero">
      <div className="Hero__overlay"></div>

      <div className="Hero__container">
        <div className="Hero__content">
          {/* Badge/Tag */}
          <span className="Hero__badge">Excellence in Physical Therapy Since 2025</span>

          {/* Main Heading */}
          <h1 className="Hero__title">
            Your Recovery,
            <span className="Hero__title-accent"> Our Mission</span>
          </h1>

          {/* Subtitle */}
          <p className="Hero__subtitle">
            Experience exceptional physical therapy delivered with expertise and care.
            Our specialized team is dedicated to helping you achieve optimal recovery and performance.
          </p>

          {/* Call-to-Action Buttons */}
          <div className="Hero__actions">
            <a href="tel:+1234567890" className="Hero__button Hero__button--primary">
              Schedule Appointment
            </a>
            <a href="#services" className="Hero__button Hero__button--secondary">
              Our Services
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="Hero__trust-indicators">
            <div className="Hero__trust-item">
              <span className="Hero__trust-icon">✓</span>
              <span className="Hero__trust-text">Licensed Physical Therapists</span>
            </div>
            <div className="Hero__trust-item">
              <span className="Hero__trust-icon">✓</span>
              <span className="Hero__trust-text">Advanced Equipment</span>
            </div>
            <div className="Hero__trust-item">
              <span className="Hero__trust-icon">✓</span>
              <span className="Hero__trust-text">Personalized Treatment Plans</span>
            </div>
          </div>
        </div>

        {/* Hero Image - Modern Medical Facility */}
        <div className="Hero__image-wrapper">
          <div className="Hero__image-container">
            <img
              src="https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?w=1600&h=1200&fit=crop"
              alt="Physica Inc - Modern Medical Clinic Exterior"
              className="Hero__image"
              loading="eager"
            />
            <div className="Hero__image-overlay"></div>
          </div>

          {/* Floating Stats Card */}
          <div ref={statsRef} className="Hero__stats-card">
            <div className="Hero__stat">
              <span className="Hero__stat-number">{yearsCount}+</span>
              <span className="Hero__stat-label">Years Experience</span>
            </div>
            <div className="Hero__stat">
              <span className="Hero__stat-number">
                {patientsCount.toLocaleString()}+
              </span>
              <span className="Hero__stat-label">Patients Served</span>
            </div>
            <div className="Hero__stat">
              <span className="Hero__stat-number">{satisfactionCount}%</span>
              <span className="Hero__stat-label">Satisfaction Rate</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
