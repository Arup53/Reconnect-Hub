import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import FooterComponent from "../components/Footer";

function Main() {
  return (
    <div>
      {/* navbar */}
      <div className="w-[95%] mx-auto  ">
        <Navbar />
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
