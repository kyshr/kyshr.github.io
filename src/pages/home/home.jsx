import React from "react";
import me from "../../assets/images/me.png";
import mePhone from "../../assets/images/me-laptop.png";
import { TypeAnimation } from "react-type-animation";

const HomePage = () => {
    return (
        <>
            <div id="home" className="home-section text-white lg:pl-[90px]">
                <div className="home-container max-w-7xl mx-auto py-28 sm:py-36 md:py-44 px-6">
                    <div className="me-content max-w-3xl lg:max-w-5xl mx-auto flex flex-col justify-center gap-y-5">
                        <p className="text-md lg:text-lg text-center sm:text-start uppercase">
                            Hello there! I'm
                        </p>
                        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-center sm:text-start font-semibold uppercase">
                            <span className="text-sky-400">Kyle Joseph</span>{" "}
                            Timajo
                        </h1>
                        <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center sm:text-start font-semibold uppercase">
                            A{" "}
                            <span className="text-sky-400">
                                <TypeAnimation
                                    sequence={[
                                        "FRONTEND",
                                        2000,
                                        "BACKEND",
                                        2000,
                                        "MOBILE",
                                        2000,
                                    ]}
                                    wrapper="span"
                                    cursor={true}
                                    repeat={Infinity}
                                />
                            </span>{" "}
                            Developer
                        </p>
                        <div className="me-btns flex justify-center sm:justify-start gap-x-4 mt-4">
                            <button
                                type="button"
                                className="text-white uppercase border border-sky-400 hover:bg-sky-500 focus:ring-4 focus:outline-none focus:ring-sky-300 font-medium rounded-lg text-sm px-5 py-3 text-center mr-2 mb-2">
                                Download CV
                            </button>

                            <button
                                type="button"
                                className="text-white uppercase bg-sky-400 hover:bg-sky-500 focus:ring-4 focus:ring-sky-300 font-medium rounded-lg text-sm px-5 py-3 mr-2 mb-2">
                                About Me
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div
                id="about"
                className="about-section text-white lg:pl-[90px] bg-section">
                <div className="about-container max-w-7xl mx-auto py-28 sm:py-36 md:py-44 px-6">
                    <div className="about-content py-3 px-5 md:px-10 bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 rounded-2xl">
                        <div className="about-me flex flex-col-reverse md:flex-row gap-y-5 md:gap-0  justify-between">
                            <div className="md:w-4/6 flex flex-col md:pr-5 gap-y-4 justify-center">
                                <h1 className="text-xl text-center md:text-start font-medium text-sky-400">
                                    About Me
                                </h1>
                                <h2 className="leading-7 lg:leading-8 text-justify md:text-start font-light text-md lg:text-lg">
                                    A Fullstack Web and Mobile Developer from
                                    Cagayan de Oro, Philippines that specializes
                                    in React.js, Node.js, and Laravel. Recently,
                                    I graduated from University of Science and
                                    Technology of Southern Philippines. I am
                                    passionate in building quality website, web
                                    apps, and mobile apps that will help solve
                                    your personal and business needs.
                                </h2>
                            </div>
                            <div className="w-2/3 md:w-2/6 mx-auto flex justify-center md:justify-end">
                                <img src={me} alt="myself" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HomePage;
