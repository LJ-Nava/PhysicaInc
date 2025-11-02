import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  LuHouse,
  LuStethoscope,
  LuUsers,
  LuPhone,
  LuCalendar,
  LuMenu,
  LuX,
  LuMapPin,
  LuChevronDown,
  LuActivity,
  LuHeart,
  LuBrain,
  LuTarget,
  LuShield,
  LuClock,
  LuZap,
  LuMail,
  LuBriefcase,
  LuFileText,
  LuCircleHelp
} from 'react-icons/lu';
import './Header.scss';

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [freezeHeader, setFreezeHeader] = useState(false);
  const [freezePosition, setFreezePosition] = useState(0);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [contactDropdownOpen, setContactDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      // Get viewport height
      const viewportHeight = window.innerHeight;
      // Get current scroll position
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      // Find the footer element
      const footer = document.querySelector('.Footer');
      if (!footer) return;

      // Get footer position
      const footerTop = footer.offsetTop;

      // Calculate when header should freeze (just before footer)
      // We want the header to stop ~200px before the footer starts
      const freezeThreshold = footerTop - 200;

      if (scrollTop > freezeThreshold && !freezeHeader) {
        // Calculate the exact position where it should freeze
        setFreezePosition(scrollTop + (viewportHeight * 0.35));
        setFreezeHeader(true);
      } else if (scrollTop <= freezeThreshold && freezeHeader) {
        setFreezeHeader(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Also check on resize in case layout changes
    window.addEventListener('resize', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [freezeHeader]);

  const navigationItems = [
    { id: '/', label: 'Home', icon: LuHouse },
    { id: '/services', label: 'Services', icon: LuStethoscope, hasDropdown: true, dropdownType: 'services' },
    { id: '/team', label: 'Our Team', icon: LuUsers },
    { id: '/about', label: 'About', icon: LuMapPin },
    { id: '/insurance', label: 'Insurance', icon: LuShield },
    { id: '/contact', label: 'Contact', icon: LuPhone, hasDropdown: true, dropdownType: 'contact' },
  ];

  const servicesSubmenu = [
    { label: 'Sports Rehabilitation', icon: LuActivity },
    { label: 'Orthopedic Therapy', icon: LuTarget },
    { label: 'Manual Therapy', icon: LuUsers },
    { label: 'Neurological Rehab', icon: LuBrain },
    { label: 'Chronic Pain Management', icon: LuShield },
    { label: 'Geriatric Therapy', icon: LuHeart },
    { label: 'Post-Surgical Rehab', icon: LuClock },
    { label: 'Vestibular & Balance', icon: LuZap }
  ];

  const contactSubmenu = [
    {
      label: 'For Patients',
      icon: LuHeart,
      link: '/for-patients'
    },
    {
      label: 'Careers',
      icon: LuBriefcase,
      link: '/careers'
    },
    {
      label: 'General Questions',
      icon: LuCircleHelp,
      link: '/general-questions'
    }
  ];

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <>
      {/* DESKTOP - Permanent Sidebar Right */}
      <nav className={`Header ${freezeHeader ? 'Header--frozen' : ''}`}>
        <div
          className="Header__sidebar"
          style={freezeHeader ? { top: `${freezePosition}px` } : {}}
        >
          <div className="Header__nav-list">
            {navigationItems.map((item) => {
              const Icon = item.icon;

              if (item.hasDropdown) {
                const isServicesDropdown = item.dropdownType === 'services';
                const isContactDropdown = item.dropdownType === 'contact';
                const isDropdownOpen = isServicesDropdown ? servicesDropdownOpen : contactDropdownOpen;
                const setDropdownOpen = isServicesDropdown ? setServicesDropdownOpen : setContactDropdownOpen;

                return (
                  <div
                    key={item.id}
                    className="Header__nav-item-wrapper"
                    onMouseEnter={() => setDropdownOpen(true)}
                    onMouseLeave={() => setDropdownOpen(false)}
                  >
                    <Link
                      to={item.id}
                      className={`Header__nav-item ${isActive(item.id) ? 'Header__nav-item--active' : ''}`}
                    >
                      <span className="Header__nav-icon">
                        <Icon />
                      </span>
                      <span className="Header__nav-label">{item.label}</span>
                      <span className="Header__nav-chevron">
                        <LuChevronDown />
                      </span>
                    </Link>

                    {/* Services Dropdown */}
                    {isServicesDropdown && isDropdownOpen && (
                      <div className="Header__dropdown">
                        <div className="Header__dropdown-content">
                          {servicesSubmenu.map((service, index) => {
                            const ServiceIcon = service.icon;
                            return (
                              <Link
                                key={index}
                                to="/services"
                                className="Header__dropdown-item"
                              >
                                <ServiceIcon className="Header__dropdown-icon" />
                                <span className="Header__dropdown-label">{service.label}</span>
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    )}

                    {/* Contact Dropdown */}
                    {isContactDropdown && isDropdownOpen && (
                      <div className="Header__dropdown Header__dropdown--contact">
                        <div className="Header__dropdown-content">
                          {contactSubmenu.map((contact, index) => {
                            const ContactIcon = contact.icon;
                            return (
                              <Link
                                key={index}
                                to={contact.link}
                                className="Header__dropdown-item"
                              >
                                <ContactIcon className="Header__dropdown-icon" />
                                <span className="Header__dropdown-label">{contact.label}</span>
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={item.id}
                  to={item.id}
                  className={`Header__nav-item ${isActive(item.id) ? 'Header__nav-item--active' : ''}`}
                >
                  <span className="Header__nav-icon">
                    <Icon />
                  </span>
                  <span className="Header__nav-label">{item.label}</span>
                </Link>
              );
            })}
          </div>

          <Link
            to="/contact"
            className="Header__cta-button"
          >
            <LuCalendar />
            <span>Book Appointment</span>
          </Link>
        </div>
      </nav>

      {/* MOBILE - Toggle Button */}
      <button
        className={`Header__mobile-toggle ${isMobileMenuOpen ? 'Header__mobile-toggle--active' : ''}`}
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Toggle menu"
      >
        {isMobileMenuOpen ? <LuX size={24} /> : <LuMenu size={24} />}
      </button>

      {/* MOBILE - Slide-in Menu */}
      <div className={`Header__mobile-menu ${isMobileMenuOpen ? 'Header__mobile-menu--active' : ''}`}>
        <div className="Header__mobile-content">
          {navigationItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.id}
                to={item.id}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`Header__mobile-item ${isActive(item.id) ? 'Header__mobile-item--active' : ''}`}
              >
                <Icon className="Header__mobile-icon" />
                <span>{item.label}</span>
              </Link>
            );
          })}

          <Link
            to="/contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="Header__mobile-cta"
          >
            <LuCalendar />
            <span>Book Appointment</span>
          </Link>
        </div>
      </div>

      {/* MOBILE - Overlay */}
      {isMobileMenuOpen && (
        <div
          className="Header__overlay"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  );
}

export default Header;
