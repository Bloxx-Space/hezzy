"use client"
import NewBackgroundGradient from "./NewBackgroundGradient";
import NewBackgroundVideo from "./NewBackgroundVideo";
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
          <NewBackgroundVideo src="https://realmtest.sfo3.digitaloceanspaces.com/hezzy/G%20Hezzy%20%20-%20Whitney%20_%20Off%20The%20Wire%20Performance%20%EF%BF%BD%EF%BF%BD%EF%B8%8F%EF%BF%BD%EF%BF%BD-(1080p).mp4" />

          <span id="mainsection">
            <About />

            <ScrollDown />
          </span>
        </div></div>
    </main></>
)}