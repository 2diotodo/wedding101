import './ServiceProcess04.css';

import { useState } from 'react';
import { useNavigate } from 'react-router';
import ProgressBar from '../../components/common/ProgressBar';
import Grid2 from '@mui/material/Unstable_Grid2'; // Grid version 2
import { Button } from "@mui/material";
import axios from 'axios';

function ServiceProcess04 () {
    const integratedInfo = JSON.parse(sessionStorage.getItem('integratedInfo'));
    const processForm = {
        ...integratedInfo,
    };
    const navigate = useNavigate();
    const submitWeddingInfo = () => {
        console.log(processForm);
        axios.post(`https://wedding101.shop/api/Info`, {
            headers : {"Authorization": "Bearer " + sessionStorage.accessToken},
            data : {
                brideAccountBank: processForm.brideAccountBank,
                brideAccountName: processForm.brideAccountName,
                brideAccountNumber: processForm.brideAccountNumber,
                brideFatherIsAlive: processForm.brideFatherIsAlive,
                brideFatherName: processForm.brideFatherName,
                brideMotherIsAlive: processForm.brideMotherIsAlive,
                brideMotherName: processForm.brideMotherName,
                brideName: processForm.brideName,
                bridePhoneNumber: processForm.bridePhoneNumber,
                brideRelation: processForm.brideRelation,
                groomAccountBank: processForm.groomAccountBank,
                groomAccountName: processForm.groomAccountName,
                groomAccountNumber: processForm.groomAccountNumber,
                groomFatherIsAlive: processForm.groomFatherIsAlive,
                groomFatherName: processForm.groomFatherName,
                groomMotherIsAlive: processForm.groomMotherIsAlive,
                groomMotherName: processForm.groomMotherName,
                groomName: processForm.groomName,
                groomPhoneNumber: processForm.groomPhoneNumber,
                groomRelation: processForm.groomRelation,
                weddingDay: processForm.weddingDay,
                weddingHallAddress: processForm.weddingHallAddress,
                weddingHallName: processForm.weddingHallName,
                weddingHallNumber: processForm.weddingHallNumber,
            }
        }).then(function (response) {
            console.log(response);
            console.log(response.data.message);
            if(response.status === 200){
                alert(`서비스 신청 완료되었습니다.`);
                navigate("/");
                window.scrollTo(0,0);
            }
        }).catch(function (error) {
            console.log(error)
            alert('에러 발생');
        });
    }

    return (
        <div className='service-process04'>
            <Grid2 container spacing={2}>
                <Grid2 xs={3}>
                <h1>Service Application</h1>
                </Grid2>

                <Grid2 xs={9}>
                <ProgressBar steps={['step1', 'step2', 'step3', 'step4']} activeStep={3} />
                    <h2>완료 버튼을 누르시면 서비스 신청이 완료됩니다.</h2>

                    <div className='buttons'>
                    <Button variant='contained' onClick={() => navigate(-1)}>이전</Button>
                    </div>
                    <div className='buttons'>
                    <Button variant='contained' onClick={submitWeddingInfo}>완료</Button>
                    </div>
                </Grid2>

            </Grid2>
        </div>
    )
}

export default ServiceProcess04;