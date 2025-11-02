import {
  LuAward,
  LuHeart,
  LuUsers,
  LuTrendingUp,
  LuMapPin,
  LuMail,
  LuPhone
} from 'react-icons/lu';
import './AboutUs.scss';

function AboutUs() {
  const clinicImages = [
    {
      id: 1,
      url: 'https://images.pexels.com/photos/7659574/pexels-photo-7659574.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2',
      title: 'State-of-the-Art Facilities',
      size: 'large' // spans 2 columns
    },
    {
      id: 2,
      url: 'https://images.pexels.com/photos/6455925/pexels-photo-6455925.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&dpr=2',
      title: 'Advanced Equipment',
      size: 'medium'
    },
    {
      id: 3,
      url: 'https://images.pexels.com/photos/5794032/pexels-photo-5794032.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&dpr=2',
      title: 'Expert Treatment',
      size: 'medium'
    },
    {
      id: 4,
      url: 'https://images.pexels.com/photos/4506109/pexels-photo-4506109.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&dpr=2',
      title: 'Rehabilitation Spaces',
      size: 'medium'
    },
    {
      id: 5,
      url: 'https://images.pexels.com/photos/7176319/pexels-photo-7176319.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&dpr=2',
      title: 'Therapeutic Environment',
      size: 'medium'
    },
    {
      id: 6,
      url: 'https://images.pexels.com/photos/6646900/pexels-photo-6646900.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2',
      title: 'Patient Care Areas',
      size: 'wide' // spans 2 columns
    }
  ];

  const achievements = [
    { icon: LuUsers, value: '1,500+', label: 'Patients Recovered' },
    { icon: LuAward, value: '10+', label: 'Years Combined Experience' },
    { icon: LuHeart, value: '99%', label: 'Patient Satisfaction' },
    { icon: LuTrendingUp, value: '100%', label: 'Evidence-Based Care' }
  ];

  const coreValues = [
    {
      icon: LuHeart,
      title: 'Patient-Centered Care',
      description: 'Every treatment plan is personalized to your unique needs, goals, and lifestyle. We listen first, then create solutions tailored specifically for you.'
    },
    {
      icon: LuAward,
      title: 'Clinical Excellence',
      description: 'We stay at the forefront of physical therapy through continuous education, evidence-based practices, and investment in cutting-edge rehabilitation technology.'
    },
    {
      icon: LuUsers,
      title: 'Collaborative Approach',
      description: 'Your recovery is a partnership. We work closely with your physicians, specialists, and support system to ensure comprehensive, coordinated care.'
    },
    {
      icon: LuTrendingUp,
      title: 'Lasting Results',
      description: 'Our goal isn\'t just symptom relief—it\'s long-term wellness. We empower you with knowledge and strategies to prevent future injuries and maintain optimal health.'
    }
  ];

  return (
    <section id="about" className="AboutUs">
      <div className="AboutUs__container">

        {/* Hero - Magazine Style */}
        <div className="AboutUs__hero">
          <div className="AboutUs__hero-label">Since 2020 • Irvine, California</div>
          <h1 className="AboutUs__hero-title">
            Where <span className="AboutUs__hero-accent">Recovery</span> Meets Excellence
          </h1>
          <p className="AboutUs__hero-subtitle">
            A modern physical therapy practice founded on the principle that every patient deserves personalized,
            evidence-based care delivered with compassion and expertise.
          </p>
        </div>

        {/* Story + Founder Split Layout */}
        <div className="AboutUs__story-section">
          {/* Story Content */}
          <div className="AboutUs__story-card">
            <div className="AboutUs__story-badge">Our Story</div>
            <h2 className="AboutUs__story-title">Built on a Foundation of Excellence</h2>
            <p className="AboutUs__story-text">
              Physica Inc was founded in 2020 with a clear vision: to provide the highest quality
              physical therapy services in Orange County. What began as a passion for helping people
              recover and regain their quality of life has grown into a thriving practice that serves
              hundreds of patients each year.
            </p>
            <p className="AboutUs__story-text">
              Our clinic combines cutting-edge rehabilitation techniques with a warm, personalized
              approach to patient care. Every treatment plan is tailored to the individual, because
              we understand that no two injuries—and no two patients—are exactly alike.
            </p>
            <p className="AboutUs__story-text">
              From post-surgical rehabilitation to sports injury recovery, chronic pain management
              to preventive care, we're committed to helping you achieve your wellness goals and
              return to the activities you love.
            </p>
          </div>

          {/* Founder Profile */}
          <div className="AboutUs__founder-card">
            <div className="AboutUs__founder-photo-wrapper">
              <img
                src="https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=500&h=600&dpr=2"
                alt="Ivan Duarte, DPT - Founder & CEO"
                className="AboutUs__founder-photo"
              />
              <div className="AboutUs__founder-badge">
                <span>Founder & CEO</span>
              </div>
            </div>
            <div className="AboutUs__founder-content">
              <h3 className="AboutUs__founder-name">Ivan Duarte, DPT</h3>
              <div className="AboutUs__founder-title">Doctor of Physical Therapy</div>
              <div className="AboutUs__founder-credentials">
                Board Certified Orthopedic Clinical Specialist
              </div>
              <p className="AboutUs__founder-bio">
                With years of experience as a licensed physical therapist, Ivan founded Physica Inc
                to create a practice centered on exceptional patient outcomes. His philosophy combines
                evidence-based treatment protocols with individualized care plans designed to help
                patients achieve lasting results.
              </p>
              <p className="AboutUs__founder-bio">
                Ivan specializes in orthopedic and sports rehabilitation, bringing advanced manual
                therapy techniques and movement science principles to every treatment session.
              </p>
              <div className="AboutUs__founder-contact">
                <a href="mailto:ivan@physicainc.com" className="AboutUs__founder-link">
                  <LuMail size={16} />
                  ivan@physicainc.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Clinic Gallery - Bento Grid */}
        <div className="AboutUs__gallery-section">
          <div className="AboutUs__gallery-header">
            <h2 className="AboutUs__gallery-title">Inside Our Clinic</h2>
            <p className="AboutUs__gallery-subtitle">
              A modern facility designed for optimal healing and recovery
            </p>
          </div>

          <div className="AboutUs__gallery">
            {clinicImages.map((image) => (
              <div
                key={image.id}
                className={`AboutUs__gallery-item AboutUs__gallery-item--${image.size}`}
              >
                <img
                  src={image.url}
                  alt={image.title}
                  className="AboutUs__gallery-image"
                />
                <div className="AboutUs__gallery-overlay">
                  <span className="AboutUs__gallery-caption">{image.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements Banner */}
        <div className="AboutUs__achievements">
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon;
            return (
              <div key={index} className="AboutUs__achievement">
                <IconComponent className="AboutUs__achievement-icon" size={32} />
                <div className="AboutUs__achievement-value">{achievement.value}</div>
                <div className="AboutUs__achievement-label">{achievement.label}</div>
              </div>
            );
          })}
        </div>

        {/* Mission Statement */}
        <div className="AboutUs__mission-section">
          <div className="AboutUs__mission-content">
            <div className="AboutUs__mission-label">Our Mission</div>
            <h2 className="AboutUs__mission-title">
              Empowering Lives Through Movement
            </h2>
            <p className="AboutUs__mission-text">
              At Physica Inc, our mission is to deliver exceptional physical therapy services that restore function,
              eliminate pain, and improve quality of life. We are committed to providing evidence-based, compassionate
              care in a supportive environment where every patient feels heard, valued, and empowered on their journey
              to optimal health.
            </p>
            <p className="AboutUs__mission-text">
              We believe that movement is medicine, and that everyone deserves access to expert rehabilitation services
              that help them return to the activities they love. Through personalized treatment plans, patient education,
              and a holistic approach to wellness, we guide our patients toward lasting recovery and injury prevention.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="AboutUs__values-section">
          <div className="AboutUs__values-header">
            <h2 className="AboutUs__values-title">Our Core Values</h2>
            <p className="AboutUs__values-subtitle">
              The principles that guide every aspect of our care
            </p>
          </div>
          <div className="AboutUs__values-grid">
            {coreValues.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={index} className="AboutUs__value-card">
                  <div className="AboutUs__value-icon">
                    <IconComponent size={28} />
                  </div>
                  <h3 className="AboutUs__value-title">{value.title}</h3>
                  <p className="AboutUs__value-description">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Policies Section */}
        <div className="AboutUs__policies-section">
          <div className="AboutUs__policies-header">
            <h2 className="AboutUs__policies-title">Clinic Policies</h2>
            <p className="AboutUs__policies-subtitle">
              Important information to ensure a smooth experience
            </p>
          </div>
          <div className="AboutUs__policies-grid">
            <div className="AboutUs__policy-card">
              <h3 className="AboutUs__policy-title">Hours of Operation</h3>
              <div className="AboutUs__policy-content">
                <p><strong>Every Day:</strong> 9:00 AM - 6:00 PM</p>
                <p className="AboutUs__policy-note">
                  We're open seven days a week to accommodate your busy schedule. Early morning and evening appointments available by request.
                </p>
              </div>
            </div>

            <div className="AboutUs__policy-card">
              <h3 className="AboutUs__policy-title">Cancellation Policy</h3>
              <div className="AboutUs__policy-content">
                <p>
                  We require at least 24 hours' notice for appointment cancellations or rescheduling.
                  This allows us to offer your time slot to other patients in need.
                </p>
                <p className="AboutUs__policy-note">
                  Late cancellations or no-shows may be subject to a cancellation fee. We understand
                  emergencies happen—please contact us as soon as possible.
                </p>
              </div>
            </div>

            <div className="AboutUs__policy-card">
              <h3 className="AboutUs__policy-title">Insurance & Payment</h3>
              <div className="AboutUs__policy-content">
                <p>
                  We accept most major insurance plans and will verify your coverage before your first visit.
                  Co-pays and deductibles are due at the time of service.
                </p>
                <p className="AboutUs__policy-note">
                  Self-pay options and flexible payment plans are available. Contact our billing department
                  for questions about coverage or costs.
                </p>
              </div>
            </div>

            <div className="AboutUs__policy-card">
              <h3 className="AboutUs__policy-title">Privacy & Confidentiality</h3>
              <div className="AboutUs__policy-content">
                <p>
                  Your health information is protected under HIPAA regulations. We maintain strict confidentiality
                  and will never share your personal health information without your written consent.
                </p>
                <p className="AboutUs__policy-note">
                  You have the right to access your medical records at any time. Please allow 48 hours for
                  record requests.
                </p>
              </div>
            </div>

            <div className="AboutUs__policy-card">
              <h3 className="AboutUs__policy-title">What to Bring</h3>
              <div className="AboutUs__policy-content">
                <p>For your first appointment, please bring:</p>
                <ul className="AboutUs__policy-list">
                  <li>Photo ID and insurance card</li>
                  <li>Physician referral or prescription (if applicable)</li>
                  <li>Completed intake forms (sent via email)</li>
                  <li>List of current medications</li>
                  <li>Comfortable, loose-fitting clothing</li>
                </ul>
              </div>
            </div>

            <div className="AboutUs__policy-card">
              <h3 className="AboutUs__policy-title">Safety Protocols</h3>
              <div className="AboutUs__policy-content">
                <p>
                  Your health and safety are our top priorities. We maintain rigorous cleaning protocols,
                  sanitize all equipment between patients, and follow CDC guidelines.
                </p>
                <p className="AboutUs__policy-note">
                  If you're feeling unwell or have been exposed to illness, please contact us to reschedule
                  your appointment at no charge.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Location CTA */}
        <div className="AboutUs__location-section">
          <div className="AboutUs__location-header">
            <h2 className="AboutUs__location-section-title">Visit Our Clinic</h2>
            <p className="AboutUs__location-section-subtitle">
              Conveniently located in the heart of Irvine
            </p>
          </div>

          <div className="AboutUs__location-wrapper">
            {/* Map Image */}
            <div className="AboutUs__location-map">
              <img
                src="https://images.pexels.com/photos/1098515/pexels-photo-1098515.jpeg?auto=compress&cs=tinysrgb&w=1600&h=1200&dpr=2"
                alt="Clinic Location Map - Irvine, California"
                className="AboutUs__map-image"
              />
              <div className="AboutUs__map-overlay">
                <div className="AboutUs__map-pin">
                  <LuMapPin size={32} />
                </div>
              </div>
            </div>

            {/* Location Info */}
            <div className="AboutUs__location-info">
              <div className="AboutUs__location-badge">
                <LuMapPin size={20} />
                <span>Our Location</span>
              </div>
              <h3 className="AboutUs__location-title">Physica Inc</h3>
              <p className="AboutUs__location-address">
                17911 Sky Park Circle, Ste L & M<br />
                Irvine, CA 92614
              </p>

              <div className="AboutUs__location-details">
                <div className="AboutUs__location-detail">
                  <LuPhone size={18} />
                  <a href="tel:+19491234567" className="AboutUs__location-link">
                    (949) 123-4567
                  </a>
                </div>
                <div className="AboutUs__location-detail">
                  <LuMail size={18} />
                  <a href="mailto:info@physicainc.com" className="AboutUs__location-link">
                    info@physicainc.com
                  </a>
                </div>
              </div>

              <div className="AboutUs__location-actions">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=17911+Sky+Park+Circle+Irvine+CA+92614"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="AboutUs__location-button AboutUs__location-button--primary"
                >
                  <LuMapPin size={18} />
                  Get Directions
                </a>
                <a href="tel:+19491234567" className="AboutUs__location-button AboutUs__location-button--secondary">
                  <LuPhone size={18} />
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default AboutUs;
