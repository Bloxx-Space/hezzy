"use client"
import NewBackgroundGradient from "./components/NewBackgroundGradient";
import ScrollDown from "./components/ScrollDown"
import React, { Suspense } from "react"

import { About } from "./components/"


const World = React.lazy(() => import('./components/World'));
const TalentDescription = React.lazy(() => import('./components/TalentDescription'));
const BrandDescription = React.lazy(() => import('./components/BrandDescription'));
const EnterpriseDescription = React.lazy(() => import('./components/EnterpriseDescription'));

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

              <Suspense fallback={<></>}>


                <World />


              </Suspense>

            </span>
          </span>

          <span
            id="talentdescriptionsection"
            style={{ display: "none" }}>

            <Suspense fallback={<></>}>
              <TalentDescription />
            </Suspense>
          </span>
          <span
            id="branddescriptionsection"
            style={{ display: "none" }}>

            <Suspense fallback={<></>}>
              <BrandDescription />
            </Suspense>
          </span>
          <span
            id="enterprisedescriptionsection"
            style={{ display: "none" }}>

            <Suspense fallback={<></>}>
              <EnterpriseDescription />
            </Suspense>
          </span>





        </div></div>
    </main></>
  );
}
