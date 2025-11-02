import { useState } from 'react';
import { LuChevronDown, LuCircleHelp } from 'react-icons/lu';
import './FAQ.scss';

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      category: 'Appointments',
      questions: [
        {
          question: 'How do I schedule an appointment?',
          answer: 'You can schedule an appointment by calling our office at (555) 123-4567, using our online booking system, or through our mobile app. We offer same-day appointments for urgent medical needs and accept walk-ins during business hours.'
        },
        {
          question: 'What should I bring to my first appointment?',
          answer: 'Please bring a valid photo ID, your insurance card, a list of current medications, any relevant medical records from previous healthcare providers, and your completed patient registration forms (available on our website).'
        },
        {
          question: 'Do you offer telehealth appointments?',
          answer: 'Yes, we offer secure telehealth video consultations for many types of appointments. This service is available for follow-ups, prescription refills, minor illness consultations, and mental health services. Contact us to determine if telehealth is appropriate for your needs.'
        }
      ]
    },
    {
      category: 'Insurance & Billing',
      questions: [
        {
          question: 'What insurance plans do you accept?',
          answer: 'We accept most major insurance plans including Blue Cross Blue Shield, UnitedHealthcare, Aetna, Cigna, Medicare, and Medicaid. Please contact our insurance department to verify your specific plan coverage before your appointment.'
        },
        {
          question: 'What if I don\'t have insurance?',
          answer: 'We offer self-pay options with discounted rates for patients without insurance. We also provide payment plans and can help you apply for financial assistance programs. Our billing team will work with you to find an affordable payment solution.'
        },
        {
          question: 'When will I receive my bill?',
          answer: 'Bills are typically sent within 30 days of your appointment. We first bill your insurance company, and then send you a statement for any remaining balance. You can view and pay bills online through our patient portal for your convenience.'
        }
      ]
    },
    {
      category: 'Medical Services',
      questions: [
        {
          question: 'Do you provide emergency medical services?',
          answer: 'While we have urgent care services for non-life-threatening conditions, for true medical emergencies please call 911 or visit your nearest emergency room. Our urgent care is available for conditions like minor injuries, infections, and sudden illnesses.'
        },
        {
          question: 'Can I get lab work done at your facility?',
          answer: 'Yes, we have a full-service on-site laboratory that can perform most common blood tests, urinalysis, and other diagnostic tests. Results are typically available within 24-48 hours and can be accessed through your patient portal.'
        },
        {
          question: 'Do you offer preventive care services?',
          answer: 'Absolutely. We provide comprehensive preventive care including annual physicals, vaccinations, health screenings, wellness exams, and preventive counseling. Most preventive services are covered 100% by insurance with no copay.'
        }
      ]
    },
    {
      category: 'Patient Portal & Records',
      questions: [
        {
          question: 'How do I access my medical records?',
          answer: 'You can access your medical records 24/7 through our secure patient portal. Simply register online or ask our staff for assistance. Through the portal, you can view test results, request prescription refills, message your care team, and download your records.'
        },
        {
          question: 'Can I transfer my medical records from another provider?',
          answer: 'Yes, we can request your medical records from your previous healthcare providers. Please complete our medical records release form, and we\'ll handle the transfer process. This typically takes 7-10 business days.'
        },
        {
          question: 'How do I request a prescription refill?',
          answer: 'Prescription refills can be requested through our patient portal, by calling our pharmacy line, or through your pharmacy. Please allow 48 hours for processing. For urgent needs, contact your provider directly.'
        }
      ]
    },
    {
      category: 'Clinic Policies',
      questions: [
        {
          question: 'What is your cancellation policy?',
          answer: 'We require 24 hours notice for appointment cancellations. Late cancellations or no-shows may result in a fee. We understand emergencies happen - please call us as soon as possible if you need to reschedule.'
        },
        {
          question: 'Are family members allowed during appointments?',
          answer: 'Yes, we welcome family members to accompany patients. For pediatric appointments, we encourage parent/guardian presence. For adult appointments, you may bring one support person. Additional visitors may be limited based on room size and appointment type.'
        },
        {
          question: 'Is your facility accessible for people with disabilities?',
          answer: 'Yes, our entire facility is ADA compliant with wheelchair accessibility, accessible parking, elevators, and accessible restrooms. We also offer interpreting services for deaf and hard of hearing patients, and language interpretation services.'
        }
      ]
    }
  ];

  const toggleFAQ = (categoryIndex, questionIndex) => {
    const index = `${categoryIndex}-${questionIndex}`;
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="FAQ">
      <div className="FAQ__container">
        {/* Section Header */}
        <div className="FAQ__header">
          <span className="FAQ__tagline">Have Questions?</span>
          <h2 className="FAQ__title">
            Frequently Asked <span className="FAQ__title-accent">Questions</span>
          </h2>
          <p className="FAQ__subtitle">
            Find answers to common questions about our services, appointments, insurance, and more.
            Can't find what you're looking for? Contact our patient support team.
          </p>
        </div>

        {/* FAQ Categories */}
        <div className="FAQ__categories">
          {faqs.map((category, categoryIndex) => (
            <div key={categoryIndex} className="FAQ__category">
              <h3 className="FAQ__category-title">
                <LuCircleHelp />
                {category.category}
              </h3>

              <div className="FAQ__questions">
                {category.questions.map((faq, questionIndex) => {
                  const index = `${categoryIndex}-${questionIndex}`;
                  const isActive = activeIndex === index;

                  return (
                    <div
                      key={questionIndex}
                      className={`FAQ__item ${isActive ? 'FAQ__item--active' : ''}`}
                    >
                      <button
                        className="FAQ__question"
                        onClick={() => toggleFAQ(categoryIndex, questionIndex)}
                        aria-expanded={isActive}
                      >
                        <span className="FAQ__question-text">{faq.question}</span>
                        <LuChevronDown className="FAQ__icon" />
                      </button>

                      <div className="FAQ__answer-wrapper">
                        <div className="FAQ__answer">
                          {faq.answer}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="FAQ__cta">
          <h3 className="FAQ__cta-title">Still Have Questions?</h3>
          <p className="FAQ__cta-text">
            Our patient support team is here to help you with any questions or concerns
          </p>
          <button className="FAQ__cta-button">
            Contact Support Team
          </button>
        </div>
      </div>
    </section>
  );
}

export default FAQ;
