import React from "react";
import me from "../../assets/images/me.png";
import { TypeAnimation } from "react-type-animation";
import Skill from "../../components/skill";
import * as DevIcons from "react-icons/di";
import * as SimpIcons from "react-icons/si";
import { HiMail } from "react-icons/hi";
import { projects, skills, techStackLogos, techStackNames } from "../../utils/projects";
import Project from "../../components/project";

const HomePage = () => {
  return (
    <>
      <section id="home" className="home-section text-white lg:pl-[90px]">
        <div className="home-container max-w-7xl mx-auto py-28 sm:py-36 md:py-44 px-4">
          <div className="me-content max-w-3xl lg:max-w-5xl mx-auto flex flex-col justify-center gap-y-5">
            <p className="text-md lg:text-lg text-center sm:text-start uppercase">Hello there! I'm</p>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-center sm:text-start font-semibold uppercase">
              <span className="text-sky-400">Kyle Joseph</span> Timajo
            </h1>
            <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center sm:text-start font-semibold uppercase">
              A{" "}
              <span className="text-sky-400">
                <TypeAnimation
                  sequence={["FRONTEND", 2000, "BACKEND", 2000, "MOBILE", 2000]}
                  wrapper="span"
                  cursor={true}
                  repeat={Infinity}
                />
              </span>{" "}
              Developer
            </p>
            <div className="me-btns flex justify-center sm:justify-start gap-x-4 mt-4">
              <a
                href="https://drive.google.com/file/d/1-JcvF_CiyUouNCKXi90_sQ0UQwsyWd4p/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer">
                <button
                  type="button"
                  className="text-white uppercase bg-sky-400 hover:bg-sky-500 font-medium rounded-lg text-sm px-3 py-3">
                  Download Resume
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section id="about" className="about-section text-white lg:pl-[90px] bg-section">
        <div className="about-container max-w-7xl mx-auto py-10 px-4">
          <div className="about-title uppercase relative inline-block mb-20">
            <div className="mb-3">
              <span className="text-xs before:content-[''] before:absolute before:w-8 before:h-[2px] before:bg-sky-400 before:left-0 before:top-3 pl-10">
                More Info
              </span>
            </div>
            <h1 className="text-3xl font-medium text-sky-400">About Me</h1>
          </div>
          <div className="about-content py-6 md:py-3 px-4 md:px-10 bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 rounded-2xl">
            <div className="about-me flex flex-col-reverse md:flex-row gap-y-5 md:gap-0  justify-between">
              <div className="sm:3/5 md:w-4/6 flex flex-col md:pr-5 gap-y-6 justify-center px-4 md:px-0">
                <h2 className="leading-7 lg:leading-8 text-justify md:text-start font-light text-md lg:text-lg">
                  I am a <span className="text-sky-400">Fullstack Developer</span> from Camiguin Island, Philippines
                  that specializes in React.js, Node.js, and Laravel. I graduated from{" "}
                  <span className="text-sky-400">University of Science and Technology of Southern Philippines</span>. I
                  am passionate in building quality website, web apps, and mobile apps that will help solve your
                  personal and business needs.
                </h2>
                <div className="mx-auto md:mx-0">
                  <a href="#contact">
                    <button
                      type="button"
                      className="text-white uppercase bg-sky-400 hover:bg-sky-500 font-medium rounded-lg text-sm px-3 py-3">
                      Contact Me
                    </button>
                  </a>
                </div>
              </div>
              <div className="w-2/3 sm:w-2/5 md:w-2/6 mx-auto flex justify-center md:justify-end">
                <img src={me} alt="myself" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="skills" className="skills-section text-white lg:pl-[90px] bg-section">
        <div className="skills-container max-w-7xl mx-auto py-10 px-4">
          <div className="skills-title uppercase relative inline-block mb-20">
            <div className="mb-3">
              <span className="text-xs before:content-[''] before:absolute before:w-8 before:h-[2px] before:bg-sky-400 before:left-0 before:top-3 pl-10">
                Take A Look At
              </span>
            </div>
            <h1 className="text-3xl font-medium text-sky-400">My Skills</h1>
          </div>
          <div className="skills-content py-5 md:py-10 px-5 md:px-10 bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 rounded-2xl">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5">
              {skills.map((skill, index) => {
                return <Skill logo={techStackLogos[skill]} name={techStackNames[skill]} />;
              })}
            </div>
          </div>
        </div>
      </section>
      <section id="projects" className="projects-section text-white lg:pl-[90px] bg-section">
        <div className="projects-container max-w-7xl mx-auto py-10 px-4">
          <div className="projects-title uppercase relative inline-block mb-20">
            <div className="mb-3">
              <span className="text-xs before:content-[''] before:absolute before:w-8 before:h-[2px] before:bg-sky-400 before:left-0 before:top-3 pl-10">
                Navigate Though
              </span>
            </div>
            <h1 className="text-3xl font-medium text-sky-400">My Projects</h1>
          </div>
          <div className="projects-content">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {projects.map((project, index) => {
                return (
                  <Project
                    key={index}
                    title={project.title}
                    description={project.description}
                    image={project.image}
                    tech={project.tech}
                    url={project.url}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </section>
      <section id="contact" className="contact-section text-white lg:pl-[90px] bg-section">
        <div className="contact-container max-w-7xl mx-auto py-10 px-4">
          <div className="contact-title uppercase relative inline-block mb-20">
            <div className="mb-3">
              <span className="text-xs before:content-[''] before:absolute before:w-8 before:h-[2px] before:bg-sky-400 before:left-0 before:top-3 pl-10">
                What's Next?
              </span>
            </div>
            <h1 className="text-3xl font-medium text-sky-400">Get In Touch</h1>
          </div>
          <div className="skills-content mb-12 lg:mb-0 py-10 md:py-16 px-5 md:px-10 bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 rounded-2xl">
            <div className="contact-content space-y-8">
              <p className="text-white text-center text-lg md:text-xl">
                I am open for any opportunities? Contact me on my email.
              </p>
              <button
                type="button"
                className="mx-auto flex items-center gap-x-2 text-white uppercase bg-sky-400 hover:bg-sky-500 font-medium rounded-lg text-sm px-3 py-3"
                onClick={() => window.open("mailto:timajokyle24@gmail.com")}>
                <HiMail className="text-white w-7 h-7" />
                <span>Let's talk</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
