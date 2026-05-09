import { useSetup } from "../context/SetUpContext";   // ← Make sure path & name is correct
import "./css/firstPage.css";

function HomeSetup() {
  const { formData, updateFormData, nextStep } = useSetup();

  const handleNext = () => {
    nextStep();
  };

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
          <li>✔ Add a home - Enter Home Address</li>
          <li>✔ Name your home</li>
          <li>✔ Add a device</li>
          <li>✔ Name your home</li>
        </ul>

        
        <button className="primary-btn" onClick={handleNext}>
          Get started
          </button>

        <button className="secondary-btn">
          Skip, I'll do this later
        </button>
      </div>
    </div>
  );
}


export default HomeSetup;