import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="absolute top-[10%] left-[17%] right-[17%] botton-[10%] flex items-center justify-center bg-white shadow-[0_5px_10px_#00000019] rounded-3xl error-page">
      <div className="max-w-[600px] text-center">
        <h1 className="text-[18vw] leading-[1em]">404</h1>
        <h4 className="mb-[20px] uppercase text-black max-w-[600px] text-[2em]">
          Oops! Page Not Found
        </h4>
        <p className="text-[1.2em] text-[#0d0d0d]">
          Sorry, the page you're looking for doesn't exist. If you think
          something is broken, report a problem.
        </p>
        <div className="my-[25px] mx-0 inline-flex">
          <Link
            className="inline-block my-0 mx-[10px] no-underline border-[2px] border-[#69a6ce] py-[10px] px-[25px] rounded-[25px] uppercase transition-all ease-in duration-[0.3s] hover:bg-[#69a6ce] hover:text-white"
            to="/"
          >
            Return Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Error;
