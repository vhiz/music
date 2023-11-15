import { useState } from "react";
import { motion } from "framer-motion";
import Links from "./links/Links";
import ToogleButton from "./tooglebutton/ToogleButton.jsx";

export default function Sidebar() {
  const [open, setopen] = useState(false);

  const variants = {
    open: {
      clipPath: "circle(1600px at 50px 50px)",
      transition: {
        type: "spring",
        stiffness: 20,
      },
    },
    closed: {
      clipPath: "circle(30px at 50px 50px)",
      backgroundColor: "#0f184f",
      transition: {
        delay: 0.2,
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };
  
  return (
    <motion.div
      className="xl:hidden flex flex-col items-center justify-center bg-white text-white"
      animate={open ? "open" : "closed"}
    >
      <motion.div
        className="z-[999] fixed top-0 right-0 bottom-0 w-[100%] h-[100vh] bg-[#06062a71] backdrop-blur-[10px]"
        variants={variants}
      >
        <Links setopen={setopen} />
      </motion.div>
      <ToogleButton setopen={setopen} />
    </motion.div>
  );
}
