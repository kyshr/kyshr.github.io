import FloatingButtons from "./floating-buttons";
import Sidebar from "./sidebar";
import SidebarMobile from "./sidebar-mobile";

const Layout = ({ children }) => {
  return (
    <div className="relative">
      <Sidebar />
      <SidebarMobile />
      {children}
      <div className="fixed bottom-5 right-3 cursor-pointer">
        <FloatingButtons />
      </div>
    </div>
  );
};

export default Layout;
