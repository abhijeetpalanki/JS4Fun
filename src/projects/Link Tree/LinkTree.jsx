import {
  FaGithub,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa";

const LinkTree = () => {
  const data = {
    name: "Abhijeet Palanki",
    image: "https://github.com/abhijeetpalanki.png",
    bio: "I'm a Full Stack Software Developer with experience in various technologies such as Angular, React.js, Vue.js, .NET and Microsoft SQL Server. I love exploring new frameworks like Particle.js, Three.js and Framer Motion.",
    links: [
      {
        name: "My open source GitHub",
        color: "#0D1117",
        url: "https://github.com/abhijeetpalanki",
        icon: <FaGithub />,
      },
      {
        name: "Follow me on Twitter",
        color: "#1DA1F2",
        url: "https://twitter.com/abhijeetpalanki",
        icon: <FaTwitter />,
      },
      {
        name: "Connect professionally via LinkedIn",
        color: "#0A66C2",
        url: "https://www.linkedin.com/in/abhijeetpalanki/",
        icon: <FaLinkedin />,
      },
      {
        name: "Tag me in Instagram",
        color: "#9C2FBD",
        url: "https://www.instagram.com/abhi.your.pal/",
        icon: <FaInstagram />,
      },
      {
        name: "Send a Request in Facebook",
        color: "#108AE8",
        url: "https://www.facebook.com/abhijeetpalanki/",
        icon: <FaFacebook />,
      },
    ],
  };
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <div className="bg-white rounded-md">
        <div className="px-2 py-4 text-center">
          <div className="flex justify-center items-center">
            <img
              className="inline-block h-20 w-20 rounded-full"
              src={data.image}
              alt=""
            />
            <h1 className="text-2xl font-bold m-2">{data.name}</h1>
          </div>
          <div className="flex justify-center items-center w-[600px] my-4">
            <p>{data.bio}</p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center bg-slate-700 rounded-md py-4">
          {data.links.map((link) => (
            <button
              key={link.name}
              className="group relative h-12 w-80 overflow-hidden rounded-lg bg-white text-lg shadow my-2"
            >
              <div
                className="absolute inset-0 w-3 transition-all duration-[250ms] ease-out group-hover:w-full"
                style={{ backgroundColor: link.color }}
              ></div>
              <div className="flex items-center justify-center">
                <span className="relative text-black group-hover:text-white mx-2">
                  {link.icon}
                </span>
                <span className="relative text-black group-hover:text-white">
                  {link.name}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LinkTree;
