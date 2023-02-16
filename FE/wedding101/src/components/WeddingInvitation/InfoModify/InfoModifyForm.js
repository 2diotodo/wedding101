import './InfoModifyForm.css';
import {Modal, Box, Typography, TextField, Button} from '@mui/material';
import {useState} from 'react';
import axios from 'axios';

const BASEURL =  "https://wedding101.shop/api";
function UserModifyForm(props) {
    const [weddingDay, setWeddingDay] = useState(props.data.weddingDay)
    const [weddingHallName, setWeddingHallName] = useState(props.data.weddingHallName)
    const [weddingHallAddress, setWeddingHallAddress] = useState(props.data.weddingHallAddress)
    const [weddingHallNumber, setWeddingHallNumber] = useState(props.data.weddingHallNumber)
    const [groomPhoneNumber, setGroomPhoneNumber] = useState(props.data.groomPhoneNumber)
    const [bridePhoneNumber, setBridePhoneNumber] = useState(props.data.bridePhoneNumber)
    
    const changeWeddingDay=(e)=> {
        setWeddingDay(e.target.value)
    }
    const changeWeddingHallName=(e)=> {
        setWeddingHallName(e.target.value)
    }
    const changeWeddingHallAddress=(e)=> {
        setWeddingHallAddress(e.target.value)
    }
    const changeWeddingHallNumber=(e)=> {
        setWeddingHallNumber(e.target.value)
    }  
    const changeGroomPhoneNumber=(e)=> {
        setGroomPhoneNumber(e.target.value)
    }   
    const changeBridePhoneNumber=(e)=> {
        setBridePhoneNumber(e.target.value)
    }     

    return(
        <Modal  open={props.isOpen}
                onClose={props.doClose}
                className="Modal">
            <Box className="Modal__content">
                {/* Modal 창 제목 */}
                <Typography component="div" id="Modal__header">결혼 정보 수정</Typography>
                <Typography  component="div" id="Modal__body">
                    <h2>{props.data.groomName} & {props.data.brideName}님의 결혼 정보</h2>
                    <div className='IM-Division-Line'></div>
                    <div className='scrollable-form'>
                        <div className='info-item'>
                        <div>결혼 날짜 : </div>
                        <TextField  value={weddingDay} 
                                    onChange={changeWeddingDay}></TextField>
                        </div>
                        <div className='info-item'>
                        <div>웨딩홀 이름 : </div>
                        <TextField  value={weddingHallName} 
                                    onChange={changeWeddingHallName}></TextField>
                        </div>
                        <div className='info-item'>
                        <div>웨딩홀 주소 : </div>
                        <TextField  value={weddingHallAddress} 
                                    onChange={changeWeddingHallAddress}></TextField>
                        </div>
                        <div className='info-item'>
                        <div>웨딩홀 전화번호 : </div>
                        <TextField  value={weddingHallNumber} 
                                    onChange={changeWeddingHallNumber}></TextField>
                        </div>
                        <div className='info-item'>
                        <div>신랑 전화번호 : </div>
                        <TextField  value={groomPhoneNumber} 
                                    onChange={changeGroomPhoneNumber}></TextField>
                        </div>
                        <div className='info-item'>
                        <div>신부 전화번호 : </div>
                        <TextField  value={bridePhoneNumber} 
                                    onChange={changeBridePhoneNumber}></TextField>
                        </div>
                        <Button className = "user-modify-btn"
                            color = 'primary'
                            startIcon="✏️"
                            variant='contained'
                            size='medium'
                            >수정 완료</Button>
                    </div>
                </Typography>
            </Box>


        </Modal>
    );
}
export default UserModifyForm;