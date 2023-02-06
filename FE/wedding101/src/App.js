import './App.css';

import { Route, Routes } from 'react-router-dom';
import MainLayout from './pages/Main/MainLayout';
import UserLogin from './pages/User/UserLogin/UserLogin';
import UserRegist from './pages/User/UserRegist/UserRegist';
import UserInvitation from './pages/WeddingInvitation/UserInvitation';
import BoardReview from './pages/BoardReview/BoardReview';
import BoardQuestion from './pages/BoardQuestion/BoardQuestion';
import AlbumCover from './pages/Album/AlbumCover';
import AlbumList from './pages/Album/AlbumList';
import ServiceProcess01 from './pages/ServiceProcess/ServiceProcess01';
import MainIndex from './pages/Main/MainIndex';
import AlbumDeleted from './pages/Album/AlbumDeleted';

function App() {
  return (
    <Routes>
      {/*Header, Footer 보여줄 페이지 */}
      <Route element={<MainLayout />}>
        <Route path='/invitation' element={<UserInvitation />} />
        <Route path='/album' element={<AlbumCover />} />
        <Route path='/album/list' element={<AlbumList />} />
        <Route path='/album/deleted' element={<AlbumDeleted />} />
        <Route path='/review' element={<BoardReview />} />
        <Route path='/contact' element={<BoardQuestion />} />
        <Route path='/user/service01' element={<ServiceProcess01 />} />
      </Route>
      {/*Header, Footer 보여주지 않을 페이지 */}
      <Route exact path='/' element={<MainIndex />} />
      <Route path='/user/login' element={<UserLogin />} />
      <Route path='/user/signup' element={<UserRegist />} />
    </Routes>
  );
}

export default App;
