import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { generateGradientFromTitle } from "../utils/gradients";

const ProjectCard = ({ title, tags, slug }) => {
  const { color1, color2 } = generateGradientFromTitle(title);

  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
      className="rounded-xl p-5 text-white shadow-lg bg-linear-to-br cursor-pointer"
      style={{
        backgroundImage: `linear-gradient(to bottom right, ${color1}, ${color2})`,
      }}
    >
      <Link to={`/projects/${slug}`} className="block h-full">
        <h3 className="text-xl font-semibold mb-3 leading-tight">{title}</h3>

        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2 py-1 rounded-full bg-white/20 backdrop-blur-sm"
            >
              #{tag}
            </span>
          ))}
        </div>
      </Link>
    </motion.div>
  );
};

export default ProjectCard;
