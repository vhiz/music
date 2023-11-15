import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
export default function SectionHeader({ pretitle, title }) {
  return (
    <header>
      <motion.h3
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
        className="pretitle text-center capitalize"
      >
        {pretitle}
      </motion.h3>
      <motion.h2
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
        className="h2 text-center mb-8 capitalize"
      >
        {title}
      </motion.h2>
    </header>
  );
}
