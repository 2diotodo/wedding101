import './ServiceProcess01.css';

import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import ProgressBar from '../../components/common/ProgressBar';
import Grid2 from '@mui/material/Unstable_Grid2'; // Grid version 2
import ServiceTerms from '../../data/serviceTerms';
import { Button } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

function ServiceProcess01() {
  const [isCheckAll, setIsCheckAll] = useState(false);   // 모든 항목 체크확인 state
  const [useCheck, setUseCheck] = useState(false);
  const [userCheck, setUserCheck] = useState(false);
  const [mapCheck, setMapCheck] = useState(false);
  const [promoCheck, setPromoCheck] = useState(false);

  const steps = [
    'STEP1',
    'STEP2',
    'STEP3',
    'STEP4',
    'STEP5',
  ];

  const allBtnEvent = () => {
    if(isCheckAll===false){
      setIsCheckAll(true);
      setUseCheck(true);
      setUserCheck(true);
      setMapCheck(true);
      setPromoCheck(true);
    }else {
      setIsCheckAll(false);
      setUseCheck(false);
      setUserCheck(false);
      setMapCheck(false);
      setPromoCheck(false);
    }
  };

  const useBtnEvent = () => {
    if(useCheck === false) {
      setUseCheck(true);
    }else{
      setUseCheck(false);
    }
  }
  const userBtnEvent = () => {
    if(userCheck === false) {
      setUserCheck(true);
    }else{
      setUserCheck(false);
    }
  }
  const mapBtnEvent = () => {
    if(mapCheck === false) {
      setMapCheck(true);
    }else{
      setMapCheck(false);
    }
  }
  const promoBtnEvent = () => {
    if(promoCheck === false) {
      setPromoCheck(true);
    }else{
      setPromoCheck(false);
    }
  }

  useEffect(() => {
    if(useCheck===true && userCheck===true && mapCheck===true && promoCheck===true){
      setIsCheckAll(true);
    }else{
      setIsCheckAll(false);
    }
  }, [useCheck, userCheck, mapCheck, promoCheck])

  const navigate = useNavigate();
  const toProcess02 = () => {
    navigate('/user/service02');
  };

  return (
    <div className='service-process01'>
      <Grid2 container spacing={2}>
        <Grid2 lg={3} sm={2}>
          <h1>Service Application</h1>
        </Grid2>

        <Grid2 lg={9} sm={10}>
          <ProgressBar steps={['step1', 'step2', 'step3', 'step4']} activeStep={0} />
          <h2>서비스 이용 약관 동의</h2>
          <CheckCircleOutlineIcon />
            <input type='checkbox' id='all-class-checkbox' onChange={allBtnEvent} checked={isCheckAll} />
             <label for='all-class-checkbox'>WEDDING 101 이용약관(필수), 개인정보 수집 및 이용약관(필수), 위치기반 서비스 이용약관(필수), 프로모션 정보 수집(선택)에 모두 동의 합니다.</label>
            <div className='contentbox'>
              <div className='article-form'>
                <input type='checkbox' id='useCheck' checked={useCheck} onChange={useBtnEvent}/>
                <label for='useCheck'>yayaya<span className='required'>(필수)</span></label>
              </div>
              <div className='article-form'>
                <input type='checkbox' id='userCheck' checked={userCheck} onChange={userBtnEvent}/>
                <label for='userCheck'>hohoho<span className='required'>(필수)</span></label>
              </div>
              <div className='article-form'>
                <input type='checkbox' id='mapCheck' checked={mapCheck} onChange={mapBtnEvent}/>
                <label for='mapCheck'>gugugu<span className='required'>(필수)</span></label>
              </div>
              <div className='article-form'>
                <input type='checkbox' id='promoCheck' checked={promoCheck} onChange={promoBtnEvent}/>
                <label for='promoCheck'><ServiceTerms terms={3}/> <span className='not-required'>(선택)</span></label>
              </div>

            </div>
          <div className='buttons'>
          <Button variant='contained' onClick={() => navigate("/")}>메인으로</Button>
          </div>
          <div className='buttons'>
          <Button variant='contained' onClick={toProcess02}>다음</Button>
          </div>
        </Grid2>
      </Grid2>
    </div>
  );
}

export default ServiceProcess01;
