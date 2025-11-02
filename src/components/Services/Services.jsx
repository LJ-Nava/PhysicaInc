import {
  LuActivity,
  LuHeart,
  LuBrain,
  LuDumbbell,
  LuShield,
  LuUsers,
  LuZap,
  LuClock,
  LuTarget
} from 'react-icons/lu';
import SportsRehabilitationImg from '../../assets/Sports-Rehabilitation.png';
import ManualTherapyImg from '../../assets/Manual-Therapy.png';
import OrthopedicPhysicalTherapyImg from '../../assets/Orthopedic-Physical-}Therapy.png';
import NeurologicalRehabilitationImg from '../../assets/Neurological-Rehabilitation.png';
import PostSurgicalRecoveryImg from '../../assets/Post-Surgical-Recovery.png';
import ChronicPainManagementImg from '../../assets/Chronic-Pain-Management.png';
import GeriatricPhysicalTherapyImg from '../../assets/Geriatric-Physical-Therapy.png';
import BalanceFallPreventionImg from '../../assets/Balance-&-Fall-Prevention.png';
import './Services.scss';

function Services() {
  const services = [
    {
      id: 'sports-rehabilitation',
      Icon: LuActivity,
      title: 'Sports Rehabilitation',
      description: 'Evidence-based treatment protocols for athletes and active individuals recovering from sports injuries. Our certified sports therapists use advanced techniques to get you back in the game.',
      features: ['ACL/MCL Reconstruction Recovery', 'Rotator Cuff Rehabilitation', 'Tennis/Golf Elbow Treatment', 'Running Injury Prevention', 'Performance Optimization'],
      image: SportsRehabilitationImg
    },
    {
      id: 'orthopedic-therapy',
      Icon: LuTarget,
      title: 'Orthopedic Physical Therapy',
      description: 'Specialized care for musculoskeletal conditions affecting bones, joints, muscles, ligaments, and tendons. We treat both acute injuries and chronic conditions with personalized care plans.',
      features: ['Post-Surgical Rehabilitation', 'Joint Replacement Recovery', 'Fracture Rehabilitation', 'Arthritis Management', 'Tendonitis Treatment'],
      image: OrthopedicPhysicalTherapyImg
    },
    {
      id: 'manual-therapy',
      Icon: LuUsers,
      title: 'Manual Therapy & Manipulation',
      description: 'Hands-on techniques performed by our certified manual therapists to restore mobility, reduce pain, and improve tissue quality. Includes joint mobilization and soft tissue work.',
      features: ['Joint Mobilization', 'Myofascial Release', 'Trigger Point Therapy', 'Soft Tissue Mobilization', 'Spinal Manipulation'],
      image: ManualTherapyImg
    },
    {
      id: 'neurological-rehabilitation',
      Icon: LuBrain,
      title: 'Neurological Rehabilitation',
      description: 'Comprehensive rehabilitation programs for patients with neurological conditions such as stroke, Parkinson\'s, MS, and spinal cord injuries. Focus on restoring function and independence.',
      features: ['Stroke Recovery', 'Balance & Gait Training', 'Parkinson\'s Disease Management', 'Multiple Sclerosis Support', 'Vestibular Rehabilitation'],
      image: NeurologicalRehabilitationImg
    },
    {
      id: 'chronic-pain-management',
      Icon: LuShield,
      title: 'Chronic Pain Management',
      description: 'Multidisciplinary approach to chronic pain conditions using therapeutic exercise, manual therapy, modalities, and patient education to reduce pain and improve quality of life.',
      features: ['Lower Back Pain Treatment', 'Neck Pain Management', 'Headache/Migraine Relief', 'Fibromyalgia Management', 'Chronic Regional Pain Syndrome'],
      image: ChronicPainManagementImg
    },
    {
      id: 'geriatric-therapy',
      Icon: LuHeart,
      title: 'Geriatric Physical Therapy',
      description: 'Age-specific rehabilitation focusing on the unique needs of older adults. Our programs address balance, strength, mobility, and fall prevention to maintain independence.',
      features: ['Fall Prevention Programs', 'Balance Training', 'Osteoporosis Management', 'Joint Replacement Recovery', 'Strength & Mobility Restoration'],
      image: GeriatricPhysicalTherapyImg
    },
    {
      id: 'post-surgical-rehab',
      Icon: LuClock,
      title: 'Post-Surgical Rehabilitation',
      description: 'Guided recovery following orthopedic, spinal, or other surgical procedures. We work closely with your surgeon to ensure optimal healing and functional restoration.',
      features: ['Total Joint Replacement', 'Spinal Surgery Recovery', 'Arthroscopic Surgery Rehab', 'Soft Tissue Repair', 'Post-Op Pain Management'],
      image: PostSurgicalRecoveryImg
    },
    {
      id: 'vestibular-balance',
      Icon: LuZap,
      title: 'Vestibular & Balance Disorders',
      description: 'Specialized treatment for dizziness, vertigo, and balance disorders. Our vestibular rehabilitation programs help restore equilibrium and reduce fall risk.',
      features: ['BPPV Treatment', 'Vertigo Management', 'Dizziness Rehabilitation', 'Gait Training', 'Concussion Recovery'],
      image: BalanceFallPreventionImg
    },
    {
      id: 'pelvic-floor-therapy',
      Icon: LuUsers,
      title: 'Pelvic Floor Rehabilitation',
      description: 'Confidential, specialized care for pelvic floor dysfunction in both men and women. Our certified pelvic health therapists provide evidence-based treatment in a comfortable setting.',
      features: ['Incontinence Treatment', 'Pelvic Pain Management', 'Pre/Postpartum Care', 'Post-Prostatectomy Rehab', 'Pelvic Organ Prolapse'],
      image: 'https://images.pexels.com/photos/7176026/pexels-photo-7176026.jpeg?auto=compress&cs=tinysrgb&w=1200&h=900&dpr=2'
    }
  ];

  return (
    <section id="services" className="Services">
      <div className="Services__container">
        {/* Hero Header - Modern Split Design */}
        <div className="Services__hero">
          <div className="Services__hero-content">
            <span className="Services__hero-badge">Comprehensive Physical Therapy</span>
            <h1 className="Services__hero-title">
              Transform Your <span className="Services__hero-title-highlight">Recovery Journey</span>
            </h1>
            <p className="Services__hero-description">
              Board-certified therapists · Evidence-based protocols · Personalized care plans
            </p>
          </div>
        </div>

        {/* Bento Grid Layout - Asymmetric Modern Design */}
        <div className="Services__bento">
          {/* Feature Card - Large */}
          {(() => {
            const FeatureIcon = services[0].Icon;
            return (
              <div className="Services__feature-card Services__feature-card--large">
                <div className="Services__feature-image">
                  <img src={services[0].image} alt={services[0].title} />
                  <div className="Services__feature-overlay"></div>
                </div>
                <div className="Services__feature-content">
                  <div className="Services__feature-icon">
                    <FeatureIcon />
                  </div>
                  <h3 className="Services__feature-title">{services[0].title}</h3>
                  <p className="Services__feature-description">{services[0].description}</p>
                  <div className="Services__feature-tags">
                    {services[0].features.slice(0, 3).map((feature, idx) => (
                      <span key={idx} className="Services__feature-tag">{feature}</span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })()}

          {/* Grid Items - Split Layout */}
          <div className="Services__split-section">
            {services.slice(1, 3).map((service, index) => {
              const IconComponent = service.Icon;
              return (
                <div key={service.id} className="Services__split-card">
                  <div className="Services__split-visual">
                    <IconComponent className="Services__split-icon" />
                    <div className="Services__split-number">0{index + 2}</div>
                  </div>
                  <div className="Services__split-info">
                    <h4 className="Services__split-title">{service.title}</h4>
                    <p className="Services__split-text">{service.description.slice(0, 120)}...</p>
                    <ul className="Services__split-list">
                      {service.features.slice(0, 2).map((feature, idx) => (
                        <li key={idx}>→ {feature}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Image Gallery Cards */}
          <div className="Services__gallery">
            {services.slice(3, 6).map((service, index) => {
              const IconComponent = service.Icon;
              return (
                <div key={service.id} className="Services__gallery-card">
                  <div className="Services__gallery-image-wrapper">
                    <img src={service.image} alt={service.title} className="Services__gallery-image" />
                    <div className="Services__gallery-gradient"></div>
                  </div>
                  <div className="Services__gallery-overlay">
                    <IconComponent className="Services__gallery-icon" />
                    <h4 className="Services__gallery-title">{service.title}</h4>
                    <div className="Services__gallery-features">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <span key={idx} className="Services__gallery-badge">✓ {feature}</span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Accent Cards - Modern Minimal */}
          <div className="Services__accent-section">
            {services.slice(6, 9).map((service, index) => {
              const IconComponent = service.Icon;
              return (
                <div key={service.id} className={`Services__accent-card Services__accent-card--${index + 1}`}>
                  <div className="Services__accent-header">
                    <div className="Services__accent-icon-box">
                      <IconComponent />
                    </div>
                    <span className="Services__accent-number">0{index + 7}</span>
                  </div>
                  <h4 className="Services__accent-title">{service.title}</h4>
                  <p className="Services__accent-description">{service.description.slice(0, 100)}...</p>
                  <div className="Services__accent-highlights">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <div key={idx} className="Services__accent-item">
                        <span className="Services__accent-bullet"></span>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA - Modern Design */}
        <div className="Services__bottom-cta">
          <div className="Services__bottom-cta-content">
            <h3 className="Services__bottom-cta-title">Ready to Start Your Recovery?</h3>
            <p className="Services__bottom-cta-text">Schedule a consultation with our expert therapists</p>
          </div>
          <a href="tel:+1234567890" className="Services__bottom-cta-button">
            Book Appointment
            <span className="Services__bottom-cta-arrow">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Services;
