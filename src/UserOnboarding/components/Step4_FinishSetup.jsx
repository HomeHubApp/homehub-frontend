import { useSetup } from "../context/SetUpContext";
import "./css/fifthPage.css";
function Step3_AddDevice() {
  const { formData, updateFormData, nextStep } = useSetup();

  const handleNext = () => {
    // Optional: Add validation later
    
    nextStep();
  };

   return (
    <div className="page">
      <div className="card">
        <h1 className="title">
          You're all set!
        </h1>

        <p className="subtitle">
          You can now control any device you want, anytime, anywhere.
        </p>

        <button className="finish-btn">Go to dashboard</button>
      </div>
    </div>
  );
}
export default Step3_AddDevice;