import transition from "./transitions";

const Home = () => (
  <h1 className="absolute w-4/5 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 text-center font-bold text-[10vw] leading-none uppercase">
    Home Page
  </h1>
);

export default transition(Home);
