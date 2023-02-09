import './ServiceProcess04.css';

import { useState } from 'react';
import { useNavigate } from 'react-router';
import ProgressBar from '../../components/common/ProgressBar';
import Grid2 from '@mui/material/Unstable_Grid2'; // Grid version 2
import { Button } from "@mui/material";

function ServiceProcess04 () {
    const [processForm, setProcessForm] = useState({
        infoSeq: '',
        userSeq: '',
        weddingDay: '',
        weddingHallName: '',
        weddingHalladdress: '',
        weddingHallNumber: '',
        groomName: '',
        brideName: '',
        groomPhoneNumber: '',
        bridePhoneNumber: '',
        groomAccountNumber: '',
        groomAccountBank: '',
        groomAccountName: '',
        brideAccountNumber: '',
        brideAccountBank: '',
        brideAccountName: '',
        groomRelation: '',
        brideRelation: '',
        templateSeq: '',
        photoUrl01: '',
        photoUrl02: '',
        templateHeader: '',
        templateFooter: '',
        templateEtc: '',
        createdAt: '',
        updatedAt: '',
        isValid: '',

    });

    const navigate = useNavigate();
    const toProcess04 = () => {
      navigate('/user/service04');
    };

    return (
        <div className='service-process04'>
            <Grid2 container spacing={2}>
                <Grid2 xs={3}>
                <h1>Service Application</h1>
                </Grid2>

                <Grid2 xs={9}>
                <ProgressBar steps={['step1', 'step2', 'step3', 'step4']} activeStep={3} />
                    <h2>서비스 신청이 완료되었습니다.</h2>

                    <div className='buttons'>
                    <Button variant='contained' onClick={() => navigate(-1)}>이전</Button>
                    </div>
                    <div className='buttons'>
                    <Button variant='contained' type='submit'>다음</Button>
                    </div>
                </Grid2>

            </Grid2>
        </div>
    )
}

export default ServiceProcess04;