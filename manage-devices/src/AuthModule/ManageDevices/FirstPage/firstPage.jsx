import { Link } from "react-router-dom";
import "./firstPage.css";

function HomeSetup() {
  return (
    <div className="container">
      <div className="card">
        <h1 className="title">
          Manage your digital home devices in one place.
        </h1>

        <p className="subtitle">
          Add, manage, and control all your home devices while you're away,
          so you can be at ease.
        </p>

        <ul className="steps">
          <li>✔ Add a home</li>
          <li>✔ Name your home</li>
          <li>✔ Add a device</li>
          <li>✔ Name your home</li>
        </ul>

        <Link to ="/add">
        <button className="primary-btn">Get started</button>
        </Link>

        <button className="secondary-btn">
          Skip, I'll do this later
        </button>
      </div>
    </div>
  );
}

export default HomeSetup;