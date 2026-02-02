import { useEffect, useState } from "react";

const Timeline = () => {
  const [showDetails1, setShowDetails1] = useState(false);
  const [showDetails2, setShowDetails2] = useState(false);
  const [showDetails3, setShowDetails3] = useState(false);
  const [showDetails4, setShowDetails4] = useState(false);
  const [showDetails5, setShowDetails5] = useState(false);
  const [showDetails6, setShowDetails6] = useState(false);

  useEffect(() => {
    const timelineWrapper = document.querySelector(".timeline-wrapper");

    timelineWrapper.addEventListener("mousemove", (e) => {
      const timeline = document.querySelector(".timeline");
      let scrollWidth =
        (e.pageX / timelineWrapper.clientWidth) *
        (timeline.clientWidth - timelineWrapper.clientWidth);

      timeline.style.left = scrollWidth.toFixed(1) + "px";
    });
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white">
      <h3 className="py-[1.4rem] w-full font-semibold text-center bg-slate-100">
        📢 Click on given{" "}
        <mark className="px-[0.7rem] py-[0.2rem] bg-yellow-500 rounded-[0.4rem]">
          ⚪ dots
        </mark>{" "}
        to see more information
      </h3>

      <div className="max-w-87.5 md:max-w-300 h-[88vh] flex justify-start items-center overflow-y-hidden timeline-wrapper">
        <ul className="h-[0.12rem] flex px-32 py-0 bg-[#888] timeline">
          <li
            data-date="Feb 23rd, 1995"
            className="w-80 relative before:absolute before:content-[''] before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:scale-100  before:inline-block before:w-[0.12rem] before:h-4 before:bg-[#888] before:top-4 after:absolute after:content-[attr(data-date)] after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:scale-100 after:top-[3.4rem] before:transition-all before:duration-500 before:ease-in-out  after:transition-all after:duration-500 after:ease-in-out hover:before:bg-[#4000ff] hover:after:text-[#4000ff] group"
          >
            <span className="absolute scale-100 -translate-x-1/2 -translate-y-1/2 -top-[2.4rem] group-hover:opacity-100 font-semibold text-[1.1rem] whitespace-pre opacity-0 left-1/2 transition-all duration-500 ease-in-out text-[#4000ff]">
              Brother's Birthday
            </span>
            <div
              onClick={() => {
                setShowDetails1(true);
                setShowDetails2(false);
                setShowDetails3(false);
                setShowDetails4(false);
                setShowDetails5(false);
                setShowDetails6(false);
              }}
              className={`group-hover:bg-[#4000ff] group-hover:scale-125 group-hover:cursor-pointer bg-[#888] text-white overflow-hidden absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-100 transition-all duration-300 ease-in-out flex flex-col justify-around ${
                showDetails1
                  ? "w-88 h-88 rounded-2xl p-4 bg-linear-to-tr from-[#4000ff] to-pink-500 z-10 shadow-[0_0.1rem_0.4rem_#0004]"
                  : "w-[1.3rem] h-[1.3rem] rounded-[50%]"
              }`}
            >
              <h3 className="capitalize">My brother rocks!</h3>
              <small>Feb 23rd, 1995</small>
              <p
                className={`p-4 bg-white/30 rounded-2xl ${
                  showDetails1 ? "ml-0" : "ml-[0.7rem]"
                }`}
              >
                It was such a special childhood getting to look up to you. Now
                you get to look up at me! Happy birthday old man.
              </p>
              <span className="bg-[#00a1ff] self-start py-2 px-[0.8rem] rounded-4xl text-base">
                Click To Close
              </span>
            </div>
          </li>

          <li
            data-date="Apr 27th, 2022"
            className="w-80 relative before:absolute before:content-[''] before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:scale-100  before:inline-block before:w-[0.12rem] before:h-4 before:bg-[#888] before:-top-4 after:absolute after:content-[attr(data-date)] after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:scale-100 after:-top-[3.4rem] before:transition-all before:duration-500 before:ease-in-out after:transition-all after:duration-500 after:ease-in-out hover:before:bg-[#4000ff] hover:after:text-[#4000ff] group"
          >
            <span className="absolute scale-100 -translate-x-1/2 -translate-y-1/2 top-[2.4rem] group-hover:opacity-100 font-semibold text-[1.1rem] whitespace-pre opacity-0 left-1/2 transition-all duration-500 ease-in-out text-[#4000ff]">
              First Meet & Greet
            </span>
            <div
              onClick={() => {
                setShowDetails2(true);
                setShowDetails1(false);
                setShowDetails3(false);
                setShowDetails4(false);
                setShowDetails5(false);
                setShowDetails6(false);
              }}
              className={`group-hover:bg-[#4000ff] group-hover:scale-125 group-hover:cursor-pointer bg-[#888] text-white overflow-hidden absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-100 transition-all duration-300 ease-in-out flex flex-col justify-around ${
                showDetails2
                  ? "w-88 h-88 rounded-2xl p-4 bg-linear-to-tr from-[#4000ff] to-pink-500 z-10 shadow-[0_0.1rem_0.4rem_#0004]"
                  : "w-[1.3rem] h-[1.3rem] rounded-[50%]"
              }`}
            >
              <h3 className="capitalize">Best day of my life!</h3>
              <small>Apr 27th, 2022</small>
              <p
                className={`p-4 bg-white/30 rounded-2xl ${
                  showDetails2 ? "ml-0" : "ml-[0.7rem]"
                }`}
              >
                I never would have thought that the day we met each other was
                the best day of my entire life.
              </p>
              <span className="bg-[#00a1ff] self-start py-2 px-[0.8rem] rounded-4xl text-base">
                Click To Close
              </span>
            </div>
          </li>

          <li
            data-date="May 20th, 2022"
            className="w-80 relative before:absolute before:content-[''] before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:scale-100  before:inline-block before:w-[0.12rem] before:h-4 before:bg-[#888] before:top-4 after:absolute after:content-[attr(data-date)] after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:scale-100 after:top-[3.4rem] before:transition-all before:duration-500 before:ease-in-out  after:transition-all after:duration-500 after:ease-in-out hover:before:bg-[#4000ff] hover:after:text-[#4000ff] group"
          >
            <span className="absolute scale-100 -translate-x-1/2 -translate-y-1/2 -top-[2.4rem] group-hover:opacity-100 font-semibold text-[1.1rem] whitespace-pre opacity-0 left-1/2 transition-all duration-500 ease-in-out text-[#4000ff]">
              Wedding Anniversary
            </span>
            <div
              onClick={() => {
                setShowDetails3(true);
                setShowDetails1(false);
                setShowDetails2(false);
                setShowDetails4(false);
                setShowDetails5(false);
                setShowDetails6(false);
              }}
              className={`group-hover:bg-[#4000ff] group-hover:scale-125 group-hover:cursor-pointer bg-[#888] text-white overflow-hidden absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-100 transition-all duration-300 ease-in-out flex flex-col justify-around ${
                showDetails3
                  ? "w-88 h-88 rounded-2xl p-4 bg-linear-to-tr from-[#4000ff] to-pink-500 z-10 shadow-[0_0.1rem_0.4rem_#0004]"
                  : "w-[1.3rem] h-[1.3rem] rounded-[50%]"
              }`}
            >
              <h3 className="capitalize">My love for you is everlasting!</h3>
              <small>May 20th, 2022</small>
              <p
                className={`p-4 bg-white/30 rounded-2xl ${
                  showDetails3 ? "ml-0" : "ml-[0.7rem]"
                }`}
              >
                Your face brings a smile to my face every day and for that I’m
                forever grateful. Happy anniversary to the person who makes my
                heart sing.
              </p>
              <span className="bg-[#00a1ff] self-start py-2 px-[0.8rem] rounded-4xl text-base">
                Click To Close
              </span>
            </div>
          </li>

          <li
            data-date="Aug 20th, 1964"
            className="w-80 relative before:absolute before:content-[''] before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:scale-100  before:inline-block before:w-[0.12rem] before:h-4 before:bg-[#888] before:-top-4 after:absolute after:content-[attr(data-date)] after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:scale-100 after:-top-[3.4rem] before:transition-all before:duration-500 before:ease-in-out after:transition-all after:duration-500 after:ease-in-out hover:before:bg-[#4000ff] hover:after:text-[#4000ff] group"
          >
            <span className="absolute scale-100 -translate-x-1/2 -translate-y-1/2 top-[2.4rem] group-hover:opacity-100 font-semibold text-[1.1rem] whitespace-pre opacity-0 left-1/2 transition-all duration-500 ease-in-out text-[#4000ff]">
              Dad's Birthday
            </span>
            <div
              onClick={() => {
                setShowDetails4(true);
                setShowDetails1(false);
                setShowDetails2(false);
                setShowDetails3(false);
                setShowDetails5(false);
                setShowDetails6(false);
              }}
              className={`group-hover:bg-[#4000ff] group-hover:scale-125 group-hover:cursor-pointer bg-[#888] text-white overflow-hidden absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-100 transition-all duration-300 ease-in-out flex flex-col justify-around ${
                showDetails4
                  ? "w-88 h-88 rounded-2xl p-4 bg-linear-to-tr from-[#4000ff] to-pink-500 z-10 shadow-[0_0.1rem_0.4rem_#0004]"
                  : "w-[1.3rem] h-[1.3rem] rounded-[50%]"
              }`}
            >
              <h3 className="capitalize">Greatest pillar</h3>
              <small>Aug 20th, 1964</small>
              <p
                className={`p-4 bg-white/30 rounded-2xl ${
                  showDetails4 ? "ml-0" : "ml-[0.7rem]"
                }`}
              >
                I'm the luckiest person to have a dad like you.
              </p>
              <span className="bg-[#00a1ff] self-start py-2 px-[0.8rem] rounded-4xl text-base">
                Click To Close
              </span>
            </div>
          </li>

          <li
            data-date="Dec 1st, 1995"
            className="w-80 relative before:absolute before:content-[''] before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:scale-100  before:inline-block before:w-[0.12rem] before:h-4 before:bg-[#888] before:top-4 after:absolute after:content-[attr(data-date)] after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:scale-100 after:top-[3.4rem] before:transition-all before:duration-500 before:ease-in-out  after:transition-all after:duration-500 after:ease-in-out hover:before:bg-[#4000ff] hover:after:text-[#4000ff] group"
          >
            <span className="absolute scale-100 -translate-x-1/2 -translate-y-1/2 -top-[2.4rem] group-hover:opacity-100 font-semibold text-[1.1rem] whitespace-pre opacity-0 left-1/2 transition-all duration-500 ease-in-out text-[#4000ff]">
              Wife's Birthday
            </span>
            <div
              onClick={() => {
                setShowDetails5(true);
                setShowDetails1(false);
                setShowDetails2(false);
                setShowDetails3(false);
                setShowDetails4(false);
                setShowDetails6(false);
              }}
              className={`group-hover:bg-[#4000ff] group-hover:scale-125 group-hover:cursor-pointer bg-[#888] text-white overflow-hidden absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-100 transition-all duration-300 ease-in-out flex flex-col justify-around ${
                showDetails5
                  ? "w-88 h-88 rounded-2xl p-4 bg-linear-to-tr from-[#4000ff] to-pink-500 z-10 shadow-[0_0.1rem_0.4rem_#0004]"
                  : "w-[1.3rem] h-[1.3rem] rounded-[50%]"
              }`}
            >
              <h3 className="capitalize">You're my favorite!</h3>
              <small>Dec 1st, 1995</small>
              <p
                className={`p-4 bg-white/30 rounded-2xl ${
                  showDetails5 ? "ml-0" : "ml-[0.7rem]"
                }`}
              >
                It's your special day — get out there and celebrate.
              </p>
              <span className="bg-[#00a1ff] self-start py-2 px-[0.8rem] rounded-4xl text-base">
                Click To Close
              </span>
            </div>
          </li>

          <li
            data-date="Dec 3rd, 1968"
            className="w-80 relative before:absolute before:content-[''] before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:scale-100  before:inline-block before:w-[0.12rem] before:h-4 before:bg-[#888] before:-top-4 after:absolute after:content-[attr(data-date)] after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:scale-100 after:-top-[3.4rem] before:transition-all before:duration-500 before:ease-in-out after:transition-all after:duration-500 after:ease-in-out hover:before:bg-[#4000ff] hover:after:text-[#4000ff] group"
          >
            <span className="absolute scale-100 -translate-x-1/2 -translate-y-1/2 top-[2.4rem] group-hover:opacity-100 font-semibold text-[1.1rem] whitespace-pre opacity-0 left-1/2 transition-all duration-500 ease-in-out text-[#4000ff]">
              Mom's Birthday
            </span>
            <div
              onClick={() => {
                setShowDetails6(true);
                setShowDetails1(false);
                setShowDetails2(false);
                setShowDetails3(false);
                setShowDetails4(false);
                setShowDetails5(false);
              }}
              className={`group-hover:bg-[#4000ff] group-hover:scale-125 group-hover:cursor-pointer bg-[#888] text-white overflow-hidden absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-100 transition-all duration-300 ease-in-out flex flex-col justify-around ${
                showDetails6
                  ? "w-88 h-88 rounded-2xl p-4 bg-linear-to-tr from-[#4000ff] to-pink-500 z-10 shadow-[0_0.1rem_0.4rem_#0004]"
                  : "w-[1.3rem] h-[1.3rem] rounded-[50%]"
              }`}
            >
              <h3 className="capitalize">Mothers are the best gift.</h3>
              <small>Dec 3rd, 1968</small>
              <p
                className={`p-4 bg-white/30 rounded-2xl ${
                  showDetails6 ? "ml-0" : "ml-[0.7rem]"
                }`}
              >
                Happy Birthday, with heartfelt thanks and lots of love, to my
                wise, wonderful, one-and-only Mom.
              </p>
              <span className="bg-[#00a1ff] self-start py-2 px-[0.8rem] rounded-4xl text-base">
                Click To Close
              </span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Timeline;
