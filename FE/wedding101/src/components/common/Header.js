import "./Header.css";
import axios from "axios";
import React, { useState, useEffect } from 'react';
import { Button } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router';
import { ButtonUnstyled } from '@mui/base';

const BASEURL = "https://wedding101.shop/api/";

function Header() {
  const [isLogin, setIsLogin] = useState(false);
  const [userNickname, setUserNickname] = useState('');
  const navigate = useNavigate();
  let userNickName = "";

  const navigateToHome = () => {
    console.log('go to home!');
    sessionStorage.setItem('nickname',"");
    navigate('/');
  };

  const navigateToInvitation = () => {
    console.log('go to invitation!');
    if(isLogin) navigate('/invitation01');
    else {
      alert('로그인 후 이용해 주세요');
      navigate('/user/login');
    }
  };

  const navigateToAlbum = () => {
    console.log('go to album!')
    navigate('/album');
  };

  const navigateToProcess = () => {
    console.log('go to process!')
    if(isLogin) navigate('/user/service01');
    else {
      alert('로그인 후 이용해 주세요');
      navigate('/user/login');
    }
  };

  const navigateToReview = () => {
    console.log('go to review!')
    navigate('/review');
  };
  const navigateToContact = () => {
    console.log('go to contact!')
    navigate('/contact');
  };

  const navigateToLogin= () =>{
    console.log('go to login!')
    navigate('/user/login');
  }

  const navigateToSignup = () => {
    console.log('go to signup!')
    navigate('/user/signup');
  };

  const navigateToMyPage = () => {
    console.log('go to myPage!')
    navigate('/user/mypage');
  };

  const onLogout = () => {
    // sessionStorage에 accessToken로 저장되어 있는 아이템을 삭제
    sessionStorage.removeItem("accessToken");
    sessionStorage.removeItem("nickname");
    setUserNickname('');
    sessionStorage.setItem("isLogin", false);
    // 메인으로 이동(새로고침)
    document.location.href = '/';
  };

  useEffect(() => {
    if (sessionStorage.getItem("accessToken") === null) {
      console.log("isLogin?? ::", isLogin);
    } else {
      // sessionStorage에 name이라는 key 값으로 저장된 값이 있다면
      // 로그인 상태 변경
      setIsLogin(true);
      console.log('isLogin?? ::', isLogin);
      sessionStorage.setItem('isLogin', true);
    };
    }, [isLogin, userNickName]
  );
  
  if (isLogin){
    // 회원 조회
    axios({
      method: "GET",
      url: BASEURL + "user/",
      headers: {
          "Authorization": "Bearer " + sessionStorage.getItem('accessToken')
      }
    }).then((res) => { 
        sessionStorage.setItem('nickname',res.data.data.userNickname);
        setUserNickname(sessionStorage.getItem('nickname'))
    }).catch(function (error) {
      console.log(error);
    })
  }

  return (
    <div className='header'>
        <div className='logo' onClick={navigateToHome}>
          <img src={ require('../../assets/favicon_io/wedding3-96.png') } />
          <div className='logo-font-tag'>WEDDING101</div>
        </div>

        <div  className='header-font-group'>
            <div  className='header-font-tag'
                  onClick={navigateToHome}>About</div>

            <div  className='header-font-tag'
                  onClick={navigateToInvitation}>INVITATION</div>

            <div  className='header-font-tag' 
                  onClick={navigateToAlbum}>ALBUM</div>

            <div  className='header-font-tag'
                  onClick={navigateToProcess}>PROCESS</div>

            <div  className='header-font-tag'
                  onClick={navigateToReview}>REVIEW</div>

            <div  className='header-font-tag'
                  onClick={navigateToContact}>CONTACT</div>
                  
            {isLogin ? (  <div  className='header-font-tag' 
                                onClick={navigateToMyPage}>
                              👤 {sessionStorage.getItem('nickname')}님</div>)                              
                        :( <div className='header-font-tag' 
                                onClick={navigateToLogin}>LOGIN</div>)}

            {isLogin ? ( <div className='header-font-tag' 
                              onClick={onLogout}>LOGOUT</div>)
                        :( <div className='header-font-tag'
                                onClick={navigateToSignup}>SIGNUP</div> )}
        </div>
    </div>
  );
  
}
export default Header;
