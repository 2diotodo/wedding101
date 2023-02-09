import './ServiceProcess02.css';

import { useNavigate } from 'react-router';
import ProgressBar from '../../components/common/ProgressBar';
import Grid2 from '@mui/material/Unstable_Grid2'; // Grid version 2
import { Button } from "@mui/material";

function ServiceProcess02 () {

    const navigate = useNavigate();
    const toProcess03 = () => {
      navigate('/user/service03');
    };

    return (
        <div className='service-process02'>
            <Grid2 container spacing={2}>
                <Grid2 xs={3}>
                <h1>Service Application</h1>
                </Grid2>

                <Grid2 xs={9}>
                    <ProgressBar steps={1}/>
                    <h2>개인정보 입력</h2>

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