"use client";

import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

export default function ScrollDown() {
  return (
    <>
      <motion.div
        transition={{ duration: 0.3, delay: 4 }}
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        className="flex h-screen w-screen absolute top-0 pb-8"
      >
        <div
          className="scrolldown m-auto"
          onClick={() => {
            window.scrollTo(0, 800);
          }}
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            variants={fadeIn("right", "spring", 0.5, 0.75)}
            className="whitespace-nowrap pl-12 sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider"
          >
            SCROLL DOWN
          </motion.p>
          <div className="chevrons">
            <div className="chevrondown"></div>
            <div className="chevrondown"></div>
          </div>
        </div>
      </motion.div>
    </>
  );
}
