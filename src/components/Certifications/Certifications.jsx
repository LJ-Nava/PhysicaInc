import { LuAward, LuShieldCheck, LuStar, LuCircleCheck } from 'react-icons/lu';
import './Certifications.scss';

function Certifications() {
  const certifications = [
    {
      id: 1,
      icon: <LuShieldCheck />,
      title: 'Joint Commission Accredited',
      description: 'Gold Seal of Approval',
      year: '2024',
      color: '#0066CC'
    },
    {
      id: 2,
      icon: <LuAward />,
      title: 'NCQA Recognized',
      description: 'Patient-Centered Medical Home',
      year: '2024',
      color: '#5F6F52'
    },
    {
      id: 3,
      icon: <LuStar />,
      title: 'CMS 5-Star Rating',
      description: 'Medicare Quality Standards',
      year: '2024',
      color: '#F59E0B'
    },
    {
      id: 4,
      icon: <LuCircleCheck />,
      title: 'CLIA Certified',
      description: 'Laboratory Excellence',
      year: '2024',
      color: '#10B981'
    },
    {
      id: 5,
      icon: <LuAward />,
      title: 'Magnet Recognition',
      description: 'Nursing Excellence',
      year: '2023',
      color: '#8B5CF6'
    },
    {
      id: 6,
      icon: <LuShieldCheck />,
      title: 'HIPAA Compliant',
      description: 'Patient Privacy Protection',
      year: '2024',
      color: '#EC4899'
    }
  ];

  const awards = [
    {
      title: 'Best Medical Clinic',
      issuer: 'Healthcare Excellence Awards',
      year: '2024'
    },
    {
      title: 'Top Patient Safety',
      issuer: 'Leapfrog Hospital Safety Grade',
      year: '2024'
    },
    {
      title: 'Outstanding Quality Care',
      issuer: 'National Committee for Quality Assurance',
      year: '2023'
    },
    {
      title: 'Best Workplace for Nurses',
      issuer: 'American Nurses Association',
      year: '2023'
    }
  ];

  const commitments = [
    {
      icon: <LuShieldCheck />,
      title: 'Patient Safety First',
      description: 'We maintain the highest safety standards with rigorous protocols, continuous staff training, and state-of-the-art equipment to ensure your wellbeing.'
    },
    {
      icon: <LuCircleCheck />,
      title: 'Quality Assurance',
      description: 'Our quality management team continuously monitors and improves clinical outcomes, patient satisfaction, and operational excellence.'
    },
    {
      icon: <LuAward />,
      title: 'Continuous Improvement',
      description: 'We invest in ongoing education, cutting-edge technology, and evidence-based practices to deliver the best possible care.'
    },
    {
      icon: <LuStar />,
      title: 'Patient-Centered Care',
      description: 'Your needs, preferences, and values guide all our clinical decisions. We treat you as a partner in your healthcare journey.'
    }
  ];

  return (
    <section className="Certifications">
      <div className="Certifications__container">
        {/* Section Header */}
        <div className="Certifications__header">
          <span className="Certifications__tagline">Quality & Excellence</span>
          <h2 className="Certifications__title">
            Certified for <span className="Certifications__title-accent">Excellence</span>
          </h2>
          <p className="Certifications__subtitle">
            Our commitment to excellence is validated by nationally recognized accreditations,
            certifications, and awards that demonstrate our dedication to providing world-class healthcare.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="Certifications__grid">
          {certifications.map((cert) => (
            <div key={cert.id} className="Certifications__card">
              <div
                className="Certifications__icon-wrapper"
                style={{ background: `linear-gradient(135deg, ${cert.color}dd 0%, ${cert.color} 100%)` }}
              >
                {cert.icon}
              </div>
              <h3 className="Certifications__card-title">{cert.title}</h3>
              <p className="Certifications__card-description">{cert.description}</p>
              <div className="Certifications__card-year">{cert.year}</div>
            </div>
          ))}
        </div>

        {/* Awards Section */}
        <div className="Certifications__awards">
          <h3 className="Certifications__awards-title">
            Recent Awards & Recognition
          </h3>
          <div className="Certifications__awards-grid">
            {awards.map((award, index) => (
              <div key={index} className="Certifications__award">
                <div className="Certifications__award-icon">
                  <LuAward />
                </div>
                <div className="Certifications__award-content">
                  <h4 className="Certifications__award-title">{award.title}</h4>
                  <p className="Certifications__award-issuer">{award.issuer}</p>
                  <span className="Certifications__award-year">{award.year}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Commitments */}
        <div className="Certifications__commitments">
          <h3 className="Certifications__commitments-title">
            Our Quality Commitments
          </h3>
          <div className="Certifications__commitments-grid">
            {commitments.map((commitment, index) => (
              <div key={index} className="Certifications__commitment">
                <div className="Certifications__commitment-icon">
                  {commitment.icon}
                </div>
                <h4 className="Certifications__commitment-title">
                  {commitment.title}
                </h4>
                <p className="Certifications__commitment-description">
                  {commitment.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Bar */}
        <div className="Certifications__stats">
          <div className="Certifications__stat">
            <div className="Certifications__stat-value">100%</div>
            <div className="Certifications__stat-label">Compliance Rate</div>
          </div>
          <div className="Certifications__stat">
            <div className="Certifications__stat-value">20+</div>
            <div className="Certifications__stat-label">Certifications</div>
          </div>
          <div className="Certifications__stat">
            <div className="Certifications__stat-value">15+</div>
            <div className="Certifications__stat-label">National Awards</div>
          </div>
          <div className="Certifications__stat">
            <div className="Certifications__stat-value">98%</div>
            <div className="Certifications__stat-label">Quality Score</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Certifications;
