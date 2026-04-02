import { Link } from "react-router-dom";
import "./assets/CSS/LandingPage.css";

function LandingPage() {
  return (
    <div className="landing-page">
      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo">
            <span className="logo-text">HomeHub</span>
          </div>
          <div className="nav-links">
            <a href="#features">Features</a>
            <a href="#how">How it Works</a>
            <a href="#pricing">Pricing</a>
          </div>
          <Link to="/setup">
            <button className="nav-btn">Get Started</button>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1>
              Control Your Entire Home <br />
              <span className="highlight">From Anywhere</span>
            </h1>
            
            <p className="hero-subtitle">
              Manage lights, security, appliances, and more — all in one 
              beautiful dashboard. Peace of mind, simplified.
            </p>

            <div className="hero-buttons">
              <Link to="/setup">
                <button className="primary-btn hero-btn">
                  Get Started — It's Free
                </button>
              </Link>
              
              <button className="secondary-btn hero-btn">
                Watch Demo
              </button>
            </div>

            <div className="trust-badges">
              <p>Trusted by over 12,450 smart homes</p>
              <div className="stars">★★★★★</div>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="hero-visual">
            <div className="device-mockup">
              <div className="mockup-screen">
                <div className="mockup-content">
                  <div className="room">Living Room</div>
                  <div className="status">All Devices Online</div>
                  <div className="devices-grid">
                    <div className="device">💡 Lights</div>
                    <div className="device">🔒 Door</div>
                    <div className="device">🌡️ AC</div>
                    <div className="device">📺 TV</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Gradient Overlay */}
        <div className="gradient-overlay"></div>
      </section>
    </div>
  );
}

export default LandingPage;