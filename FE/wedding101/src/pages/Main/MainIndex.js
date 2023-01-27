import './MainIndex.css';

import React from 'react';
import MainArea01 from '../../pages/Main/MainArea01';
import MainArea02 from '../../pages/Main/MainArea02';
import MainArea03 from '../../pages/Main/MainArea03';
import MainArea04 from '../../pages/Main/MainArea04';
import GoServiceButton from '../../components/common/GoServiceButton';
import ReactScrollWheelHandler from 'react-scroll-wheel-handler';

const MainIndex = () => {
  return (
    <div className='mainindex'>
      <ReactScrollWheelHandler
      className='scrollwheelhandler'
        upHandler={(e) => console.log('scroll up')}
        downHandler={(e) => console.log('scroll down')}
      >
      <div id='about'>
        <MainArea01 />
      </div>
      <div id='invitation'>
        <MainArea02 />
      </div>
      <div id='album'>
        <MainArea03 />
      </div>
      <div id='process'>
        <MainArea04 />
      </div>

      </ReactScrollWheelHandler>
      <div className='goServiceButton'>
        <GoServiceButton />
      </div>
    </div>
  );
};

export default MainIndex;
