import { useEffect } from "react";
import mouse from "./mouse.png";

const Doraemon = () => {
  useEffect(() => {
    const body = document.querySelector("body");

    body.addEventListener("mousemove", (event) => {
      const eyes = document.querySelectorAll(".eye-black");

      eyes.forEach((eye) => {
        const x = eye.getBoundingClientRect().left + eye.clientWidth / 2;
        const y = eye.getBoundingClientRect().top + eye.clientHeight / 2;

        const radian = Math.atan2(event.pageX - x, event.pageY - y);
        const rotate = radian * (180 / Math.PI) * -1;

        eye.style.transform = `rotate(${rotate}deg)`;
      });
    });
  }, []);
  return (
    <div
      className="flex flex-col items-center justify-center h-screen bg-[#ddb551]"
      style={{ cursor: `url(${mouse}), default` }}
    >
      <div className="w-[500px] h-[500px] relative">
        {/* face */}
        <div className="w-full h-full bg-[#51a1c4] rounded-full border-2 border-black relative transition-[background-color] duration-100 ease-in-out hover:bg-[#d6c2e8] hover:duration-500 group">
          {/* white */}
          <div className="w-[400px] h-[calc(400px-62px)] absolute bottom-0 left-[calc(50%-400px/2)] bg-white rounded-full border-2 border-black">
            {/* eye left */}
            <div className="w-[130px] h-[150px] rounded-full bg-white border-2 border-black absolute -top-[75px] left-[calc(50%-130px)]">
              {/* eye black */}
              <div className="eye-black w-[60px] h-[60px] rounded-[100%] bg-black absolute bottom-0 left-[calc(50%-60px/2)] origin-top after:content-[''] after:w-[20px] after:h-[20px] after:absolute after:rounded-full after:bg-white after:left-[10px] after:top-[calc(50%-10px)]"></div>
            </div>
            {/* eye right */}
            <div className="w-[130px] h-[150px] rounded-[100%] bg-white border-2 border-black absolute -top-[75px] right-[calc(50%-130px)]">
              {/* eye black */}
              <div className="eye-black w-[60px] h-[60px] rounded-full bg-black absolute bottom-0 left-[calc(50%-60px/2)] origin-top after:content-[''] after:w-[20px] after:h-[20px] after:absolute after:rounded-full after:bg-white after:left-[10px] after:top-[calc(50%-10px)]"></div>
            </div>
            {/* nose */}
            <div className="w-[60px] h-[60px] bg-[#b13f54] border-2 border-black rounded-full absolute left-[calc(50%-60px/2)] top-[50px] after:content-[''] after:w-[20px] after:h-[20px] after:absolute after:rounded-full after:bg-white after:left-[20%] after:top-[10px]"></div>
            {/* mouth */}
            <div className="w-[30px] h-[30px] rounded-full border-r-2 border-black absolute bottom-[90px] left-[calc(50%-30px/2)] bg-[#b13f54] origin-top transition-all duration-100 ease-in-out before:absolute before:content-[''] before:w-0.5 before:h-[106px] before:bg-black before:bottom-[100%] before:left-[calc(50%-1px)] group-hover:border-b-0 group-hover:w-[calc(30px*6)] group-hover:left-[calc(50%-30px*6/2)] group-hover:duration-[400ms]"></div>
            {/* mustache left */}
            <div className="absolute h-0.5 w-[150px] top-[120px] bg-black left-0 origin-right rotate-[20deg]"></div>
            {/* mustache two left */}
            <div className="absolute h-0.5 w-[150px] bg-black top-[145px] -left-[10px] origin-right rotate-0"></div>
            {/* mustache three left */}
            <div className="absolute h-0.5 w-[150px] top-[170px] bg-black three left-0 origin-right -rotate-[20deg]"></div>
            {/* mustache right */}
            <div className="absolute h-0.5 w-[150px] top-[120px] bg-black right-0 origin-left -rotate-[20deg]"></div>
            {/* mustache two right */}
            <div className="absolute h-0.5 w-[150px] bg-black top-[145px] -right-[10px] origin-left rotate-0"></div>
            {/* mustache three right */}
            <div className="absolute h-0.5 w-[150px] top-[170px] bg-black three right-0 origin-left rotate-[20deg]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Doraemon;
