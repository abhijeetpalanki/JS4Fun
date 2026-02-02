import { motion } from "framer-motion";
import { useState } from "react";

const MultiStepForm = () => {
  const [step, setStep] = useState(1);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-slate-700 to-slate-900">
      <div className="w-full max-w-md bg-white h-80 rounded-2xl">
        <div className="flex justify-between p-8 rounded">
          <Step step={1} currentStep={step} />
          <Step step={2} currentStep={step} />
          <Step step={3} currentStep={step} />
          <Step step={4} currentStep={step} />
        </div>
        <div className="px-8 pb-8">
          <div>
            <div className="w-40 h-6 mt-2 rounded bg-slate-100"></div>
            <div className="mt-4 space-y-2">
              <div className="w-5/6 h-4 rounded bg-slate-100"></div>
              <div className="h-4 rounded bg-slate-100"></div>
              <div className="w-4/6 h-4 rounded bg-slate-100"></div>
            </div>
          </div>

          <div className="flex justify-between mt-10">
            <button
              onClick={() => setStep(step < 2 ? step : step - 1)}
              className="px-2 py-1 rounded text-slate-400 hover:text-slate-700"
            >
              Back
            </button>

            <button
              onClick={() => setStep(step > 4 ? step : step + 1)}
              className={`${
                step > 4 ? "pointer-events-none opacity-50" : ""
              } flex items-center justify-center rounded-full bg-blue-500 px-2 py-1.5`}
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

function Step({ step, currentStep }) {
  let status =
    currentStep === step
      ? "active"
      : currentStep < step
      ? "inactive"
      : "complete";

  return (
    <motion.div animate={status} className="relative">
      <motion.div
        variants={{
          active: { scale: 1, transition: { delay: 0, duration: 0.2 } },
          complete: { scale: 1.25 },
        }}
        transition={{
          duration: 0.6,
          delay: 0.2,
          type: "tween",
          ease: "circOut",
        }}
        className="absolute inset-0 bg-blue-200 rounded-full"
      ></motion.div>

      <motion.div
        initial={false}
        variants={{
          inactive: {
            backgroundColor: "#fff",
            borderColor: "#e2e8f0",
            color: "#94a3b8",
          },
          active: {
            backgroundColor: "#fff",
            borderColor: "#3b82f6",
            color: "#3b82f6",
          },
          complete: {
            backgroundColor: "#3b82f6",
            borderColor: "#3b82f6",
            color: "#3b82f6",
          },
        }}
        transition={{ duration: 0.2 }}
        className={`relative flex h-10 w-10 items-center justify-center rounded-full border-2 font-semibold`}
      >
        <div className="flex items-center justify-center">
          {status === "complete" ? (
            <CheckIcon className="w-6 h-6 text-white" />
          ) : (
            <span>{step}</span>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

function CheckIcon(props) {
  return (
    <svg
      {...props}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={3}
    >
      <motion.path
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{
          delay: 0.2,
          type: "tween",
          ease: "easeOut",
          duration: 0.3,
        }}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5 13l4 4L19 7"
      />
    </svg>
  );
}

export default MultiStepForm;
