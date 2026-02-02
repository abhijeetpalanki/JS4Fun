import { useState } from "react";
import { Icon } from "@iconify/react";

const BrandSlider = () => {
  const [brands] = useState([
    "atomic",
    "discord",
    "postman",
    "mongodb",
    "git",
    "adonisjs",
    "reddit",
    "heroku",
    "cpanel",
    "jwt",
    "dgraph",
    "builder-io",
    "ionic",
    "atomic",
    "discord",
    "postman",
    "mongodb",
    "git",
    "adonisjs",
    "reddit",
    "heroku",
    "cpanel",
    "jwt",
    "dgraph",
    "builder-io",
    "ionic",
  ]);

  return (
    <div className="flex items-center justify-center h-screen bg-white/70">
      <div className="grid place-items-center">
        <section className="">
          <h1 className="mb-6 font-sans text-2xl font-semibold text-center uppercase">
            Our Partners
          </h1>
          <div className="w-screen relative h-48 bg-white shadow-[0_0.8rem_1.4rem_-0.2rem_#0001] flex items-center overflow-hidden before:absolute after:absolute before:content-[''] after:content-[''] before:h-full after:h-full before:w-48 after:w-48 before:left-0 before:bg-gradient-to-r before:from-[#fff] before:to-[#fff0] after:right-0 after:bg-gradient-to-l after:from-[#fff] after:to-[#fff0]">
            <ul className="w-[336rem] flex animate-slideLeft">
              {brands.map((brand, i) => (
                <li className="w-48 text-[2rem] text-center ml-12" key={i}>
                  <Icon icon={`logos:${brand}`} />
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default BrandSlider;
