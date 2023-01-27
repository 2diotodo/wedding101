import './App.css';

import { Route, Routes } from 'react-router-dom';
import MainLayout from './pages/Main/MainLayout';
import UserLogin from './pages/User/UserLogin/UserLogin';
import UserRegist from './pages/User/UserRegist/UserRegist';
import UserInvitation from './pages/WeddingInvitation/UserInvitation/UserInvitation';
import BoardReview from './pages/BoardReview/BoardReview';
import AlbumCover from './pages/Album/AlbumCover';
import ServiceProcess01 from './pages/ServiceProcess/ServiceProcess01';
import MainIndex from './pages/Main/MainIndex';

function App() {
  return (
    <Routes>
      {/*Header, Footer 보여줄 페이지 */}
      <Route element={<MainLayout />}>
        <Route exact path='/' element={<MainIndex />} />
        <Route path='/invitation' element={<UserInvitation />} />
        <Route path='/album' element={<AlbumCover />} />
        <Route path='/review' element={<BoardReview />} />
        <Route path='/contact' element={<BoardReview />} />
        <Route path='/user/service01' element={<ServiceProcess01 />} />
      </Route>
      {/*Header, Footer 보여주지 않을 페이지 */}
      <Route path='/user/login' element={<UserLogin />} />
      <Route path='/user/signup' element={<UserRegist />} />
    </Routes>
  );
}

export default App;
