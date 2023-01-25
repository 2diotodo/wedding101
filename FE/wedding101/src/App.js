import './App.css';

import { Route, Routes } from 'react-router-dom';
import MainArea01 from './pages/Main/MainArea01';
import MainArea02 from './pages/Main/MainArea02';
import UserLogin from './pages/User/UserLogin/UserLogin';
import MainLayout from './pages/Main/MainLayout';
// import ReactScrollWheelHandler from 'react-scroll-wheel-handler';

function App() {
  return (

      <Routes>
        {/*Header, Footer 보여줄 페이지 */}
        <Route element={<MainLayout />}>
        <Route path="/" element={<MainArea01 />} />
        <Route path="/area02" element={<MainArea02 />} />
        </Route>
        {/*Header, Footer 보여주지 않을 페이지 */}
        <Route path='/user/login' element={<UserLogin />} />
      </Routes>

  );
}

export default App;
