import './Header.css';

import React, { useRef } from 'react';
import { Tabs, Tab } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import MainArea01 from '../../pages/Main/MainArea01';
import MainArea02 from '../../pages/Main/MainArea02';
import MainArea03 from '../../pages/Main/MainArea03';
import MainArea04 from '../../pages/Main/MainArea04';
// import { NavLink } from 'react-router-dom';
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
    function a11yProps(index) {
        return {
          id: `simple-tab-${index}`,
          'aria-controls': `simple-tabpanel-${index}`,
        };
      }

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    const navigate = useNavigate();
    const naviagteToLogin = () => {
        navigate("/user/login")
    }
    const naviagteToSignup = () => {
        navigate("/user/signup")
    }

    return(
        <div className='header'>
           
            {/*onClick 이벤트로 이동할 페이지 탭 구현*/}
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" centered>
                <Tab label='About' onClick={this.onMoveToAbout} {...a11yProps(0)} />
                <Tab label='Invitation' onClick={this.onMoveToInvitation} {...a11yProps(1)} />
                <Tab label='Album' onClick={this.onMoveToAlbum} {...a11yProps(2)} />
                <Tab label='Review' onClick={this.onMoveToReview} {...a11yProps(3)} />
                <Tab label='Contact Us' onClick={this.onMoveToContactUs} {...a11yProps(4)} />
                <Tab label='LogIn' onClick={naviagteToLogin} {...a11yProps(5)} />
                <Tab label='SignUp' onClick={naviagteToSignup} {...a11yProps(6)} />

            </Tabs>
            {/* ref로 이동할 페이지 지정
            <div ref={About}>
                <MainArea01 />
            </div>
            <div ref={Invitation}>
            <MainArea02 />
            </div>
            <div ref={Album}>
                <MainArea03 />
            </div>
            <div ref={Review}>
                <MainArea04 />
            </div>
            <div ref={ContactUs}>
                <MainArea01 />
            </div> */}
            
           
        </div>
    )

    // return (
    //     <div className='header'>
    //             <NavLink to="/">About </NavLink>
    //             <NavLink label="Invitation" to="/invitation">Invitation </NavLink>
    //             <NavLink label="Album" to="/album" >Album </NavLink>
    //             <NavLink label="Review" to="/review" ></NavLink>
    //             <NavLink label="Contact Us" to="/area02" >Contact Us </NavLink>
    //             <NavLink label="LogIn" to="/user/login" >LogIn </NavLink>
    //             <NavLink label="SignUp" to="/user/signup" >SignUp </NavLink>
    //     </div>
    // );
}
export default Header;