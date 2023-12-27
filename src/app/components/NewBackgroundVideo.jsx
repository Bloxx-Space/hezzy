"use client";

import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const NewBackgroundVideo = (props) => {
  return (
    <>
      <motion.div
        transition={{ duration: 0.3, delay: 0.3 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: props.playing ? 1 : 0.2 }}
        exit={{ opacity: 0 }}
        className="flex h-[calc(100dvh)] w-screen absolute top-0"
      >
        <video
          id="video"
          style={{ objectFit: "cover" }}
          src={props.src}
          playsInline
          webkit-playsinline
          muted
          loop
          autoplay
          autoPlay
        ></video>
      </motion.div>
    </>
  );
};

export default NewBackgroundVideo;
