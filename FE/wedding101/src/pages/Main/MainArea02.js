import './MainArea02.css';

import main02_1 from '../../assets/img/mainArea02_1.png';
const MainArea02 = () => {
  return (
    <div className='main-area02'>
      <div className='container' id='container_p2'>
        <div className='horizontalLayout' id='HL_p2_01'>
          <div className='verticalLayout' id='VL_p2_01'>
            <div className='title_explain'>
              <div className='title' id='title_p2_01'>Mobile Invitation</div>
              <div className='explainText' id='explain_p2_01'>설명 설명</div>
              <div className='explainText' id='explain_p2_02'>Memory Forever</div>
            </div>
            <div className='detailLayout'>
              <button className='detailButton'>자세히 보러가기</button>
              <div className='horizontalLayout' id='HL_p2_02'>
                <div className='indexIndicator' id='idx1'>1</div>
                <div className='indexIndicator' id='idx2'>2</div>
                <div className='indexIndicator' id='idx3'>3</div>
                <div className='indexIndicator' id='idx4'>4</div>
                <div className='indexIndicator' id='idx5'>5</div>
              </div>
            </div>
          </div>
          <div className='exampleSlider'>
            <img src={main02_1} alt='main02_1'></img>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default MainArea02;
