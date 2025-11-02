import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import Hero from '../../components/Hero';
import './HomePage.scss';
import {
  LuStethoscope,
  LuHeart,
  LuMicroscope,
  LuUsers,
  LuShieldCheck,
  LuCalendar,
  LuActivity,
  LuBrain,
  LuFlaskConical,
  LuArrowRight,
  LuChevronLeft,
  LuChevronRight,
  LuPhone,
  LuClipboardList,
  LuBriefcase
} from 'react-icons/lu';
import SportsRehabilitationImg from '../../assets/Sports-Rehabilitation.png';
import ManualTherapyImg from '../../assets/Manual-Therapy.png';
import OrthopedicPhysicalTherapyImg from '../../assets/Orthopedic-Physical-}Therapy.png';
import NeurologicalRehabilitationImg from '../../assets/Neurological-Rehabilitation.png';
import PostSurgicalRecoveryImg from '../../assets/Post-Surgical-Recovery.png';
import ChronicPainManagementImg from '../../assets/Chronic-Pain-Management.png';
import GeriatricPhysicalTherapyImg from '../../assets/Geriatric-Physical-Therapy.png';
import BalanceFallPreventionImg from '../../assets/Balance-&-Fall-Prevention.png';

function HomePage() {
  const whyChooseRef = useRef(null);
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  useEffect(() => {
    // Intersection Observer for scroll-triggered animations
    const observerOptions = {
      threshold: 0.2, // Trigger when 20% of section is visible
      rootMargin: '0px 0px -100px 0px' // Trigger slightly before section is fully visible
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('HomePage__why-choose--visible');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    if (whyChooseRef.current) {
      observer.observe(whyChooseRef.current);
    }

    return () => {
      if (whyChooseRef.current) {
        observer.unobserve(whyChooseRef.current);
      }
    };
  }, []);

  const servicesOverview = [
    {
      icon: <LuActivity />,
      title: 'Sports Rehabilitation',
      description: 'Recovery and performance optimization for athletes',
      image: SportsRehabilitationImg
    },
    {
      icon: <LuUsers />,
      title: 'Manual Therapy',
      description: 'Personalized hands-on treatment helping patients restore mobility and reduce pain in a clinical setting',
      image: ManualTherapyImg
    },
    {
      icon: <LuActivity />,
      title: 'Orthopedic Physical Therapy',
      description: 'Expert care for patients recovering from musculoskeletal injuries with evidence-based treatment protocols',
      image: OrthopedicPhysicalTherapyImg
    },
    {
      icon: <LuBrain />,
      title: 'Neurological Rehabilitation',
      description: 'Compassionate support for patients with neurological conditions through specialized therapeutic interventions',
      image: NeurologicalRehabilitationImg
    },
    {
      icon: <LuHeart />,
      title: 'Post-Surgical Recovery',
      description: 'Comprehensive rehabilitation programs guiding patients through safe and effective post-operative recovery',
      image: PostSurgicalRecoveryImg
    },
    {
      icon: <LuShieldCheck />,
      title: 'Chronic Pain Management',
      description: 'Advanced therapeutic strategies helping patients achieve long-term relief from persistent pain conditions',
      image: ChronicPainManagementImg
    },
    {
      icon: <LuHeart />,
      title: 'Geriatric Physical Therapy',
      description: 'Dedicated care for elderly patients focusing on mobility, balance, and maintaining independence',
      image: GeriatricPhysicalTherapyImg
    },
    {
      icon: <LuActivity />,
      title: 'Balance & Fall Prevention',
      description: 'Specialized programs helping patients improve stability and prevent falls through targeted therapy',
      image: BalanceFallPreventionImg
    }
  ];

  const whyChooseUs = {
    title: 'What makes us different from other physical therapy clinics?',
    paragraphs: [
      'Our purpose is to provide excellent physical therapy services and we consider our patients as strategic partners in their journey to recovery.',
      'We understand that the only way to build long-term relationships is by achieving your complete satisfaction. That\'s why we have certified therapists with over 15 years of experience, state-of-the-art technology, and personalized attention that guarantees proven results.'
    ],
    images: [
      {
        url: 'https://images.pexels.com/photos/5473183/pexels-photo-5473183.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2',
        title: 'Personalized Treatment',
        description: 'One-on-one sessions tailored to your recovery goals'
      },
      {
        url: 'https://images.pexels.com/photos/7176325/pexels-photo-7176325.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2',
        title: 'Manual Therapy',
        description: 'Hands-on techniques for pain relief and mobility'
      },
      {
        url: 'https://images.pexels.com/photos/5473171/pexels-photo-5473171.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2',
        title: 'Therapeutic Exercise',
        description: 'Guided movements to restore strength and flexibility'
      },
      {
        url: 'https://images.pexels.com/photos/7176305/pexels-photo-7176305.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2',
        title: 'Advanced Technology',
        description: 'State-of-the-art equipment for optimal recovery'
      },
      {
        url: 'https://images.pexels.com/photos/5473182/pexels-photo-5473182.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2',
        title: 'Sports Rehabilitation',
        description: 'Expert care for athletes and active individuals'
      },
      {
        url: 'https://images.pexels.com/photos/7176026/pexels-photo-7176026.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2',
        title: 'Comprehensive Evaluation',
        description: 'Thorough assessment to create your treatment plan'
      },
      {
        url: 'https://images.pexels.com/photos/5473177/pexels-photo-5473177.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2',
        title: 'Modern Facilities',
        description: 'Professional clinic designed for your comfort'
      }
    ]
  };

  return (
    <div className="HomePage">
      <Hero />

      {/* Services Overview */}
      <section className="HomePage__services">
        <div className="HomePage__container">
          <div className="HomePage__section-header">
            <span className="HomePage__tagline">Our Services</span>
            <h2 className="HomePage__title">Expert Physical Therapy Services</h2>
            <p className="HomePage__subtitle">
              Specialized rehabilitation programs tailored to your unique needs
            </p>
          </div>

          <div className="HomePage__services-grid">
            {servicesOverview.map((service, index) => (
              <div key={index} className="HomePage__service-card" data-index={index}>
                <div className="HomePage__service-image">
                  <img src={service.image} alt={service.title} />
                  <span className="HomePage__service-number">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div className="HomePage__service-icon-overlay">
                    {service.icon}
                  </div>
                </div>
                <div className="HomePage__service-content">
                  <h3 className="HomePage__service-title">{service.title}</h3>
                  <p className="HomePage__service-description">{service.description}</p>
                  <Link to="/services" className="HomePage__service-learn-more">
                    Learn More <LuArrowRight />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="HomePage__services-cta">
            <Link to="/services" className="HomePage__button HomePage__button--primary">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Actions Section */}
      <section className="HomePage__quick-actions">
        <div className="HomePage__container">
          <div className="HomePage__quick-actions-grid">
            <a href="tel:+1234567890" className="HomePage__quick-action-card HomePage__quick-action-card--primary">
              <div className="HomePage__quick-action-icon">
                <LuPhone />
              </div>
              <div className="HomePage__quick-action-content">
                <h3 className="HomePage__quick-action-title">Schedule ASAP</h3>
                <p className="HomePage__quick-action-description">Book your appointment today</p>
              </div>
              <div className="HomePage__quick-action-arrow">
                <LuArrowRight />
              </div>
            </a>

            <a href="tel:+1234567890" className="HomePage__quick-action-card HomePage__quick-action-card--secondary">
              <div className="HomePage__quick-action-icon">
                <LuClipboardList />
              </div>
              <div className="HomePage__quick-action-content">
                <h3 className="HomePage__quick-action-title">Patient Results</h3>
                <p className="HomePage__quick-action-description">Access your medical records</p>
              </div>
              <div className="HomePage__quick-action-arrow">
                <LuArrowRight />
              </div>
            </a>

            <a href="tel:+1234567890" className="HomePage__quick-action-card HomePage__quick-action-card--tertiary">
              <div className="HomePage__quick-action-icon">
                <LuBriefcase />
              </div>
              <div className="HomePage__quick-action-content">
                <h3 className="HomePage__quick-action-title">Join Our Team</h3>
                <p className="HomePage__quick-action-description">Explore career opportunities</p>
              </div>
              <div className="HomePage__quick-action-arrow">
                <LuArrowRight />
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section ref={whyChooseRef} className="HomePage__why-choose">
        <div className="HomePage__container">
          <div className="HomePage__why-choose-header">
            <span className="HomePage__tagline">Why Choose Us</span>
          </div>

          <div className="HomePage__why-choose-content">
            <div className="HomePage__why-choose-text">
              <h2 className="HomePage__why-choose-title">{whyChooseUs.title}</h2>
              {whyChooseUs.paragraphs.map((paragraph, index) => (
                <p key={index} className="HomePage__why-choose-paragraph">
                  {paragraph}
                </p>
              ))}
              <Link to="/about" className="HomePage__button HomePage__button--primary">
                Learn More
              </Link>
            </div>

            <div className="HomePage__why-choose-images">
              <div className="HomePage__why-choose-grid">
                {whyChooseUs.images.map((image, index) => (
                  <div key={index} className="HomePage__why-choose-image">
                    <img src={image.url} alt={image.title} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Testimonials Section */}
      <section className="HomePage__testimonials">
        <div className="HomePage__container">
          <div className="HomePage__section-header">
            <span className="HomePage__tagline">Our Community</span>
            <h2 className="HomePage__title">Trusted by Thousands of Patients</h2>
            <p className="HomePage__subtitle">
              Real stories from real people who have transformed their lives through our care
            </p>
          </div>

          {(() => {
            const testimonials = [
              {
                name: "Michael Rodriguez",
                rating: 5,
                comment: "After my knee surgery, I thought I'd never run again. The therapy team here proved me wrong. Now I'm back to marathon training!",
                image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=2"
              },
              {
                name: "Jennifer Thompson",
                rating: 5,
                comment: "The personalized attention I received was incredible. They took time to understand my specific needs and created a perfect recovery plan.",
                image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=2"
              },
              {
                name: "David Chen",
                rating: 5,
                comment: "Professional, caring, and highly skilled. They helped me recover from a sports injury faster than I expected.",
                image: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=2"
              },
              {
                name: "Amanda Martinez",
                rating: 5,
                comment: "Outstanding facility with state-of-the-art equipment. The therapists are knowledgeable and genuinely care about your progress.",
                image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=2"
              },
              {
                name: "Robert Johnson",
                rating: 5,
                comment: "I've been to several PT clinics, and this one is by far the best. The results speak for themselves.",
                image: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=2"
              },
              {
                name: "Sarah Williams",
                rating: 5,
                comment: "My chronic back pain is finally manageable. I can't thank the team enough for their dedication and expertise.",
                image: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=2"
              },
              {
                name: "James Anderson",
                rating: 5,
                comment: "Excellent experience from start to finish. The therapists are professional, friendly, and truly know their craft.",
                image: "https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=2"
              },
              {
                name: "Emily Davis",
                rating: 4,
                comment: "Great facility with a welcoming atmosphere. The therapy sessions were effective and the staff made me feel comfortable.",
                image: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=2"
              },
              {
                name: "Christopher Lee",
                rating: 5,
                comment: "After my car accident, I didn't think I'd regain full mobility. Thanks to this team, I'm back to 100%!",
                image: "https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=2"
              },
              {
                name: "Maria Garcia",
                rating: 5,
                comment: "The compassion and expertise here is unmatched. They truly care about helping you achieve your recovery goals.",
                image: "https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=2"
              },
              {
                name: "Daniel White",
                rating: 5,
                comment: "Highly recommend! The therapists are knowledgeable, patient, and create customized treatment plans that work.",
                image: "https://images.pexels.com/photos/1542085/pexels-photo-1542085.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=2"
              },
              {
                name: "Lisa Brown",
                rating: 5,
                comment: "I came in with severe shoulder pain and left pain-free. The treatment was professional and effective.",
                image: "https://images.pexels.com/photos/1239288/pexels-photo-1239288.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=2"
              },
              {
                name: "Kevin Taylor",
                rating: 5,
                comment: "The best physical therapy experience I've ever had. The staff goes above and beyond to ensure your success.",
                image: "https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=2"
              },
              {
                name: "Patricia Moore",
                rating: 4,
                comment: "Very professional environment. The therapists are skilled and the facility is clean and modern.",
                image: "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=2"
              },
              {
                name: "Thomas Harris",
                rating: 5,
                comment: "Outstanding care throughout my recovery. They made the process easier and more effective than I imagined.",
                image: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=2"
              },
              {
                name: "Jessica Clark",
                rating: 5,
                comment: "After years of chronic pain, I finally found relief here. The therapists are miracle workers!",
                image: "https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=2"
              },
              {
                name: "Brian Lewis",
                rating: 5,
                comment: "Professional, knowledgeable, and caring staff. They helped me get back to playing golf pain-free.",
                image: "https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=2"
              },
              {
                name: "Nancy Robinson",
                rating: 5,
                comment: "The personalized care I received was exceptional. Every session was tailored to my specific needs.",
                image: "https://images.pexels.com/photos/1181695/pexels-photo-1181695.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=2"
              },
              {
                name: "Steven Walker",
                rating: 5,
                comment: "Incredible results in just a few weeks. The team's expertise and dedication is truly impressive.",
                image: "https://images.pexels.com/photos/1591373/pexels-photo-1591373.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=2"
              },
              {
                name: "Michelle Young",
                rating: 5,
                comment: "Best decision I made for my recovery. The therapists are skilled, patient, and genuinely invested in your success.",
                image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=2"
              },
              {
                name: "Richard King",
                rating: 5,
                comment: "Top-notch facility with excellent staff. They helped me recover from a work injury and return to my job stronger.",
                image: "https://images.pexels.com/photos/1486222/pexels-photo-1486222.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=2"
              },
              {
                name: "Karen Wright",
                rating: 4,
                comment: "Great experience overall. The therapists are professional and the treatment plans are well-designed.",
                image: "https://images.pexels.com/photos/1130641/pexels-photo-1130641.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=2"
              },
              {
                name: "Joseph Scott",
                rating: 5,
                comment: "After my hip replacement, I needed specialized care. This team delivered exceptional results beyond my expectations.",
                image: "https://images.pexels.com/photos/1121796/pexels-photo-1121796.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=2"
              },
              {
                name: "Laura Green",
                rating: 5,
                comment: "The attention to detail and personalized approach made all the difference in my recovery journey.",
                image: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=2"
              },
              {
                name: "Mark Adams",
                rating: 5,
                comment: "Professional environment with cutting-edge equipment. The therapists are experts in their field.",
                image: "https://images.pexels.com/photos/1416530/pexels-photo-1416530.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=2"
              },
              {
                name: "Sandra Baker",
                rating: 5,
                comment: "I've regained mobility I thought was lost forever. This team changed my life!",
                image: "https://images.pexels.com/photos/1547796/pexels-photo-1547796.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=2"
              },
              {
                name: "Paul Nelson",
                rating: 5,
                comment: "Exceptional care from day one. The staff is friendly, professional, and truly dedicated to patient recovery.",
                image: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=2"
              },
              {
                name: "Carol Mitchell",
                rating: 5,
                comment: "The best therapy center in the area. Clean facility, modern equipment, and outstanding therapists.",
                image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=2"
              },
              {
                name: "Gregory Carter",
                rating: 4,
                comment: "Very satisfied with my treatment. The therapists are knowledgeable and create effective recovery plans.",
                image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=2"
              },
              {
                name: "Rachel Phillips",
                rating: 5,
                comment: "Life-changing experience! I'm pain-free and stronger than ever. Thank you to this amazing team!",
                image: "https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=2"
              }
            ];

            const itemsPerPage = 3;
            const maxIndex = Math.ceil(testimonials.length / itemsPerPage) - 1;
            const currentTestimonials = testimonials.slice(
              currentTestimonialIndex * itemsPerPage,
              (currentTestimonialIndex * itemsPerPage) + itemsPerPage
            );

            const handlePrevious = () => {
              setCurrentTestimonialIndex(prev => Math.max(0, prev - 1));
            };

            const handleNext = () => {
              setCurrentTestimonialIndex(prev => Math.min(maxIndex, prev + 1));
            };

            return (
              <>
                <div className="HomePage__testimonials-carousel">
                  <button
                    className="HomePage__testimonials-nav HomePage__testimonials-nav--prev"
                    onClick={handlePrevious}
                    disabled={currentTestimonialIndex === 0}
                    aria-label="Previous testimonials"
                  >
                    <LuChevronLeft />
                  </button>

                  <div className="HomePage__testimonials-grid">
                    {currentTestimonials.map((testimonial, index) => (
                      <div key={currentTestimonialIndex * itemsPerPage + index} className="HomePage__testimonial-card">
                        <div className="HomePage__testimonial-header">
                          <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="HomePage__testimonial-avatar"
                          />
                          <div className="HomePage__testimonial-info">
                            <h4 className="HomePage__testimonial-name">{testimonial.name}</h4>
                            <div className="HomePage__testimonial-rating">
                              {[...Array(5)].map((_, i) => (
                                <span
                                  key={i}
                                  className={`HomePage__testimonial-star ${
                                    i < testimonial.rating ? 'HomePage__testimonial-star--filled' : ''
                                  }`}
                                >
                                  ★
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                        <p className="HomePage__testimonial-comment">{testimonial.comment}</p>
                        <span className="HomePage__testimonial-verified">✓ Verified Patient</span>
                      </div>
                    ))}
                  </div>

                  <button
                    className="HomePage__testimonials-nav HomePage__testimonials-nav--next"
                    onClick={handleNext}
                    disabled={currentTestimonialIndex === maxIndex}
                    aria-label="Next testimonials"
                  >
                    <LuChevronRight />
                  </button>
                </div>

                <div className="HomePage__testimonials-indicators">
                  {Array.from({ length: maxIndex + 1 }).map((_, index) => (
                    <button
                      key={index}
                      className={`HomePage__testimonials-indicator ${
                        index === currentTestimonialIndex ? 'HomePage__testimonials-indicator--active' : ''
                      }`}
                      onClick={() => setCurrentTestimonialIndex(index)}
                      aria-label={`Go to testimonials page ${index + 1}`}
                    />
                  ))}
                </div>
              </>
            );
          })()}
        </div>
      </section>

      {/* CTA Section - Unique Design */}
      <section className="HomePage__cta">
        <div className="HomePage__cta-background"></div>
        <div className="HomePage__container">
          <div className="HomePage__cta-grid">
            {/* Left Side - Impact Stats */}
            <div className="HomePage__cta-stats">
              <div className="HomePage__cta-stat-card HomePage__cta-stat-card--primary">
                <span className="HomePage__cta-stat-number">96%</span>
                <span className="HomePage__cta-stat-label">Patient Satisfaction</span>
              </div>
              <div className="HomePage__cta-stat-card HomePage__cta-stat-card--secondary">
                <span className="HomePage__cta-stat-number">23K+</span>
                <span className="HomePage__cta-stat-label">Lives Transformed</span>
              </div>
              <div className="HomePage__cta-testimonial">
                <div className="HomePage__cta-quote-mark">"</div>
                <p className="HomePage__cta-quote-text">
                  The team helped me return to my active lifestyle. Professional, caring, and effective.
                </p>
                <p className="HomePage__cta-quote-author">— Sarah M., Marathon Runner</p>
              </div>
            </div>

            {/* Right Side - CTA Content */}
            <div className="HomePage__cta-content">
              <span className="HomePage__cta-badge">Your Journey Starts Here</span>
              <h2 className="HomePage__cta-title">
                Let's Create Your<br />
                <span className="HomePage__cta-title-highlight">Recovery Plan</span>
              </h2>
              <p className="HomePage__cta-description">
                Every recovery journey is unique. Our expert therapists develop personalized treatment plans designed specifically for your goals and lifestyle.
              </p>

              <div className="HomePage__cta-actions">
                <a href="tel:+1234567890" className="HomePage__cta-button HomePage__cta-button--primary">
                  <span className="HomePage__cta-button-icon">📞</span>
                  <div className="HomePage__cta-button-content">
                    <span className="HomePage__cta-button-label">Call Now</span>
                    <span className="HomePage__cta-button-sublabel">Free Consultation</span>
                  </div>
                </a>
                <Link to="/team" className="HomePage__cta-button HomePage__cta-button--secondary">
                  <div className="HomePage__cta-button-content">
                    <span className="HomePage__cta-button-label">Meet Our Experts</span>
                    <span className="HomePage__cta-button-sublabel">View Team →</span>
                  </div>
                </Link>
              </div>

              <div className="HomePage__cta-trust">
                <span className="HomePage__cta-trust-badge">✓ Licensed Therapists</span>
                <span className="HomePage__cta-trust-badge">✓ Insurance Accepted</span>
                <span className="HomePage__cta-trust-badge">✓ Same-Day Appointments</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
