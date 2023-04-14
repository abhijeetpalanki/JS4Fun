import "./App.css";
import AppRoutes from "./components/AppRoutes";

const App = () => {
  return (
    <div>
      <div className="font-['Caveat'] min-h-screen bg-gradient-to-br from-[rgba(156,252,248,1)] to-[rgba(110,123,251,1)]">
        <AppRoutes />
      </div>
    </div>
  );
};

export default App;
