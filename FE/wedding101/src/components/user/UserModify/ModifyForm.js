import axios from 'axios';

import './ModifyForm.css';
import { useEffect, useState, useNavigate } from 'react';
import { Paper, TableContainer, Table, TableBody, TableCell, TableHead, TableRow} from '@mui/material';

const BASEURL =  "https://wedding101.shop/api";

function UserTable(props) {
    return (
        <TableContainer component={Paper}>
            <Table className="user-table" sx={{minWidth:500}}  aria-label="simple table">
                <TableBody>
                    <TableRow>
                        <TableCell style={{width:30}} variant="head" align="center">아이디</TableCell>
                        <TableCell style={{width:50}} >{props.data.userId}</TableCell>
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
    const [user, setUser] = useState([]);
    const {userId, userName, userNickname, userEmail} = user;
    const [userModifyOpen, setUserModifyOpen] = useState(false);

    const openModifyModal = () => {
        setUserModifyOpen((userModifyOpen) => !userModifyOpen)
    }

    useEffect(() =>  {
        // 컴포넌트 불러올때  getUser() 실행
        getUser();
    }, []);
    async function getUser() {
        await axios ({
            method : "GET",
            url : `${BASEURL}/user`,
            headers : {
                "Authorization" : "Bearer " + sessionStorage.getItem('accessToken')
            } 
        }).then((res) => {
            setUser(res.data.data);
        }).catch((error) => {
            if(error.response.status === 417) {
                console.log(error.response.data.message)
            }
        })
    }


    return (
        <div>
            <UserTable data = {user} className="user-table"/>
            {/* <Button className = "user-modify-btn"
                    color = 'primary'
                    startIcon="✏️"
                    variant='contained'
                    size='small'
                    onClick={setUserModifyOpen}></Button> */}
        </div>
    );
}
export default ModifyForm;