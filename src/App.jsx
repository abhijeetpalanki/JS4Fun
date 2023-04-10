import "./App.css";
import AppRoutes from "./components/AppRoutes";

const App = () => {
  return (
    <div>
      <div className="font-['Caveat'] min-h-screen bg-appBg">
        <AppRoutes />
      </div>
    </div>
  );
};

export default App;
