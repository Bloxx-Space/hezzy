"use client";
import React, { useEffect, useState, useContext } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { UserCard } from "./UserCard";
import { SectionWrapper } from "../hoc";

function Menu() {

    const user = { _id: 0, name: "yeah", email: "yeah@gmail.com" };
    return (
        <motion.div 
        initial={{ opacity: 0}}
        animate={{ opacity: 1 }}
        transition={{duration: 0.2}}
        exit={{ opacity: 0 }}>
        <div
            id="login"
            style={{
                backgroundColor: "#ffffff",
                width: "100vw",
                height: "100%",
                position: "fixed",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                borderTop: "2px solid #eaeaea",
                borderBottom: "2px solid #eaeaea",
                transition: "color 2 ease, border-color 2 ease",
                WebkitTransition: "color 2s",
                zIndex: 888,
            }}
        >

            {user && (
                <>
                    <div
                        id="itemgridsingle"
                        style={{
                            display: "grid",
                            justifyItems: "center",
                            alignItems: "center",
                            gridColumnGap: "10px",
                            textAlign: "left",
                            paddingTop: "5vh",
                        }}
                    >
                        <UserCard />

                        <button
                            style={{
                                background:
                                    "linear-gradient(to top, #3204fdba, #9907facc), url(https://picsum.photos/1280/853/?random=1) no-repeat top center;",
                            }}
                            onClick={() => {
                                document.location.href = "/profile";
                            }}
                            className="pushable"
                        >
                            <span
                                style={{
                                    backgroundColor: "#F2F2F2",
                                    color: "#111",
                                }}
                                className="front"
                            >
                                VIEW PROFILE
                            </span>
                        </button>

                        <button
                            style={{
                                background:
                                    "linear-gradient(to top, #3204fdba, #9907facc), url(https://picsum.photos/1280/853/?random=1) no-repeat top center;",
                            }}
                            onClick={() => {
                                document.location.href = "/users";
                            }}
                            className="pushable"
                        >
                            <span
                                style={{
                                    backgroundColor: "#F2F2F2",
                                    color: "#111",
                                }}
                                className="front"
                            >
                                VIEW USERS
                            </span>
                        </button>


                        <button
                            style={{
                                background:
                                    "linear-gradient(to top, #3204fdba, #9907facc), url(https://picsum.photos/1280/853/?random=1) no-repeat top center;",
                            }}
                            onClick={() => {
                                document.location.href = "/checklist";
                            }}
                            className="pushable"
                        >
                            <span
                                style={{
                                    backgroundColor: "#F2F2F2",
                                    color: "#111",
                                }}
                                className="front"
                            >
                                VIEW CHECKLIST
                            </span>
                        </button>
                    </div>
                </>
            )}

            <button
                style={{
                    background:
                        "linear-gradient(to top, #3204fdba, #9907facc), url(https://picsum.photos/1280/853/?random=1) no-repeat top center;",
                }}
                onClick={() => {
                    document.location.href = user
                        ? "/api/auth/logout"
                        : "/api/auth/login";
                }}
                className="pushable"
            >
                <span
                    style={{
                        backgroundColor: "#F2F2F2",
                        color: "#111",
                    }}
                    className="front"
                >
                    {user ? "LOGOUT" : "LOGIN"}
                </span>
            </button>

            {!user && (
                <>
                </>
            )}

            <button
                onClick={() => {
                    document.location.href = "/";
                }}
                className="button_tric"
            >
                <span className="button_lg">
                    <span className="button_sl"></span>
                    <span className="button_text">GO HOME</span>
                </span>
            </button>
        </div></motion.div>
    )
}

export default function Passport() {


    const [show, setShow] = useState(false);

    return (
        <> <AnimatePresence>
            {show ? <Menu /> : null}

        </AnimatePresence>

            <div
                id="passmenu"
                style={{
                    position: "absolute",
                    display: "grid",
                    placeItems: "center",
                    zIndex: 999,
                    right: 0,
                }}
            >
                <button
                    style={{
                        background:
                            "linear-gradient(to top, #3204fdba, #9907facc), url(https://picsum.photos/1280/853/?random=1) no-repeat top center;",
                    }}
                    onClick={() => {

                        setShow(!show);
                    }}
                    className="pushable"
                >
                    <span
                        className="front"
                        style={{
                            backgroundColor: "#F2F2F2",
                            color: "#111",
                        }}
                    ><svg viewBox="0 0 100 80" width="40" height="40">
                            <rect width="100" height="20"></rect>
                            <rect y="30" width="100" height="20"></rect>
                            <rect y="60" width="100" height="20"></rect>
                        </svg>
                        <div
                            style={{
                                fontSize: "0.8em",
                                fontFamily: "ralewayregular",
                                fontWeight: 100,
                                marginTop: "-5px",
                            }}
                        >
                            menu
                        </div>
                    </span>
                </button>
            </div>
        </>
    );
};


//export default SectionWrapper(Passport, "passport");
