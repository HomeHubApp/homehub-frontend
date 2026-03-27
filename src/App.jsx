import SignUp from './AuthModule/Registration/SignUp'
import { Routes, Route } from 'react-router-dom'
import Otp from './AuthModule/otp auth/Otp'
import LoginForm from './AuthModule/Login/Login'

function App() {
  return (
    <Routes>
      <Route path='/signup' element={<SignUp />} />
      <Route path='/login' element={<LoginForm />} />
      <Route path='/otp' element={<Otp />} />
    </Routes>
  )
}

export default App