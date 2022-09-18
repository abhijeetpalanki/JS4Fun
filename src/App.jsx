import React from "react";
import "./App.css";
import AppRoutes from "./components/AppRoutes";

const App = () => {
  return (
    <div>
      <div className="font-['Lato'] min-h-screen bg-gray-100 main-page">
        <AppRoutes />
      </div>
    </div>
  );
};

export default App;
