
"use client"
import  Passport  from "./components/Passport";
import Background  from "./components/Background";
import  World  from "./components/World";
import ScrollDown from "./components/ScrollDown"

import { About } from "./components/"
export default function Home() {
  return (
    <main className="bg-black min-h-screen">
      <div className='relative z-0 bg-primary text-white'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>

          <About />
          <ScrollDown/>
          <World/>
        </div></div>
    </main>
  );
}
