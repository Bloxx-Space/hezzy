"use client";

import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

export default function ScrollDown() {
  return (
    <>
      <motion.div
        transition={{ duration: 0.3, delay: 4 }}
        initial={{ opacity: 1}}
        animate={{ opacity: 0, y: 20 }}
        exit={{ opacity: 0 }}
        className="flex h-[calc(100vh-74px)] w-screen absolute top-0 pb-16"
        style={{ userSelect: "none", pointerEvents: "none"}}
      >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            variants={fadeIn("right", "spring", 0.5, 0.75)}
            style={{ userSelect: "auto", pointerEvents: "auto" }}
            className="whitespace-nowrap pl-12 sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider"
          >
            WELCOME ...
          </motion.p>
      </motion.div>
    </>
  );
}
