import './RegistForm.css';

import { useState } from 'react';
import { Button, TextField } from '@mui/material';
import { useNavigate } from 'react-router';


function RegistForm() {
    const [form, setForm] = useState({
        id: '',
        password: '',
        passwordConfirm: '',
        name: '',
        nickname: '',
        email: '',
    });
    const {id, password, passwordConfirm, name, nickname, email} = form;

    const onChange = (e)=> {
        const newForm = {
            ...form,
            [e.target.name] : e.target.value
        };
        setForm(newForm);
    }

    const checkId =()=>{
        let check = /[~!@#$%^&*()_+|<>?:{}.,/;='"ㄱ-ㅎ | ㅏ-ㅣ |가-힣]/;
        return check.test(form.id);
    }
    const checkPassword =()=>{
        let check = /^[a-z0-9_-]{8,12}$/; // 단순 8~12자리
        return check.test(form.password);
    }
    const checkName =()=>{
        let check = /^[a-z0-9_-]{8,12}$/; // 단순 8~12자리
        return check.test(form.name);
    }
    const checkEmail =()=>{
        let check =  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
        return check.test(form.email);
    }
    

    const onSubmitHandler = (e) => {
        e.preventDefault();
        alert(`${form.id}님 회원가입 완료!`)
    }

    const navigate = useNavigate();
    const onClickHandler = () =>{
        alert("로그인으로?");
        navigate('/user/login');
    };
    return (
        <div>
            <h3>회원가입</h3>
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
                helperText={checkId() ? "한글과 특수문자는 사용하실 수 없습니다.":"" } /><br />
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
                onChange={onChange}  /><br />
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

                <Button variant="contained" onSubmit={onSubmitHandler}>회원가입</Button><br />
                <Button variant="text" onClick={onClickHandler}>로그인 페이지로 이동하기</Button>
        </div>
    );
}
export default RegistForm;