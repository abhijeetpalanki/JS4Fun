import anime from "animejs";
import { useEffect } from "react";

const Preloader = () => {
  useEffect(() => {
    anime({
      targets: ".circle-1",
      translateY: -24,
      translateX: 52,
      direction: "alternate",
      loop: true,
      elasticity: 400,
      easing: "easeInOutElastic",
      duration: 1600,
      delay: 800,
    });

    anime({
      targets: ".circle-2",
      translateY: 24,
      direction: "alternate",
      loop: true,
      elasticity: 400,
      easing: "easeInOutElastic",
      duration: 1600,
      delay: 800,
    });

    anime({
      targets: ".circle-3",
      translateY: -24,
      direction: "alternate",
      loop: true,
      elasticity: 400,
      easing: "easeInOutElastic",
      duration: 1600,
      delay: 800,
    });

    anime({
      targets: ".circle-4",
      translateY: 24,
      translateX: -52,
      direction: "alternate",
      loop: true,
      elasticity: 400,
      easing: "easeInOutElastic",
      duration: 1600,
      delay: 800,
    });
  }, []);

  return (
    <div className="relative h-screen bg-[#111116]">
      <div className="absolute -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
        <div className="loader">
          <div className="inline-block w-8 h-8 mx-1 my-0 rounded-full border-4 border-[#FC1460] circle-1"></div>
          <div className="inline-block w-8 h-8 mx-1 my-0 rounded-full border-4 border-[#5A87FF] circle-2"></div>
          <div className="inline-block w-8 h-8 mx-1 my-0 rounded-full border-4 border-[#18FD91] circle-3"></div>
          <div className="inline-block w-8 h-8 mx-1 my-0 rounded-full border-4 border-[#FBF38C] circle-4"></div>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
