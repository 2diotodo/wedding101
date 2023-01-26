import './MainIndex.css';

import React from 'react';
import MainArea01 from '../../pages/Main/MainArea01';
import MainArea02 from '../../pages/Main/MainArea02';
import MainArea03 from '../../pages/Main/MainArea03';
import MainArea04 from '../../pages/Main/MainArea04';
import GoServiceButton from '../../components/common/GoServiceButton';
// import ReactScrollWheelHandler from 'react-scroll-wheel-handler';

const MainIndex = () => {
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

  return (
    <div>
      {/* <ReactScrollWheelHandler
        upHandler={(e) => console.log('scroll up')}
        downHandler={(e) => console.log('scroll down')}
      > */}
      <div id='about'>
        <MainArea01 />
      </div>
      <div id='invitation'>
        <MainArea02 />
      </div>
      <div id='album'>
        <MainArea03 />
      </div>
      <div id='review'>
        <MainArea04 />
      </div>
      <div id='contact'>
        <MainArea01 />
      </div>
      {/* </ReactScrollWheelHandler> */}
      <div className='goServiceButton'>
        <GoServiceButton />
      </div>
    </div>
  );
};

export default MainIndex;
