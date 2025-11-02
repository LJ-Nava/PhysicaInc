import MedicalTeam from '../../components/MedicalTeam';
import Testimonials from '../../components/Testimonials';
import './TeamPage.scss';

function TeamPage() {
  return (
    <div className="TeamPage">
      <MedicalTeam />
      <Testimonials />
    </div>
  );
}

export default TeamPage;
