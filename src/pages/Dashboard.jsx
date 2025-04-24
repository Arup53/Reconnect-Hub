import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, Outlet } from "react-router-dom";

export default function Dashboard() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Mobile menu button */}
      <button
        className="lg:hidden fixed top-4 left-4 z-50 bg-gray-800 text-white p-2 rounded"
        onClick={toggleSidebar}
      >
        <Menu size={24} />
      </button>

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 bg-gray-800 text-white w-64 p-4 transform z-40 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out lg:translate-x-0 lg:relative lg:transform-none z-10`}
      >
        {/* Close button on mobile */}
        <div className="flex justify-between items-center mb-6 lg:hidden">
          <h2 className="text-2xl font-bold">Dashboard</h2>
          <button onClick={toggleSidebar}>
            <X size={24} />
          </button>
        </div>

        {/* Sidebar content */}
        <nav className="flex flex-col gap-4">
          <Link
            to="/"
            className="hover:bg-gray-700 p-2 rounded"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/dashboard/settings"
            className="hover:bg-gray-700 p-2 rounded"
            onClick={() => setIsOpen(false)}
          >
            User Details
          </Link>
        </nav>
      </div>

      {/* Main content */}
      <main className=" bg-gray-100 flex-1 overflow-y-auto w-full ml-0 ">
        <div className="bg-white p-4 rounded shadow min-h-[400px] flex-col">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
