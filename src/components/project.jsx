import React from "react";
import { useState } from "react";

const Project = ({ title, description, image, tech }) => {
    const [images, setImages] = useState("/assets/images/projects/csp.png");
    return (
        <div className="project card w-full h-full bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 rounded-xl hover:scale-105 cursor-pointer transition-all ease-in-out space-y-3">
            <div className="project-image w-full rounded-t-xl">
                <img src={image} alt={title} className="rounded-t-xl" />
            </div>
            <div className="project-description space-y-3 px-3">
                <div className="title text-center font-semibold text-sky-400">
                    <p className="text-lg">{title}</p>
                </div>
                <div className="description">
                    <p className="text-sm leading-relaxed">{description}</p>
                </div>
            </div>
            <div className="project-tech"></div>
        </div>
    );
};

export default Project;
