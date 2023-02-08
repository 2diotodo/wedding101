import './LoginForm.css';

import axios from 'axios';
import { Button, TextField } from '@mui/material';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

function LoginForm() {
  const [inputId, setInputId] = useState('');
  const [inputPw, setInputPw] = useState('');

  // input data의 변화가 있을 때마다 value값을 변경하여 반영하는 useState
  const handleInputId = (e) => {
    setInputId(e.target.value);
    console.log(setInputId)
  };

  const handleInputPw = (e) => {
    setInputPw(e.target.value);
  };

  const onSubmitHandler = async (event) => {
    console.log('click login');
    console.log("ID: ", inputId );
    console.log('PW: ', inputPw);
    // sessionStorage.setItem('userId', inputId);

    // 버튼만 누르면 리프레시되는 것 막기
    event.preventDefault();
    console.log('here');
    
    await axios
    .post('http://i8a101.p.ssafy.io:8085/user/login', {
      userId: inputId,
      userPassword: inputPw,
    }
    )
    .then((res) => {
        console.log(res);
        console.log('res.data.userId :', res.data.data.userId);
        console.log('res.data.msg :', res.data.message);
        if (res.data.data.userId === undefined) {
          // id 불일치, msg= '가입되지 않은 id입니다.'
          console.log('=========================', res.data.message);
          alert('가입되지 않은 id입니다.');
        } else if (res.data.data.userId === null) {
          // id는 있지만, pw 다른 경우 userId = null
          console.log('====================', '입력하신 비밀번호가 일치하지 않습니다.');
          alert('입력하신 비밀번호가 일치하지 않습니다.');
        } else if (res.data.data.userId === inputId) {
          // id, pw 모두 일치
          console.log('=====================', '로그인 성공');
          // sessionStorage에 id를 userId라는 key 값으로 저장
          sessionStorage.setItem('userId', inputId);
          sessionStorage.setItem('name', res.data.data.userName);
        }
        //작업 완료되면 페이지 이동
        document.location.href = '/';
      })
      .catch();
  };

  // page rendering 후 가장 처음 호출되는 함수
  useEffect(
    () => {
      console.log('1st render: useEffect');

      axios
        .get('/user/login')
        .then((res) => console.log(res))
        .catch();
    },
    // 페이지 호출 후 처음 한번만 호출될 수 있도록 [] 추가
    []
  );

  const navigate = useNavigate();
  const onClickHandler = () => {
    navigate('/user/signup');
  };
  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={onSubmitHandler}>
        <TextField
          id='id-input'
          autoFocus
          type='text'
          label='아이디를 입력하세요'
          variant='outlined'
          value={inputId}
          onChange={handleInputId}
        />
        <br />
        <br />
        <TextField
          id='password-input'
          type='password'
          label='비밀번호를 입력하세요'
          variant='outlined'
          value={inputPw}
          onChange={handleInputPw}
        />
        <br />

        <Button variant='text' type='submit'>
          로그인
        </Button>
        <br />
      </form>
        <Button variant='text'>아이디 찾기</Button>
        <Button variant='text'>비밀번호 찾기</Button>
        <Button variant='text' onClick={onClickHandler}>
          회원가입
        </Button>

        <hr />
        <Button>구글계정으로 로그인</Button>
        <br />
        <Button>카카오계정으로 로그인</Button>
        <br />
        <Button>네이버계정으로 로그인</Button>
        <br />
    </div>
  );
}
export default LoginForm;
