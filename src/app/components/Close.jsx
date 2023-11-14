"use client";

import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const Close = (props) => {
  return (
    <>
      <motion.div
        transition={{ duration: 0.3, delay: 4 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: 20 }}
        exit={{ opacity: 0 }}
        className="flex h-[calc(100vh-74px)] absolute bottom-0 pb-16 overflow-hidden"
        style={{ userSelect: "none", pointerEvents: "none" }}
        onClick={props.onClick}
      >
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          variants={fadeIn("right", "spring", 0.5, 0.75)}
          style={{ userSelect: "auto", pointerEvents: "auto" }}
          className="whitespace-nowrap pl-12 sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider"
        >
          PRESS ME TO GO BACK
        </motion.p>
        <div className="chevrons">
          <div className="chevrondown"></div>
          <div className="chevrondown"></div>
        </div>
      </motion.div>
    </>
  );
};

export default Close;
