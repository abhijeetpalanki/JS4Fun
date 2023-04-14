import bg from "./bg.jpg";
import bookLover from "./book-lover.svg";

const NewsletterLandingPage = () => {
  return (
    <div
      className="flex flex-col items-center justify-center h-screen"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "top center",
      }}
    >
      <div className="md:w-[1100px] w-[400px] h-[200px] md:h-[500px] flex flex-col md:flex-row rounded-[26px] relative border-2 border-white bg-white/20 backdrop-blur-[10px]">
        <div className="flex flex-col items-center justify-center flex-1 h-full">
          <div className="flex flex-col max-w-[80%]">
            <h1 className="m-0 text-[#262fec] font-bold text-[22px] md:text-[45px]">
              Hey, wait...
            </h1>
            <h3 className="my-[10px] mx-0 text-black font-bold text-sm md:text-[24px]">
              Subscribe to our newsletter!
            </h3>
            <p className="text-black font-medium text-xs md:text-[20px]">
              You will never miss our podcasts, latest news, etc. Our newsletter
              is once a week, every wednesday.
            </p>
            <div className="flex relative h-[53px] mt-[1em]">
              <input
                className="placeholder:text-[#272727] outline-none border-none bg-white pl-[1.5em] pr-[4em] md:pr-[10em] rounded-[17px] text-[20px] text-black h-full"
                type="text"
                placeholder="example@email.com"
              />
              <button className="absolute -right-[10px] top-0 h-full border-none outline-none text-white bg-[#262fec] text-[20px] font-medium cursor-pointer transition-all duration-300 ease-in-out rounded-bl-[16px] rounded-br-[16px] rounded-tr-[16px] py-0 px-[10px] hover:bg-[#1820bb]">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="hidden md:max-w-[55%] md:flex items-center justify-center flex-1 relative bg-gradient-to-bl from-[#9493f7] to-[#d2c2dd] rounded-tr-[26px] rounded-br-[26px] [clip-path:polygon(0_0,100%_15%,100%_100%,0%_100%)] md:[clip-path:polygon(0_0,100%_0,100%_100%,15%_100%)]">
          <div className="w-auto h-[30em]">
            <img src={bookLover} alt="book-lover" className="w-auto h-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsletterLandingPage;
