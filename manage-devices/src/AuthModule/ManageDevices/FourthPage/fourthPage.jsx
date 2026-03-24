// AddDevice.jsx
import { Link } from "react-router-dom";
import "./fourthPage.css";

function FourthPage() {
  return (
    <div className="page">
      <div className="card">
        <h1 className="title">
          Manage your digital home devices in one place.
        </h1>

        <p className="subtitle">
          Add, manage, and control all your home devices while you're away,
          so you can be at ease.
        </p>

        <div className="inner-card">
          <p className="step">STEP 3 / 3</p>

          <h2 className="inner-title">Add a device</h2>

          <p className="inner-text">
            Enter the details for your home device to control and monitor it
            from anywhere.
          </p>

          <button className="add-btn">
            <span className="plus">+</span> Add a device
          </button>
        </div>

        <Link to="/end">
        <button className="finish-btn">Finish</button>
        </Link>
      </div>
    </div>
  );
}

export default FourthPage;