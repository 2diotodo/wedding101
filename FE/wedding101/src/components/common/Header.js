import './Header.css';

import React from 'react';
// import { Tabs, Tab } from '@mui/material';
// import { useNavigate } from 'react-router-dom';
import { Link } from 'react-scroll';
import { Button } from '@mui/material';
import { NavLink } from 'react-router-dom';
// import useMoveScroll from '../main/useMoveScroll';

function Header() {
  // const navTabs = useRef([]);
  // const navTabArr = [{index: 1, content: 'About'},
  //                    {index: 2, content: 'Invitation'},
  //                    {index: 3, content: 'Album'},
  //                    {index: 4, content: 'Review'},
  //                    {index: 5, content: 'ContactUs'},]

  // const About = useRef();
  // const Invitation = useRef();
  // const Album = useRef();
  // const Review = useRef();
  // const ContactUs = useRef();

  // const barHeight = '0px'

  // const onMoveToAbout = () => {
  //     About.current.style.scrollMargin = barHeight
  //     About.current.scrollIntoView({ behavior: 'smooth', block: 'start'});
  // };
  // const onMoveToInvitation = () => {
  //     Invitation.current.style.scrollMargin = barHeight
  //     Invitation.current.scrollIntoView({ behavior: 'smooth', block: 'start'});
  // };
  // const onMoveToAlbum = () => {
  //     Album.current.style.scrollMargin = barHeight
  //     Album.current.scrollIntoView({ behavior: 'smooth', block: 'start'});
  // };
  // const onMoveToReview = () => {
  //     Review.current.style.scrollMargin = barHeight
  //     Review.current.scrollIntoView({ behavior: 'smooth', block: 'start'});
  // };
  // const onMoveToContactUs = () => {
  //     ContactUs.current.style.scrollMargin = barHeight
  //     ContactUs.current.scrollIntoView({ behavior: 'smooth', block: 'start'});
  // };

  // tabs 구현 through material ui
  //   function a11yProps(index) {
  //     return {
  //       id: `simple-tab-${index}`,
  //       'aria-controls': `simple-tabpanel-${index}`,
  //     };
  //   }

  //   const [value, setValue] = React.useState(0);

  //   const handleChange = (event, newValue) => {
  //     setValue(newValue);
  //   };

  //   const navigate = useNavigate();
  //   const naviagteToLogin = () => {
  //     navigate('/user/login');
  //   };
  //   const naviagteToSignup = () => {
  //     navigate('/user/signup');
  //   };

  //   return (
  //     <div className='header'>
  //       {/*onClick 이벤트로 이동할 페이지 탭 구현*/}
  //       <Tabs value={value} onChange={handleChange} aria-label='basic tabs example' centered>
  //         <Link to='1' spy={true} smooth={true}>
  //           {/* <Tab label='About' {...a11yProps(0)} /> */}
  //         </Link>
  //         <Link to='2' spy={true} smooth={true}>
  //           <Tab label='Invitation' {...a11yProps(1)} />
  //         </Link>
  //         <Link to='3' spy={true} smooth={true}>
  //           <Tab label='Album' {...a11yProps(2)} />
  //         </Link>
  //         <Link to='4' spy={true} smooth={true}>
  //           <Tab label='Review' {...a11yProps(3)} />
  //         </Link>
  //         <Link to='5' spy={true} smooth={true}>
  //           <Tab label='Contact Us' {...a11yProps(4)} />
  //         </Link>
  //         <Tab label='LogIn' onClick={naviagteToLogin} {...a11yProps(5)} />
  //         <Tab label='SignUp' onClick={naviagteToSignup} {...a11yProps(6)} />
  //       </Tabs>
  //       {/* ref로 이동할 페이지 지정
  //             <div ref={About}>
  //             <MainArea01 />
  //             </div>
  //             <div ref={Invitation}>
  //             <MainArea02 />
  //             </div>
  //             <div ref={Album}>
  //             <MainArea03 />
  //             </div>
  //             <div ref={Review}>
  //             <MainArea04 />
  //             </div>
  //             <div ref={ContactUs}>
  //             <MainArea01 />
  //         </div> */}
  //     </div>
  //   );

  return (
    <div className='header'>
      <div className='logo'>
        <img src='#' alt='wedding101' />
      </div>
      <div className='nav-tabs'>
        <Link to='about' spy={true} smooth={true}>
          <Button variant='text' color='secondary'>
            About{' '}
          </Button>
        </Link>
        <Link label='Invitation' to='invitation' spy={true} smooth={true}>
          <Button variant='text' size='large' color='secondary'>
            Invitation{' '}
          </Button>
        </Link>
        <Link label='Album' to='album' spy={true} smooth={true}>
          <Button variant='text' color='secondary'>
            {' '}
            Album{' '}
          </Button>
        </Link>
        <Link label='Review' to='review' spy={true} smooth={true}></Link>
        <Link label='Contact Us' to='contact' spy={true} smooth={true}>
          <Button variant='text' color='secondary'>
            Contact Us{' '}
          </Button>
        </Link>
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
