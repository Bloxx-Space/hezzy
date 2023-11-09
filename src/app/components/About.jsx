import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles/styles";
import { services } from "../constants/constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import Image from "next/image";

const ServiceCard = ({ index, title, icon }) => (
  <div className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
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

const AboutSection = () => {
  return (
    <>
        
      <motion.div
        className="xs:w-[250px] w-full min-h-screen"
        variants={fadeIn("", "", 0.1, 0.8)}
        style={{ backgroundColor: "#00000020", padding: "50px" }}
      >
        <motion.div variants={textVariant()}>
          <motion.p
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            className={styles.sectionSubHeadText}
          >
            Introduction
          </motion.p>


          <motion.h2 whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            className={styles.sectionHeadText}>
              Overview.
        </motion.h2>

        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4 text-secondary text-[17px] leading-[30px] p-8"
        >
          {`As an expert brand strategist, we are here to guide you on an exhilarating journey to redefine and enhance your brand's identity. Whether you're a startup looking to make your mark or an established company seeking a refreshing rebrand, our landing is the launchpad for your brand's transformation.`}
        </motion.p>

        <motion.div
          variants={fadeIn("", "", 1.1, 1)}
          className="mt-4 text-secondary text-[17px] leading-[30px] p-8"
        >
          <p className={styles.sectionSubText}>
            Join us on this adventure and witness the power of strategic design.
          </p>
        </motion.div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default SectionWrapper(AboutSection, "about");
//export default SectionWrapper(<div>gsrgs</div>, "fsefse");
