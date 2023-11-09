"use client";

import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const NewBackgroundImage = (props) => {
  return (
    <>
      <motion.div
        transition={{ duration: 0.3, delay: 1 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        exit={{ opacity: 0 }}
        className="flex h-screen w-screen absolute top-0"
      >
        <img
          style={{ objectFit: "cover" }}
          src={props.src}
        ></img>
      </motion.div>
    </>
  );
}

export default NewBackgroundImage