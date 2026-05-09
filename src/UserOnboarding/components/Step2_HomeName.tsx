import { useSetup } from "../context/SetUpContext";
import "./css/thirdPage.css";

function Step2_HomeName() {
  const { formData, updateFormData, nextStep } = useSetup();

  return (
    <div className="page">
      <div className="card">
        {/* ... same header ... */}

        <div className="inner-card">
          <p className="step">STEP 2 / 3</p>
          <h2>Name your home</h2>

          <input
            className="home-field"
            placeholder="ex My house"
            value={formData.homeName}
            onChange={(e) => updateFormData({ homeName: e.target.value })}
          />
        </div>

        <button className="finish-btn" onClick={nextStep}>
          Next
        </button>
      </div>
    </div>
  );
}
export default Step2_HomeName;