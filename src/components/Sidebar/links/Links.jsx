import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Links({ setopen }) {
  const variants = {
    open: {
      transition: {
        staggerChildren: 0.1,
      },
    },
    closed: {
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };
  const itemvariants = {
    open: {
      y: 0,
      opacity: 1,
    },
    closed: {
      y: 50,
      opacity: 0,
    },
  };
  const items = ["home", "tours", "discography", "blog", "contact"];
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = document.querySelectorAll("section");

      sectionElements.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const sectionCenter = rect.top + rect.height / 2;
        const isVisible =
          sectionCenter >= 0 && sectionCenter <= window.innerHeight;

        if (isVisible) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <motion.div
      className="absolute w-full h-full flex flex-col items-center justify-center gap-[20px]"
      variants={variants}
    >
      {items.map((item, i) => (
        <motion.a
          key={i}
          href={`#${item}`}
          variants={itemvariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setopen((pre) => !pre)}
          className={`text-[20px] capitalize ${
            activeSection === item && "active"
          }`}
        >
          {item}
        </motion.a>
      ))}
    </motion.div>
  );
}
