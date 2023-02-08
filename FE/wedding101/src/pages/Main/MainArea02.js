import './MainArea02.css';

import main02_1 from '../../assets/img/mainArea02_1.png';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import InvitationForm from '../../components/WeddingInvitation/InvitationForm';

const MainArea02 = () => {
  const settings = {
    dots: true, // 슬라이드 아래 점표시
    infinite: true, // 무한반복
    speed: 500, // 넘어가는 속도
    slidesToShow: 3,    // 화면에 보일 슬라이드 수
    slidesToScroll: 1,  // 스크롤 단위
    centerMode: true,
    centerPadding: '0px', // 슬라이드 끝쪽 이미지 안잘리기
  };
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
            </div>
          </div>
        </div>
          <Slider {...settings}>
              <div>
                <InvitationForm/>
              </div>
              <div>
                <InvitationForm/>
              </div>
              <div>
                <InvitationForm/>
              </div>
              <div>
                <InvitationForm/>
              </div>
              <div>
                <InvitationForm/>
              </div>
          </Slider>
      </div>
      
    </div>
  );
};

export default MainArea02;
