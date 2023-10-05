import { useRef, useEffect } from "react";
import { TweenMax, TimelineLite, Power3 } from "gsap";
import arrow from "./arrow-right.svg";
import couple from "./couple.jpg";
import bros from "./bros.jpg";

const HeroSlider = () => {
  let mainRef = useRef(null);
  let imagesRef = useRef(null);
  let contentRef = useRef(null);
  let tl = new TimelineLite({ delay: 0.8 });

  useEffect(() => {
    // remove initial flash
    TweenMax.to(mainRef, 0, { css: { visibility: "visible" } });

    // images animation
    const brosImage = imagesRef.firstElementChild;
    const coupleImage = imagesRef.lastElementChild;
    tl.from(brosImage, 1.2, { y: 1280, ease: Power3.easeOut }, "Start")
      .from(
        brosImage.firstElementChild,
        2,
        { scale: 1.6, ease: Power3.easeOut },
        0.2
      )
      .from(coupleImage, 1.2, { y: 1280, ease: Power3.easeOut }, 0.2)
      .from(
        coupleImage.firstElementChild,
        2,
        { scale: 1.6, ease: Power3.easeOut },
        0.2
      );

    // content animation
    const headlineFirst = contentRef.children[0].children[0];
    const headlineSecond = headlineFirst.nextSibling;
    const headlineThird = headlineSecond.nextSibling;
    const contentP = contentRef.children[1];
    const contentButton = contentRef.children[2];
    tl.staggerFrom(
      [headlineFirst.children, headlineSecond.children, headlineThird.children],
      1,
      {
        y: 44,
        ease: Power3.easeOut,
        delay: 0.8,
      },
      0.15,
      "Start"
    )
      .from(contentP, 1, { y: 20, opacity: 0, ease: Power3.easeOut }, 1.4)
      .from(contentButton, 1, { y: 20, opacity: 0, ease: Power3.easeOut }, 1.6);
  }, [tl]);

  return (
    <div className="h-screen bg-white">
      <div
        style={{ visibility: "hidden" }}
        ref={(element) => (mainRef = element)}
      >
        <div className="w-[1440px] min-w-[1440px] mx-auto">
          <div className="flex items-center justify-between h-screen mx-6">
            <div className="w-1/2">
              <div
                className="w-[400px] mx-auto text-[#323232]"
                ref={(element) => (contentRef = element)}
              >
                <h1 className="mb-6 text-3xl font-medium">
                  <div className="m-0 overflow-hidden h-11">
                    <div>As individuals we are strong</div>
                  </div>
                  <div className="m-0 overflow-hidden h-11">
                    <div>Together,</div>
                  </div>
                  <div className="m-0 overflow-hidden h-11">
                    <div>We are unstoppable.</div>
                  </div>
                </h1>
                <p className="pr-12 text-sm font-light leading-6 mb-14">
                  The state of being connected to friends, family, partners, or
                  a 'group' is known as togetherness. This deep bond with people
                  you care about the most imparts a sense of belongingness.
                  Staying unified provides security, support, and inner
                  strength, helping you achieve great things while knowing that
                  you have the loving support of your near and dear ones.
                </p>

                <div className="relative">
                  <button className="border-none text-xs p-0 cursor-pointer uppercase font-bold tracking-[0.7px] flex items-center relative before:absolute before:content-[''] before:w-14 before:h-[1px] before:bg-[#dfdfdf] before:top-1/2 before:-left-[68px] focus:outline-none">
                    Explore
                    <div className="absolute flex items-center justify-center bg-[#007fff] h-[42px] w-[42px] rounded-full left-20">
                      <img src={arrow} alt="arrow" />
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <div className="relative w-1/2 h-screen">
              <div ref={(element) => (imagesRef = element)}>
                <div className="absolute overflow-hidden top-0 right-0 w-[45%] h-1/2">
                  <img
                    src={bros}
                    alt="couple"
                    className="absolute top-0 bottom-0 left-0 right-0 w-full"
                  />
                </div>
                <div className="absolute overflow-hidden bottom-6 left-0 w-[52%] h-[65%]">
                  <img
                    src={couple}
                    alt="couple"
                    className="absolute top-0 bottom-0 left-0 right-0 w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSlider;
