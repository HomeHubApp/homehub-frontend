import FirstPage from './AuthModule/ManageDevices/FirstPage/firstPage'
import AddDevice from './AuthModule/ManageDevices/SecongPage/secondPage'
import ThirdPage from './AuthModule/ManageDevices/ThirdPage/thirdPage'
import FourthPage from './AuthModule/ManageDevices/FourthPage/fourthPage'
import FifthPage from './AuthModule/ManageDevices/FifthPage/fifthPage'
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
    <Route path="/" element={<FirstPage />} />
    <Route path="/add" element={<AddDevice />} />
    <Route path="/home" element={<ThirdPage />} />
    <Route path="/device" element={<FourthPage />} />
    <Route path="/end" element={<FifthPage />} />
    </Routes>
  );
}

export default App;
