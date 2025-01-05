import { Link } from "react-router-dom";

function Error() {
  return (
    <div className="flex flex-col justify-center items-center">
      <img src="./error404.jpg" alt="" className="h-[600px] object-contain" />
      <Link to={"/"} className="btn bg-blue-500 text-2xl text-white ">
        Go Back
      </Link>
    </div>
  );
}

export default Error;
