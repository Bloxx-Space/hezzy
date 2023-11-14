import React from "react";
import { animate, motion } from "framer-motion";

import { styles } from "../styles/styles";
import { services } from "../constants/constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import Close from "./Close";
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

const AboutDescriptionSection = () => {
  return (
    <>
      <Close
        onClick={() => {
          animate("#aboutdescriptionsection", {
            x: [0, 200],
            opacity: [1, 0],
          }).then(() => {
            animate("#aboutdescriptionsection", { display: "none" }).then(
              () => {
                animate("#aboutsection", { display: "inline-block" }).then(
                  () => {
                    animate("#aboutsection", { x: [-200, 0], opacity: [0, 1] });
                  }
                );
              }
            );
          });
        }}
      />
      <div className="min-h-screen z-10">
        <motion.div
          variants={fadeIn("left", "spring", 1 * 0.7, 0.75)}
          className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] p-8"
        >
          <p className={styles.sectionSubText}>
            {`Welcome to a world where your brand's visual identity comes to life.`}
          </p>
        </motion.div>
      </div>
    </>
  );
};

export default SectionWrapper(AboutDescriptionSection, "about");
//export default SectionWrapper(<div>gsrgs</div>, "fsefse");
