import { useState } from "react";
import Meter from "./Meter";

const PasswordStrengthIndicator = () => {
  const [password, setPassword] = useState("");

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col">
        <div className="mx-auto">
          <h3 className="my-4 text-center text-[20px] font-bold">
            Password Strength Indicator
          </h3>
          <div className="w-full max-w-xs">
            <div className="px-8 pt-6 pb-8 mb-4 bg-white rounded shadow-md">
              <input
                className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <Meter password={password} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PasswordStrengthIndicator;
