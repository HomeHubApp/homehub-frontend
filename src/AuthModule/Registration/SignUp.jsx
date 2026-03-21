import { useState } from 'react'
import './SignUp.css'
import bedroomImg from '../../assets/bedroom.jpg'
import axios from 'axios'
import { Link } from 'react-router-dom'
export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }


  const handleSubmit =async (e) => {
      e.preventDefault()
    try{
    const response = await  axios.post('http://10.211.19.180:5000/api/auth/signup', formData)
    const data=response.data
    console.log(data);
   

  
    console.log('Form submitted:', formData)
    }catch(error){
     // This will log the actual message from your backend (e.g., "Password too short")
  console.log('Server Error Detail:', error.response?.data);
  
  console.error('Error during sign up:', error);
  alert(error.response?.data?.message || 'An error occurred during sign up.');
    }
  }

  return (
    <div className="signup-wrapper">
      {/* Left panel — lifestyle photo */}
      <div className="signup-image-panel">
        <img src={bedroomImg} alt="Smart home bedroom" className="signup-image" />
      </div>

      {/* Right panel — form */}
      <div className="signup-form-panel">
        <div className="signup-form-container">
          <h1 className="signup-title">Create your HomeHub account</h1>
          <p className="signup-subtitle">Manage all your home devices in one place.</p>

          {/* Google button */}
          <button className="btn-google" type="button">
            <svg
              className="google-icon"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                fill="#4285F4"
              />
              <path
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                fill="#34A853"
              />
              <path
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
                fill="#FBBC05"
              />
              <path
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                fill="#EA4335"
              />
            </svg>
            Continue with Google
          </button>

          {/* Divider */}
          <div className="divider">
            <span className="divider-line" />
            <span className="divider-text">OR</span>
            <span className="divider-line" />
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} noValidate>
            <div className="form-group">
              <label className="form-label" htmlFor="fullName">
                Full name
              </label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                className="form-input"
                placeholder="ex. Johnathan Smith"
                value={formData.fullName}
                onChange={handleChange}
                autoComplete="name"
              />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="email">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className="form-input"
                placeholder="ex. johnsmith@example.com"
                value={formData.email}
                onChange={handleChange}
                autoComplete="email"
              />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="password">
                Create password
              </label>
              <div className="input-wrapper">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  className="form-input input-with-icon"
                  placeholder="••••••••••••••"
                  value={formData.password}
                  onChange={handleChange}
                  autoComplete="new-password"
                />
                <button
                  type="button"
                  className="toggle-password"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? (
                    /* Eye icon */
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                    
                  ) : (
                    /* Eye-off icon */
                     <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" />
                      <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" />
                      <line x1="1" y1="1" x2="23" y2="23" />
                    </svg>
                    
                  )}
                </button>
              </div>
            </div>

            <Link to='/otp'>
              <button className="btn-create" type="submit">
                Create account
              </button>
            </Link>
              


          </form>

          <p className="signin-text">
            Already have an account?{' '}
            <a
              href="#"
              className="signin-link"
              onClick={(e) => {
                e.preventDefault()
                // TODO: route to login page e.g. navigate('/login')
              }}
            >
              Login
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

                    



                   