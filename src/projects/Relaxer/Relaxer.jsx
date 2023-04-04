import { useEffect, useRef } from "react";
import "./Relaxer.css";

const Relaxer = () => {
  const containerRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const totalTime = 7500;
    const breatheTime = (totalTime / 5) * 2;
    const holdTime = totalTime / 5;

    textRef.current.innerHTML = "Breathe In!";
    containerRef.current.className = "container relaxer-grow";

    setTimeout(() => {
      textRef.current.innerText = "Hold";

      setTimeout(() => {
        textRef.current.innerText = "Breathe Out!";
        containerRef.current.className = "container relaxer-shrink";
      }, holdTime);
    }, breatheTime);

    setInterval(() => {
      textRef.current.innerHTML = "Breathe In!";
      containerRef.current.className = "container relaxer-grow";

      setTimeout(() => {
        textRef.current.innerText = "Hold";

        setTimeout(() => {
          textRef.current.innerText = "Breathe Out!";
          containerRef.current.className = "container relaxer-shrink";
        }, holdTime);
      }, breatheTime);
    }, totalTime);
  }, []);

  return (
    <div className="relaxer-body">
      <h1>Relaxer</h1>
      <div className="container" ref={containerRef}>
        <div className="circle"></div>

        <p ref={textRef}></p>

        <div className="pointer-container">
          <span className="pointer"></span>
        </div>

        <div className="gradient-circle"></div>
      </div>
    </div>
  );
};

export default Relaxer;
