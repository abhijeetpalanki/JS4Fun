import React, { useEffect, useRef, useState } from "react";
import "./Feedback.css";
import { FaHeart } from "react-icons/fa";

const Feedback = () => {
  const [clicked, setClicked] = useState(false);
  const [selectedRating, setSelectedRating] = useState("Satisfied");
  const panelRef = useRef(null);
  const buttonRef = useRef(null);
  const ratingsRef = useRef(null);

  useEffect(() => {
    ratingsRef.current.addEventListener("click", (e) => {
      if (e.target.parentNode.classList.contains("rating")) {
        for (let i = 0; i < ratingsRef.current.childNodes.length; i++) {
          ratingsRef.current.childNodes[i].classList.remove("active");
        }
        e.target.parentNode.classList.add("active");
        setSelectedRating(e.target.nextElementSibling.innerHTML);
      }
    });

    buttonRef.current.addEventListener("click", (e) => {
      setClicked(true);
    });
  }, []);

  return (
    <div className="feedback-body bg-[#fef9f2] font-['Montserrat'] flex items-center justify-center h-[100vh] m-0">
      {!clicked ? (
        <div className="panel-container" ref={panelRef}>
          <strong className="leading-5">
            How satisfied are you with our <br /> customer support performance?
          </strong>

          <div className="flex mx-0 my-5 ratings-container" ref={ratingsRef}>
            <div className="rating">
              <img
                src="https://img.icons8.com/external-neu-royyan-wijaya/64/000000/external-emoji-neumojis-smiley-neu-royyan-wijaya-6.png"
                alt=""
              />
              <small>Boring</small>
            </div>

            <div className="rating">
              <img
                src="https://img.icons8.com/external-neu-royyan-wijaya/64/000000/external-emoji-neumojis-smiley-neu-royyan-wijaya-17.png"
                alt=""
              />
              <small>Unhappy</small>
            </div>

            <div className="rating">
              <img
                src="https://img.icons8.com/external-neu-royyan-wijaya/64/000000/external-emoji-neumojis-smiley-neu-royyan-wijaya-3.png"
                alt=""
              />
              <small>Neutral</small>
            </div>

            <div className="rating">
              <img
                src="https://img.icons8.com/external-neu-royyan-wijaya/64/000000/external-emoji-neumojis-smiley-neu-royyan-wijaya-35.png"
                alt=""
              />
              <small>Happy</small>
            </div>

            <div className="rating active">
              <img
                src="https://img.icons8.com/external-neu-royyan-wijaya/64/000000/external-emoji-neumojis-smiley-neu-royyan-wijaya-30.png"
                alt=""
              />
              <small>Satisfied</small>
            </div>
          </div>

          <button
            className="btn bg-[#302d2b] text-white border-0 rounded-[4px] py-[12px] px-[30px] focus:outline-0"
            ref={buttonRef}
          >
            Send Review
          </button>
        </div>
      ) : (
        <div className="panel-container" ref={panelRef}>
          <FaHeart color="red" fontSize={30} style={{ marginBottom: "10px" }} />
          <strong>Thank You!</strong>
          <br />
          <strong>Feedback: {selectedRating}</strong>
          <p>We'll use your feedback to improve our customer support</p>
        </div>
      )}
    </div>
  );
};

export default Feedback;
