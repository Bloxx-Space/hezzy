"use client";

import { useRef, Suspense, useEffect } from "react";
import { Canvas, useFrame, useLoader, useThree } from "@react-three/fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Mesh } from "three";
import { AnimatePresence, motion } from "framer-motion";

import React from "react";

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

const Shiba = () => {
  return (
    <>
      <div className="xs:w-[250px] w-full">
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Collection</p>
          <h2 className={styles.sectionHeadText}>001.</h2>
        </motion.div>

        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          {`Welcome to a world where your brand's visual identity comes to life.`}
        </motion.p>

        <_Shiba></_Shiba>
      </div>
    </>
  );
};

export default SectionWrapper(Shiba, "shiba");

function MeshComponent() {
  const fileUrl =
    "https://realmtest.sfo3.digitaloceanspaces.com/bloxx/shiba/scene.gltf";
  //const fileUrl = "/shiba/scene.gltf";
  const mesh = useRef();
  const gltf = useLoader(GLTFLoader, fileUrl);

  useFrame(() => {
    mesh.current.rotation.y += 0.003;
  });

  return (
    <mesh ref={mesh}>
      <primitive object={gltf.scene} />
    </mesh>
  );
}

function _Shiba() {
  const CameraController = () => {
    const { camera, gl } = useThree();
    useEffect(() => {
      const controls = new OrbitControls(camera, gl.domElement);


      controls.minDistance = 2.5;
      controls.maxDistance = 5;
      return () => {
        controls.dispose();
      };
    }, [camera, gl]);
    return null;
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 2 }}
        exit={{ opacity: 0 }}
      >
        <div className="flex justify-center items-center w-128 h-96 content-center">
          <Canvas camera={{ }} className="h-2x l w-2xl p-8">
            <Suspense fallback={<></>}>
              <CameraController />
              <ambientLight />
              <pointLight position={[10, 10, 10]} />
              <MeshComponent />
            </Suspense>
          </Canvas>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
