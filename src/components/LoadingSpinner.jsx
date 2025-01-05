import Lottie from "lottie-react";
import Animation1 from "../animation/Animation1.json";

function LoadingSpinner() {
  return (
    <div className="flex justify-center items-center  min-h-[calc(100vh-362px)] ">
      <span className="w-[300px] h-[300px] ">
        <Lottie animationData={Animation1} loop={true} />
      </span>
    </div>
  );
}

export default LoadingSpinner;
