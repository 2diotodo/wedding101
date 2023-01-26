import './MainArea02.css';

import main02_1 from '../../assets/img/mainArea02_1.png'
import GoServiceButton from '../../components/common/GoServiceButton';
import GuestInvitation from '../../components/WeddingInvitation/GusetInvitation/GuestInvitation';


const MainArea02 = () => {
    return (
        <div>
            <h1>MainArea02</h1>
            <p>This is MainArea02!</p>
            <img src={main02_1} alt='main02_1'></img>
            <GuestInvitation />
            <GoServiceButton />
        </div>
    );
};

export default MainArea02;