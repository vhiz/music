import { motion } from "framer-motion";
import Nav from "../nav/Nav";
import Social from "../Social/Social";
import { fadeIn } from "../../variants";

export default function Footer() {
  return (
    <footer className="bg-accent section h-[500px] xl:h-auto">
      <div className="container mx-auto h-full flex flex-col items-center gap-y-8">
        <motion.div
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
        >
          <a href="#">
            <h2 className="text-[24px] lg:text-[36px] font-semibold leading-tight">
              victormgbeahurike82@gmail.com
            </h2>
          </a>
        </motion.div>
        <motion.div
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
        >
          <Nav
            containerStyles={
              "flex flex-col xl:flex-row justify-center items-center gap-y-4 xl:gap-x-8 text-sm uppercase font-semibold"
            }
            linkStyles={"hover:text-primary/80 transition-all"}
          />
        </motion.div>
        <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className=""
        >
          <Social
            containerStyles={"flex text-[24px] gap-x-8"}
            iconStyles={"hover:text-primary/80 transition-all justify-center"}
          />
        </motion.div>
        <motion.div
          variants={fadeIn("up", 0.6)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className=""
        >
          <a
            href=""
            className="relative w-[250px] h-[50px] flex transition-all"
          >
            {/* <img
              src="/header/logo.svg"
              alt=""
              className="w-full h-full object-contain"
            /> */}
             <h1 className="w-full h-full font-alexBrush tracking-wider text-2xl">ODUMODUBLVCK</h1>
          </a>
        </motion.div>
      </div>
    </footer>
  );
}
