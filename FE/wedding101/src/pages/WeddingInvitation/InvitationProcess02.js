// 청첩장 프로세스2: 사진 업로드
import './InvitationProcess02.css';

import { useNavigate } from 'react-router';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import {Button} from '@mui/material/';
import ProgressBar from '../../components/common/ProgressBar';
import InvitationForm from '../../components/WeddingInvitation/InvitationForm';
import UploadMedia from '../../components/common/UploadMedia';

const InvitationProcess02 = () => {
    

    const navigate = useNavigate();
    const toProcess03 = () => {
      navigate('/invitation03');
    };


    return(
        <div>
            <Grid2 container spacing={3}>
                 <Grid2 lg={3} sm={2}>
                    <h1>Mobile Invitation</h1>
                </Grid2>
                <Grid2 lg={9} sm={10}>
                <div className='process-main'>
                    <ProgressBar />
                    <h2>모바일 청첩장 사진 넣기</h2>
                        <div className='invitation-item'>
                            <InvitationForm />
                        </div>
                        
                        </div>
                    <div className='upload-input'>
                    <div className='upload01'>
                        <UploadMedia />
                    </div>
                    <div className='upload02'>
                        <UploadMedia />
                    </div>
                    </div>
                    <div className='buttons'>
                    <Button variant='contained' onClick={() => navigate(-1)}>이전</Button>
                    </div>
                    <div className='buttons'>
                    <Button variant='contained' onClick={toProcess03}>다음</Button>
                    </div>
                </Grid2>
            </Grid2>
        </div>
    );
}

export default InvitationProcess02;