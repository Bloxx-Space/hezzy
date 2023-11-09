"use client"
import NewBackgroundVideo from "./components/NewBackgroundVideo";
import World from "./components/World";
import ScrollDown from "./components/ScrollDown"
import Head from "next/head"

import { About } from "./components/"
export default function Home() {
  return (<>

    <Head>
      <link rel="icon" href="/favicon.ico" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      <meta name="theme-color" content="#ffffff" />
      <meta property="og:title" content="ROC STAR STUDIO" />
      <meta property="og:description" content="" />
      <meta property="og:image" content="https://realmtest.sfo3.digitaloceanspaces.com/ROC/rocback-min.jpg" />

      <title>ROC STAR STUDIO</title>
    </Head>

    <main className="bg-black min-h-screen">
      <div className='relative z-0 bg-primary text-white'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>

          <NewBackgroundVideo src="https://realmtest.sfo3.digitaloceanspaces.com/ROC/rocback.mp4" />
          <About />

          <ScrollDown />
          <World />
        </div></div>
    </main></>
  );
}
