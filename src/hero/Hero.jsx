import {
  MouseParallaxChild,
  MouseParallaxContainer,
} from "react-parallax-mouse";
import { motion, useInView } from "framer-motion";
import { fadeIn } from "../variants";
import { TypeAnimation } from "react-type-animation";
import { useRef } from "react";

const locationSequence = [
  "shadow, Finland",
  3000,
  "jack, Falkland Islands",
  3000,
  "bread, Seychelles",
  3000,
  "worth, Comoros",
  3000,
];
export default function Hero() {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "100px" });
  return (
    <section className="h-[80vh] xl:h-[850px]" id="home" >
      <div className="container mx-auto h-full flex justify-center items-center xl:justify-start">
        <div className=" h-full flex flex-col justify-center items-center xl:items-start z-20 pt-12">
          <MouseParallaxContainer
            globalFactorX={0.1}
            globalFactorY={0.2}
            resetOnLeave
            className="relative flex items-center h-[120px] xl:h-max xl:w-[840px]"
          >
            <MouseParallaxChild
              factorX={0.2}
              factorY={0.4}
              className="relative"
            >
              <motion.div
                variants={fadeIn("up", 0.4)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.3 }}
                className="w-[300px] h-[101.37px] xl:w-[725px] xl:h-[244.97px]"
              >
                {/* <img src="/hero/typo-1.svg" alt="" className="w-full h-full" /> */}
                <h1 className="font-montserrat text-[130px] text-[#242445] leading-none h-full w-full tracking-tight">ODUMODU</h1>
              </motion.div>
            </MouseParallaxChild>
            <MouseParallaxChild
              factorX={0.9}
              factorY={0.9}
              className="absolute xl:left-6 z-30"
            >
              <motion.div
                variants={fadeIn("up", 0.7)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.3 }}
                className="w-[300px] h-[101.37px] xl:w-[625px] xl:h-[244.97px]"
              >
                <h2 className="font-alexBrush text-[100px] text-white leading-none h-full w-full tracking-tight text-center">BLVCK</h2>
                {/* <img src="/hero/typo-2.svg" alt="" className="w-full h-full" /> */}
              </motion.div>
            </MouseParallaxChild>
            <MouseParallaxChild
              factorX={0.3}
              factorY={0.6}
              className="hidden xl:flex absolute right-0 z-20 opacity-80"
            >
              <motion.div
                variants={fadeIn("left", 1.4)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.3 }}
                className="w-[150px] h-[100px] xl:w-[248px] xl:h-[200px] mix-blend-luminosity"
              >
                <img
                  src="/hero/odumo.png"
                  alt=""
                  className="w-full h-full object-contain"
                />
              </motion.div>
            </MouseParallaxChild>
          </MouseParallaxContainer>
          <motion.div
            variants={fadeIn("up", 1)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="capitalize minh-[60px] flex items-center mb-6 mt-6 text-[24px]"
          >
            <div className="hidden xl:flex items-center xl:gap-x-0">
              <div>World</div>
              <div className="relative w-2 h-2 mx-2 flex items-center justify-center">
                <img src="/hero/dot.svg" alt="" className="w-full h-full" />
              </div>
              <div>Tour</div>
              <div className="relative w-2 h-2 mx-2 flex items-center justify-center">
                <img src="/hero/dot.svg" alt="" className="w-full h-full" />
              </div>
              <div>2023</div>
            </div>
            <div className="hidden xl:flex items-center justify-center relative w-7 h-7 mx-4">
              <img src="/hero/mic.svg" alt="" className="w-full h-full" />
            </div>
            <TypeAnimation
              sequence={locationSequence}
              wrapper="div"
              speed={10}
              deletionSpeed={10}
              repeat={Infinity}
              cursor={false}
            />
          </motion.div>
          <motion.div
            variants={fadeIn("up", 1.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
          >
            <button className="btn btn-lg btn-accent">Get Tickets </button>
          </motion.div>
        </div>
        <motion.div
          variants={fadeIn("left", 0.2)}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          viewport={{ once: false, amount: 0.7 }}
          className="hidden xl:flex absolute right-0 top-0  before:w-[784px] before:h-[893px] before:absolute before:right-0 before:top-0 before:bg-singerOverlay"
          ref={ref}
        >
          <img
            src="/hero/singer.jpeg"
            alt=""
            className="w-[617px] h-[893px] object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
