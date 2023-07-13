import Sidebar from "./sidebar";
import SidebarMobile from "./sidebar-mobile";

const Layout = ({ children }) => {
    return (
        <div>
            <Sidebar />
            <SidebarMobile />
            {children}
        </div>
    );
};

export default Layout;
