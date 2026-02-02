import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Play from "./Play";
import Game from "./Game";

const RockPaperScissors = () => {
  const [myChoice, setMyChoice] = useState("");

  return (
    <div
      className="flex justify-center h-screen text-center text-white"
      style={{
        background: "radial-gradient(circle, #1f3756,#141539",
      }}
    >
      <div className="flex flex-col items-center">
        <Header />
        <Routes>
          <Route path="/" element={<Play setMyChoice={setMyChoice} />} />
          <Route path="/game" element={<Game myChoice={myChoice} />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
};

export default RockPaperScissors;
