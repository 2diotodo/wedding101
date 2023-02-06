import './UserInvitation.css';

import React from 'react';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import ProgressBar from '../../components/common/ProgressBar';
import { Button } from '@mui/material';
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function UserInvitation(){

    return(
        <div className="user-invitation">
            <Grid2 container spacing={2}>
                 <Grid2 lg={3} sm={2}>
                    <h1>Mobile Invitation</h1>
                </Grid2>
                <Grid2 lg={9} sm={10}>
                <br /><br /><br /><br /><br />
                    <ProgressBar />
                    <h2>모바일 청첩장 템플릿 선택하기</h2>
                    
                    <Button className='sel-button' variant='contained'>선택</Button>
                    <Button className='cancel-button' variant='contained'>취소</Button>
                </Grid2>
            </Grid2>
        </div>
    );
}

export default UserInvitation;