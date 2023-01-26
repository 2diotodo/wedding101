import './MainArea01.css';

import main01_1 from '../../assets/img/mainArea01_1.png'
import main01_2 from '../../assets/img/mainArea01_2.png'
import main01_3 from '../../assets/img/mainArea01_3.png'
import main01_4 from '../../assets/img/mainArea01_4.png'
import main01_5 from '../../assets/img/mainArea01_5.png'
import main01_6 from '../../assets/img/mainArea01_6.png'
import GoServiceButton from '../../components/common/GoServiceButton';
const MainArea01 = () => {
    return (
        
        <div className='main-area'>

            <h1>MainArea01</h1>
            <p>This is MainArea01!</p>
            <img src={main01_6} alt='main01_6'></img>
            <img src={main01_5} alt='main01_5'></img>
            <img src={main01_4} alt='main01_4'></img>
            <img src={main01_3} alt='main01_3'></img>
            <img src={main01_2} alt='main01_2'></img>
            <img src={main01_1} alt='main01_1'></img>
            <GoServiceButton />
        </div>
    );
};

export default MainArea01;