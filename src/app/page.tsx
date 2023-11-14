"use client"
import NewBackgroundVideo from "./components/NewBackgroundVideo";
import NewBackgroundGradient from "./components/NewBackgroundGradient";
import World from "./components/World";
import ScrollDown from "./components/ScrollDown"

import { AnimatePresence } from "framer-motion";

import { About, TalentDescription, BrandDescription, EnterpriseDescription } from "./components/"
export default function Home() {
  return (<>


    <main className="bg-black min-h-screen">
      <div className='relative z-0 bg-primary text-white'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <NewBackgroundGradient gradient="linear-gradient(180deg, #990000ff, #000000ff)" />

          <span id="mainsection">
            <About />

            <ScrollDown />

            <span
              id="worldsection">
              <World />

            </span>
          </span>

          <span
            id="talentdescriptionsection"
            style={{ display: "none" }}>
            <TalentDescription />
          </span>
          <span
            id="branddescriptionsection"
            style={{ display: "none" }}>
            <BrandDescription />
          </span>
          <span
            id="enterprisedescriptionsection"
            style={{ display: "none" }}>
            <EnterpriseDescription />
          </span>





        </div></div>
    </main></>
  );
}
