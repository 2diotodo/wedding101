import './RegistForm.css';

import { useCallback, useState } from 'react';
import { Button, TextField } from '@mui/material';
import { useNavigate } from 'react-router';
import axios from 'axios';
import Modal from '../../common/Modal';
import { South } from '@mui/icons-material';


function RegistForm() {
    const [form, setForm] = useState({
        id: null,
        password: null,
        passwordConfirm: null,
        name: null,
        nickname: null,
        email: null,
    });
    const {id, password, passwordConfirm, name, nickname, email} = form;

    const [error, setError] = useState({
        empty: null
    });

    const onChange = (e)=> {
        const newForm = {
            ...form,
            [e.target.name] : e.target.value
        };
        setForm(newForm);
    }

    const checkNull = (some) => {
        if(some != null) {
            return false;
        }
        return true;
    }

    const checkId =()=>{
        let check = /[~!@#$%^&*()_+|<>?:{}.,/;='"ㄱ-ㅎ | ㅏ-ㅣ |가-힣]$/;
        return check.test(form.id);
    }
    const checkPassword =()=>{
        let check = /^[A-Za-z0-9]{8,12}$/; // 단순 8~12자리
        return !checkNull(form.password) && !check.test(form.password);
    }
    const checkPasswordConfim =()=>{
        let check = false;
        if(!checkNull(form.passwordConfirm) && form.password !== form.passwordConfirm) {
            check = true;
        }
        return !checkNull(form.password) && check;
    }
    const checkName =()=>{
        let check = /^[ㄱ-ㅎ | ㅏ-ㅣ |가-힣]{2,12}$/; // 글자 2-12자리
        return !checkNull(form.name) && !check.test(form.name);
    }
    const checkEmail =()=>{
        let check =  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
        return !checkNull(form.email) && !check.test(form.email);
    }
    
    const validate = useCallback(() => {
        console.log(!form.passwood)
        if(!form.id && !form.password && ! form.passwordConfirm && !form.name
            && !form.nickname && !form.email) {
                return null
        }
        else {
            return "모든 항목을 입력해주세요"
        }
    }, [form])

    const onSubmitHandler = (e) => {
        e.preventDefault();

        const error = validate();
        setError(error);
        console.log(error)
        if(error != null ) {
            alert(error)
            return
        }

        axios.post(`http://localhost:8080/user/signup`, {
            userId: id,
            userPassword: password,
            userName: name,
            userNickname: nickname,
            userEmail: email,
        }).then(function (response) {
            console.log(response);
            console.log(response.data.message);
            if(response.status === 200){
                alert(`${form.id}님 회원가입 완료!`)
                navigate("/user/login");
            }
        }).catch(function (error) {
            if(error.response.status === 417) {
                console.log(error.response.data.message);
            }
            console.log(error);
        });
    }

    const navigate = useNavigate();
    const onClickHandler = () =>{
        alert("로그인 페이지로 이동합니다.");
        navigate('/user/login');
    };

    const checkDuplicateId = (e) => {
        console.log('이거')
        console.log(e.target.target.value)
        const id = e.target.value

        console.log(id)

        axios
            .get(`http://localhost:8080/user/exist/id/${id}`)
            .then(res => {
                console.log(res)
            })


    }

    return (
        <div>
            <h3>회원가입</h3>
            <form onSubmit={onSubmitHandler} >

            <TextField
                id="id-input" 
                type="text" 
                name='id'
                label="아이디를 입력하세요" 
                variant="outlined"
                size='small'
                margin='dense'
                value={form.id}
                onChange={onChange}
                error={checkId()}
                helperText={checkId() ? "한글과 특수문자는 사용하실 수 없습니다.":"" } />
            
            <button type="button" onClick={checkDuplicateId} target='id-input'>중복확인</button><br />
            <TextField
                id="pw-input" 
                type="password" 
                name='password'
                label="비밀번호를 입력하세요" 
                variant="outlined"
                size='small'
                margin='dense'
                value={form.password}
                onChange={onChange}
                error={checkPassword()}
                helperText={checkPassword() ? "비밀번호는 8-12자로 입력해주세요":"" } /><br />
            <TextField
                id="pw-confirm-input" 
                type="password"
                name='passwordConfirm' 
                label="비밀번호를 다시 입력하세요" 
                variant="outlined"
                size='small'
                margin='dense'
                value={form.passwordConfirm}
                onChange={onChange}
                error={checkPasswordConfim()}
                helperText={checkPasswordConfim() ? "비밀번호가 일치하지 않습니다.":"" }  /><br />
            <TextField
                id="name-input" 
                type="text" 
                name='name'
                label="이름을 입력하세요" 
                variant="outlined"
                size='small'
                margin='dense'
                value={form.name}
                onChange={onChange}
                error={checkName()}
                helperText={checkName() ? "이름을 입력하세요":""}  /><br />
            <TextField
                id="nickname-input" 
                type="text" 
                name='nickname'
                label="닉네임을 입력하세요" 
                variant="outlined"
                size='small'
                margin='dense'
                value={form.nickname}
                onChange={onChange}  /><br />
            <TextField
                id="email-input" 
                type="text" 
                name='email'
                label="이메일을 입력하세요" 
                variant="outlined"
                size='small'
                margin='dense'
                value={form.email}
                onChange={onChange}
                error={checkEmail()}
                helperText={checkEmail() ? "유효하지 않은 이메일입니다.":"" } /><br />

            <Button variant="contained" type='submit' >회원가입</Button><br />
            </form>
            <Button variant="text" onClick={onClickHandler}>로그인 페이지로 이동하기</Button>
        </div>
    );
}
export default RegistForm;