import React, { useState } from "react";
import { UseContextProvider } from "./StepperContext";
import Stepper from "./Stepper";
import StepperControl from "./StepperControl";
import AccountInformation from "./steps/AccountInformation";
import PersonalDetails from "./steps/PersonalDetails";
import Payment from "./steps/Payment";
import Complete from "./steps/Complete";

const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const steps = [
    "Account Information",
    "Personal Details",
    "Payment",
    "Complete",
  ];

  const displayStep = (step) => {
    switch (step) {
      case 1:
        return <AccountInformation />;
      case 2:
        return <PersonalDetails />;
      case 3:
        return <Payment />;
      case 4:
        return <Complete />;
      default:
        return;
    }
  };

  const handleClick = (direction) => {
    let newStep = currentStep;

    direction === "next" ? newStep++ : newStep--;
    newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-[#f1f5f9]">
      <div className="mx-auto drop-shadow-xl rounded-2xl pb-2 bg-white container">
        <Stepper steps={steps} currentStep={currentStep} />

        <div className="my-10 p-10">
          <UseContextProvider>{displayStep(currentStep)}</UseContextProvider>
        </div>

        {currentStep !== steps.length && (
          <StepperControl
            handleClick={handleClick}
            currentStep={currentStep}
            steps={steps}
          />
        )}
      </div>
    </div>
  );
};

export default MultiStepForm;
