import './App.css';

import { Route, Routes } from 'react-router-dom';
import Area01 from './components/main/area01';
import Area02 from './components/main/area02';
// import Area03 from './components/main/area03';
// import Area04 from './components/main/area04';
// import ReactScrollWheelHandler from 'react-scroll-wheel-handler';

function App() {
  return (

      <Routes>
        <Route path="/" element={<Area01 />} />
        <Route path="/area02" element={<Area02 />} />


      </Routes>

  );
}

export default App;
