import { motion } from "framer-motion";

const Section = (props) => {
  const { children } = props;

  return (
    <motion.section
      className="flex flex-col items-start justify-center w-screen h-screen p-8 mx-auto max-w-screen-2xl"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { duration: 1, delay: 0.6 },
      }}
    >
      {children}
    </motion.section>
  );
};

const Interface = () => {
  return (
    <div className="flex flex-col items-center w-screen">
      <AboutSection />
      <SkillsSection />
      <Section>
        <h1>Projects</h1>
      </Section>
      <ContactSection />
    </div>
  );
};

const AboutSection = () => (
  <Section>
    <h1 className="text-6xl font-extrabold leading-snug">
      Hi I'm <br />
      <span className="px-1 italic bg-white">Abhijeet</span>
    </h1>
    <motion.p
      initial={{ opacity: 0, y: 25 }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 1,
        delay: 1.5,
      }}
      className="mt-4 text-lg text-gray-600"
    >
      I make Javscript for Fun projects
      <br />
      using various frameworks and libraries
    </motion.p>
    <motion.button
      initial={{ opacity: 0, y: 25 }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 1,
        delay: 2,
      }}
      className="px-8 py-4 mt-16 text-lg font-bold text-white bg-indigo-600 rounded-lg"
    >
      Contact Me
    </motion.button>
  </Section>
);

const skills = [
  { title: "React.js", level: 80 },
  { title: "Three.js", level: 40 },
  { title: "C#", level: 90 },
  { title: "3D Modelling", level: 80 },
];

const languages = [
  { title: "English", level: 90 },
  { title: "Hindi", level: 100 },
  { title: "Telugu", level: 100 },
];

const SkillsSection = () => (
  <Section>
    <motion.div whileInView={"visible"}>
      <h2 className="text-5xl font-bold">Skills</h2>
      <div className="mt-8 space-y-4 ">
        {skills.map((skill, index) => (
          <div className="w-64" key={index}>
            <motion.h3
              className="text-xl font-bold text-gray-800"
              initial={{
                opacity: 0,
              }}
              variants={{
                visible: {
                  opacity: 1,
                  transition: {
                    duration: 1,
                    delay: 1 + index * 0.2,
                  },
                },
              }}
            >
              {skill.title}
            </motion.h3>
            <div className="w-full h-2 mt-2 bg-gray-200 rounded-full">
              <motion.div
                className="h-full bg-indigo-500 rounded-full "
                style={{ width: `${skill.level}%` }}
                initial={{
                  scaleX: 0,
                  originX: 0,
                }}
                variants={{
                  visible: {
                    scaleX: 1,
                    transition: {
                      duration: 1,
                      delay: 1 + index * 0.2,
                    },
                  },
                }}
              />
            </div>
          </div>
        ))}
      </div>
      <div>
        <h2 className="mt-10 text-5xl font-bold">Languages</h2>
        <div className="mt-8 space-y-4 ">
          {languages.map((lng, index) => (
            <div className="w-64" key={index}>
              <motion.h3
                className="text-xl font-bold text-gray-800"
                initial={{
                  opacity: 0,
                }}
                variants={{
                  visible: {
                    opacity: 1,
                    transition: {
                      duration: 1,
                      delay: 2 + index * 0.2,
                    },
                  },
                }}
              >
                {lng.title}
              </motion.h3>
              <div className="w-full h-2 mt-2 bg-gray-200 rounded-full">
                <motion.div
                  className="h-full bg-indigo-500 rounded-full "
                  style={{ width: `${lng.level}%` }}
                  initial={{
                    scaleX: 0,
                    originX: 0,
                  }}
                  variants={{
                    visible: {
                      scaleX: 1,
                      transition: {
                        duration: 1,
                        delay: 2 + index * 0.2,
                      },
                    },
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  </Section>
);

const ContactSection = () => {
  return (
    <Section>
      <h2 className="text-5xl font-bold">Contact me</h2>
      <div className="max-w-full p-8 mt-8 bg-white rounded-md w-96">
        <form>
          <label
            htmlFor="name"
            className="block mb-1 font-medium text-gray-900"
          >
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="block w-full p-3 text-gray-900 border-0 rounded-md shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
          />
          <label
            htmlFor="email"
            className="block mt-8 mb-1 font-medium text-gray-900"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="block w-full p-3 text-gray-900 border-0 rounded-md shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
          />
          <label
            htmlFor="email"
            className="block mt-8 mb-1 font-medium text-gray-900"
          >
            Message
          </label>
          <textarea
            name="message"
            id="message"
            className="block w-full h-32 p-3 text-gray-900 border-0 rounded-md shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
          />
          <button className="px-8 py-4 mt-16 text-lg font-bold text-white bg-indigo-600 rounded-lg ">
            Submit
          </button>
        </form>
      </div>
    </Section>
  );
};

export default Interface;
