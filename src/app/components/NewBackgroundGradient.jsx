"use client";

import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const NewBackgroundGradient = (props) => {
  return (
    <>
      <motion.div
        transition={{ duration: 0.3 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        
        exit={{ opacity: 0 }}
        
        className="flex h-screen w-screen absolute"
        style={{ userSelect: "none", pointerEvents: "none",  backgroundImage: props.gradient }}
      >

      </motion.div>
    </>
  );
}

export default NewBackgroundGradient
