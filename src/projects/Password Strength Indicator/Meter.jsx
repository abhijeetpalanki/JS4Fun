import zxcvbn from "zxcvbn";

const Meter = ({ password }) => {
  const testResult = zxcvbn(password);
  const num = (testResult.score * 100) / 4;

  const createPasswordLabel = () => {
    switch (testResult.score) {
      case 0:
        return "Very weak";
      case 1:
        return "Weak";
      case 2:
        return "Neutral";
      case 3:
        return "Good";
      case 4:
        return "Strong";
      default:
        return "";
    }
  };

  const progressColor = () => {
    switch (testResult.score) {
      case 0:
        return "#828282";
      case 1:
        return "#ea1111";
      case 2:
        return "#ffad00";
      case 3:
        return "#9bc158";
      case 4:
        return "#00b500";
      default:
        return "none";
    }
  };

  const changePasswordColor = () => ({
    width: `${num}%`,
    background: progressColor(),
  });

  return (
    <>
      <div className="w-full h-3 mt-2 bg-gray-300 rounded-full">
        <div
          className="h-3 rounded-full progress-bar transition-[width] duration-[0.6s] ease-[cubic-bezier(0.4, 0, 0.2, 1)]"
          style={changePasswordColor()}
        ></div>
      </div>
      <p className="text-right" style={{ color: progressColor() }}>
        {createPasswordLabel()}
      </p>
    </>
  );
};

export default Meter;
