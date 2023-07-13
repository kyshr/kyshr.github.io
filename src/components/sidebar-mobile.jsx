import {
    AiOutlineHome,
    AiOutlineUser,
    AiOutlineLaptop,
    AiOutlineProject,
    AiOutlinePhone,
} from "react-icons/ai";

const SidebarMobile = () => {
    return (
        <div className="sidebar w-full flex justify-center lg:hidden cursor-pointer fixed left-0 bottom-2 z-10">
            <div className="sidebar-menu px-5 flex items-center justify-center gap-x-3 py-2 text-sky-400 bg-gray-400 rounded-full bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10">
                <a
                    href="#home"
                    className="menu-item inline-flex items-center px-3 py-2 rounded-md hover:bg-gray-400 hover:rounded-md hover:bg-clip-padding hover:backdrop-filter hover:backdrop-blur-sm hover:bg-opacity-10 cursor-pointer">
                    <div>
                        <AiOutlineHome size={27} className="text-sky-400" />
                    </div>
                </a>
                <a
                    href="#about"
                    className="menu-item inline-flex items-center px-3 py-2 rounded-md hover:bg-gray-400 hover:rounded-md hover:bg-clip-padding hover:backdrop-filter hover:backdrop-blur-sm hover:bg-opacity-10 cursor-pointer">
                    <div>
                        <AiOutlineUser size={27} className="text-sky-400" />
                    </div>
                </a>
                <a
                    href="#skills"
                    className="menu-item inline-flex items-center px-3 py-2 rounded-md hover:bg-gray-400 hover:rounded-md hover:bg-clip-padding hover:backdrop-filter hover:backdrop-blur-sm hover:bg-opacity-10 cursor-pointer">
                    <div>
                        <AiOutlineLaptop size={27} className="text-sky-400" />
                    </div>
                </a>
                <a
                    href="#projects"
                    className="menu-item inline-flex items-center px-3 py-2 rounded-md hover:bg-gray-400 hover:rounded-md hover:bg-clip-padding hover:backdrop-filter hover:backdrop-blur-sm hover:bg-opacity-10 cursor-pointer">
                    <div>
                        <AiOutlineProject size={27} className="text-sky-400" />
                    </div>
                </a>
                <a
                    href="#contact"
                    className="menu-item inline-flex items-center px-3 py-2 rounded-md hover:bg-gray-400 hover:rounded-md hover:bg-clip-padding hover:backdrop-filter hover:backdrop-blur-sm hover:bg-opacity-10 cursor-pointer">
                    <div>
                        <AiOutlinePhone size={27} className="text-sky-400" />
                    </div>
                </a>
            </div>
        </div>
    );
};

export default SidebarMobile;
