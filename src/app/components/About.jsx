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

const AboutSection = () => {
  return (
    <>
      <div className="min-h-screen min-w-screen">
        <motion.div
          className="xs:w-[250px] w-full h-full"
          variants={fadeIn("", "", 0.1, 0.8)}
          style={{ padding: "25px", zIndex: 2 }}
        >
          <motion.h2
            variants={fadeIn("up", "spring", 1 * 0.5, 0.75)}
            whileHover={{ scale: 1.05, color: "#FFF" }}
            whileTap={{ scale: 0.9, color: "#FFF" }}
            whileInView={{ color: "#F0D0D0" }}
            className={styles.sectionHeadText}
            onClick={() => {

              animate("#aboutsection", { x: [0, 200] , opacity: 0 }).then(() => {
                animate("#aboutsection", { display: "none" }).then(() => {
                  animate("#aboutdescriptionsection", {
                    display: "inline-block",
                  }).then(() => {
                    animate(
                      "#aboutdescriptionsection",
                      { opacity: 1 },
                    );
                  });
                });
              });
            }}
          >
            For Talent.
          </motion.h2>
          
          <motion.h2
            variants={fadeIn("up", "spring", 1 * 0.7, 0.75)}
            whileHover={{ scale: 1.05, color: "#FFF" }}
            whileTap={{ scale: 0.9, color: "#FFF" }}
            whileInView={{ color: "#F0D0D0" }}
            className={styles.sectionHeadText}
          >
            For Brands.
          </motion.h2>{" "}
          <motion.h2
            variants={fadeIn("up", "spring", 1 * 0.9, 0.75)}
            whileHover={{ scale: 1.05, color: "#FFF" }}
            whileTap={{ scale: 0.9, color: "#FFF" }}
            whileInView={{ color: "#F0D0D0" }}
            className={styles.sectionHeadText}
          >
            For Enterprise.
          </motion.h2>
          <br />
          <br />
          <motion.h6
            variants={fadeIn("up", "spring", 1 * 1.1, 0.75)}
            whileHover={{ scale: 1.05, color: "#FFF" }}
            whileTap={{ scale: 0.9, color: "#FFF" }}
            whileInView={{ color: "#F0D0D0" }}
            className={styles.sectionHeadLilText}
          >
            About.
          </motion.h6>
          <motion.h6
            variants={fadeIn("up", "spring", 1 * 1.2, 0.75)}
            whileHover={{ scale: 1.05, color: "#FFF" }}
            whileTap={{ scale: 0.9, color: "#FFF" }}
            whileInView={{ color: "#F0D0D0" }}
            className={styles.sectionHeadLilText}
          >
            Career.
          </motion.h6>
          <motion.h6
            variants={fadeIn("up", "spring", 1 * 1.3, 0.75)}
            whileHover={{ scale: 1.05, color: "#FFF" }}
            whileTap={{ scale: 0.9, color: "#FFF" }}
            whileInView={{ color: "#F0D0D0" }}
            className={styles.sectionHeadLilText}
          >
            Contact.
          </motion.h6>
        </motion.div>
      </div>
    </>
  );
};

export default SectionWrapper(AboutSection, "about");
//export default SectionWrapper(<div>gsrgs</div>, "fsefse");
