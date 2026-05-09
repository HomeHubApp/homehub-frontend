import { createContext, useContext, useState, type ReactNode } from "react";

type SetupFormData = {
  address: string;
  homeName: string;
  devices: string[];
};

type SetupContextValue = {
  formData: SetupFormData;
  updateFormData: (newData: Partial<SetupFormData>) => void;
  currentStep: number;
  nextStep: () => void;
  prevStep: () => void;
  submitSetup: () => Promise<void>;
};

const SetupContext = createContext<SetupContextValue | undefined>(undefined);

export const useSetup = () => {
  const context = useContext(SetupContext);

  if (!context) {
    throw new Error("useSetup must be used within a SetupProvider");
  }

  return context;
};

type SetupProviderProps = {
  children: ReactNode;
};

export const SetupProvider = ({ children }: SetupProviderProps) => {
  const [formData, setFormData] = useState({
    address: "",
    homeName: "",
    devices: [], // you can expand later
    // add more fields as needed
  });

  const [currentStep, setCurrentStep] = useState(0);

  const updateFormData = (newData: Partial<SetupFormData>) => {
    setFormData(prev => ({ ...prev, ...newData }));
  };

  const nextStep = () => {
    setCurrentStep(prev => prev + 1);
     console.log("Moving to next step");
  };
  const prevStep = () => {
    console.log("Moving to previous step");
    setCurrentStep(prev => prev - 1);
  };

  const submitSetup = async () => {
    // Send to backend
    console.log("Final data:", formData);
    // await axios.post('/api/homes', formData);
  };

  return (
    <SetupContext.Provider value={{
      formData,
      updateFormData,
      currentStep,
      nextStep,
      prevStep,
      submitSetup
    }}>
      {children}
    </SetupContext.Provider>
  );
};
