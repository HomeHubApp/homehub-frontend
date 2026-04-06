import { Routes, Route } from 'react-router-dom';

// Index Page
import LandingPage from './LandingPage';
// Auth Pages
import SignUp from './AuthModule/Registration/SignUp';
import Otp from './AuthModule/otp auth/Otp';
import LoginForm from './AuthModule/Login/Login';

// Setup Wizard
import SetupWizard from './UserOnboarding/pages/SetupWizard';           // ← Main wizard
import { SetupProvider } from './UserOnboarding/context/SetUpContext';  // ← Context

// import Dashboard
import DashboardLayout from './components/DashboardLayout';
import Dashboard from './Dashboard/Dashboard';



function App() {
  return (
     
    <Routes>    
 
      <Route path= '/' element={<LandingPage />} />
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
      {/* Dashboard Layout Route */}
      <Route element={<DashboardLayout />} >
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>
     
    </Routes>

  );
}

export default App;