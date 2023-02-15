import axios from 'axios';

import './ModifyForm.css';
import { useEffect, useState, useNavigate } from 'react';
import { Paper, TableContainer, Table, TableBody, TableCell, TableHead, TableRow} from '@mui/material';

function UserTable(props) {
    return (
        <TableContainer component={Paper}>
            <Table className="user-table" sx={{ maxWidth: 550 }} aria-label="simple table">
                <TableBody>
                    <TableRow>
                        <TableCell variant="head" align="center">아이디</TableCell>
                        <TableCell>{props.userId}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell variant="head" align="center">이름</TableCell>
                        <TableCell>{props.data.userName}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell variant="head" align="center">닉네임</TableCell>
                        <TableCell>{props.data.userNickname}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell variant="head" align="center">이메일</TableCell>
                        <TableCell>{props.data.userEmail}</TableCell>
                    </TableRow>

                </TableBody>
            </Table>

        </TableContainer>
    )
}

function ModifyForm() {
    const accessToken = sessionStorage.getItem('accessToken');
    console.log(accessToken)
    const [user, setUser] = useState([]);
    useEffect(() =>  {
        // 컴포넌트 불러올때  getUser() 실행
        getUser();
    }, []);
    const {userId, userName, userNickname, userEmail} = user;
    async function getUser() {
        await axios ({
            method : "GET",
            url : "http://wedding101.shop/api/" + 'user',
            headers : {
                "Authorization" : "Bearer " + accessToken
            } 
        }).then((res) => {
                setUser(res.data.data);
                console.log(user)
        })
        console.log(user);
    }


    return (
        <div>
            <h3>{userId}</h3>
            <UserTable 
                data = {user}/>
            <h3>{userEmail}</h3>
        </div>
    );
}
export default ModifyForm;