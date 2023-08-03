import React from "react";
import { techStackLogos } from "../utils/projects";

const Project = ({ title, description, image, tech = [], url = "" }) => {
    return (
        <div className="project card w-full h-full bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 rounded-xl hover:scale-105 cursor-pointer transition-all ease-in-out space-y-3">
            <div className="project-image w-full rounded-t-xl">
                <img
                    src={image}
                    alt={title}
                    className="rounded-t-xl object-cover object-center"
                />
            </div>
            <div className="min-h-[200px] flex flex-col justify-between px-4 pb-5">
                <div className="project-content space-y-3">
                    <div className="title text-center font-semibold text-sky-400">
                        <p className="text-lg">{title}</p>
                    </div>
                    <div className="description">
                        <p className="text-sm leading-relaxed">
                            {description}{" "}
                            {url.length > 0 && (
                                <span
                                    className="text-sky-400 text-xs hover:underline"
                                    onClick={() => window.open(url, "_blank")}>
                                    Visit site
                                </span>
                            )}
                        </p>
                    </div>
                </div>
                <div>
                    <div className="project-tech h-full w-full flex flex-wrap items-end justify-center gap-3">
                        {tech.length
                            ? tech.map((item, index) => {
                                  return (
                                      <div key={index}>
                                          <img
                                              src={techStackLogos[item]}
                                              alt="skill"
                                              className="mx-auto mb-0 sm:mb-1 w-7 h-7"
                                          />
                                      </div>
                                  );
                              })
                            : null}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Project;
