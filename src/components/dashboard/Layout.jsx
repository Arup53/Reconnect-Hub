import { useEffect } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

function Layout({ children, sidebarOpen, toggleSidebar }) {
  // Add body class for overflow
  useEffect(() => {
    document.body.classList.add("bg-content");
    document.body.classList.add("overflow-hidden");

    return () => {
      document.body.classList.remove("bg-content");
      document.body.classList.remove("overflow-hidden");
    };
  }, []);

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} />

      {/* Main Content */}
      <div
        className={`flex flex-col flex-1 transition-all duration-300 ease-in-out ${
          sidebarOpen ? "md:ml-64" : "md:ml-20"
        }`}
      >
        <Navbar toggleSidebar={toggleSidebar} sidebarOpen={sidebarOpen} />
        <main className="flex-1 overflow-y-auto p-6 bg-content animate-fade-in">
          {children}
        </main>
      </div>
    </div>
  );
}

export default Layout;
