import { useState } from "react";

const DadJokes = () => {
  const [jokeObj, setJokeObj] = useState(
    "What did the ocean say to the shore? Nothing, it just waved."
  );

  const generateJoke = async () => {
    const config = {
      headers: {
        Accept: "application/json",
      },
    };

    try {
      const res = await fetch("https://icanhazdadjoke.com", config);

      const { joke } = await res.json();
      setJokeObj(joke);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-white flex justify-center items-center flex-col rounded-[10px] py-[50px] px-[20px] text-center max-w-full w-[800px] shadow-[0_10px_20px_#00000019,0_6px_6px_#00000019]">
        <h3 className="m-0 opacity-50 tracking-[2px] text-black">
          Don't Laugh Challenge
        </h3>
        <div className="text-[30px] tracking-[1px] leading-[40px] my-[50px] mx-auto max-w-[600px] text-black">
          {jokeObj}
        </div>
        <button
          className="bg-[#9f68e0] text-white border-0 rounded-[10px] py-[14px] px-[40px] text-[16px] shadow-[0_5px_15px_#00000019,0_6px_6px_#00000019] active:scale-[0.98] focus:outline-none"
          onClick={generateJoke}
        >
          Get Another Joke
        </button>
      </div>
    </div>
  );
};

export default DadJokes;
