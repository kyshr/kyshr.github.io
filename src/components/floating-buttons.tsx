import React from "react";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io";

const FloatingButtons = () => {
  return (
    <div className="space-y-4">
      <div>
        <a title="github" href="https://github.com/kyshr" target="_blank" rel="noopener noreferrer">
          <div className="w-11 h-11 flex items-center justify-center bg-sky-300 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 rounded-full p-1.5">
            <IoLogoGithub className="text-white" size={32} />
          </div>
        </a>
      </div>
      <div>
        <a
          title="linkedin"
          href="https://www.linkedin.com/in/kyle-joseph-timajo-959b95233/"
          target="_blank"
          rel="noopener noreferrer">
          <div className="w-11 h-11 flex items-center justify-center bg-sky-300 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 rounded-full p-1.5">
            <IoLogoLinkedin className="text-white" size={32} />
          </div>
        </a>
      </div>
    </div>
  );
};

export default FloatingButtons;
