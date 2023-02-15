import axios from 'axios';

import './ModifyForm.css';
import { useEffect, useState, useNavigate } from 'react';

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
    const {userSeq, infoSeq, weddingDay, weddingHallName, weddingHallAddress, weddingHallNumber, 
        groomName, brideName, groomPhoneNumber, bridePhoneNumber, 
        groomAccountNumber, groomAccountBank, groomAccountName, brideAccountNumber, brideAccountBank,brideAccountName,
        groomRelation, brideRelation, groomFatherName, groomMotherName, brideFatherName, brideMotherName,
        groomFatherIsAlive, groomMotherIsAlive, brideFatherIsAlive, brideMotherIsAlive} = info;
    
    useEffect(() =>  {
        // 컴포넌트 불러올때  getUser() 실행
        getInfo();
    }, []);

    async function getInfo() {
        await axios ({
            method : "GET",
            url : "https://wedding101.shop/api/Info?userSeq=1"
        }).then((res) => {
                setInfo(res.data.data);
                console.log(res.data.data);
                console.log('여긴');
        })
        console.log(info);
    }
    return (
        <div>
            <h3>신랑 : {groomName}</h3>
            <h3>신부 : {brideName}</h3>
        </div>
    );
}
export default ModifyForm;