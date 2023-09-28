import front from "./images/ayp_front.jpg";
import back from "./images/ayp_back.jpg";
import logo from "./images/ayp_logo.png";
import "./CardHover.css";

const CardHover = () => {
  return (
    <div className="font-['Nunito'] h-screen flex justify-center items-center bg-black/80 text-white">
      <div className="grid min-h-screen place-content-center card-hover-body">
        <div class="yoda">
          <img class="logo" src={logo} alt="logo" />
          <img class="front-image" src={front} alt="front" />
          <img class="bg-image" src={back} alt="back" />
        </div>
      </div>
    </div>
  );
};

export default CardHover;
