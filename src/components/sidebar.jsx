import {
    AiOutlineHome,
    AiOutlineUser,
    AiOutlineLaptop,
    AiOutlineProject,
    AiOutlinePhone,
} from "react-icons/ai";

const Sidebar = () => {
    return (
        <div className="sidebar hidden lg:inline-block cursor-pointer h-screen fixed left-0 top-0 z-10 group w-[90px] hover:w-[175px] duration-300 pt-6 bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10">
            <div className="logo mb-24 cursor-pointer">
                <h1 className="text-5xl text-white font-base text-center">
                    Kt
                </h1>
            </div>
            <div className="sidebar-menu px-5 flex flex-col justify-center gap-y-8 text-white">
                <a
                    href="#home"
                    className="menu-item inline-flex items-center px-3 py-2 rounded-md hover:bg-gray-400 hover:rounded-md hover:bg-clip-padding hover:backdrop-filter hover:backdrop-blur-sm hover:bg-opacity-10 cursor-pointer">
                    <div>
                        <AiOutlineHome size={27} className="text-white" />
                    </div>
                    <div className="menu-text opacity-0 group-hover:opacity-100 transition ease-in-out duration-200 text-sm uppercase ml-4">
                        Home
                    </div>
                </a>
                <a
                    href="#about"
                    className="menu-item inline-flex items-center px-3 py-2 rounded-md hover:bg-gray-400 hover:rounded-md hover:bg-clip-padding hover:backdrop-filter hover:backdrop-blur-sm hover:bg-opacity-10 cursor-pointer">
                    <div>
                        <AiOutlineUser size={27} className="text-white" />
                    </div>
                    <div className="menu-text opacity-0 group-hover:opacity-100 transition ease-in-out duration-200 text-sm uppercase ml-4">
                        About
                    </div>
                </a>
                <a
                    href="#skills"
                    className="menu-item inline-flex items-center px-3 py-2 rounded-md hover:bg-gray-400 hover:rounded-md hover:bg-clip-padding hover:backdrop-filter hover:backdrop-blur-sm hover:bg-opacity-10 cursor-pointer">
                    <div>
                        <AiOutlineLaptop size={27} className="text-white" />
                    </div>
                    <div className="menu-text opacity-0 group-hover:opacity-100 transition ease-in-out duration-200 text-sm uppercase ml-4">
                        Skills
                    </div>
                </a>
                <a
                    href="#projects"
                    className="menu-item inline-flex items-center px-3 py-2 rounded-md hover:bg-gray-400 hover:rounded-md hover:bg-clip-padding hover:backdrop-filter hover:backdrop-blur-sm hover:bg-opacity-10 cursor-pointer">
                    <div>
                        <AiOutlineProject size={27} className="text-white" />
                    </div>
                    <div className="menu-text opacity-0 group-hover:opacity-100 transition ease-in-out duration-200 text-sm uppercase ml-4">
                        Projects
                    </div>
                </a>
                <a
                    href="#contact"
                    className="menu-item inline-flex items-center px-3 py-2 rounded-md hover:bg-gray-400 hover:rounded-md hover:bg-clip-padding hover:backdrop-filter hover:backdrop-blur-sm hover:bg-opacity-10 cursor-pointer">
                    <div>
                        <AiOutlinePhone size={27} className="text-white" />
                    </div>
                    <div className="menu-text opacity-0 group-hover:opacity-100 transition ease-in-out duration-200 text-sm uppercase ml-4">
                        Contact
                    </div>
                </a>
            </div>
        </div>
    );
};

export default Sidebar;
