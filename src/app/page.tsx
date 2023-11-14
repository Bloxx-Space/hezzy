"use client"
import NewBackgroundVideo from "./components/NewBackgroundVideo";
import NewBackgroundGradient from "./components/NewBackgroundGradient";
import World from "./components/World";
import ScrollDown from "./components/ScrollDown"

import { AnimatePresence } from "framer-motion";

import { About, AboutDescription } from "./components/"
export default function Home() {
  return (<>


    <main className="bg-black min-h-screen">
      <div className='relative z-0 bg-primary text-white'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <NewBackgroundGradient gradient="linear-gradient(180deg, #990000ff, #110000ff)" />

          <span id="aboutsection">
            <About />

            <ScrollDown />
          </span>

          <span
            id="aboutdescriptionsection"
            style={{ display: "none" }}>
            <AboutDescription />
          </span>




          <span
            id="worldsection">
            <World />

          </span>
        </div></div>
    </main></>
  );
}
