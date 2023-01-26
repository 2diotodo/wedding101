import './MainArea02.css';

import main02_1 from '../../assets/img/mainArea02_1.png';
import GuestInvitation from '../../components/weddingInvitation/GusetInvitation/GuestInvitation';

const MainArea02 = () => {
  return (
    <div className='main-area02'>
      <h1>MainArea02</h1>
      <p>This is MainArea02!</p>
      <img src={main02_1} alt='main02_1'></img>
      <GuestInvitation />
    </div>
  );
};

export default MainArea02;
