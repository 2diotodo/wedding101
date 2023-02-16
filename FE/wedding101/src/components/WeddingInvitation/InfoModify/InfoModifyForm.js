import './InfoModifyForm.css';
import {Modal, Box, Typography, TextField, Button} from '@mui/material';
import {useState} from 'react';
import axios from 'axios';

const BASEURL =  "https://wedding101.shop/api";
function UserModifyForm(props) {
    const [weddingDay, setWeddingDay] = useState(props.data.weddingDay)
    const [weddingHallName, setWeddingHallName] = useState(props.data.weddingHallName)
    const [weddingHallNumber, setWeddingHallNumber] = useState(props.data.weddingHallNumber)
    const [groomPhoneNumber, setGroomPhoneNumber] = useState(props.data.groomPhoneNumber)
    const [bridePhoneNumber, setBridePhoneNumber] = useState(props.data.bridePhoneNumber)
    
        
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
                        <div>이름이름이르</div>
                        <div>이름이름이르</div>
                        <div>이름이름이르</div>
                        <div>이름이름이르</div>
                        <div>이름이름이르</div>
                        <div>이름이름이르</div>
                        <div>이름이름이르</div>
                        <div>이름이름이르</div>
                        <div>이름이름이르</div>
                        <div>이름이름이르</div>
                        <div>이름이름이르</div>
                        <div>이름이름이르</div>
                        <div>이름이름이르</div>
                        <div>이름이름이르</div>
                        <div>이름이름이르</div>
                        <div>이름이름이르</div>
                        <div>이름이름이르</div>
                        <div>이름이름이르</div>
                        <div>이름이름이르</div>
                        <div>이름이름이르</div>
                        <div>이름이름이르</div>
                        <div>이름이름이르</div>
                        <div>이름이름이르</div>
                        <div>이름이름이르</div>
                        <div>이름이름이르</div>
                        <div>이름이름이르</div>
                        <div>이름이름이르</div>
                        <div>이름이름이르</div>
                        
                    </div>
                </Typography>
            </Box>


        </Modal>
    );
}
export default UserModifyForm;