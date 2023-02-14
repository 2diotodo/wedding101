import axios from 'axios';

import './ModifyForm.css';
import { useEffect, useState, useNavigate } from 'react';


function ModifyForm() {
    // const navigate = useNavigate();
    // const toModifyUserPage = ()=> {
    //     navigate('/user/modify')
    // }

    // const request = axios.create({
    //     baseURL : "http://i8a101.p.ssafy.io:8085"
    // })
    // const api = {
        
    // }
    const [user, setUser] = useState([]);
    useEffect(() =>  {
        // 컴포넌트 불러올때  getUser() 실행
        getUser();
    }, []);
    async function getUser() {
        await axios
            .get(`http://wedding101.shop/api/user?userSeq=2`)
            .then((res) => {
                setUser(res.data.data);
                console.log(res);
            })
            console.log(user);
    }
    return (
        <div>
            <h3>이거용</h3>
        </div>
    );
}
export default ModifyForm;