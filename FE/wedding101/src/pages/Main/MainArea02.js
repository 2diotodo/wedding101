import './MainArea02.css';

import main02_1 from '../../assets/img/mainArea02_1.png';
import InvitationProcess01 from '../../components/WeddingInvitation/InvitationProcess01';

const MainArea02 = () => {
  return (
    <div className='main-area02'>
      <h1>MainArea02</h1>
      <p>This is MainArea02!</p>
      {/* <img src={main02_1} alt='main02_1'></img> */}
      <InvitationProcess01 />
    </div>
  );
};

export default MainArea02;
