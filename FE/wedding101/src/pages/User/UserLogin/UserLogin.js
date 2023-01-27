import './UserLogin.css';
import loginimg from '../../../assets/img/weddingLogin.png';

import Grid2 from '@mui/material/Unstable_Grid2'; // Grid version 2
import { Button, TextField } from '@mui/material';

function UserLogin() {
    return (
        <div className='user-login'>
        <Grid2 container spacing={2}>
            <Grid2 xs={8}>
                <img src={loginimg} alt='weddingLogin'></img>
            </Grid2>

            <Grid2 xs={4}>
        <h3>Wedding101</h3>
        <TextField id="id-input" type="text" label="아이디를 입력하세요" variant="outlined" /><br /><br />
        <TextField id="password-input" type="password" label="비밀번호를 입력하세요" variant="outlined" /><br />
            <Button variant="text">로그인</Button><br />
            <Button variant="text">아이디 찾기</Button>
            <Button variant="text">비밀번호 찾기</Button>
            <Button variant="text">회원가입</Button>

            <hr />
            <Button>구글계정으로 로그인</Button><br />
            <Button>카카오계정으로 로그인</Button><br />
            <Button>네이버계정으로 로그인</Button><br />
            </Grid2>
        </Grid2>
        </div>
    );
}
export default UserLogin;