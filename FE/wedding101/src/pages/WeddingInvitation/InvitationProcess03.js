// 청첩장 프로세스3: 문구 변경
import './InvitationProcess03.css';

import { useNavigate } from 'react-router';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import {Button} from '@mui/material/';
import ProgressBar from '../../components/common/ProgressBar';
import InvitationForm from '../../components/WeddingInvitation/InvitationForm';
import UploadText from '../../components/WeddingInvitation/UploadText';

const InvitationProcess03 = () => {
    

    const navigate = useNavigate();
    const toProcess04 = () => {
      navigate('/invitation04');
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
                    <h2>모바일 청첩장 문구 변경</h2>
                    <div className='text-form'>
                        <div className='invitation-form'>
                            <InvitationForm />
                        </div>
                        <div className='upload-text'>
                            <UploadText />
                        </div>
                    </div>
                    </div>
                        
                    <div className='buttons'>
                    <Button variant='contained' onClick={() => navigate(-1)}>이전</Button>
                    </div>
                    <div className='buttons'>
                    <Button variant='contained' onClick={toProcess04}>다음</Button>
                    </div>
                </Grid2>
            </Grid2>
        </div>
    );
}

export default InvitationProcess03;