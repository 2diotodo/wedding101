import './MainArea03.css';
import main03_1 from '../../assets/img/mainArea03_1.png'
import main03_2 from '../../assets/img/mainArea03_2.png'
import GoServiceButton from '../../components/common/GoServiceButton';


const MainArea03 = () => {
    return (
        <div>
            <h1>MainArea03</h1>
            <p>This is MainArea03!</p>
            <img src={main03_2} alt='main03_2'></img>
            <img src={main03_1} alt='main03_1'></img>
            <GoServiceButton />
        </div>
    );
};

export default MainArea03;