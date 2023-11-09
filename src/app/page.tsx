"use client"
import NewBackgroundVideo from "./components/NewBackgroundVideo";
import NewBackgroundGradient from "./components/NewBackgroundGradient";
import World from "./components/World";
import ScrollDown from "./components/ScrollDown"

import { About } from "./components/"
export default function Home() {
  return (<>


    <main className="bg-black min-h-screen">
      <div className='relative z-0 bg-primary text-white'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>

          <NewBackgroundVideo src="https://realmtest.sfo3.digitaloceanspaces.com/ROC/rocback.mp4" />
          <NewBackgroundGradient gradient="linear-gradient(180deg, #00000000, #000000ff)" />
          <About />

          <ScrollDown />
          <World />
        </div></div>
    </main></>
  );
}
