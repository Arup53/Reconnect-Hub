import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import FooterComponent from "../components/Footer";

function Main() {
  return (
    <div>
      {/* navbar */}
      <div className={`sticky top-0 bg-gray-300  shadow-md z-50 `}>
        <div className="w-[95%] mx-auto  ">
          <Navbar />
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
