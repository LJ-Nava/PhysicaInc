import {
  LuBriefcase,
  LuHeart,
  LuTrendingUp,
  LuUsers,
  LuGraduationCap,
  LuCalendar,
  LuDollarSign,
  LuMapPin
} from 'react-icons/lu';
import './Testimonials.scss';

function Testimonials() {
  const openPositions = [
    {
      id: 1,
      title: 'Physical Therapist',
      type: 'Full-Time',
      location: 'Irvine, CA',
      department: 'Clinical Services',
      description: 'Join our team as a licensed physical therapist. Work with diverse patient populations and utilize cutting-edge rehabilitation techniques.',
      requirements: ['DPT or MPT degree', 'CA State License', '2+ years experience'],
      icon: LuBriefcase
    },
    {
      id: 2,
      title: 'Occupational Therapist',
      type: 'Full-Time',
      location: 'Irvine, CA',
      department: 'Rehabilitation',
      description: 'Seeking passionate OT to help patients regain independence through evidence-based interventions and personalized care plans.',
      requirements: ['Master\'s in OT', 'CA License', 'Hand therapy cert preferred'],
      icon: LuHeart
    },
    {
      id: 3,
      title: 'Sports Medicine Specialist',
      type: 'Full-Time',
      location: 'Irvine, CA',
      department: 'Sports Medicine',
      description: 'Work with athletes at all levels. Injury prevention, performance optimization, and return-to-sport protocols.',
      requirements: ['MS in Sports Medicine', 'CSCS certification', 'Athletic experience'],
      icon: LuTrendingUp
    },
    {
      id: 4,
      title: 'Massage Therapist',
      type: 'Part-Time / Full-Time',
      location: 'Irvine, CA',
      department: 'Therapeutic Services',
      description: 'Licensed massage therapist specializing in medical massage, myofascial release, and therapeutic techniques.',
      requirements: ['CA Massage License', 'NCTMB certified', 'Medical massage experience'],
      icon: LuUsers
    },
    {
      id: 5,
      title: 'Exercise Physiologist',
      type: 'Full-Time',
      location: 'Irvine, CA',
      department: 'Clinical Exercise',
      description: 'Design and implement evidence-based exercise programs for patients with chronic conditions and post-rehab needs.',
      requirements: ['MS in Exercise Science', 'CEP certification', 'Clinical experience'],
      icon: LuGraduationCap
    },
    {
      id: 6,
      title: 'Patient Care Coordinator',
      type: 'Full-Time',
      location: 'Irvine, CA',
      department: 'Administration',
      description: 'Manage patient scheduling, insurance verification, and ensure exceptional patient experience from intake to discharge.',
      requirements: ['Healthcare admin experience', 'EMR proficiency', 'Bilingual preferred'],
      icon: LuCalendar
    }
  ];

  const benefits = [
    { icon: LuDollarSign, title: 'Competitive Salary', description: 'Industry-leading compensation packages' },
    { icon: LuHeart, title: 'Health Benefits', description: 'Comprehensive medical, dental, vision' },
    { icon: LuGraduationCap, title: 'Continuing Education', description: 'CEU reimbursement & training' },
    { icon: LuCalendar, title: 'Work-Life Balance', description: 'Flexible schedules & PTO' }
  ];

  return (
    <section className="Testimonials">
      <div className="Testimonials__container">
        {/* Section Header */}
        <div className="Testimonials__header">
          <h2 className="Testimonials__title">
            Join <span className="Testimonials__title-accent">Our Team</span>
          </h2>
          <p className="Testimonials__subtitle">
            Build your career with a leading physical therapy practice dedicated to excellence in patient care and professional development.
          </p>
        </div>

        {/* Benefits Bar */}
        <div className="Testimonials__stats">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div key={index} className="Testimonials__stat">
                <IconComponent className="Testimonials__benefit-icon" size={32} />
                <div className="Testimonials__stat-value">{benefit.title}</div>
                <div className="Testimonials__stat-label">{benefit.description}</div>
              </div>
            );
          })}
        </div>

        {/* Open Positions Grid */}
        <div className="Testimonials__grid">
          {openPositions.map((position) => {
            const IconComponent = position.icon;
            return (
              <div key={position.id} className="Testimonials__card">
                {/* Position Icon */}
                <div className="Testimonials__quote-icon">
                  <IconComponent />
                </div>

                {/* Position Header */}
                <div className="Testimonials__position-header">
                  <h3 className="Testimonials__position-title">{position.title}</h3>
                  <div className="Testimonials__position-badges">
                    <span className="Testimonials__badge">{position.type}</span>
                    <span className="Testimonials__badge Testimonials__badge--location">
                      <LuMapPin size={12} /> {position.location}
                    </span>
                  </div>
                </div>

                {/* Department */}
                <div className="Testimonials__department">{position.department}</div>

                {/* Description */}
                <p className="Testimonials__text">{position.description}</p>

                {/* Requirements */}
                <div className="Testimonials__requirements">
                  <div className="Testimonials__requirements-title">Requirements:</div>
                  <ul className="Testimonials__requirements-list">
                    {position.requirements.map((req, idx) => (
                      <li key={idx}>{req}</li>
                    ))}
                  </ul>
                </div>

                {/* Apply Button */}
                <a href="mailto:careers@physicainc.com" className="Testimonials__apply-button">
                  Apply Now
                </a>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="Testimonials__cta">
          <p className="Testimonials__cta-text">
            Don't see the perfect position? Send us your resume and we'll keep you in mind for future opportunities.
          </p>
          <a href="mailto:careers@physicainc.com" className="Testimonials__cta-button">
            Submit Your Resume
          </a>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
