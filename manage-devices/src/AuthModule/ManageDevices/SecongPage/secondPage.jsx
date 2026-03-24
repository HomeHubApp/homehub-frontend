// AddDevice.jsx
import { Link } from "react-router-dom";
import "./secondPage.css";

function AddDevice() {
  return (
    <div className="page">
      <div className="card">
        <h1 className="title">
          Manage your digital home devices in one place.
        </h1>

        <p className="subtitle">
          Add, manage, and control all your home devices while you're away, so
          you can be at ease.
        </p>

        <div className="inner-card">
          <p className="step">STEP 1 / 3</p>

          <h2 className="inner-title">Add home address</h2>

          <p className="inner-text">
            Enter your home address to control all the devices in this home.
          </p>

          <p className="address">Address</p>
          <input
            className="address-field"
            placeholder="ex Plot 592 Pilta Street, SA"
          />
        </div>

        <Link to="/home">
          <button className="finish-btn">Next</button>
        </Link>
      </div>
    </div>
  );
}

export default AddDevice;
