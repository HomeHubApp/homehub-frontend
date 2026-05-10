import { Routes, Route, Navigate } from 'react-router-dom';

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
import Rooms from './Dashboard/Rooms';
import RoomDetails from './Dashboard/RoomDetails';
import LightDevice from './Dashboard/LightDevice'
import FanDeviceDetails from './Dashboard/FanDevice'
import AcDeviceDetails from './Dashboard/ACDevice'

import Schedule from "./Scheduling/Schedule";
import LoadingScreen from "./components/LoadingScreen";
import { useAuth } from "./context/AuthContext";


function App() {
  const { isAuthenticated, isBootstrappingAuth } = useAuth();

  if (isBootstrappingAuth) {
    return <LoadingScreen label="Checking your session..." />;
  }

  return (
     
    <Routes>    
 
      <Route path= '/' element={<LandingPage />} />
      <Route path='/signup' element={<SignUp />} />
      <Route
        path='/login'
        element={isAuthenticated ? <Navigate to="/dashboard" replace /> : <LoginForm />}
      />
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
      <Route
        element={isAuthenticated ? <DashboardLayout /> : <Navigate to="/login" replace />}
      >
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path = "/roomdetails/:roomId" element={<RoomDetails />} />
        <Route path = "/lightdevicedetails/:deviceID" element= {<LightDevice/>} />
        <Route path = "/fandevicedetails/:deviceID" element= {<FanDeviceDetails/>} />
        <Route path = "/acdevicedetails/:deviceID" element= {<AcDeviceDetails/>} />
         <Route path="/schedule" element={<Schedule />} />
      </Route>
     
    </Routes>

  );
}

export default App;
