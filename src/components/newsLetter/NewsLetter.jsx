import { motion } from "framer-motion";
import SectionHeader from "../events/SectionHeader";
import { fadeIn } from "../../variants";

export default function NewsLetter() {
  return (
    <section
      id="contact"
      className="bg-newsLetter bg-fixed h-[480px] section bg-cover w-full bg-center bg-no-repeat"
    >
      <div className="container mx-auto h-full">
        <div className="flex flex-col h-full items-center justify-center">
          <SectionHeader
            pretitle={"Get In Touch"}
            title={"Sign up for Our news letter"}
          />
          <motion.form
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="relative flex items-center w-full max-w-xl"
            onClick={(e) => e.preventDefault()}
          >
            <input
              type="text"
              placeholder="Email address"
              className="w-full h-[64px] outline-none rounded-full bg-primary/60 backdrop-blur-[15px] px-8"
              required
            />
            <button
              type="submit"
              className="bg-accent absolute right-2 h-[46px] rounded-full text-[15px] hover:bg-accent-hover transition-all px-6"
            >
              Subcribe
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
