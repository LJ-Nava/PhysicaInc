import { Link } from 'react-router-dom';
import {
  LuCalendarCheck,
  LuClipboardList,
  LuUserCheck,
  LuHeartPulse,
  LuPhone,
  LuMail,
  LuMapPin,
  LuClock,
  LuFileText,
  LuShield,
  LuCircleCheck,
  LuArrowRight,
  LuCircleAlert,
  LuCircleHelp
} from 'react-icons/lu';
import './ForPatientsPage.scss';

function ForPatientsPage() {
  const steps = [
    {
      icon: LuCalendarCheck,
      title: 'Schedule Your Appointment',
      description: 'Call us or book online. We offer same-day and next-day appointments for urgent cases.',
      action: 'Book Now',
      link: 'tel:+19491234567'
    },
    {
      icon: LuClipboardList,
      title: 'Complete Intake Forms',
      description: 'Fill out our online forms before your visit to save time. We\'ll send them via email.',
      action: 'Get Forms',
      link: 'mailto:patients@physicainc.com?subject=Request%20Intake%20Forms'
    },
    {
      icon: LuUserCheck,
      title: 'Insurance Verification',
      description: 'We verify your coverage and benefits before your first visit. No surprises.',
      action: 'Check Coverage',
      link: '/insurance'
    },
    {
      icon: LuHeartPulse,
      title: 'Begin Your Recovery',
      description: 'Meet your therapist, get evaluated, and start your personalized treatment plan.',
      action: 'Learn More',
      link: '/services'
    }
  ];

  const whatToBring = [
    'Photo ID and insurance card',
    'Physician referral or prescription (if applicable)',
    'List of current medications',
    'Any relevant medical records or imaging',
    'Comfortable, loose-fitting clothing',
    'Payment for co-pay or deductible'
  ];

  const faqs = [
    {
      question: 'Do I need a referral to see a physical therapist?',
      answer: 'California allows direct access to physical therapy, meaning you can see a PT without a physician referral in most cases. However, some insurance plans may require a referral for coverage. We recommend checking with your insurance provider.'
    },
    {
      question: 'How long are treatment sessions?',
      answer: 'Initial evaluations typically last 60 minutes. Follow-up treatment sessions are usually 45-60 minutes, depending on your personalized treatment plan and insurance coverage.'
    },
    {
      question: 'How many sessions will I need?',
      answer: 'The number of sessions varies based on your condition, goals, and progress. Most patients see significant improvement within 6-12 sessions. We\'ll provide an estimated treatment plan after your initial evaluation.'
    },
    {
      question: 'What should I wear to my appointment?',
      answer: 'Wear comfortable, loose-fitting clothing that allows easy access to the area being treated. Athletic wear or gym clothes work well. For lower body treatment, shorts are recommended.'
    },
    {
      question: 'Do you accept my insurance?',
      answer: 'We accept most major insurance plans including Medicare. Contact our office with your insurance information, and we\'ll verify your coverage and benefits before your first visit.'
    },
    {
      question: 'What is your cancellation policy?',
      answer: 'We require 24 hours notice for cancellations or rescheduling. Late cancellations may be subject to a fee. We understand emergencies happen—please call us as soon as possible.'
    }
  ];

  const insuranceProviders = [
    'Medicare & Medicaid',
    'Blue Cross Blue Shield',
    'Aetna',
    'United Healthcare',
    'Cigna',
    'Kaiser Permanente',
    'Anthem',
    'Humana',
    'And many more...'
  ];

  return (
    <div className="ForPatientsPage">
      {/* Hero Section */}
      <section className="ForPatientsPage__hero">
        <div className="ForPatientsPage__hero-overlay"></div>
        <div className="ForPatientsPage__hero-container">
          <div className="ForPatientsPage__hero-badge">For Patients</div>
          <h1 className="ForPatientsPage__hero-title">
            Your Journey to <span className="ForPatientsPage__hero-accent">Recovery</span> Starts Here
          </h1>
          <p className="ForPatientsPage__hero-subtitle">
            Everything you need to know before your first visit. We're here to make your
            physical therapy experience seamless, comfortable, and effective.
          </p>
          <div className="ForPatientsPage__hero-actions">
            <a href="tel:+19491234567" className="ForPatientsPage__hero-button ForPatientsPage__hero-button--primary">
              <LuPhone size={20} />
              Call (949) 123-4567
            </a>
            <a href="mailto:patients@physicainc.com" className="ForPatientsPage__hero-button ForPatientsPage__hero-button--secondary">
              <LuMail size={20} />
              Email Us
            </a>
          </div>
        </div>
      </section>

      <div className="ForPatientsPage__container">
        {/* Getting Started Steps */}
        <section className="ForPatientsPage__steps-section">
          <div className="ForPatientsPage__section-header">
            <h2 className="ForPatientsPage__section-title">Getting Started is Easy</h2>
            <p className="ForPatientsPage__section-subtitle">
              Follow these simple steps to begin your physical therapy journey
            </p>
          </div>

          <div className="ForPatientsPage__steps-grid">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              const isExternalLink = step.link.startsWith('tel:') || step.link.startsWith('mailto:');

              return (
                <div key={index} className="ForPatientsPage__step-card">
                  <div className="ForPatientsPage__step-number">{index + 1}</div>
                  <div className="ForPatientsPage__step-icon">
                    <IconComponent size={32} />
                  </div>
                  <h3 className="ForPatientsPage__step-title">{step.title}</h3>
                  <p className="ForPatientsPage__step-description">{step.description}</p>
                  {isExternalLink ? (
                    <a href={step.link} className="ForPatientsPage__step-action">
                      {step.action}
                      <LuArrowRight size={16} />
                    </a>
                  ) : (
                    <Link to={step.link} className="ForPatientsPage__step-action">
                      {step.action}
                      <LuArrowRight size={16} />
                    </Link>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* What to Bring */}
        <section className="ForPatientsPage__bring-section">
          <div className="ForPatientsPage__bring-grid">
            <div className="ForPatientsPage__bring-content">
              <div className="ForPatientsPage__bring-badge">First Visit Checklist</div>
              <h2 className="ForPatientsPage__bring-title">What to Bring to Your Appointment</h2>
              <p className="ForPatientsPage__bring-text">
                To make your first visit smooth and efficient, please bring the following items.
                This helps us provide you with the best possible care from day one.
              </p>
              <ul className="ForPatientsPage__bring-list">
                {whatToBring.map((item, index) => (
                  <li key={index} className="ForPatientsPage__bring-item">
                    <LuCircleCheck className="ForPatientsPage__bring-check" size={20} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="ForPatientsPage__bring-image">
              <img
                src="https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&dpr=2"
                alt="Patient preparing for physical therapy appointment"
                className="ForPatientsPage__bring-img"
              />
            </div>
          </div>
        </section>

        {/* Insurance & Payment */}
        <section className="ForPatientsPage__insurance-section">
          <div className="ForPatientsPage__section-header">
            <LuShield className="ForPatientsPage__section-icon" size={40} />
            <h2 className="ForPatientsPage__section-title">Insurance & Payment</h2>
            <p className="ForPatientsPage__section-subtitle">
              We accept most major insurance plans and offer flexible payment options
            </p>
          </div>

          <div className="ForPatientsPage__insurance-content">
            <div className="ForPatientsPage__insurance-card">
              <h3 className="ForPatientsPage__insurance-card-title">Accepted Insurance</h3>
              <div className="ForPatientsPage__insurance-grid">
                {insuranceProviders.map((provider, index) => (
                  <div key={index} className="ForPatientsPage__insurance-item">
                    <LuCircleCheck size={16} />
                    <span>{provider}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="ForPatientsPage__payment-info">
              <div className="ForPatientsPage__payment-card">
                <LuFileText size={28} />
                <h4>Verification Process</h4>
                <p>We verify your insurance benefits before your first visit and provide a clear estimate of your costs.</p>
              </div>
              <div className="ForPatientsPage__payment-card">
                <LuCircleAlert size={28} />
                <h4>Self-Pay Options</h4>
                <p>Don't have insurance? We offer competitive self-pay rates and flexible payment plans.</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="ForPatientsPage__faq-section">
          <div className="ForPatientsPage__section-header">
            <LuCircleHelp className="ForPatientsPage__section-icon" size={40} />
            <h2 className="ForPatientsPage__section-title">Frequently Asked Questions</h2>
            <p className="ForPatientsPage__section-subtitle">
              Common questions from our patients
            </p>
          </div>

          <div className="ForPatientsPage__faq-grid">
            {faqs.map((faq, index) => (
              <div key={index} className="ForPatientsPage__faq-card">
                <h3 className="ForPatientsPage__faq-question">{faq.question}</h3>
                <p className="ForPatientsPage__faq-answer">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact CTA */}
        <section className="ForPatientsPage__contact-cta">
          <div className="ForPatientsPage__contact-content">
            <h2 className="ForPatientsPage__contact-title">Ready to Get Started?</h2>
            <p className="ForPatientsPage__contact-text">
              Our team is here to answer your questions and help you schedule your first appointment.
            </p>
          </div>

          <div className="ForPatientsPage__contact-cards">
            <a href="tel:+19491234567" className="ForPatientsPage__contact-card">
              <LuPhone size={28} />
              <div className="ForPatientsPage__contact-card-info">
                <h4>Call Us</h4>
                <p>(949) 123-4567</p>
              </div>
            </a>
            <a href="mailto:patients@physicainc.com" className="ForPatientsPage__contact-card">
              <LuMail size={28} />
              <div className="ForPatientsPage__contact-card-info">
                <h4>Email Us</h4>
                <p>patients@physicainc.com</p>
              </div>
            </a>
            <div className="ForPatientsPage__contact-card">
              <LuMapPin size={28} />
              <div className="ForPatientsPage__contact-card-info">
                <h4>Visit Us</h4>
                <p>17911 Sky Park Circle, Ste L & M<br />Irvine, CA 92614</p>
              </div>
            </div>
            <div className="ForPatientsPage__contact-card">
              <LuClock size={28} />
              <div className="ForPatientsPage__contact-card-info">
                <h4>Hours</h4>
                <p>Every Day: 9:00 AM - 6:00 PM</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default ForPatientsPage;
