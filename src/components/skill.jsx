import React from "react";

const Skill = ({ logo, name }) => {
    return (
        <div className="bg-[#1D2C45] rounded-2xl p-3 hover:scale-105 transition-all ease-in-out cursor-pointer">
            <img
                src={logo}
                alt="skill"
                className="mx-auto mb-0 sm:mb-1 w-28 h-28"
            />
            <p className="text-center text-[9px] sm:text-sm font-normal">
                {name}
            </p>
        </div>
    );
};

export default Skill;
