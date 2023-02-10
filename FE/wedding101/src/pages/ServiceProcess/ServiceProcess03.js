import './ServiceProcess03.css';

import { useNavigate } from 'react-router';
import ProgressBar from '../../components/common/ProgressBar';
import Grid2 from '@mui/material/Unstable_Grid2'; // Grid version 2
import { Button } from "@mui/material";

function ServiceProcess03 () {

    const navigate = useNavigate();
    const toProcess04 = () => {
      navigate('/user/service04');
    };

    return (
        <div className='service-process03'>
            <Grid2 container spacing={2}>
                <Grid2 xs={3}>
                <h1>Service Application</h1>
                </Grid2>

                <Grid2 xs={9}>
                <ProgressBar steps={['step1', 'step2', 'step3', 'step4']} activeStep={2} />
                    <h2>예식장 정보 입력</h2>

                    <div className='buttons'>
                    <Button variant='contained' onClick={() => navigate(-1)}>이전</Button>
                    </div>
                    <div className='buttons'>
                    <Button variant='contained' onClick={toProcess04}>다음</Button>
                    </div>
                </Grid2>

            </Grid2>
        </div>
    )
}

export default ServiceProcess03;