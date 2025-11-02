import { useState } from 'react';
import {
  LuShield,
  LuCircleCheck,
  LuPhone,
  LuMail,
  LuFileText,
  LuClipboardCheck,
  LuCircleAlert,
  LuInfo,
  LuDollarSign,
  LuCreditCard
} from 'react-icons/lu';
import './InsurancePage.scss';

function InsurancePage() {
  const [selectedInsurance, setSelectedInsurance] = useState('');
  const [otherInsurance, setOtherInsurance] = useState('');

  const insuranceProviders = [
    'Medicare & Medicaid',
    'Blue Cross Blue Shield',
    'Aetna',
    'United Healthcare',
    'Cigna',
    'Kaiser Permanente',
    'Anthem',
    'Humana',
    'Health Net',
    'Oscar Health',
    'Molina Healthcare',
    'LA Care'
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const insurance = selectedInsurance === 'other' ? otherInsurance : selectedInsurance;
    const subject = `Insurance Verification: ${insurance}`;
    const body = `Hello, I would like to verify if you accept my insurance: ${insurance}`;
    window.location.href = `mailto:insurance@physicainc.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="InsurancePage">
      {/* Hero Section */}
      <section className="InsurancePage__hero">
        <div className="InsurancePage__hero-overlay"></div>
        <div className="InsurancePage__hero-container">
          <div className="InsurancePage__hero-badge">
            <LuShield size={20} />
            Insurance & Coverage
          </div>
          <h1 className="InsurancePage__hero-title">
            We Accept Most Major <span className="InsurancePage__hero-accent">Insurance Plans</span>
          </h1>
          <p className="InsurancePage__hero-subtitle">
            Our team works with your insurance provider to maximize your benefits and minimize your out-of-pocket costs.
          </p>
        </div>
      </section>

      <div className="InsurancePage__container">
        {/* Accepted Insurance Section */}
        <section className="InsurancePage__accepted-section">
          <div className="InsurancePage__section-header">
            <h2 className="InsurancePage__section-title">Insurance Plans We Accept</h2>
            <p className="InsurancePage__section-subtitle">
              We're in-network with most major insurance providers
            </p>
          </div>

          <div className="InsurancePage__insurance-grid">
            {insuranceProviders.map((provider, index) => (
              <div key={index} className="InsurancePage__insurance-card">
                <LuCircleCheck className="InsurancePage__insurance-icon" size={24} />
                <span className="InsurancePage__insurance-name">{provider}</span>
              </div>
            ))}
          </div>

          <div className="InsurancePage__note">
            <LuInfo size={20} />
            <p>Don't see your insurance listed? We may still accept it. Contact us to verify your coverage.</p>
          </div>
        </section>

        {/* Verification Form Section */}
        <section className="InsurancePage__verification-section">
          <div className="InsurancePage__verification-content">
            <div className="InsurancePage__verification-info">
              <div className="InsurancePage__verification-badge">Quick Verification</div>
              <h2 className="InsurancePage__verification-title">
                Verify Your Insurance Coverage
              </h2>
              <p className="InsurancePage__verification-text">
                Not sure if we accept your insurance? Let us check for you. Select your insurance provider from the list or enter it below, and we'll get back to you within 24 hours.
              </p>

              <div className="InsurancePage__benefits-list">
                <div className="InsurancePage__benefit-item">
                  <LuClipboardCheck size={20} />
                  <span>We verify benefits before your first visit</span>
                </div>
                <div className="InsurancePage__benefit-item">
                  <LuDollarSign size={20} />
                  <span>Clear cost estimates with no surprises</span>
                </div>
                <div className="InsurancePage__benefit-item">
                  <LuFileText size={20} />
                  <span>We handle all insurance paperwork</span>
                </div>
              </div>
            </div>

            <div className="InsurancePage__verification-form-wrapper">
              <form onSubmit={handleSubmit} className="InsurancePage__verification-form">
                <h3 className="InsurancePage__form-title">Check Your Coverage</h3>

                <div className="InsurancePage__form-group">
                  <label htmlFor="insurance-select" className="InsurancePage__form-label">
                    Select Your Insurance Provider
                  </label>
                  <select
                    id="insurance-select"
                    value={selectedInsurance}
                    onChange={(e) => setSelectedInsurance(e.target.value)}
                    className="InsurancePage__form-select"
                    required
                  >
                    <option value="">-- Choose an insurance provider --</option>
                    {insuranceProviders.map((provider, index) => (
                      <option key={index} value={provider}>
                        {provider}
                      </option>
                    ))}
                    <option value="other">Other / Not Listed</option>
                  </select>
                </div>

                {selectedInsurance === 'other' && (
                  <div className="InsurancePage__form-group">
                    <label htmlFor="other-insurance" className="InsurancePage__form-label">
                      Enter Your Insurance Provider
                    </label>
                    <input
                      type="text"
                      id="other-insurance"
                      value={otherInsurance}
                      onChange={(e) => setOtherInsurance(e.target.value)}
                      className="InsurancePage__form-input"
                      placeholder="e.g., Blue Shield, Covered California, etc."
                      required
                    />
                  </div>
                )}

                <button type="submit" className="InsurancePage__form-submit">
                  <LuMail size={20} />
                  Contact for Verification
                </button>

                <p className="InsurancePage__form-note">
                  We'll respond to your inquiry via email within 24 hours
                </p>
              </form>
            </div>
          </div>
        </section>

        {/* Payment Options Section */}
        <section className="InsurancePage__payment-section">
          <div className="InsurancePage__section-header">
            <h2 className="InsurancePage__section-title">Payment Options</h2>
            <p className="InsurancePage__section-subtitle">
              Flexible payment solutions for every situation
            </p>
          </div>

          <div className="InsurancePage__payment-grid">
            <div className="InsurancePage__payment-card">
              <div className="InsurancePage__payment-icon">
                <LuShield size={32} />
              </div>
              <h3 className="InsurancePage__payment-title">Insurance Coverage</h3>
              <p className="InsurancePage__payment-text">
                We accept most major insurance plans and will work directly with your provider to maximize your benefits.
              </p>
            </div>

            <div className="InsurancePage__payment-card">
              <div className="InsurancePage__payment-icon">
                <LuCreditCard size={32} />
              </div>
              <h3 className="InsurancePage__payment-title">Self-Pay Options</h3>
              <p className="InsurancePage__payment-text">
                Don't have insurance? We offer competitive self-pay rates and flexible payment plans to fit your budget.
              </p>
            </div>

            <div className="InsurancePage__payment-card">
              <div className="InsurancePage__payment-icon">
                <LuCircleAlert size={32} />
              </div>
              <h3 className="InsurancePage__payment-title">What to Expect</h3>
              <p className="InsurancePage__payment-text">
                You may be responsible for co-pays, deductibles, or co-insurance. We'll provide a clear estimate before treatment.
              </p>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="InsurancePage__contact-cta">
          <div className="InsurancePage__contact-content">
            <h2 className="InsurancePage__contact-title">Have Questions About Your Coverage?</h2>
            <p className="InsurancePage__contact-text">
              Our insurance specialists are here to help you understand your benefits.
            </p>
          </div>

          <div className="InsurancePage__contact-cards">
            <a href="tel:+19491234567" className="InsurancePage__contact-card">
              <LuPhone size={28} />
              <div className="InsurancePage__contact-card-info">
                <h4>Call Us</h4>
                <p>(949) 123-4567</p>
              </div>
            </a>
            <a href="mailto:insurance@physicainc.com" className="InsurancePage__contact-card">
              <LuMail size={28} />
              <div className="InsurancePage__contact-card-info">
                <h4>Email Us</h4>
                <p>insurance@physicainc.com</p>
              </div>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}

export default InsurancePage;
