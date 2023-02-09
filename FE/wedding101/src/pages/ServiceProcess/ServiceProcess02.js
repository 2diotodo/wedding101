import './ServiceProcess02.css';

import { useNavigate } from 'react-router';
import ProgressBar from '../../components/common/ProgressBar';
import Grid2 from '@mui/material/Unstable_Grid2'; // Grid version 2
import { Button } from "@mui/material";
import WeddingInfoForm from '../../components/serviceProcess/WeddingInfoForm';

function ServiceProcess02 (props) {

    const navigate = useNavigate();
    const toProcess03 = () => {
      navigate('/user/service03');
    };

    return (
        <div className='service-process02'>
            <Grid2 container spacing={2}>
                <Grid2 lg={3} sm={2}>
                <h1>Service Application</h1>
                </Grid2>

                <Grid2 lg={9} sm={10}>
                <ProgressBar steps={['step1', 'step2', 'step3', 'step4']} activeStep={1} />
                    <h2>개인정보 입력</h2>
                    <WeddingInfoForm info={props.processForm}/>
                    <WeddingInfoForm />
                    <div className='buttons'>
                    <Button variant='contained' onClick={() => navigate(-1)}>이전</Button>
                    </div>
                    <div className='buttons'>
                    <Button variant='contained' onClick={toProcess03}>다음</Button>
                    </div>
                </Grid2>

            </Grid2>
        </div>
    )
}

export default ServiceProcess02;