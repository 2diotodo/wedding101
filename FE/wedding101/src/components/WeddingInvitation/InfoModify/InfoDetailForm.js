import axios from 'axios';

import './InfoDetailForm.css';
import { useEffect, useState } from 'react';
import { Paper, TableContainer, Table, TableBody, TableCell, TableRow} from '@mui/material';

function InfoTable(props) {
    return (
        <TableContainer component={Paper} className="info-table-container">
            <Table className="info-table" sx={{minWidth:500}}  aria-label="simple table">
                <TableBody>
                    <TableRow>
                        <TableCell style={{width:30}} variant="head" align="center">신랑 이름</TableCell>
                        <TableCell style={{width:50}} >{props.data.groomName}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell variant="head" align="center">신부 이름</TableCell>
                        <TableCell>{props.data.brideName}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell variant="head" align="center">날짜</TableCell>
                        <TableCell>{props.data.weddingDay}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell variant="head" align="center">장소</TableCell>
                        <TableCell>{props.data.weddingHallAddress}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell variant="head" align="center">웨딩홀 번호</TableCell>
                        <TableCell>{props.data.weddingHallNumber}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell variant="head" align="center">신랑 전화번호</TableCell>
                        <TableCell>{props.data.groomPhoneNumber}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell variant="head" align="center">신부 전화번호</TableCell>
                        <TableCell>{props.data.bridePhoneNumber}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell variant="head" align="center">신랑 계좌번호</TableCell>
                        <TableCell>{props.data.groomAccountNumber}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell variant="head" align="center">은행</TableCell>
                        <TableCell>{props.data.groomAccountBank}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell variant="head" align="center">예금주</TableCell>
                        <TableCell>{props.data.groomAccountName}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell variant="head" align="center">신부 계좌번호</TableCell>
                        <TableCell>{props.data.brideAccountNumber}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell variant="head" align="center">은행</TableCell>
                        <TableCell>{props.data.brideAccountBank}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell variant="head" align="center">예금주</TableCell>
                        <TableCell>{props.data.brideAccountName}</TableCell>
                    </TableRow>
                    {props.data.groomFatherIsAlive ? 
                        <TableRow>
                            <TableCell variant="head" align="center">신랑 아버지</TableCell>
                            <TableCell>{props.data.groomFatherName}</TableCell>
                        </TableRow> : null}
                    {props.data.groomMotherIsAlive ? 
                        <TableRow>
                            <TableCell variant="head" align="center">신랑 어머니</TableCell>
                            <TableCell>{props.data.groomMotherName}</TableCell>
                        </TableRow> : null}
                    <TableRow>
                        <TableCell variant="head" align="center">신랑 출생순위</TableCell>
                        <TableCell>{props.data.groomRelation}</TableCell>
                    </TableRow>
                    {props.data.brideFatherIsAlive ? 
                        <TableRow>
                            <TableCell variant="head" align="center">신부 아버지</TableCell>
                            <TableCell>{props.data.brideFatherName}</TableCell>
                        </TableRow> : null}
                    {props.data.brideMotherIsAlive ? 
                        <TableRow>
                            <TableCell variant="head" align="center">신부 어머니</TableCell>
                            <TableCell>{props.data.brideMotherName}</TableCell>
                        </TableRow> : null}
                    <TableRow>
                        <TableCell variant="head" align="center">신부 출생순위</TableCell>
                        <TableCell>{props.data.brideRelation}</TableCell>
                    </TableRow>

                </TableBody>
            </Table>

        </TableContainer>
    )
}

function ModifyForm() {
    const [info, setInfo] = useState({
        userSeq: null,
        infoSeq: null,
        weddingDay: null,
        weddingHallName: null,
        weddingHallAddress: null,
        weddingHallNumber: null,
        groomName: null,
        brideName: null,
        groomPhoneNumber: null,
        bridePhoneNumber: null,
        groomAccountNumber: null,
        groomAccountBank: null,
        groomAccountName: null,
        brideAccountNumber: null,
        brideAccountBank: null,
        brideAccountName: null,
        groomRelation: null,
        brideRelation: null,
        groomFatherName: null,
        groomMotherName: null,
        brideFatherName: null,
        brideMotherName: null,
        groomFatherIsAlive: null,
        groomMotherIsAlive: null,
        brideFatherIsAlive: null,
        brideMotherIsAlive: null
    });
    const {infoSeq, weddingDay, weddingHallName, weddingHallAddress, weddingHallNumber, 
        groomName, brideName, groomPhoneNumber, bridePhoneNumber, 
        groomAccountNumber, groomAccountBank, groomAccountName, brideAccountNumber, brideAccountBank,brideAccountName,
        groomRelation, brideRelation, groomFatherName, groomMotherName, brideFatherName, brideMotherName,
        groomFatherIsAlive, groomMotherIsAlive, brideFatherIsAlive, brideMotherIsAlive} = info;
    
    useEffect(() =>  {
        // 컴포넌트 불러올때  getInfo() 실행
        getInfo();
    }, [info.userSeq]);
    
    const accessToken = sessionStorage.getItem('accessToken');
    async function getInfo() {
        await axios ({
            method : "GET",
            url : "https://wedding101.shop/api/" + 'user',
            // url : "http://i8a101.p.ssafy.io:8085/" + 'user',
            headers : {
                "Authorization" : "Bearer " + accessToken
            } 
        }).then((res) => {
            setInfo(res.data.data)
            console.log(res.data.data)
        }).catch(function (error) {
            console.log(error)
            if(error.response.status === 417) {
                console.log(error.response.data.message)
            }
        })

        await axios ({
            method : "GET",
            // url : "http://wedding101.shop/api/Info?userSeq=1"
            url : "http://i8a101.p.ssafy.io:8085/Info?userSeq=" + info.userSeq,
            headers : {
                "Authorization" : "Bearer " + accessToken
            }
        }).then((res) => {
                setInfo(res.data.data);
        }).catch(function (error) {
            console.log(error)
            if(error.response.status === 417) {
                console.log(error.response.data.message)
            }
        })

    }

    return (
        <div>
           <InfoTable data={info}></InfoTable>
        </div>
    );
}
export default ModifyForm;