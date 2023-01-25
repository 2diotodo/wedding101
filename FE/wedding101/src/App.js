import './App.css';

import { Route, Routes } from 'react-router-dom';
import MainLayout from './pages/Main/MainLayout';
import MainArea01 from './pages/Main/MainArea01';
import UserLogin from './pages/User/UserLogin/UserLogin';
import UserRegist from './pages/User/UserRegist/UserRegist';
import UserInvitation from './pages/WeddingInvitation/UserInvitation/UserInvitation';
import BoardReview from './pages/BoardReview/BoardReview';
import AlbumCover from './pages/Album/AlbumCover';
// import ReactScrollWheelHandler from 'react-scroll-wheel-handler';

function App() {
  return (

      <Routes>
        {/*Header, Footer 보여줄 페이지 */}
        <Route element={<MainLayout />}>
        <Route exact path="/" element={<MainArea01 />} />
        <Route path="/invitation" element={<UserInvitation />} />
        <Route path="/album" element={<AlbumCover />} />
        <Route path="/review" element={<BoardReview />} />
        <Route path="/contact" element={<BoardReview />} />
        </Route>
        {/*Header, Footer 보여주지 않을 페이지 */}
        <Route path='/user/login' element={<UserLogin />} />
        <Route path="/user/signup" element={<UserRegist />} />
      </Routes>

  );
}

export default App;
