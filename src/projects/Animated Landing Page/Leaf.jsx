import { motion } from "framer-motion";
import { leaf, leafWrapper } from "./variants";

const Leaf = ({ className, imageUrl, animationSpeed }) => {
  return (
    <motion.div variants={leafWrapper} className={className}>
      <motion.img
        variants={leaf}
        src={imageUrl}
        custom={animationSpeed}
        alt="leaf"
        className="object-contain w-20 h-28"
      />
    </motion.div>
  );
};

export default Leaf;
