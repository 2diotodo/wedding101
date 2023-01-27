import './Header.css';

import React from 'react';
import { Link } from 'react-scroll';
import { Button } from '@mui/material';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <div className='header'>
      <div className='logo'>
        <img src='#' alt='wedding101' />
      </div>
      <div className='nav-tabs'>
        <Link to='about' spy={true} smooth={true}>
          <Button variant='text' size='large' color='secondary'>
            About{' '}
          </Button>
        </Link>
        <Link label='Invitation' to='invitation' spy={true} smooth={true}>
          <Button variant='text' size='large' color='secondary'>
            Invitation{' '}
          </Button>
        </Link>
        <Link label='Album' to='album' spy={true} smooth={true}>
          <Button variant='text' size='large' color='secondary'>
            {' '}
            Album{' '}
          </Button>
        </Link>
        <Link label='Process' to='process' spy={true} smooth={true}>
          <Button variant='text' size='large' color='secondary'>
            Process{' '}
          </Button>
        </Link>
        <NavLink label='Review' to='/review'>
          <Button variant='text' size='large' color='secondary' >
            Review
          </Button>
        </NavLink>
        <NavLink label='Contact Us' to='/contact'>
          <Button variant='text' color='secondary'>
            Contact Us
          </Button>
        </NavLink>
        <NavLink label='LogIn' to='/user/login'>
          <Button variant='text' color='secondary'>
            LogIn{' '}
          </Button>
        </NavLink>
        <NavLink label='SignUp' to='/user/signup'>
          <Button variant='text' color='secondary'>
            SignUp{' '}
          </Button>
        </NavLink>
      </div>
    </div>
  );
}
export default Header;
