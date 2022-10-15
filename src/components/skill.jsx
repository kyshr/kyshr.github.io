import React from "react";

const Skill = ({ Icon, name }) => {
  return (
    <div className="bg-[#1D2C45] rounded-2xl p-3 hover:shadow-xl cursor-pointer">
      <Icon size={"80%"} className="text-white mx-auto mb-0 sm:mb-1" />
      <p className="text-center text-[8px] sm:text-sm font-normal md:font-medium">
        {name}
      </p>
    </div>
  );
};

export default Skill;
