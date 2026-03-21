import SignUp from './AuthModule/Registration/SignUp'
import { Routes, Route } from 'react-router-dom'
import Otp from './AuthModule/otp auth/Otp'

function App() {
  return (
    <Routes>
      <Route path='/' element={<SignUp />} />
      <Route path='/otp' element={<Otp />} />
    </Routes>
  )
}

export default App