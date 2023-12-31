import React from "react";
import { animate, motion } from "framer-motion";

import { styles } from "../styles/styles";
import { services } from "../constants/constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import Image from "next/image";

const ServiceCard = ({ index, title, icon }) => (
  <div className="xs:w-[250px] w-full">
    <motion.div
      variants={fade("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <Image
          src={icon}
          alt="web-development"
          width={500}
          height={500}
          className="w-64 h-64 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </div>
);

function jumpTo(section)
{

  animate("#mainsection", { opacity: 0, }, { type: "interia"}).then(() => {
    animate("#mainsection", { display: "none" }).then(() => {
      animate(section, {
        display: "block",
      }).then(() => {
        animate(section, { opacity: 1 });
      });
    });
  });
}

const AboutSection = (props) => {
  
  return (
    <>
      <div className="min-w-screen">
        <motion.div
          className="xs:w-[250px] w-full h-full"
          variants={fadeIn("", "", 0.1, 0.8)}
          style={{ padding: "25px", zIndex: 2, userSelect: 'none' }}
        >
          <br />
          <br />
          <motion.h6
            variants={fadeIn("up", "spring", 1 * 1.1, 0.75)}
            whileHover={{ scale: 1.05, color: "#F0D0D0" }}
            whileTap={{ scale: 0.9, color: "#F0D0D0" }}
            whileInView={{ color: "#FFF" }}
            className={styles.sectionHeadLilText}
            onClick={()=>{ document.location.href = "https://www.youtube.com/watch?v=W02FeK118Fc"}}
          >
            YouTube
          </motion.h6>
          <motion.h6
            variants={fadeIn("up", "spring", 1 * 1.2, 0.75)}
            whileHover={{ scale: 1.05, color: "#F0D0D0" }}
            whileTap={{ scale: 0.9, color: "#F0D0D0" }}
            whileInView={{ color: "#FFF" }}
            className={styles.sectionHeadLilText}
            onClick={()=>{ document.location.href = "https://www.instagram.com/bsg_hezzy"}}
            
          >
            Instagram
          </motion.h6>
          <motion.h6
            variants={fadeIn("up", "spring", 1 * 1.3, 0.75)}
            whileHover={{ scale: 1.05, color: "#FFF" }}
            whileTap={{ scale: 0.9, color: "#FFF" }}
            whileInView={{ color: "#FFF" }}
            className={styles.sectionHeadLilText}
          >
            TikTok
          </motion.h6>


          <br /><br />

          <motion.h6
            variants={fadeIn("up", "spring", 1 * 1.3, 0.75)}
            whileHover={{ scale: 1.05, color: "#FFF" }}
            whileTap={{ scale: 0.9, color: "#FFF" }}
            whileInView={{ color: "#FFF" }}
            className={styles.sectionHeadLilText}
            onClick={props.videoonclick}
          >
            {props.soundEnabled ? "disable" : "enable"}  sound
          </motion.h6>
        </motion.div>
      </div>
    </>
  );
};

export default SectionWrapper(AboutSection, "about");
//export default SectionWrapper(<div>gsrgs</div>, "fsefse");
