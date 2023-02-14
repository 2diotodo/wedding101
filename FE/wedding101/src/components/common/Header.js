import './Header.css';

import React, { useState, useEffect } from 'react';
import { Button } from '@mui/material';
import { NavLink } from 'react-router-dom';

function Header() {
  const [isLogin, setIsLogin] = useState(false);

  const onLogout = () => {
    // sessionStorage에 userId로 저장되어 있는 아이템을 삭제
    sessionStorage.removeItem('userId');
    sessionStorage.setItem('isLogin', false);
    // 메인으로 이동(새로고침)
    document.location.href = '/';
  };

  useEffect(() => {
    if (sessionStorage.getItem('userId') === null) {
      console.log('isLogin?? ::', isLogin);
    } else {
      // sessionStorage에 name이라는 key 값으로 저장된 값이 있다면
      // 로그인 상태 변경
      setIsLogin(true);
      console.log('isLogin?? ::', isLogin);
      sessionStorage.setItem('isLogin', true);
    };
    
  },
  [isLogin]
  );

  return (
    <div className='header'>
      <div className='logo'>
        <img src='#' alt='wedding101' />
      </div>
      <div className='nav-tabs'>
        <NavLink labe='About' to='/'>
          <Button variant='text' size='large' color='secondary'>
            About{' '}
          </Button>
        </NavLink>
        <NavLink label='Invitation' to='/invitation01'>
          <Button variant='text' size='large' color='secondary'>
            Invitation{' '}
          </Button>
        </NavLink>
        <NavLink label='Album' to='/album'>
          <Button variant='text' size='large' color='secondary'>
            Album{' '}
          </Button>
        </NavLink>
        <NavLink label='Process' to='/user/service01'>
          <Button variant='text' size='large' color='secondary'>
            Process{' '}
          </Button>
        </NavLink>
        <NavLink label='Review' to='/review'>
          <Button variant='text' size='large' color='secondary'>
            Review{' '}
          </Button>
        </NavLink>
        <NavLink label='Contact Us' to='/contact'>
          <Button variant='text' size='large' color='secondary'>
            Contact Us{' '}
          </Button>
        </NavLink>

        {isLogin ? (
          <div>
            <NavLink label='LogIn' to='/user/mypage'>
              <Button variant='text' size='large' color='secondary'>
                {sessionStorage.getItem('name')}님 환영합니다.
              </Button>
            </NavLink>
            <NavLink label='LogOut' to='/user/login'>
              <Button variant='text' size='large' color='secondary' onClick={onLogout}>
                Logout{' '}
              </Button>
            </NavLink>
          </div>
        ) : (
          <div>
            <NavLink label='LogIn' to='/user/login'>
              <Button variant='text' size='large' color='secondary'>
                LogIn{' '}
              </Button>
            </NavLink>
            <NavLink label='SignUp' to='/user/signup'>
              <Button variant='text' size='large' color='secondary'>
                SignUp{' '}
              </Button>
            </NavLink>
          </div>
        )}
      </div>
    </div>
  );
}
export default Header;
