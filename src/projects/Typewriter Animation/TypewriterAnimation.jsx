import { ReactTyped } from "react-typed";
import bg from "./bg.jpg";

const TypewriterAnimation = () => {
  return (
    <div
      className="flex items-center justify-center h-screen bg-cover bg-no-repeat bg-[#dd2476]"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="flex flex-col items-center justify-center w-screen h-screen">
        <div>
          <h1 className="text-2xl md:text-[40px] font-extrabold text-transparent bg-clip-text bg-linear-to-b from-[rgb(236,222,222)] to-[rgb(248,15,132)]">
            React Typing Animation Effect
          </h1>
        </div>
        <div className="mt-5">
          <ReactTyped
            strings={[
              "I'm a Full Stack Developer",
              "I Love Software Development",
              "I Love Animation Development",
              "I Love Game Development",
            ]}
            typeSpeed={150}
            backSpeed={100}
            loop
            className="text-xl md:text-5xl font-semibold text-white [text-shadow:2px_2px_#8bc7f0]"
          />
        </div>
        <div className="pt-0 md:pt-12.5 flex">
          <button className="m-2.5 py-2.5 px-6.25 md:py-5 md:px-11.25 text-center uppercase duration-500 bg-size-[200%_auto] text-black shadow-[0_4px_24px_#0000007f] rounded-[30px] block border-none outline-none cursor-pointer bg-linear-to-r from-[#ff512f] via-[#dd2476] to-[#ff512f] hover:bg-linear-to-l hover:text-white">
            Learn More
          </button>
          <button className="m-2.5 py-5 px-11.25 text-center uppercase duration-500 bg-size-[200%_auto] text-black shadow-[0_4px_24px_#0000007f] rounded-[30px] block border-none outline-none cursor-pointer bg-linear-to-r from-[#614385] via-[#516395] to-[#516395] hover:bg-linear-to-l hover:text-white">
            Talk To Us Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default TypewriterAnimation;
