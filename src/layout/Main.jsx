import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import FooterComponent from "../components/Footer";
import { useEffect, useState } from "react";

function Main() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
    document.documentElement.classList.toggle("dark", savedTheme === "dark");
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    localStorage.setItem("theme", newTheme);
  };
  return (
    <div>
      {/* navbar */}
      <div
        className={`sticky top-0   shadow-md z-50  ${
          theme === "dark" ? "bg-black" : "bg-gray-300"
        }`}
      >
        <div className="w-[95%] mx-auto  ">
          <Navbar toggleTheme={toggleTheme} theme={theme} />
        </div>
      </div>

      {/* main */}
      <div className="  min-h-[calc(100vh-362px)]">
        <Outlet />
      </div>

      {/* footer */}
      <FooterComponent />
    </div>
  );
}

export default Main;
