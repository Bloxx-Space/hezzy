"use client";

import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const Close = (props) => {
  return (
    <>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        whileHover={{ scale: 1.05, color: "#FFF" }}
        whileTap={{ scale: 0.9, color: "#FFF" }}
        whileInView={{ color: "#F0D0D0" }}
        variants={fadeIn("right", "spring", 0.5, 0.75)}
        style={{ userSelect: "auto", pointerEvents: "auto" }}
        className="whitespace-nowrap sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider"
        onClick={props.onClick}
      >
        PRESS ME TO GO BACK
      </motion.p>
    </>
  );
};

export default Close;
