import { Routes, Route } from 'react-router-dom';

// Auth Pages
import SignUp from './AuthModule/Registration/SignUp';
import Otp from './AuthModule/otp auth/Otp';
import LoginForm from './AuthModule/Login/Login';

// Setup Wizard
import SetupWizard from './UserOnboarding/pages/SetupWizard';           // ← Main wizard
import { SetupProvider } from './UserOnboarding/context/SetUpContext';  // ← Context

function App() {
  return (
    <Routes>
      <Route path='/signup' element={<SignUp />} />
      <Route path='/login' element={<LoginForm />} />
      <Route path='/otp' element={<Otp />} />

      {/* Setup Wizard Route */}
      <Route 
        path="/setup" 
        element={
          <SetupProvider>
            <SetupWizard />
          </SetupProvider>
        } 
      />
    </Routes>
  );
}

export default App;