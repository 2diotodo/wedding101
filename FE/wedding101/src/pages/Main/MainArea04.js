import './MainArea04.css';

import ProgressBar from '../../components/common/ProgressBar';

const MainArea04 = () => {
  const steps = ['Wedding101 서비스 신청', '모바일 청첩장 만들기', '앨범 생성'];
  return (
    <div className='main-area04'>
      <div className='container' id='main04'>
        <div style={{height:"20vh"}}>
          <div className='title'>Service Outline</div>
          <p>This is MainArea04!</p>
        </div>
      </div>
      
      
      <ProgressBar steps={steps}/>
    </div>
  );
};

export default MainArea04;
