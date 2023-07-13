import React from "react";

const Skill = ({ Icon, name }) => {
    return (
        <div className="bg-[#1D2C45] rounded-2xl p-3 hover:scale-105 transition-all ease-in-out cursor-pointer">
            <Icon size={"80%"} className="text-white mx-auto mb-0 sm:mb-1" />
            <p className="text-center text-[9px] sm:text-sm font-normal">
                {name}
            </p>
        </div>
    );
};

export default Skill;
