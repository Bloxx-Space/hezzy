"use client";
import NewBackgroundGradient from "./NewBackgroundGradient";
import ScrollDown from "./ScrollDown";
import React, { Suspense, useEffect } from "react";

import About from "./About";

const World = React.lazy(() => import("./World"));
const TalentDescription = React.lazy(() => import("./TalentDescription"));
const BrandDescription = React.lazy(() => import("./BrandDescription"));
const EnterpriseDescription = React.lazy(() =>
  import("./EnterpriseDescription")
);

export default function Post(props) {
  return (
    <>
      <main className="bg-black min-h-screen">
        <div className="relative z-0 bg-primary text-white">
          <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
            <NewBackgroundGradient gradient="linear-gradient(180deg, #990000ff, #000000ff)" />

            <span id="mainsection">
              <span id="worldsection">
                <Suspense fallback={<></>}>
                  <World {...props} />
                </Suspense>
              </span>

              <ScrollDown />
            </span>
          </div>
        </div>
      </main>
    </>
  );
}
