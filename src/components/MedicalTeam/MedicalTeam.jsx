import { LuCalendarCheck, LuPhone } from 'react-icons/lu';
import './MedicalTeam.scss';

function MedicalTeam() {
  const team = [
    {
      id: 1,
      name: 'Ivan Duarte',
      credentials: 'DPT, OCS',
      role: 'Physical Therapist',
      image: 'https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&dpr=2',
      yearsWithUs: 'Since 2020',
      specialty: 'Orthopedic & Sports Rehabilitation',
      bio: 'Board-certified orthopedic specialist with expertise in post-surgical rehabilitation and sports injury recovery. Completed advanced training in manual therapy and movement optimization.'
    },
    {
      id: 2,
      name: 'Sarah Mitchell',
      credentials: 'PTA, CPT',
      role: 'Physical Therapist Assistant',
      image: 'https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&dpr=2',
      yearsWithUs: 'Since 2021',
      specialty: 'Therapeutic Exercise & Patient Care',
      bio: 'Licensed PTA specializing in therapeutic exercise programs and patient education. Dedicated to helping patients achieve their rehabilitation goals through personalized care.'
    },
    {
      id: 3,
      name: 'Michael Rodriguez',
      credentials: 'OTD, CHT',
      role: 'Occupational Therapist',
      image: 'https://images.pexels.com/photos/5452268/pexels-photo-5452268.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&dpr=2',
      yearsWithUs: 'Since 2019',
      specialty: 'Hand Therapy & ADL Training',
      bio: 'Certified hand therapist with doctorate in occupational therapy. Specializes in upper extremity rehabilitation and helping patients regain independence in daily activities.'
    },
    {
      id: 4,
      name: 'Emily Chen',
      credentials: 'RN, BSN',
      role: 'Registered Nurse',
      image: 'https://images.pexels.com/photos/8376277/pexels-photo-8376277.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&dpr=2',
      yearsWithUs: 'Since 2022',
      specialty: 'Patient Assessment & Care Coordination',
      bio: 'Experienced RN providing comprehensive patient assessments and coordinating care plans. Specializes in pain management and post-procedure recovery support.'
    },
    {
      id: 5,
      name: 'James Thompson',
      credentials: 'MS, CSCS',
      role: 'Sports Medicine Specialist',
      image: 'https://images.pexels.com/photos/6455925/pexels-photo-6455925.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&dpr=2',
      yearsWithUs: 'Since 2018',
      specialty: 'Athletic Performance & Injury Prevention',
      bio: 'Certified strength and conditioning specialist with masters in sports medicine. Works with athletes of all levels to optimize performance and prevent injuries.'
    },
    {
      id: 6,
      name: 'Maria Gonzalez',
      credentials: 'LMT, NCTMB',
      role: 'Licensed Massage Therapist',
      image: 'https://images.pexels.com/photos/7176325/pexels-photo-7176325.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&dpr=2',
      yearsWithUs: 'Since 2021',
      specialty: 'Therapeutic Massage & Myofascial Release',
      bio: 'Nationally certified massage therapist specializing in medical massage, trigger point therapy, and soft tissue mobilization for pain relief and recovery.'
    },
    {
      id: 7,
      name: 'David Park',
      credentials: 'MS, CEP',
      role: 'Exercise Physiologist',
      image: 'https://images.pexels.com/photos/6740756/pexels-photo-6740756.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&dpr=2',
      yearsWithUs: 'Since 2020',
      specialty: 'Clinical Exercise & Cardiac Rehabilitation',
      bio: 'Clinical exercise physiologist designing evidence-based exercise programs for patients with chronic conditions, post-cardiac events, and metabolic disorders.'
    },
    {
      id: 8,
      name: 'Lisa Anderson',
      credentials: 'BS, CPC',
      role: 'Patient Care Coordinator',
      image: 'https://images.pexels.com/photos/7176305/pexels-photo-7176305.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&dpr=2',
      yearsWithUs: 'Since 2019',
      specialty: 'Patient Experience & Scheduling',
      bio: 'Dedicated coordinator ensuring seamless patient experience from first contact through treatment completion. Manages scheduling, insurance verification, and care navigation.'
    }
  ];

  return (
    <section id="team" className="MedicalTeam">
      <div className="MedicalTeam__container">
        {/* Compact Header */}
        <div className="MedicalTeam__header">
          <h2 className="MedicalTeam__title">
            World-Class <span className="MedicalTeam__title-accent">Medical Team</span>
          </h2>
          <p className="MedicalTeam__subtitle">
            Our distinguished physicians are leaders in their fields, combining decades of experience with cutting-edge medical knowledge to provide exceptional patient care.
          </p>
        </div>

        {/* Compact Team Grid */}
        <div className="MedicalTeam__grid">
          {team.map((member) => (
            <div key={member.id} className="MedicalTeam__card">
              {/* Photo */}
              <div className="MedicalTeam__photo-wrapper">
                <img
                  src={member.image}
                  alt={member.name}
                  className="MedicalTeam__photo"
                />
              </div>

              {/* Info */}
              <div className="MedicalTeam__content">
                <div className="MedicalTeam__header-info">
                  <div className="MedicalTeam__name-block">
                    <h3 className="MedicalTeam__name">{member.name}</h3>
                    <div className="MedicalTeam__credentials">{member.credentials}</div>
                  </div>
                  <div className="MedicalTeam__year-badge">{member.yearsWithUs}</div>
                </div>

                <div className="MedicalTeam__role">{member.role}</div>
                <div className="MedicalTeam__specialty">{member.specialty}</div>

                <p className="MedicalTeam__bio">{member.bio}</p>

                <a href="tel:+1234567890" className="MedicalTeam__contact-button">
                  <LuPhone size={16} />
                  Schedule Appointment
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MedicalTeam;
