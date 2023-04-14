import { Scroll, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useState } from "react";

const Section = (props) => {
  return (
    <section
      className={`h-screen flex flex-col justify-center p-10 ${
        props.right ? "items-end" : "items-start"
      }`}
      style={{
        opacity: props.opacity,
      }}
    >
      <div className="flex items-center justify-center w-1/2">
        <div className="w-full max-w-sm">
          <div className="px-8 py-12 bg-white rounded-lg">{props.children}</div>
        </div>
      </div>
    </section>
  );
};

export const Overlay = () => {
  const scroll = useScroll();
  const [opacityFirstSection, setOpacityFirstSection] = useState(1);
  const [opacitySecondSection, setOpacitySecondSection] = useState(1);
  const [opacityLastSection, setOpacityLastSection] = useState(1);

  useFrame(() => {
    setOpacityFirstSection(1 - scroll.range(0, 1 / 3));
    setOpacitySecondSection(scroll.curve(1 / 3, 1 / 3));
    setOpacityLastSection(scroll.range(2 / 3, 1 / 3));
  });

  return (
    <Scroll html>
      <div className="w-screen">
        <Section opacity={opacityFirstSection}>
          <h1 className="font-['Playfair_Display'] text-2xl font-semibold">
            Hello, I'm Abhijeet Palanki
          </h1>
          <p className="text-gray-500">
            Welcome to my beautiful scroll animation
          </p>
          <p className="mt-3">I know:</p>
          <ul className="leading-9">
            <li>🧑‍💻 How to code</li>
            <li>🧑‍🏫 How to learn</li>
            <li>📦 How to deliver</li>
          </ul>
          <p className="mt-6 animate-bounce">↓</p>
        </Section>
        <Section right opacity={opacitySecondSection}>
          <h1 className="font-['Playfair_Display'] text-2xl font-semibold">
            Here are my skillsets 🔥
          </h1>
          <p className="text-gray-500">PS: I never test</p>
          <p className="mt-3">
            <b>Frontend 🚀</b>
          </p>
          <ul className="leading-9">
            <li>ReactJS</li>
            <li>React Native</li>
            <li>VueJS</li>
            <li>Tailwind</li>
          </ul>
          <p className="mt-3">
            <b>Backend 🔬</b>
          </p>
          <ul className="leading-9">
            <li>.NET Framework</li>
            <li>WebAPI</li>
            <li>SQL Server</li>
            <li>GitHub</li>
          </ul>
          <p className="mt-6 animate-bounce">↓</p>
        </Section>
        <Section opacity={opacityLastSection}>
          <h1 className="font-['Playfair_Display'] text-2xl font-semibold">
            🤙 Call me maybe?
          </h1>
          <p className="text-gray-500">
            I'm very expensive but you won't regret it
          </p>
          <p className="p-3 mt-6 rounded-lg bg-slate-200">
            📞 <a href="tel:(+1) 203-385-2663">(+1) 203-385-2663</a>
          </p>
        </Section>
      </div>
    </Scroll>
  );
};
