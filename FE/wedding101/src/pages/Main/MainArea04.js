import './MainArea04.css';
import { Step, Stepper, StepLabel } from "@mui/material";
import ProgressBar from '../../components/common/ProgressBar';

const MainArea04 = () => {
  const steps = [{
    label : 'Wedding101 서비스 신청',
    content : ['Wedding101 서비스 가입',
    '상단의 서비스 신청 탭 이동',
    '예비 부부 정보 입력',
    '예식장 정보 입력']
  }, {
    label : '모바일 청첩장 만들기',
    content : ['총 101가지 청첩장 템플릿 보유',
    '간편한 UI 내에서 사진, 문구 입력',
    '생성한 이후에도 무한 수정 가능',
    '청첩장 생성 이후 공유']
  }, {
    label : '앨범 생성',
    content : ['방문객에게선 현장 사진/영상을',
    '오지 못한 사람들에게도 축하 영상을 저장']
  }]
  return (
    <div className='main-area04'>
      <div className='container' id='main04'>
        <div className='title'>Service Outline</div>
        <p>This is MainArea04!</p>
        <div>
          <Stepper activeStep={0} alternativeLabel>
            {steps.map((level) => (
              <Step key={level.label}>
                <StepLabel>{level.label}</StepLabel>
                <ul>
                  <li>
                    1
                  </li>
                </ul>
              </Step>
            ))}
          </Stepper>
        </div>
        
      </div>
    </div>
  );
};

export default MainArea04;
