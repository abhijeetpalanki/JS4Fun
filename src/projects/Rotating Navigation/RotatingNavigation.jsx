import { useState } from "react";
import "./RotatingNavigation.css";
import { FaTimes, FaBars, FaHome, FaUserAlt, FaEnvelope } from "react-icons/fa";

const RotatingNavigation = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="rotating-navigation-body font-['Lato'] bg-[#333] text-[#222] overflow-x-hidden m-0">
      <div
        className={`container bg-[#fafafa] origin-top-left transition-[transform] duration-[0.5s] ease-linear w-[100vw] min-h-screen p-[50px] ${
          open ? "show-nav" : ""
        }`}
      >
        <div className="circle-container fixed -top-[100px] -left-[100px]">
          <div className="circle bg-[#ff7979] h-[200px] w-[200px] rounded-full relative transition-[transform] duration-[0.5s] ease-linear">
            <button
              className="absolute top-[60%] left-1/2 h-[100px] bg-transparent border-0 text-[22px] text-white focus:outline-none rotate-[90deg] origin-top-left"
              id="close"
              onClick={() => setOpen(false)}
            >
              <FaTimes />
            </button>
            <button
              className="absolute top-1/2 left-[60%] h-[100px] bg-transparent border-0 text-[22px] text-white focus:outline-none"
              id="open"
              onClick={() => setOpen(true)}
            >
              <FaBars />
            </button>
          </div>
        </div>
        <div className="content max-w-[1000px] my-[50px] mx-auto">
          <h1 className="m-0 text-[32px] font-bold">Amazing Article</h1>
          <small className="text-[#555] italic">Lorem ipsum</small>
          <p className="text-[#333] leading-[1.5]">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis
            eum ad suscipit facilis dolores nemo praesentium nesciunt provident
            consectetur sunt voluptate cupiditate debitis, dicta exercitationem
            consequatur recusandae, iure officiis consequuntur quidem dolorum
            voluptates. Sunt veniam, quod fuga illo autem dicta reiciendis
            libero facere alias nihil, id quos minima. Pariatur velit ex facilis
            rerum nostrum cum molestias quasi explicabo vel voluptatem odio aut
            aperiam possimus, expedita placeat provident repellendus adipisci.
            Aliquid, amet cum corrupti culpa nisi consequatur alias, dolor
            mollitia beatae facilis maiores quia illum eius soluta commodi quod.
            Quas impedit at corrupti officiis laudantium quia cum nostrum quasi
            quod asperiores.
          </p>

          <h3 className="text-[20px] font-bold mt-2">My Dog</h3>
          <img
            className="max-w-lg"
            src="https://images.unsplash.com/photo-1507146426996-ef05306b995a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"
            alt="doggy"
          />
          <p className="text-[#333] leading-[1.5]">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit libero
            deleniti rerum quo, incidunt vel consequatur culpa ullam. Magnam
            facere earum unde harum. Ea culpa veritatis magnam at aliquid.
            Perferendis totam placeat molestias illo laudantium? Minus id minima
            doloribus dolorum fugit deserunt qui vero voluptas, ut quia cum amet
            temporibus veniam ad ea ab perspiciatis, enim accusamus asperiores
            explicabo provident. Voluptates sint, neque fuga cum illum, tempore
            autem maxime similique laborum odio, magnam esse. Aperiam?
          </p>
        </div>
      </div>

      <nav className="fixed bottom-[40px] left-[40px] z-[100]">
        <ul className="list-none pl-[20px]">
          <li className="uppercase text-white my-[20px] mx-0 -translate-x-[100%] transition-[transform] duration-[0.4s] ease-in">
            <FaHome /> Home
          </li>
          <li className="uppercase text-white my-[20px] mx-0 -translate-x-[100%] transition-[transform] duration-[0.4s] ease-in">
            <FaUserAlt /> About
          </li>
          <li className="uppercase text-white my-[20px] mx-0 -translate-x-[100%] transition-[transform] duration-[0.4s] ease-in">
            <FaEnvelope /> Contact
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default RotatingNavigation;
