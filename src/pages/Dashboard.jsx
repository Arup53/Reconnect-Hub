// Dashboard.jsx
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, Outlet } from "react-router-dom";

export default function Dashboard() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 bg-gray-800 text-white w-64 p-4 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out lg:translate-x-0 lg:relative lg:transform-none`}
      >
        <h2 className="text-2xl font-bold mb-6">Dashboard</h2>
        <nav className="flex flex-col gap-4">
          <a href="#" className="hover:bg-gray-700 p-2 rounded">
            Home
          </a>
          <a href="#" className="hover:bg-gray-700 p-2 rounded">
            Analytics
          </a>
          <Link
            to="/dashboard/settings"
            className="hover:bg-gray-700 p-2 rounded"
          >
            Settings
          </Link>
        </nav>
      </div>

      {/* Main content */}

      {/* Content area */}
      <main className="p-6 bg-gray-100 flex-1 overflow-y-auto  w-full">
        <div className="bg-white p-4 rounded shadow">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
