import './UserRegist.css';
import signupimg from '../../../assets/img/weddingSignup.png';

import Grid2 from '@mui/material/Unstable_Grid2'; // Grid version 2
import { Button } from '@mui/material';

function UserRegist() {
    const onClickHandler = () =>{
        alert("로그인으로?");
    };

    return (

        <div className='user-regist'>
            <Grid2 container spacing={2}>
            <Grid2 lg={8} sm={0}>
                <div className='signupimg'>
                    <img src={signupimg} alt='weddingLogin'></img>
                </div>
            </Grid2>
            <Grid2 lg={4} sm={8}>

                <h3>회원가입</h3>
                <form><input type='text' placeholder='아이디를 입력하세요.'></input></form>
                <form><input type='password' placeholder='비밀번호를 입력하세요.'></input></form>
                <form><input type='password' placeholder='비밀번호를 다시 한 번 입력하세요.'></input></form>
                <form><input type='text' placeholder='이름을 입력하세요.'></input></form>
                <form><input type='text' placeholder='닉네임을 입력하세요.'></input></form>
                <form><input type='email' placeholder='이메일을 입력하세요.'></input></form>
                <Button variant="contained">회원가입</Button><br />
                <Button variant="text" onClick={onClickHandler}>로그인 페이지로 이동하기</Button>
            </Grid2>

            </Grid2>
        </div>
    );
}
export default UserRegist;