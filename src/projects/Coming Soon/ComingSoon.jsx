import FlipClockCountdown from "@leenguyen/react-flip-clock-countdown";
import "@leenguyen/react-flip-clock-countdown/dist/index.css";

import videoBg from "./video-bg.mp4";

const ComingSoon = () => {
  return (
    <section className="flex flex-col justify-center items-center w-screen h-screen font-['Poppins'] text-white">
      <div className="absolute w-full h-full bg-black/70"></div>

      <video
        src={videoBg}
        autoPlay
        loop
        muted
        className="object-cover w-full h-full"
      ></video>

      <div className="absolute flex flex-col items-center text-center">
        <h1 className="mb-4 text-xl lg:text-7xl">Coming Soon</h1>
        <h3 className="font-light max-w-[400px] lg:max-w-[600px] mb-12">
          Leave your email and we'll let you know once the site goes live.
        </h3>

        <div className="mb-8">
          <FlipClockCountdown
            to={new Date().getTime() + 24 * 3600 * 1000 + 5000}
            className="flip-clock"
            labels={["DAYS", "HOURS", "MINUTES", "SECONDS"]}
            duration={0.5}
            digitBlockStyle={{
              width: "30px",
              height: "60px",
              fontSize: "30px",
              backgroundColor: "#fff",
              color: "#000",
              fontFamily: "Orbitron",
              fontWeight: 700,
            }}
            labelStyle={{ fontSize: "10px", color: "#fff" }}
            dividerStyle={{ color: "#000" }}
            separatorStyle={{ color: "red" }}
          />
        </div>

        <button className="w-[180px] h-[64px] bg-white text-black text-base font-['Poppins'] uppercase leading-[1px] rounded-lg font-bold">
          Notify Me
        </button>
      </div>
    </section>
  );
};

export default ComingSoon;
