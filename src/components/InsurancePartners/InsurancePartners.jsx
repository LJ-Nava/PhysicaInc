import { LuShield, LuCircleCheck, LuPhone, LuFileText } from 'react-icons/lu';
import './InsurancePartners.scss';

function InsurancePartners() {
  const insuranceProviders = [
    { id: 1, name: 'Blue Cross Blue Shield', accepted: true },
    { id: 2, name: 'UnitedHealthcare', accepted: true },
    { id: 3, name: 'Aetna', accepted: true },
    { id: 4, name: 'Cigna', accepted: true },
    { id: 5, name: 'Humana', accepted: true },
    { id: 6, name: 'Medicare', accepted: true },
    { id: 7, name: 'Medicaid', accepted: true },
    { id: 8, name: 'Kaiser Permanente', accepted: true },
    { id: 9, name: 'Anthem', accepted: true },
    { id: 10, name: 'WellCare', accepted: true },
    { id: 11, name: 'Tricare', accepted: true },
    { id: 12, name: 'Oscar Health', accepted: true }
  ];

  const benefits = [
    {
      icon: <LuShield />,
      title: 'Direct Billing',
      description: 'We bill your insurance directly, so you don\'t have to worry about paperwork'
    },
    {
      icon: <LuCircleCheck />,
      title: 'Pre-Authorization',
      description: 'Our team handles all pre-authorization requirements with your insurance'
    },
    {
      icon: <LuFileText />,
      title: 'Claims Support',
      description: 'Dedicated staff to help you understand your coverage and file claims'
    },
    {
      icon: <LuPhone />,
      title: 'Verification Service',
      description: 'We verify your benefits before your appointment at no extra charge'
    }
  ];

  return (
    <section className="InsurancePartners">
      <div className="InsurancePartners__container">
        {/* Section Header */}
        <div className="InsurancePartners__header">
          <span className="InsurancePartners__tagline">Insurance & Payment</span>
          <h2 className="InsurancePartners__title">
            We Accept <span className="InsurancePartners__title-accent">Major Insurance Plans</span>
          </h2>
          <p className="InsurancePartners__subtitle">
            Physica Inc works with most major insurance providers to ensure you receive
            the quality care you deserve. Don't see your insurance? Contact us to verify coverage.
          </p>
        </div>

        {/* Insurance Grid */}
        <div className="InsurancePartners__grid">
          {insuranceProviders.map((provider) => (
            <div key={provider.id} className="InsurancePartners__card">
              <div className="InsurancePartners__provider-name">
                {provider.name}
              </div>
              <div className="InsurancePartners__status">
                <LuCircleCheck className="InsurancePartners__check-icon" />
                <span>Accepted</span>
              </div>
            </div>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="InsurancePartners__benefits">
          <h3 className="InsurancePartners__benefits-title">
            Insurance Benefits Management
          </h3>
          <p className="InsurancePartners__benefits-subtitle">
            We make working with insurance easy and transparent
          </p>

          <div className="InsurancePartners__benefits-grid">
            {benefits.map((benefit, index) => (
              <div key={index} className="InsurancePartners__benefit">
                <div className="InsurancePartners__benefit-icon">
                  {benefit.icon}
                </div>
                <h4 className="InsurancePartners__benefit-title">
                  {benefit.title}
                </h4>
                <p className="InsurancePartners__benefit-description">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Payment Options */}
        <div className="InsurancePartners__payment">
          <div className="InsurancePartners__payment-content">
            <h3 className="InsurancePartners__payment-title">
              Flexible Payment Options
            </h3>
            <p className="InsurancePartners__payment-text">
              We offer various payment options including HSA/FSA accounts, payment plans,
              and accept all major credit cards. Self-pay discounts available.
            </p>
            <div className="InsurancePartners__payment-methods">
              <span className="InsurancePartners__payment-badge">HSA</span>
              <span className="InsurancePartners__payment-badge">FSA</span>
              <span className="InsurancePartners__payment-badge">Payment Plans</span>
              <span className="InsurancePartners__payment-badge">Credit Cards</span>
              <span className="InsurancePartners__payment-badge">Self-Pay Discount</span>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="InsurancePartners__cta">
          <h3 className="InsurancePartners__cta-title">
            Questions About Your Coverage?
          </h3>
          <p className="InsurancePartners__cta-text">
            Our insurance specialists are here to help you understand your benefits
          </p>
          <div className="InsurancePartners__cta-buttons">
            <button className="InsurancePartners__cta-button InsurancePartners__cta-button--primary">
              <LuPhone />
              Call Insurance Department
            </button>
            <button className="InsurancePartners__cta-button InsurancePartners__cta-button--secondary">
              <LuFileText />
              Request Coverage Info
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default InsurancePartners;
