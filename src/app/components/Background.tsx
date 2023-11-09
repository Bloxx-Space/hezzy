"use client"

import React, { useEffect, useState } from "react";
import gsap from "gsap";
import { useRouter } from "next/router";
import Image from "next/image";

interface Backg {
    splash?: string | undefined;
    splashfit?: string | undefined;

    image?: string | undefined;
    imagefit?: string | undefined;

    video?: string | undefined;
    videofit?: string | undefined ;


    color?: string | undefined;
}

const Background = (props:Backg) => {
  useEffect(() => {
    /* story */
    let i = 0;
    var interval: string | number | NodeJS.Timeout | undefined;

    gsap.to("#color", {
      duration: 0.2,
      opacity: 1,
    });

    gsap
      .to("#splash", {
        delay: 0.3,
        duration: 0.4,
        opacity: 1,
      })
      .then(() => {
        gsap
          .to("#splash", {
            delay: 1,
            duration: 0.4,
            opacity: 0,
          })
          .then(() => {
            gsap.set("#HeaderNav", {
              display: "inline",
            });

            gsap.to("#image", {
              duration: 1,
              opacity: 0.2,
            });
              gsap
                .to(
                  document.querySelector(`.GracefulHeading:nth-child(${1})`),
                  {
                    duration: 0.8,
                    opacity: 1,
                  }
                )
                .then(() => {
                  gsap
                    .to(
                      document.querySelector(
                        `.GracefulHeading:nth-child(${2})`
                      ),
                      {
                        duration: 0.8,
                        opacity: 1,
                      }
                    )
                    .then(() => {
                      gsap.to(
                        document.querySelector(
                          `.GracefulHeading:nth-child(${3})`
                        ),
                        {
                          duration: 0.8,
                          opacity: 1,
                        }
                      );
                    });
                });
            
          });
      });


    const video = document.getElementById("video") as HTMLVideoElement | null
    if (video) {
      video.addEventListener("play", (event) => {
        interval = setInterval(polling, 1000);
      });

      video.currentTime = 0;
      video.play();
    }

    function polling() {
      if (video) {
        if (video.currentTime > 0) {
          gsap
            .to("#image", {
              delay: 0.2,
              duration: 0.2,
              opacity: 0,
            })
            .then(() => {
              gsap.to("#video", {
                duration: 1,
                opacity: 1,
              });
            })
            .then(() => {
              stopPolling();
            });
        }
      }

      i++;
    }

    function stopPolling() {
      clearInterval(interval);
    }

    return () => stopPolling();
  }, [props]);

  return (
    <>
      {props.color && (
        <div
          id="color"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: props.color,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            opacity: 0,
          }}
        ></div>
      )}
      {props.splash && props.splashfit && (
        <Image
        alt="splash"
          src={props.splash}
          id="splash"
          style={{
            display: "inline-block",
            position: "absolute",
            objectFit: "cover",
            //objectFit: props.splashfit,
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            opacity: 0,
          }}
          width={"24"}
          height={"24"}
          priority
        />
      )}
      ,
      {props.image && props.imagefit && (
        <Image
        alt="bg"
          src={props.image}
          id="image"
          style={{
            display: "inline-block",
            position: "absolute",
            objectFit: "cover",
            //objectFit: props.imagefit,
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            opacity: 0,
          }}
          width={"24"}
          height={"24"}
          priority
        />
      )}
      {props.video && props.videofit && (
        <video
          id="video"
          style={{
            display: "inline-block",
            position: "absolute",
            objectFit: "cover",
            //objectFit: props.videofit,
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            opacity: 0,
          }}
          src={props.video}
          playsInline
          webkit-playsInline
          muted
          loop
          autoPlay
        />
      )}
    </>
  );
};

export default Background;