"use client";

import { useRef, Suspense, useEffect } from "react";
import { Canvas, useFrame, useLoader, useThree } from "@react-three/fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Mesh } from "three";
import { AnimatePresence, motion } from "framer-motion";
import { MOUSE, TOUCH } from "three";

import React from "react";

import { styles } from "../styles/styles";
import { services } from "../constants/constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import Image from "next/image";

const ServiceCard = ({ index, title, icon }) => (
  <div className="xs:w-[250px] w-full">
    <motion.div
      style={{ backgroundColor: "#00000020", padding: "10px"}}

      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.9 }}
      variants={fadeIn("right", "spring", index * 1.5, 0.75)}
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

const WorldSection = () => {
  return (
    <>
      <div className="xs:w-[250px] w-full">
        <_World></_World>
      </div>

      <motion.div
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] p-8"
      >
        <p className={styles.sectionSubText}>
          {" "}
          {`Welcome to a world where your brand's visual identity comes to life.
      `}
        </p>
      </motion.div>

      <div class="grid grid-flow-row-dense grid-cols-1 md:grid-cols-3 grid-rows-1">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(WorldSection, "world");

function MeshComponent() {
  const fileUrl =
    "https://realmtest.sfo3.digitaloceanspaces.com/bloxx/planet/scene.gltf";
  //const fileUrl = "/shiba/scene.gltf";
  const mesh = useRef();
  const gltf = useLoader(GLTFLoader, fileUrl);

  useFrame(() => {
    mesh.current.rotation.y += 0.003;
    mesh.current.rotation.x += 0.001;
  });

  return (
    <mesh ref={mesh}>
      <primitive object={gltf.scene} />
    </mesh>
  );
}

function _World() {
  const CameraController = () => {
    const { camera, gl } = useThree();
    useEffect(() => {
      const controls = new OrbitControls(camera, gl.domElement);

      controls.mouseButtons = {
        LEFT: MOUSE.ROTATE,
      };

      controls.touches = {
        ONE: TOUCH.ROTATE,
        TWO: TOUCH.DOLLY_ROTATE,
      };

      controls.minDistance = 2;
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
          <Canvas className="h-2x l w-2xl p-8">
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
