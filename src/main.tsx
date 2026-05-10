import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import { Toaster } from 'react-hot-toast'


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AuthProvider>
      <App />
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 3500,
          style: {
            background: '#111827',
            color: '#F9FAFB',
            borderRadius: '14px',
            padding: '12px 14px',
          },
        }}
      />
    </AuthProvider>
  </BrowserRouter>,
)
