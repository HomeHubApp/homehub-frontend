import { useSetup } from "../context/SetUpContext";

// Import ALL your steps
import HomeSetup from "../components/HomeSetup";
import Step1_HomeAddress from "../components/Step1_HomeAddress";
import Step2_HomeName from "../components/Step2_HomeName";
import Step3_DeviceSetup from "../components/Step3_AddDevice";  // ← You'll create this later
import Step4_FinishSetup from "../components/Step4_FinishSetup";  // ← You'll create this later
// Import more steps here later...

const steps = [
  HomeSetup,           // ← Index 0
  Step1_HomeAddress,   // ← Index 1  (this should appear after "Get Started")
  Step2_HomeName,      // ← Index 2
  Step3_DeviceSetup,   // ← Index 3 (you'll create this later)
  Step4_FinishSetup,   // ← Index 4 (you'll create this later)
  // Add Step3, Step4 etc. here
];

function SetupWizard() {
  const { currentStep } = useSetup();

  const CurrentStepComponent = steps[currentStep];

  // Safety check (very useful during development)
  if (!CurrentStepComponent) {
    return <div>Error: Step {currentStep} not found!</div>;
  }

  return <CurrentStepComponent />;
}

export default SetupWizard;