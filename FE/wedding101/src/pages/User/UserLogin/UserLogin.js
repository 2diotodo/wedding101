import './UserLogin.css';

import { Button } from '@mui/material';

function UserLogin() {
    return (
        <div>
            <h3>로그인</h3>
            <form><input type='text' placeholder='아이디를 입력하세요.'></input></form>
            <form><input type='password' placeholder='비밀번호를 입력하세요.'></input></form>
            <Button variant="text">로그인</Button><br />
            <Button variant="text">아이디 찾기</Button>
            <Button variant="text">비밀번호 찾기</Button>
            <Button variant="text">회원가입</Button>

            <hr />
            <Button>구글계정으로 로그인</Button><br />
            <Button>카카오계정으로 로그인</Button><br />
            <Button>네이버계정으로 로그인</Button><br />
        </div>
    );
}
export default UserLogin;