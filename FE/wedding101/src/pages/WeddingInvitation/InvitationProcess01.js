// 청첩장 프로세스1: 템플릿 선택
import './InvitationProcess01.css';

import { useNavigate } from 'react-router';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import {Button} from '@mui/material/';
import Slider from 'react-slick';
import InvitationForm from '../../components/WeddingInvitation/InvitationForm';
import ProgressBar from '../../components/common/ProgressBar';

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const InvitationProcess01 = () => {
    const settings = {
        dots: true, // 슬라이드 아래 점표시
        infinite: true, // 무한반복
        speed: 500, // 넘어가는 속도
        slidesToShow: 1,    // 화면에 보일 슬라이드 수
        slidesToScroll: 1,  // 스크롤 단위
        centerMode: true,
        centerPadding: '0px', // 슬라이드 끝쪽 이미지 안잘리기
    };

    const navigate = useNavigate();
    const toProcess02 = () => {
      navigate('/invitation02');
    };

    return(
        <div className='process01'>
            <Grid2 container spacing={3}>
                 <Grid2 lg={3} sm={2}>
                    <h1>Mobile Invitation</h1>
                </Grid2>
                <Grid2 lg={9} sm={10}>
                    <div className='process-main'>
                    <ProgressBar steps={['step1', 'step2', 'step3', 'step4']} activeStep={0} />
                    <h2>모바일 청첩장 템플릿 선택하기</h2>
                    <Slider {...settings}>
                        <div className='invitation-item'>
                            <InvitationForm />
                        </div>
                        <div className='invitation-item'>
                            <InvitationForm />
                        </div>
                        <div className='invitation-item'>
                            <InvitationForm />
                        </div>
                        <div className='invitation-item'>
                            <InvitationForm />
                        </div>
                        <div className='invitation-item'>
                            <InvitationForm />
                        </div>
                    </Slider>
                    </div>
                    <div className='buttons'>
                    <Button variant='contained' onClick={() => navigate("/")}>메인으로</Button>
                    </div>
                    <div className='buttons'>
                    <Button variant='contained' onClick={toProcess02}>다음</Button>
                    </div>
                </Grid2>
            </Grid2>
        </div>
    );
}

export default InvitationProcess01;