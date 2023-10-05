import { useRef, useEffect } from "react";

const CENTER_COUNT = 12;
const RADIUS = 600;
const TOTAL_ROW = 3;

const Sphere = (props) => {
  const el = useRef(null);
  const img = useRef(null);
  const animId = useRef(0);

  useEffect(() => {
    let mouseShift = 0;
    const items = el.current.children;

    if (items.length === 0) return;

    const angleDivision = ((90 / TOTAL_ROW) * Math.PI) / 180;
    let radius,
      ypos,
      rowItemsCount = CENTER_COUNT;
    let indexCount = 0;

    for (let k = 0; k < TOTAL_ROW; k++) {
      radius = RADIUS * Math.cos(k * angleDivision);
      ypos = RADIUS * Math.sin(-k * angleDivision);
      rowItemsCount = CENTER_COUNT / (k + 1);

      let angleUnit = 360 / rowItemsCount;

      for (let i = 0; i < rowItemsCount; i++) {
        const angleRad = (angleUnit * i * Math.PI) / 180;
        const xp = Math.cos(angleRad) * radius;
        const zp = Math.sin(angleRad) * radius;

        // Upper item
        const item = items[indexCount];
        item.className = `w-[240px] h-[240px] origin-[100%_50%] absolute [backface-visibility:visible] -top-[120px] -left-[120px] border-4 border-[#111] rounded-full bg-[#111] bg-no-repeat bg-cover bg-center`;
        item.style.transform = `translateY(${ypos}px) translateX(${xp}px) translateZ(${zp}px)`;
        indexCount++;

        // Lower item
        const item2 = items[indexCount];
        item2.className = `w-[240px] h-[240px] origin-[100%_50%] absolute [backface-visibility:visible] -top-[120px] -left-[120px] border-4 border-[#111] rounded-full bg-[#111] bg-no-repeat bg-cover bg-center`;
        item2.style.transform = `translateY(${-ypos}px) translateX(${xp}px) translateZ(${zp}px)`;
        indexCount++;

        // Save item data
        item.dataset.radius = item2.dataset.radius = radius.toString();
        item.dataset.angle = item2.dataset.angle = angleRad.toString();
        item.dataset.ypos = ypos.toString();
        item2.dataset.ypos = (-ypos).toString();
      }
    }

    // Update animation
    cancelAnimationFrame(animId.current);
    const updateFrame = () => {
      animId.current = requestAnimationFrame(updateFrame);
      const items = el.current?.children;
      if (items.length === 0) return;

      for (let i = 0; i < items.length; i++) {
        const item = items[i];
        let angle = parseFloat(item.dataset?.angle);
        const ypos = parseFloat(item.dataset?.ypos);
        const radius = parseFloat(item.dataset?.radius);

        angle += mouseShift;
        item.dataset.angle = angle.toString();
        const xp = Math.cos(angle) * radius;
        const zp = Math.sin(angle) * radius;
        item.style.transform = `translateY(${ypos}px) translateX(${xp}px) translateZ(${zp}px)`;
      }
    };

    updateFrame();

    // calculate mouse shift
    const onMouseMove = (e) => {
      mouseShift = (e.clientX / window.innerWidth - 0.5) * 0.01;
    };
    document.addEventListener("mousemove", onMouseMove);
  }, [props.photos]);

  const pickImage = (imgUrl) => {
    img.current.style.backgroundImage = `url(${imgUrl})`;
    img.current.style.transform = "scale(1, 1)";
  };

  return (
    <div className="max-w-full w-full h-[660px] [perspective:1000] [-webkit-perspective:1000] [perspective-origin:50%_50%] [transform-style:preserve-3d] relative my-0 mx-auto overflow-hidden py-4">
      <div
        className="absolute top-1/2 left-1/2 [backface-visibility:visible] [transform:translateZ(-1200px)] transition-all duration-[250ms] ease-out [transform-style:preserve-3d] origin-[50%_50%] cursor-pointer"
        ref={el}
      >
        {props.photos.map((it, index) => (
          <div
            onClick={() => pickImage(it)}
            key={index}
            style={{ backgroundImage: `url(${it})` }}
            className="w-[240px] h-[240px] origin-[100%_50%] absolute [backface-visibility:visible] -top-[120px] -left-[120px] border-4 border-[#111] rounded-full bg-[#111] bg-no-repeat bg-cover bg-center"
          ></div>
        ))}
      </div>
      <div
        onClick={() => {
          img.current.style.transform = "scale(0.0, 0.0)";
        }}
        className="fixed cursor-pointer w-[1000px] h-[600px] top-1/2 left-1/2 -mt-[300px] -ml-[500px] border-2 border-white rounded-[4px] bg-no-repeat bg-cover bg-center transition-all duration-500 ease-out scale-0"
        ref={img}
      ></div>
    </div>
  );
};

export default Sphere;
