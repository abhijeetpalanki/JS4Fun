import { PortfolioOffice } from "./PortfolioOffice";
import { motion } from "framer-motion-3d";

export const Experience = ({ section }) => {
  return (
    <>
      <ambientLight intensity={1} />
      <motion.group
        animate={{ y: section === 0 ? 0 : -1 }}
        position={[1.5, 2, 3]}
        scale={[0.9, 0.9, 0.9]}
        rotation-y={-Math.PI / 4}
      >
        <PortfolioOffice section={section} />
      </motion.group>
    </>
  );
};
