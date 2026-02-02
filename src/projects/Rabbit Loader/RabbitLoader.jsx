const RabbitLoader = () => {
  return (
    <div className="bg-[#e25a61] text-white h-screen flex flex-col items-center justify-center">
      {/* Container */}
      <div className="h-[31em] w-[31em] relative z-[1] sm:text-[20px]">
        {/* Tail */}
        <div className="absolute bg-white h-[3.4em] w-[3.4em] rounded-full right-[5.93em] top-[15.93em]"></div>

        <span className="font-semibold text-[2em] text-[#4f1f22] rotate-[10deg] absolute animate-snore top-[5.5em] left-[4.5em] delay-[7000ms]">
          Z
        </span>
        <span className="font-semibold text-[2em] text-[#4f1f22] rotate-[10deg] absolute animate-snore top-[7em] left-[3.5em] delay-[1000ms]">
          Z
        </span>
        <span className="font-semibold text-[2em] text-[#4f1f22] rotate-[10deg] absolute animate-snore top-[5em] left-[6em]">
          Z
        </span>

        {/* Rabbit Body */}
        <div className="bg-[#d7dfe7] h-[8.12em] w-[15.62em] rounded-[8.12em_8.12em_0_0] absolute m-auto left-0 right-0 top-[11.25em] [background-image:radial-gradient(circle_at_0_50%,#b5becd,#b5becd_60%,#d7dfed_61%)] z-[1]">
          {/* Face Container */}
          <div className="-rotate-[10deg] origin-[0_100%] animate-nod">
            {/* Rabbit Face */}
            <div className="bg-[#d7dfe7] h-[5.93em] w-[9.3em] rounded-[4.68em_4.68em_0_0] absolute -left-[1.25em] -top-[1.87em] before:absolute before:content-[''] before:bg-[#d7dfe7] before:w-[11.25em] before:h-[3.75em] before:-left-[0.93em] before:top-[5.62em] before:rounded-[4.37em]">
              {/* Ear */}
              <div className="bg-[#d7dfe7] h-[8.12em] w-[2.18em] relative -top-[4.06em] left-[0.31em] rounded-[1.25em_1.25em_0_0] shadow-[6.56em_0_0_#d7dfe7] -z-[1] before:absolute before:content-[''] before:bg-[#cd92b4] before:h-[7.31em] before:w-[1.37em] before:top-[0.37em] before:left-[0.37em] before:rounded-[1.56em] before:shadow-[6.56em_0_0_#cd92b4]"></div>
              {/* Eye Left */}
              <div className="absolute h-[0.81em] w-[1.56em] bg-[#101010] rounded-[0_0_1.87em_1.87em] top-[3.75em] left-[1.56em] before:absolute before:content-[''] before:bg-[#d7dfe7] before:h-[0.75em] before:w-[1.12em] before:rounded-[0_0_0.9em_0.9em] before:left-[0.23em] before:bottom-[0.25em]"></div>
              {/* Eye Right */}
              <div className="absolute h-[0.81em] w-[1.56em] bg-[#101010] rounded-[0_0_1.87em_1.87em] top-[3.75em] right-[1.56em] before:absolute before:content-[''] before:bg-[#d7dfe7] before:h-[0.75em] before:w-[1.12em] before:rounded-[0_0_0.9em_0.9em] before:left-[0.23em] before:bottom-[0.25em]"></div>
              {/* Mouth */}
              <div className="bg-white absolute h-[1.87em] w-[2.5em] rounded-[50%_50%_50%_50%_/_30%_30%_70%_70%] m-auto left-0 right-0 top-[4.06em] before:absolute before:content-[''] before:h-[0.93em] before:w-[1.25em] before:rounded-[50%_50%_50%_50%_/_30%_30%_70%_70%] before:m-auto before:left-0 before:right-0 before:bg-[#101010]"></div>
            </div>
          </div>

          {/* Leaf */}
          <div className="absolute h-[2.5em] w-[2.5em] rounded-[2.5em_0] bg-[#c9cf55] -rotate-[40deg] bottom-[2.5em] -left-[5em] before:absolute before:content-[''] before:bg-[#9eb42e] before:h-[2.5em] before:w-[2.5em] before:rounded-[2.5em_0] before:-rotate-[80deg] before:bottom-0 before:-left-[1.25em]"></div>

          {/* Carrot */}
          <div className="absolute bg-[#e78f1d] w-[7.5em] h-[2.5em] rounded-[25%_65%_65%_25%_/_50%_50%_50%_50%] -left-[4.37em] bottom-[0.62em] rotate-[15deg]"></div>

          {/* Hand Left */}
          <div className="absolute h-[2.5em] w-[5em] bottom-0 rounded-[0.93em_0.93em_0_0] bg-[#b5becd] -left-[3.12em] before:absolute before:content-[''] before:h-[2em] before:w-[3.12em] before:bg-white before:bottom-0 before:rounded-[0.62em_0.62em_0_0] before:-right-[1.56em]"></div>
          {/* Hand Right */}
          <div className="absolute h-[2.5em] w-[5em] bottom-0 rounded-[0.93em_0.93em_0_0] bg-white left-[5em] before:absolute before:content-[''] before:h-[2em] before:w-[3.12em] before:bg-[#b5becd] before:bottom-0 before:rounded-[0.62em_0.62em_0_0] before:-left-[1.56em]"></div>
        </div>

        <div className="bg-[#d34b58] w-[25em] h-[0.5em] rounded-[0.31em] absolute m-auto left-0 right-0 top-[19.37em]"></div>
      </div>
    </div>
  );
};

export default RabbitLoader;
