import './ServiceProcess03.css';

import { TextField } from '@mui/material';
import { useNavigate } from 'react-router';
import { useState, useEffect } from 'react';
import ProgressBar from '../../components/common/ProgressBar';
import Grid2 from '@mui/material/Unstable_Grid2'; // Grid version 2
import { Button } from "@mui/material";
import DatePicker from "react-datepicker";
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";
import "react-datepicker/dist/react-datepicker.css";

const { kakao } = window;

function ServiceProcess03 () {

  useEffect(() => {
    const container = document.getElementById('mapContainer'); //지도를 담을 영역의 DOM 레퍼런스
    const options = { //지도를 생성할 때 필요한 기본 옵션
      center: new kakao.maps.LatLng(37.501274, 127.039620), //지도의 중심좌표.
      level: 1 //지도의 레벨(확대, 축소 정도)
    };
    const map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴
  })

  const [weddingDateTime, setWeddingDateTime] = useState(setHours(setMinutes(new Date(), 0),9));
  const [weddingInfo, setWeddingInfo] = useState({
    weddingHallName: "string",
    weddingHallAddress: "string",
    weddingHallNumber: "string",
    weddingDay: "string"
  })

  const onWeddingInfoChange = (e) => {
    setWeddingInfo({
      ...weddingInfo,
      [e.target.id] : e.target.value
    })
  }

  const navigate = useNavigate();

  const toProcess04 = () => {
    let integratedInfo = JSON.parse(sessionStorage.getItem('integratedInfo'));
    integratedInfo.weddingHallName = weddingInfo.weddingHallName;
    integratedInfo.weddingHallAddress = weddingInfo.weddingHallAdress;
    integratedInfo.weddingHallNumber = weddingInfo.weddingHallNumber;
    integratedInfo.weddingDay = weddingDateTime.toISOString()
    console.log(integratedInfo)
    sessionStorage.setItem('integratedInfo', JSON.stringify(integratedInfo));
    navigate('/user/service04');
    window.scrollTo(0,0);
  };

    return (
        <div className='service-process03'>
          <Grid2 container spacing={2}>
            <Grid2 lg={3} sm={2}>
              <div style={{position: 'fixed', fontSize: '5vh', fontFamily:'Bakbak One'}}>
                <div style={{position: 'relative', left: '20%'}}>
                  SERVICE<br></br>
                  APPLICATION
                </div>            
              </div>
            </Grid2>
            <Grid2 lg={9} sm={10}>
              <ProgressBar steps={['step1', 'step2', 'step3', 'step4']} activeStep={2} />
              <h2>예식장 정보 입력</h2>
              <br></br>
              <div className='wedLocDayContainer'>
                <div className='horizontalLayout' id='HL_process03'>
                  <div className='verticalLayout' id='process03_inputArea'>
                    <p style={{fontSize: '2vh'}}>예식장</p>
                    <div className='horizontalLayout spaceBetween' >
                      <TextField className='textInputField'/>
                      <Button>검색</Button>
                    </div>
                    <br></br>
                    <p style={{fontSize: '2vh'}}>예식장 이름</p>
                    <TextField className='textInputField' id='weddingHallName' onChange={onWeddingInfoChange}/>
                    <br></br>
                    <p style={{fontSize: '2vh'}}>예식장 위치</p>
                    <TextField className='textInputField' id='weddingHallAddress' onChange={onWeddingInfoChange}/>
                    <br></br>
                    <p style={{fontSize: '2vh'}}>예식장 상세</p>
                    <TextField className='textInputField' id='weddingHallNumber' onChange={onWeddingInfoChange} placeholder='홀 번호 / 기타'/>
                    <br></br>
                    <div className='horizontalLayout spaceBetween'>
                      <p style={{width: '30%', fontSize: '2vh'}}>예식 날짜</p>
                      <DatePicker
                        minDate={new Date()}
                        selected={weddingDateTime}
                        onChange={date => setWeddingDateTime(date)}/>
                    </div>
                    <div className='horizontalLayout spaceBetween'>
                      <p style={{width: '30%', fontSize: '2vh'}}>예식 시간</p>
                      <DatePicker
                        selected={weddingDateTime}
                        showTimeSelect
                        showTimeSelectOnly
                        minTime={setHours(setMinutes(new Date(),0),9)}
                        maxTime={setHours(setMinutes(new Date(),0),22)}
                        timeIntervals={30}
                        timeCaption="Time"
                        dateFormat="HH:mm"
                        timeFormat="HH:mm"
                        onChange={time => {setWeddingDateTime(time);
                        console.log(time)}}
                        />
                    </div>
                  </div>
                  <div id='mapContainer'></div>
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
    )
}

export default ServiceProcess03;