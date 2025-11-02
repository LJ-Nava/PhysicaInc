import {
  LuCalendarCheck,
  LuClipboardCheck,
  LuUserCheck,
  LuStethoscope
} from 'react-icons/lu';
import './PatientJourney.scss';

function PatientJourney() {
  const steps = [
    {
      id: 1,
      icon: <LuCalendarCheck />,
      title: 'Schedule Appointment',
      description: 'Book online, call, or use our mobile app. Choose your preferred doctor, date, and time.',
      duration: '2 minutes'
    },
    {
      id: 2,
      icon: <LuClipboardCheck />,
      title: 'Pre-Visit Preparation',
      description: 'Complete health forms online, verify insurance, and receive appointment reminders.',
      duration: '5-10 minutes'
    },
    {
      id: 3,
      icon: <LuUserCheck />,
      title: 'Check-In & Registration',
      description: 'Arrive 15 minutes early. Quick check-in at our front desk or use self-service kiosks.',
      duration: '5 minutes'
    },
    {
      id: 4,
      icon: <LuStethoscope />,
      title: 'Medical Consultation',
      description: 'Meet with your physician for comprehensive examination and personalized care.',
      duration: '30-45 minutes'
    }
  ];

  return (
    <section className="PatientJourney">
      <div className="PatientJourney__container">
        {/* Compact Header */}
        <div className="PatientJourney__header">
          <h2 className="PatientJourney__title">
            From <span className="PatientJourney__title-accent">Appointment to Recovery</span>
          </h2>
          <p className="PatientJourney__subtitle">
            Your seamless physical therapy journey in four simple steps
          </p>
        </div>

        {/* Compact Grid Layout */}
        <div className="PatientJourney__grid">
          {steps.map((step, index) => (
            <div key={step.id} className="PatientJourney__card">
              <div className="PatientJourney__card-header">
                <div className="PatientJourney__card-icon">
                  {step.icon}
                </div>
                <div className="PatientJourney__card-number">{step.id}</div>
              </div>
              <h3 className="PatientJourney__card-title">{step.title}</h3>
              <p className="PatientJourney__card-description">{step.description}</p>
              <div className="PatientJourney__card-duration">
                <LuCalendarCheck size={14} />
                <span>{step.duration}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PatientJourney;
