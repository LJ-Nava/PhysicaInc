import { useState } from 'react';
import {
  LuCircleHelp,
  LuChevronDown,
  LuPhone,
  LuMail,
  LuMapPin,
  LuClock,
  LuCalendarCheck,
  LuShield,
  LuUsers,
  LuFileText,
  LuHeadphones
} from 'react-icons/lu';
import './GeneralQuestionsPage.scss';

function GeneralQuestionsPage() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqCategories = [
    {
      category: 'Appointments & Scheduling',
      icon: LuCalendarCheck,
      questions: [
        {
          question: 'How do I schedule my first appointment?',
          answer: 'You can schedule your appointment by calling us at (949) 123-4567, or by using our online booking system. We typically have same-day and next-day appointments available. Our friendly staff will help you find the best time that works with your schedule.'
        },
        {
          question: 'Do I need a referral from my doctor?',
          answer: 'California allows direct access to physical therapy, which means you can schedule an appointment without a physician referral. However, some insurance plans may require a referral for coverage. We recommend checking with your insurance provider beforehand.'
        },
        {
          question: 'What should I bring to my first appointment?',
          answer: 'Please bring a valid photo ID, your insurance card(s), a list of current medications, any relevant medical records or imaging results (X-rays, MRI), and comfortable clothing that allows easy access to the area being treated. Arrive 15 minutes early to complete paperwork.'
        },
        {
          question: 'How long is a typical therapy session?',
          answer: 'Initial evaluations typically last 60 minutes, while follow-up treatment sessions are usually 45-60 minutes. Your therapist will provide one-on-one care throughout your entire session, ensuring you receive personalized attention and effective treatment.'
        },
        {
          question: 'What is your cancellation policy?',
          answer: 'We require 24-hour notice for cancellations or rescheduling. Late cancellations or no-shows may be subject to a fee. We understand emergencies happen - please call us as soon as possible if you need to change your appointment.'
        }
      ]
    },
    {
      category: 'Insurance & Billing',
      icon: LuShield,
      questions: [
        {
          question: 'Do you accept my insurance?',
          answer: 'We accept most major insurance plans including Medicare, Medicaid, Blue Cross Blue Shield, Aetna, United Healthcare, Cigna, and many others. Please visit our Insurance page for a complete list, or call us to verify your specific plan coverage.'
        },
        {
          question: 'How much will my treatment cost?',
          answer: 'Costs vary depending on your insurance coverage, deductible, and copay. We provide a free insurance verification before your first visit to give you an accurate estimate. For self-pay patients, we offer competitive rates and flexible payment plans.'
        },
        {
          question: 'Do you offer payment plans for self-pay patients?',
          answer: 'Yes! We understand that healthcare costs can be challenging. We offer flexible payment plans and accept major credit cards, HSA, and FSA cards. Our billing team will work with you to create a payment arrangement that fits your budget.'
        },
        {
          question: 'Will I be charged if insurance denies my claim?',
          answer: 'We verify insurance benefits before treatment and work hard to obtain pre-authorization when required. If a claim is denied, we will work with you and your insurance company to resolve the issue. We will always communicate any potential costs before they occur.'
        }
      ]
    },
    {
      category: 'Treatment & Services',
      icon: LuUsers,
      questions: [
        {
          question: 'How many sessions will I need?',
          answer: 'The number of sessions varies based on your condition, injury severity, and treatment goals. During your evaluation, your therapist will create a personalized treatment plan and provide an estimated timeline. Most patients see significant improvement within 6-12 visits.'
        },
        {
          question: 'What conditions do you treat?',
          answer: 'We treat a wide range of conditions including sports injuries, post-surgical rehabilitation, chronic pain, arthritis, back and neck pain, balance disorders, neurological conditions, and more. Our therapists specialize in orthopedic, sports, neurological, and geriatric rehabilitation.'
        },
        {
          question: 'Can I choose my physical therapist?',
          answer: 'Absolutely! We want you to feel comfortable with your therapist. When scheduling, you can request a specific therapist based on their specialization or your personal preference. All our therapists are highly qualified and experienced.'
        },
        {
          question: 'Do you offer home exercise programs?',
          answer: 'Yes! Home exercise programs are a crucial component of your recovery. Your therapist will provide customized exercises with detailed instructions and demonstrations. Many patients receive exercise handouts or access to our online exercise library.'
        },
        {
          question: 'What makes your clinic different from others?',
          answer: 'We provide one-on-one care throughout your entire session, not group classes. Our therapists have advanced certifications and use evidence-based techniques. We invest in continuing education and state-of-the-art equipment. Most importantly, we treat you as a partner in your recovery journey.'
        }
      ]
    },
    {
      category: 'Clinic Policies',
      icon: LuFileText,
      questions: [
        {
          question: 'What are your clinic hours?',
          answer: 'We are open Monday through Friday from 7:00 AM to 7:00 PM, and Saturdays from 8:00 AM to 2:00 PM. We are closed on Sundays and major holidays. Early morning and evening appointments are available to accommodate work schedules.'
        },
        {
          question: 'Is your facility wheelchair accessible?',
          answer: 'Yes, our clinic is fully wheelchair accessible with designated parking spaces, ramps, wide doorways, and accessible treatment areas. We are committed to providing accessible care for all patients.'
        },
        {
          question: 'Do you offer telehealth appointments?',
          answer: 'Yes, we offer telehealth appointments for consultations, exercise instruction, progress checks, and follow-up visits. While hands-on treatment requires in-person visits, telehealth can be an excellent supplement to your care, especially for ongoing guidance and support.'
        },
        {
          question: 'Can family members attend my appointment?',
          answer: 'Yes! We encourage family members or caregivers to attend appointments, especially for the initial evaluation. They can learn about your condition, exercises, and how to assist with your home program. Please let us know in advance so we can accommodate everyone comfortably.'
        }
      ]
    }
  ];

  const quickContactOptions = [
    {
      icon: LuPhone,
      title: 'Call Us',
      info: '(949) 123-4567',
      description: 'Speak with our friendly staff',
      link: 'tel:+19491234567',
      color: 'primary'
    },
    {
      icon: LuMail,
      title: 'Email Us',
      info: 'info@physicainc.com',
      description: 'Get a response within 24 hours',
      link: 'mailto:info@physicainc.com',
      color: 'secondary'
    },
    {
      icon: LuMapPin,
      title: 'Visit Us',
      info: '123 Medical Plaza, Irvine, CA 92618',
      description: 'Free parking available',
      link: 'https://maps.google.com',
      color: 'tertiary'
    }
  ];

  const officeHours = [
    { day: 'Monday - Sunday', hours: '9:00 AM - 6:00 PM' }
  ];

  return (
    <div className="GeneralQuestionsPage">
      {/* Hero Section */}
      <section className="GeneralQuestionsPage__hero">
        <div className="GeneralQuestionsPage__hero-overlay"></div>
        <div className="GeneralQuestionsPage__hero-content">
          <span className="GeneralQuestionsPage__hero-badge">
            <LuCircleHelp />
            We're Here to Help
          </span>
          <h1 className="GeneralQuestionsPage__hero-title">
            Frequently Asked<br />
            <span className="GeneralQuestionsPage__hero-accent">Questions</span>
          </h1>
          <p className="GeneralQuestionsPage__hero-subtitle">
            Find answers to common questions about our services, appointments,<br />
            insurance, and more. Can't find what you need? Contact us directly!
          </p>
        </div>
      </section>

      {/* Quick Contact Section */}
      <section className="GeneralQuestionsPage__quick-contact">
        <div className="GeneralQuestionsPage__container">
          <div className="GeneralQuestionsPage__quick-contact-grid">
            {quickContactOptions.map((option, index) => {
              const Icon = option.icon;
              return (
                <a
                  key={index}
                  href={option.link}
                  target={option.icon === LuMapPin ? '_blank' : undefined}
                  rel={option.icon === LuMapPin ? 'noopener noreferrer' : undefined}
                  className={`GeneralQuestionsPage__quick-contact-card GeneralQuestionsPage__quick-contact-card--${option.color}`}
                >
                  <div className="GeneralQuestionsPage__quick-contact-icon">
                    <Icon />
                  </div>
                  <h3 className="GeneralQuestionsPage__quick-contact-title">{option.title}</h3>
                  <p className="GeneralQuestionsPage__quick-contact-info">{option.info}</p>
                  <p className="GeneralQuestionsPage__quick-contact-description">{option.description}</p>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="GeneralQuestionsPage__faq">
        <div className="GeneralQuestionsPage__container">
          <div className="GeneralQuestionsPage__section-header">
            <span className="GeneralQuestionsPage__tagline">Common Questions</span>
            <h2 className="GeneralQuestionsPage__section-title">Everything You Need to Know</h2>
            <p className="GeneralQuestionsPage__section-subtitle">
              Browse our comprehensive FAQ organized by topic
            </p>
          </div>

          <div className="GeneralQuestionsPage__faq-categories">
            {faqCategories.map((category, categoryIndex) => {
              const CategoryIcon = category.icon;
              return (
                <div key={categoryIndex} className="GeneralQuestionsPage__faq-category">
                  <div className="GeneralQuestionsPage__faq-category-header">
                    <CategoryIcon className="GeneralQuestionsPage__faq-category-icon" />
                    <h3 className="GeneralQuestionsPage__faq-category-title">{category.category}</h3>
                  </div>

                  <div className="GeneralQuestionsPage__faq-list">
                    {category.questions.map((faq, faqIndex) => {
                      const globalIndex = `${categoryIndex}-${faqIndex}`;
                      const isOpen = openFaq === globalIndex;

                      return (
                        <div
                          key={faqIndex}
                          className={`GeneralQuestionsPage__faq-item ${isOpen ? 'GeneralQuestionsPage__faq-item--open' : ''}`}
                        >
                          <button
                            className="GeneralQuestionsPage__faq-question"
                            onClick={() => toggleFaq(globalIndex)}
                          >
                            <span className="GeneralQuestionsPage__faq-question-text">
                              {faq.question}
                            </span>
                            <LuChevronDown className="GeneralQuestionsPage__faq-chevron" />
                          </button>
                          {isOpen && (
                            <div className="GeneralQuestionsPage__faq-answer">
                              <p>{faq.answer}</p>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Office Hours & Contact Info Section */}
      <section className="GeneralQuestionsPage__contact-info-section">
        <div className="GeneralQuestionsPage__container">
          <div className="GeneralQuestionsPage__section-header">
            <span className="GeneralQuestionsPage__tagline">Get in Touch</span>
            <h2 className="GeneralQuestionsPage__section-title">Contact Us</h2>
            <p className="GeneralQuestionsPage__section-subtitle">
              Our team is ready to answer your questions and schedule your appointment
            </p>
          </div>

          <div className="GeneralQuestionsPage__contact-info-grid">
            <div className="GeneralQuestionsPage__office-info-card GeneralQuestionsPage__office-info-card--large">
              <div className="GeneralQuestionsPage__office-info-header">
                <LuClock className="GeneralQuestionsPage__office-info-icon" />
                <h3 className="GeneralQuestionsPage__office-info-title">Office Hours</h3>
              </div>
              <div className="GeneralQuestionsPage__office-hours-list">
                {officeHours.map((schedule, index) => (
                  <div key={index} className="GeneralQuestionsPage__office-hours-item">
                    <span className="GeneralQuestionsPage__office-hours-day">{schedule.day}</span>
                    <span className="GeneralQuestionsPage__office-hours-time">{schedule.hours}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="GeneralQuestionsPage__office-info-card">
              <div className="GeneralQuestionsPage__office-info-header">
                <LuPhone className="GeneralQuestionsPage__office-info-icon" />
                <h3 className="GeneralQuestionsPage__office-info-title">Call Us</h3>
              </div>
              <p className="GeneralQuestionsPage__office-info-text">
                For questions or to schedule an appointment, call us at:
              </p>
              <a href="tel:+19491234567" className="GeneralQuestionsPage__contact-phone-link">
                (949) 123-4567
              </a>
            </div>

            <div className="GeneralQuestionsPage__office-info-card">
              <div className="GeneralQuestionsPage__office-info-header">
                <LuHeadphones className="GeneralQuestionsPage__office-info-icon" />
                <h3 className="GeneralQuestionsPage__office-info-title">Response Time</h3>
              </div>
              <p className="GeneralQuestionsPage__office-info-text">
                We answer calls during business hours and typically respond to voicemails within 2 hours.
              </p>
            </div>
          </div>

          <div className="GeneralQuestionsPage__office-info-highlights">
            <div className="GeneralQuestionsPage__office-info-highlight">
              <LuCalendarCheck />
              <span>Same-Day Appointments Available</span>
            </div>
            <div className="GeneralQuestionsPage__office-info-highlight">
              <LuShield />
              <span>Most Insurance Plans Accepted</span>
            </div>
            <div className="GeneralQuestionsPage__office-info-highlight">
              <LuUsers />
              <span>Bilingual Staff Available</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="GeneralQuestionsPage__cta">
        <div className="GeneralQuestionsPage__container">
          <div className="GeneralQuestionsPage__cta-content">
            <h2 className="GeneralQuestionsPage__cta-title">
              Still Have Questions?
            </h2>
            <p className="GeneralQuestionsPage__cta-description">
              Our friendly staff is ready to help. Call us during business hours and we'll answer all your questions.
            </p>
            <div className="GeneralQuestionsPage__cta-actions">
              <a href="tel:+19491234567" className="GeneralQuestionsPage__cta-button GeneralQuestionsPage__cta-button--primary">
                <LuPhone size={24} />
                Call Now: (949) 123-4567
              </a>
            </div>
            <p className="GeneralQuestionsPage__cta-hours">
              Monday - Sunday: 9:00 AM - 6:00 PM
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default GeneralQuestionsPage;
