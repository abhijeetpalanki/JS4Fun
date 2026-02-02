const Progress = ({ count }) => {
  const hangmanParts = [
    <line key="1" x1="1%" y1="95%" x2="99%" y2="95%"></line>,
    <line key="2" x1="30%" y1="95%" x2="30%" y2="5%"></line>,
    <line key="3" x1="30%" y1="5%" x2="70%" y2="5%"></line>,
    <line key="4" x1="70%" y1="5%" x2="70%" y2="25%"></line>,
    <circle key="5" cx="70%" cy="30%" r="2%"></circle>,
    <line key="6" x1="70%" y1="35%" x2="70%" y2="45%"></line>,
    <line key="7" x1="70%" y1="45%" x2="68%" y2="55%"></line>,
    <line key="8" x1="70%" y1="45%" x2="72%" y2="55%"></line>,
    <line key="9" x1="70%" y1="38%" x2="68%" y2="46%"></line>,
    <line key="10" className="draw" x1="70%" y1="38%" x2="72%" y2="46%"></line>,
  ];

  return (
    <div className="hangman">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-[30vw] h-[10vh] md:h-[40vh] absolute -translate-x-1/2 -translate-y-1/2 md:top-[70%] md:left-1/2 left-[60%] top-[85%]"
      >
        {hangmanParts.slice(0, count)}
      </svg>
    </div>
  );
};

export default Progress;
