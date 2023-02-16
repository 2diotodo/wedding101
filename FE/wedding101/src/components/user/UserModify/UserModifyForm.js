import './UserModifyForm.css';
import {Modal, Box, Typography, TextField, Button} from '@mui/material';
import {useState} from 'react';
import axios from 'axios';
import { useRef } from 'react';

const BASEURL =  "https://wedding101.shop/api";
function UserModifyForm(props) {
    const [id, setId] = useState(props.data.userId)
    const [name, setName] = useState(props.data.userName)
    const [nickname, setNickname] = useState(props.data.userNickname)
    const [email, setEmail] = useState(props.data.userEmail)

    const [idChange, setIdChange] = useState(false)
    const [nicknameChange, setNicknameChange] = useState(false)
    const [emailChange, setEmailChange] = useState(false)
    
    const [idDuplicateCheck, setIdDuplicateCheck] = useState("중복확인")
    const [nicknameDuplicateCheck, setNicknameDuplicateCheck] = useState("중복확인")
    const [emailDuplicateCheck, setEmailDuplicateCheck] = useState("중복확인")

    const [possibleId, setPossibleId] = useState(true)
    const [possibleNickname, setPossibleNickname] = useState(true)
    const [possibleEmail, setPossibleEmail] = useState(true)
    const changeId = (e) => {
        setIdChange(true) // 변함 유무 처리
        setId(e.target.value) // 입력한 아이디로 변경
        setIdDuplicateCheck("중복확인") // 아이디 중복확인 했어도 다시 중복확인으로 버튼 텍스트 변경
        setPossibleId(false) // 중복확인 필요
    }
    const changeName = (e) => {setName(e.target.value)}
    const changeNickname = (e) => {
        setNicknameChange(true)
        setNickname(e.target.value)
        setNicknameDuplicateCheck("중복확인")
        setPossibleNickname(false)
    }
    const changeEmail = (e) => {
        setEmailChange(true)
        setEmail(e.target.value)
        setEmailDuplicateCheck("중복확인")
        setPossibleEmail(false)
    }

    const checkNull = (some) => {
        if(some != null) {
            return false;
        }
        return true;
    }
    const checkId =()=>{
        let check = /[~!@#$%^&*()_+|<>?:{}.,/;='"ㄱ-ㅎ | ㅏ-ㅣ |가-힣]$/;
        return check.test(id);
    }
    const checkName =() => {
        let check = /^[ㄱ-ㅎ | ㅏ-ㅣ |가-힣]{2,12}$/; // 글자 2-12자리
        return !checkNull(name) && !check.test(name);
    }
    const checkEmail =()=>{
        let check =  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
        return !checkNull(email) && !check.test(email);
    }

    // 중복체크
    const checkIdDuplicate = async () => {
        await axios ({
            method: "GET",
            url: `${BASEURL}/user/exist/id/`+id
        }).then((res) => {
            if(res.data === true) {
                alert('사용중인 아이디입니다.')
                setPossibleId(false)
            }
            else {
                setIdDuplicateCheck("사용가능")
                setPossibleId(true) // 중복확인함
            }
        }).catch((error) => {
            console.log(error)
        })
    }
    const checkNicknameDuplicate = async () => {
        await axios ({
            method: "GET",
            url: `${BASEURL}/user/exist/nickname/`+ nickname
        }).then((res) => {
            if(res.data === true) {
                alert('사용중인 닉네임입니다.')
                setPossibleNickname(false)
            }
            else {
                setNicknameDuplicateCheck("사용가능")
                setPossibleNickname(true) // 중복확인함
            }
        }).catch((error) => {
            console.log(error)
        })
    }
    const checkEmailDuplicate = async () => {
        await axios ({
            method: "GET",
            url: `${BASEURL}/user/exist/nickname/`+ nickname
        }).then((res) => {
            if(res.data === true) {
                alert('사용중인 이메일입니다.')
                setPossibleNickname(false)
            }
            else {
                setNicknameDuplicateCheck("사용가능")
                setPossibleNickname(true) // 중복확인함
            }
        }).catch((error) => {
            console.log(error)
        })
    }



    const modifyUser = async () => {
        console.log(idChange)
        console.log(nicknameChange)
        console.log(emailChange)
        console.log(id)
        // if(idChange) {
            
        // }
        // if(nicknameChange) {

        // }
        // if(emailChange) {

        // }

    }

    return (
        <Modal  open={props.isOpen}
                onClose={props.doClose}
                className="Modal">
            <Box className="Modal__content">
                {/* Modal 창 제목 */}
                <Typography component="div" id="Modal__header">내 정보 수정</Typography>

                {/* Modal 창 유저 글 작성 */}
                <Typography  component="div" id="Modal__body">
                    <div className="modify-label">수정 전 아이디 : {props.data.userId} </div>
                    <TextField  value={id} 
                                onChange={changeId}
                                error={checkId()}
                                helperText={checkId() ? "한글과 특수문자는 사용하실 수 없습니다.":""}></TextField>
                    <Button color = 'primary' onClick={checkIdDuplicate}>{idDuplicateCheck}</Button>            
                    <div className='UM-Division-Line'></div>
                    <div className="modify-label">수정 전 이름 : {props.data.userName} </div>
                    <TextField  value={name}
                                onChange={changeName}
                                error={checkName()}
                                helperText={checkName() ? "한글 이름을 입력하세요":""}></TextField>
                    <div className='UM-Division-Line'></div>
                    <div className="modify-label">수정 전 닉네임 : {props.data.userNickname} </div>
                    <TextField  value={nickname} 
                                onChange={changeNickname}></TextField>
                    <Button color = 'primary' onClick={checkNicknameDuplicate} >{nicknameDuplicateCheck}</Button>
                    <div className='UM-Division-Line'></div>
                    <div className="modify-label">수정 전 이메일 : {props.data.userEmail} </div>
                    <TextField  value={email} 
                                onChange={changeEmail}
                                error={checkEmail()}
                                helperText={checkEmail() ? "유효하지 않은 이메일입니다.":""}
                                sx={{width:{sm:200, md:300}}}></TextField>
                    <Button color = 'primary' onClick={checkEmailDuplicate} >{emailDuplicateCheck}</Button>
                    <div></div>
                    <Button className = "user-modify-btn"
                            color = 'primary'
                            startIcon="✏️"
                            variant='contained'
                            size='medium'
                            onClick={modifyUser}>수정 완료</Button>
                </Typography>
            </Box>
        </Modal>
    );
}
export default UserModifyForm;