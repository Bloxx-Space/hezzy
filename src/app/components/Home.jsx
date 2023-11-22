"use client"
import NewBackgroundGradient from "./NewBackgroundGradient";
import ScrollDown from "./ScrollDown"
import React, { Suspense, useEffect } from "react"

import About  from "./About"


const World = React.lazy(() => import('./World'));
const TalentDescription = React.lazy(() => import('./TalentDescription'));
const BrandDescription = React.lazy(() => import('./BrandDescription'));
const EnterpriseDescription = React.lazy(() => import('./EnterpriseDescription'));

export default function Home(props){

    useEffect(()=>{

        console.log(props.posts)
    }, [props])
return(
    <>
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
)}