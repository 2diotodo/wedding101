import './MainArea02.css';

import main02_1 from '../../assets/img/mainArea02_1.png';
import InvitationForm from '../../components/WeddingInvitation/InvitationForm';
const MainArea02 = () => {
  return (
    <div className='main-area02'>
      <h1>MainArea02</h1>
      <p>This is MainArea02!</p>
      <div className='area'>
      <div className='side-territory'>
      <img src={main02_1} alt='main02_1'></img>
      </div>
      <div className='invitation-form'>
      <InvitationForm />
      </div>
      </div>
    </div>
  );
};

export default MainArea02;
