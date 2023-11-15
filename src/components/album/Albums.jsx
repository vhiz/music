import React from "react";
import SectionHeader from "../events/SectionHeader";
import AlbumSlider from "./AlbumSlider";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

export default function Albums() {
  return (
    <section id="discography">
      <div className="container mx-auto">
        <SectionHeader pretitle={"Discography"} title={"Popular Albums"} />
        <motion.div
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className=""
        >
          <AlbumSlider />
        </motion.div>
      </div>
    </section>
  );
}
