import './UserInvitation.css';

import React from 'react';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import ProgressBar from '../../../components/common/ProgressBar';
import InvitationForm from '../../../components/WeddingInvitation/InvitationForm';
import Slider from 'react-slick';
import { Button } from '@mui/material';
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function UserInvitation(){
    const settings = {
        dots: true, // 슬라이드 아래 점표시
        infinite: true, // 무한반복
        speed: 500, // 넘어가는 속도
        slidesToShow: 3,    // 화면에 보일 슬라이드 수
        slidesToScroll: 1,  // 스크롤 단위
        centerMode: true,
        centerPadding: '0px', // 슬라이드 끝쪽 이미지 안잘리기
    };

    return(
        <div className="user-invitation">
            <Grid2 container spacing={2}>
                 <Grid2 lg={3} sm={2}>
                    <h1>Mobile Invitation</h1>
                </Grid2>
                <Grid2 lg={8} sm={10}>
                <br /><br /><br /><br /><br />
                    <ProgressBar />
                    <h2>모바일 청첩장 템플릿 선택하기</h2>
                    <Slider {...settings}>
                        <div>
                            <InvitationForm />
                        </div>
                        <div>
                            <InvitationForm />
                        </div>
                        <div>
                            <InvitationForm />
                        </div>
                        <div>
                            <InvitationForm />
                        </div>
                        <div>
                            <InvitationForm />
                        </div>
                    </Slider>
                    <Button className='sel-button' variant='contained'>선택</Button>
                    <Button className='cancel-button' variant='contained'>취소</Button>
                </Grid2>
            </Grid2>
        </div>
    );
}

export default UserInvitation;