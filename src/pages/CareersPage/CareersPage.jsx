import { useState } from 'react';
import {
  LuHeart,
  LuUsers,
  LuGraduationCap,
  LuTrendingUp,
  LuCalendar,
  LuDollarSign,
  LuShield,
  LuCoffee,
  LuAward,
  LuMapPin,
  LuClock,
  LuBriefcase,
  LuMail,
  LuPhone,
  LuFileText,
  LuCircleCheck,
  LuArrowRight,
  LuTarget
} from 'react-icons/lu';
import './CareersPage.scss';

function CareersPage() {
  const [selectedPosition, setSelectedPosition] = useState(null);

  const openPositions = [
    {
      id: 1,
      title: 'Physical Therapist - Sports Medicine',
      department: 'Clinical',
      location: 'Irvine, CA',
      type: 'Full-time',
      experience: '2-5 years',
      salary: '$85,000 - $110,000',
      description: 'Join our elite sports medicine team and work with athletes at all levels. You\'ll develop personalized rehabilitation programs and help patients return to peak performance.',
      requirements: [
        'Doctor of Physical Therapy (DPT) degree',
        'Current CA Physical Therapy license',
        'Sports Certified Specialist (SCS) preferred',
        'Experience with athletic populations',
        'Strong manual therapy skills'
      ],
      responsibilities: [
        'Evaluate and treat sports-related injuries',
        'Design evidence-based treatment plans',
        'Collaborate with physicians and athletic trainers',
        'Provide patient education and home exercise programs',
        'Maintain detailed clinical documentation'
      ]
    },
    {
      id: 2,
      title: 'Physical Therapist - Neurological Rehabilitation',
      department: 'Clinical',
      location: 'Irvine, CA',
      type: 'Full-time',
      experience: '3+ years',
      salary: '$90,000 - $115,000',
      description: 'Make a profound impact on patients recovering from neurological conditions. Work with stroke survivors, Parkinson\'s patients, and individuals with spinal cord injuries.',
      requirements: [
        'Doctor of Physical Therapy (DPT) degree',
        'Current CA Physical Therapy license',
        'Neurologic Clinical Specialist (NCS) preferred',
        'Experience with neurological populations',
        'NDT or LSVT BIG certification preferred'
      ],
      responsibilities: [
        'Assess and treat patients with neurological disorders',
        'Implement specialized neurorehabilitation techniques',
        'Develop balance and gait training programs',
        'Provide caregiver education and training',
        'Track patient outcomes and progress'
      ]
    },
    {
      id: 3,
      title: 'Physical Therapist Assistant',
      department: 'Clinical',
      location: 'Irvine, CA',
      type: 'Full-time',
      experience: '1-3 years',
      salary: '$55,000 - $70,000',
      description: 'Support our exceptional team of physical therapists in delivering outstanding patient care. Perfect opportunity for a motivated PTA looking to grow their career.',
      requirements: [
        'Associate degree in Physical Therapy',
        'Current CA PTA license',
        'CPR/AED certification',
        'Strong interpersonal skills',
        'Ability to work independently'
      ],
      responsibilities: [
        'Implement treatment plans under PT supervision',
        'Educate patients on exercises and techniques',
        'Monitor patient progress and report to PT',
        'Maintain clean and safe treatment environment',
        'Document treatment sessions accurately'
      ]
    },
    {
      id: 4,
      title: 'Front Desk Coordinator',
      department: 'Administrative',
      location: 'Irvine, CA',
      type: 'Full-time',
      experience: '1-2 years',
      salary: '$40,000 - $50,000',
      description: 'Be the welcoming face of our clinic. Manage front desk operations, schedule appointments, and ensure exceptional patient experience from check-in to check-out.',
      requirements: [
        'High school diploma or equivalent',
        'Experience in healthcare setting preferred',
        'Proficiency with EMR systems',
        'Excellent communication skills',
        'Strong organizational abilities'
      ],
      responsibilities: [
        'Greet patients and manage check-in/check-out',
        'Schedule appointments and manage calendar',
        'Verify insurance coverage and benefits',
        'Answer phone calls and respond to inquiries',
        'Maintain organized patient records'
      ]
    },
    {
      id: 5,
      title: 'Clinic Manager',
      department: 'Management',
      location: 'Irvine, CA',
      type: 'Full-time',
      experience: '5+ years',
      salary: '$75,000 - $95,000',
      description: 'Lead our clinical operations and drive excellence in patient care. Oversee daily operations, manage staff, and ensure the clinic runs smoothly and efficiently.',
      requirements: [
        'Bachelor\'s degree in Healthcare Administration or related field',
        'Minimum 5 years healthcare management experience',
        'Strong leadership and team management skills',
        'Knowledge of billing and insurance processes',
        'Excellent problem-solving abilities'
      ],
      responsibilities: [
        'Oversee daily clinic operations',
        'Manage and mentor clinical and administrative staff',
        'Monitor financial performance and budgets',
        'Ensure compliance with regulations',
        'Implement quality improvement initiatives'
      ]
    },
    {
      id: 6,
      title: 'Orthopedic Physical Therapist',
      department: 'Clinical',
      location: 'Irvine, CA',
      type: 'Full-time',
      experience: '2-5 years',
      salary: '$85,000 - $110,000',
      description: 'Specialize in treating musculoskeletal conditions and post-surgical rehabilitation. Work with a diverse patient population and utilize cutting-edge treatment techniques.',
      requirements: [
        'Doctor of Physical Therapy (DPT) degree',
        'Current CA Physical Therapy license',
        'Orthopedic Clinical Specialist (OCS) preferred',
        'Manual therapy certification',
        'Experience with post-operative patients'
      ],
      responsibilities: [
        'Evaluate and treat orthopedic conditions',
        'Provide post-surgical rehabilitation',
        'Perform manual therapy techniques',
        'Develop comprehensive treatment plans',
        'Collaborate with orthopedic surgeons'
      ]
    }
  ];

  const benefits = [
    {
      icon: LuDollarSign,
      title: 'Competitive Compensation',
      description: 'Industry-leading salaries with performance bonuses and regular merit increases'
    },
    {
      icon: LuShield,
      title: 'Comprehensive Benefits',
      description: 'Medical, dental, vision insurance, 401(k) matching, and life insurance'
    },
    {
      icon: LuCalendar,
      title: 'Work-Life Balance',
      description: 'Generous PTO, paid holidays, flexible scheduling, and no mandatory weekends'
    },
    {
      icon: LuGraduationCap,
      title: 'Continuing Education',
      description: 'Annual CEU stipend, paid conference attendance, and mentorship programs'
    },
    {
      icon: LuTrendingUp,
      title: 'Career Growth',
      description: 'Clear advancement paths, leadership opportunities, and specialty certifications'
    },
    {
      icon: LuCoffee,
      title: 'Wellness Perks',
      description: 'Gym membership discounts, wellness programs, and employee assistance program'
    },
    {
      icon: LuAward,
      title: 'Recognition Programs',
      description: 'Employee of the month awards, peer recognition, and achievement bonuses'
    },
    {
      icon: LuUsers,
      title: 'Collaborative Culture',
      description: 'Supportive team environment, regular team building, and open communication'
    }
  ];

  const coreValues = [
    {
      icon: LuHeart,
      title: 'Patient-Centered Care',
      description: 'Every decision we make prioritizes our patients\' well-being and recovery goals'
    },
    {
      icon: LuTarget,
      title: 'Excellence',
      description: 'We strive for the highest standards in clinical care, education, and service'
    },
    {
      icon: LuUsers,
      title: 'Teamwork',
      description: 'Collaboration and mutual support create the best outcomes for our patients'
    },
    {
      icon: LuGraduationCap,
      title: 'Continuous Learning',
      description: 'We invest in growth, staying current with the latest evidence-based practices'
    }
  ];

  const employeeTestimonials = [
    {
      name: 'Dr. Sarah Chen, PT, DPT',
      role: 'Lead Physical Therapist',
      years: '4 years',
      quote: 'Joining Physica Inc was the best career decision I\'ve made. The supportive environment and commitment to professional development have allowed me to grow tremendously as a clinician.',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=2'
    },
    {
      name: 'Michael Rodriguez, PTA',
      role: 'Physical Therapist Assistant',
      years: '2 years',
      quote: 'The work-life balance here is incredible. Management truly cares about preventing burnout and supports flexible scheduling. I feel valued and respected every day.',
      image: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=2'
    },
    {
      name: 'Dr. Emily Foster, PT, OCS',
      role: 'Orthopedic Specialist',
      years: '6 years',
      quote: 'The continuing education opportunities are outstanding. The clinic supported me through my OCS certification and regularly sends us to advanced training courses.',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=2'
    }
  ];

  const handleApplyClick = (position) => {
    setSelectedPosition(position);
    const subject = `Application for ${position.title}`;
    const body = `Hello,\n\nI am interested in applying for the ${position.title} position at Physica Inc.\n\nBest regards,`;
    window.location.href = `mailto:careers@physicainc.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="CareersPage">
      {/* Hero Section */}
      <section className="CareersPage__hero">
        <div className="CareersPage__hero-overlay"></div>
        <div className="CareersPage__hero-content">
          <span className="CareersPage__hero-badge">
            <LuBriefcase />
            Join Our Team
          </span>
          <h1 className="CareersPage__hero-title">
            Build Your Career in<br />
            <span className="CareersPage__hero-accent">Physical Therapy Excellence</span>
          </h1>
          <p className="CareersPage__hero-subtitle">
            Join a team dedicated to transforming lives through exceptional patient care,<br />
            continuous learning, and professional growth
          </p>
          <div className="CareersPage__hero-stats">
            <div className="CareersPage__hero-stat">
              <span className="CareersPage__hero-stat-number">96%</span>
              <span className="CareersPage__hero-stat-label">Employee Satisfaction</span>
            </div>
            <div className="CareersPage__hero-stat">
              <span className="CareersPage__hero-stat-number">4.8</span>
              <span className="CareersPage__hero-stat-label">Glassdoor Rating</span>
            </div>
            <div className="CareersPage__hero-stat">
              <span className="CareersPage__hero-stat-number">50+</span>
              <span className="CareersPage__hero-stat-label">Healthcare Professionals</span>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="CareersPage__values">
        <div className="CareersPage__container">
          <div className="CareersPage__section-header">
            <span className="CareersPage__tagline">Our Values</span>
            <h2 className="CareersPage__section-title">What Drives Us Every Day</h2>
            <p className="CareersPage__section-subtitle">
              Our core values guide everything we do and shape our culture
            </p>
          </div>

          <div className="CareersPage__values-grid">
            {coreValues.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="CareersPage__value-card">
                  <div className="CareersPage__value-icon">
                    <Icon />
                  </div>
                  <h3 className="CareersPage__value-title">{value.title}</h3>
                  <p className="CareersPage__value-description">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="CareersPage__benefits">
        <div className="CareersPage__container">
          <div className="CareersPage__section-header">
            <span className="CareersPage__tagline">Benefits & Perks</span>
            <h2 className="CareersPage__section-title">Why Our Team Loves Working Here</h2>
            <p className="CareersPage__section-subtitle">
              Comprehensive benefits package designed to support your professional and personal well-being
            </p>
          </div>

          <div className="CareersPage__benefits-grid">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="CareersPage__benefit-card">
                  <div className="CareersPage__benefit-icon">
                    <Icon />
                  </div>
                  <h3 className="CareersPage__benefit-title">{benefit.title}</h3>
                  <p className="CareersPage__benefit-description">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Employee Testimonials */}
      <section className="CareersPage__testimonials">
        <div className="CareersPage__container">
          <div className="CareersPage__section-header">
            <span className="CareersPage__tagline">Our Team</span>
            <h2 className="CareersPage__section-title">Hear From Our Staff</h2>
            <p className="CareersPage__section-subtitle">
              Real experiences from real members of the Physica Inc family
            </p>
          </div>

          <div className="CareersPage__testimonials-grid">
            {employeeTestimonials.map((testimonial, index) => (
              <div key={index} className="CareersPage__testimonial-card">
                <div className="CareersPage__testimonial-quote-mark">"</div>
                <p className="CareersPage__testimonial-quote">{testimonial.quote}</p>
                <div className="CareersPage__testimonial-author">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="CareersPage__testimonial-avatar"
                  />
                  <div className="CareersPage__testimonial-info">
                    <h4 className="CareersPage__testimonial-name">{testimonial.name}</h4>
                    <p className="CareersPage__testimonial-role">{testimonial.role}</p>
                    <p className="CareersPage__testimonial-tenure">With us for {testimonial.years}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section className="CareersPage__positions">
        <div className="CareersPage__container">
          <div className="CareersPage__section-header">
            <span className="CareersPage__tagline">Open Positions</span>
            <h2 className="CareersPage__section-title">Current Opportunities</h2>
            <p className="CareersPage__section-subtitle">
              Explore our open positions and find your perfect role
            </p>
          </div>

          <div className="CareersPage__positions-list">
            {openPositions.map((position) => (
              <div key={position.id} className="CareersPage__position-card">
                <div className="CareersPage__position-header">
                  <div className="CareersPage__position-title-group">
                    <h3 className="CareersPage__position-title">{position.title}</h3>
                    <div className="CareersPage__position-meta">
                      <span className="CareersPage__position-badge">
                        <LuMapPin size={14} />
                        {position.location}
                      </span>
                      <span className="CareersPage__position-badge">
                        <LuClock size={14} />
                        {position.type}
                      </span>
                      <span className="CareersPage__position-badge">
                        <LuBriefcase size={14} />
                        {position.experience}
                      </span>
                      <span className="CareersPage__position-badge CareersPage__position-badge--salary">
                        <LuDollarSign size={14} />
                        {position.salary}
                      </span>
                    </div>
                  </div>
                  <button
                    className="CareersPage__position-apply-button"
                    onClick={() => handleApplyClick(position)}
                  >
                    Apply Now
                    <LuArrowRight size={16} />
                  </button>
                </div>

                <p className="CareersPage__position-description">{position.description}</p>

                <div className="CareersPage__position-details">
                  <div className="CareersPage__position-requirements">
                    <h4 className="CareersPage__position-subtitle">
                      <LuCircleCheck size={18} />
                      Requirements
                    </h4>
                    <ul className="CareersPage__position-list">
                      {position.requirements.map((req, index) => (
                        <li key={index}>{req}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="CareersPage__position-responsibilities">
                    <h4 className="CareersPage__position-subtitle">
                      <LuFileText size={18} />
                      Responsibilities
                    </h4>
                    <ul className="CareersPage__position-list">
                      {position.responsibilities.map((resp, index) => (
                        <li key={index}>{resp}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="CareersPage__process">
        <div className="CareersPage__container">
          <div className="CareersPage__section-header">
            <span className="CareersPage__tagline">Application Process</span>
            <h2 className="CareersPage__section-title">How to Join Our Team</h2>
            <p className="CareersPage__section-subtitle">
              A simple, transparent hiring process designed to find the perfect fit
            </p>
          </div>

          <div className="CareersPage__process-steps">
            <div className="CareersPage__process-step">
              <div className="CareersPage__process-number">1</div>
              <h3 className="CareersPage__process-step-title">Submit Application</h3>
              <p className="CareersPage__process-step-description">
                Click "Apply Now" on your desired position and send us your resume and cover letter
              </p>
            </div>

            <div className="CareersPage__process-step">
              <div className="CareersPage__process-number">2</div>
              <h3 className="CareersPage__process-step-title">Phone Screening</h3>
              <p className="CareersPage__process-step-description">
                Initial conversation with our HR team to discuss your background and career goals
              </p>
            </div>

            <div className="CareersPage__process-step">
              <div className="CareersPage__process-number">3</div>
              <h3 className="CareersPage__process-step-title">In-Person Interview</h3>
              <p className="CareersPage__process-step-description">
                Meet with our clinical director and team members, tour our facility
              </p>
            </div>

            <div className="CareersPage__process-step">
              <div className="CareersPage__process-number">4</div>
              <h3 className="CareersPage__process-step-title">Practical Assessment</h3>
              <p className="CareersPage__process-step-description">
                Demonstrate your clinical skills through a hands-on evaluation (for clinical roles)
              </p>
            </div>

            <div className="CareersPage__process-step">
              <div className="CareersPage__process-number">5</div>
              <h3 className="CareersPage__process-step-title">Offer & Onboarding</h3>
              <p className="CareersPage__process-step-description">
                Receive your offer and begin a comprehensive onboarding program
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="CareersPage__cta">
        <div className="CareersPage__container">
          <div className="CareersPage__cta-content">
            <h2 className="CareersPage__cta-title">
              Don't See the Right Position?
            </h2>
            <p className="CareersPage__cta-description">
              We're always looking for talented individuals to join our team. Send us your resume and let us know how you can contribute to our mission.
            </p>
            <div className="CareersPage__cta-actions">
              <a
                href="mailto:careers@physicainc.com?subject=General Application - Physica Inc"
                className="CareersPage__cta-button CareersPage__cta-button--primary"
              >
                <LuMail size={20} />
                Submit General Application
              </a>
              <a
                href="tel:+19491234567"
                className="CareersPage__cta-button CareersPage__cta-button--secondary"
              >
                <LuPhone size={20} />
                Call Us: (949) 123-4567
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CareersPage;
