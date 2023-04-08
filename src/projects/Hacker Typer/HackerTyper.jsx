import { useState, useEffect, useRef } from "react";
import code from "./code.txt";
import Message from "./Message";

const CHARS_PER_STROKES = 5;

const HackerTyper = () => {
  const [sourceCode, setSourceCode] = useState("");
  const [content, setContent] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [messageType, setMessageType] = useState("denied");
  const [isLocked, setIsLocked] = useState(false);
  const containerRef = useRef(null);
  const paraRef = useRef(null);

  useEffect(() => {
    containerRef.current.focus();

    fetch(code)
      .then((res) => res.text())
      .then((text) => setSourceCode(text))
      .catch((err) => console.log(err.message));
  }, []);

  const runScript = () => {
    if (isLocked) return;

    setCurrentIndex(currentIndex + CHARS_PER_STROKES);
    setContent(sourceCode.substring(0, currentIndex));

    paraRef.current.scrollIntoView();

    if (currentIndex !== 0 && currentIndex % 300 === 0) {
      setIsLocked(true);
      setMessageType("denied");
    }
    if (currentIndex !== 0 && currentIndex % 900 === 0) {
      setIsLocked(true);
      setMessageType("success");
    }
  };

  const removeMessage = () => {
    setIsLocked(false);
  };

  const handleKeyDown = (e) => {
    if (e.key !== "Escape") runScript();
    else removeMessage();
  };

  return (
    <div className="h-screen font-mono bg-black">
      <div
        className="relative w-full h-screen p-3 overflow-y-auto focus:outline-none"
        onKeyDown={handleKeyDown}
        tabIndex={0}
        ref={containerRef}
      >
        <div
          className="text-[#2ad400] text-base whitespace-pre-wrap"
          id="source"
        >
          {content}
          <span className="inline-block animate-blink font-bold text-[#10ff00]">
            _
          </span>
        </div>
        <p ref={paraRef}></p>
        {isLocked && <Message type={messageType} />}
      </div>
    </div>
  );
};

export default HackerTyper;
