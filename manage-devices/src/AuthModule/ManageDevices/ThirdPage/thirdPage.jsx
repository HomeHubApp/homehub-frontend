import { Link } from "react-router-dom";
import "./thirdPage.css";

function ThirdPage() {
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
          <p className="step">STEP 2 / 3</p>

          <h2 className="inner-title">Name your home</h2>

          <p className="inner-text">
            Identify this home with a specific name(i.e 'My house')
          </p>

           <p className="home-name">Home name</p>
          <input className="home-field" placeholder="ex My house"/>
        </div>

        <Link to="/device">
        <button className="finish-btn">Next</button>
        </Link>
      </div>
    </div>
  );
}

export default ThirdPage;