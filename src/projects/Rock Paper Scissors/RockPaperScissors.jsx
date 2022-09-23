import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Play from "./Play";
import Game from "./Game";

const RockPaperScissors = () => {
  const [myChoice, setMyChoice] = useState("");

  return (
    <div
      className="font-['Barlow_Semi_Condensed'] h-screen flex justify-center text-white text-center"
      style={{
        background:
          "radial-gradient(circle, hsl(214, 47%, 23%),hsl(237, 49%, 15%)",
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
