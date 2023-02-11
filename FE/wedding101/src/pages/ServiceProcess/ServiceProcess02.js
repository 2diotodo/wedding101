import './ServiceProcess02.css';

import { useNavigate } from 'react-router';
import { useState } from 'react';
import ProgressBar from '../../components/common/ProgressBar';
import Grid2 from '@mui/material/Unstable_Grid2'; // Grid version 2
import { Button } from '@mui/material';
import WeddingInfoForm from '../../components/serviceProcess/WeddingInfoForm';

function ServiceProcess02(props) {
  const navigate = useNavigate();
  const [groomInfo, setGroomInfo] = useState({
    gender: "",
    name: "",
    phoneNumber: "",
    accountBank: "",
    accountNumber: "",
    accountName: "",
    siblingOrder: "",
    fatherName: "",
    motherName: "",
    fatherAlive: "true",
    motherAlive: "true"
  });

  const [brideInfo, setBrideInfo] = useState({
    gender: "",
    name: "",
    phoneNumber: "",
    accountBank: "",
    accountNumber: "",
    accountName: "",
    siblingOrder: "",
    fatherName: "",
    motherName: "",
    fatherAlive: "true",
    motherAlive: "true"
  });

  const onChangeGroomInfo = (e) => {
    setGroomInfo({
        ...groomInfo,
        [e.target.id]: e.target.value,
    });
    console.log(e.target.id, e.target.value)
  }

  const onChangeBrideInfo = (e) => {
    setBrideInfo({
        ...brideInfo,
        [e.target.id]: e.target.value,
    });
    console.log(e.target.id, e.target.value)
  }

  const toProcess03 = () => {
    
    if (groomInfo.name === "" || brideInfo.name === "") {
      alert('정보가 입력되지 않았습니다.');
      return;
    }
    else navigate('/user/service03');
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
          <div className='infoContainer'>
            <WeddingInfoForm bridegroom={0} onChangeInfo={onChangeGroomInfo}/>
            <WeddingInfoForm bridegroom={1} onChangeInfo={onChangeBrideInfo}/>
          </div>
          <div className='buttons'>
            <Button variant='contained' onClick={() => navigate(-1)}>
              이전
            </Button>
          </div>
          <div className='buttons'>
            <Button variant='contained' onClick={toProcess03}>
              다음
            </Button>
          </div>
        </Grid2>
      </Grid2>
    </div>
  );
}

export default ServiceProcess02;
