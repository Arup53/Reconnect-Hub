import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";
import { TfiMenu } from "react-icons/tfi";

function Navbar() {
  const { user, logOut } = useAuth();
  const { pathname } = useLocation();

  return (
    <div className="navbar  shadow-sm container px-4 my-2 mx-auto ">
      <div className="flex-1">
        <Link to="/" className="flex gap-1 items-center">
          {/* <img className="w-auto h-7" src={logo} alt="" /> */}
          <img
            referrerPolicy="no-referrer"
            src="./logo.jpg"
            alt=""
            className="object-contain h-[40px] w-[40px] object-center rounded-full"
          />
          <span className="font-bold">Reconnect Hub</span>
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1 hidden md:flex">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/allItems">Lost & Found Items</Link>
          </li>

          {!user ? (
            <li>
              <Link to="/login">Login</Link>
            </li>
          ) : (
            <>
              <li>
                <Link to="/addItems" className="justify-between">
                  Add Job
                </Link>
              </li>
              <li>
                <Link to="/myItems" className="justify-between">
                  Manage My Items
                </Link>
              </li>
              <li>
                <Link to="/allRecovered" className="justify-between">
                  All Recovered Items
                </Link>
              </li>
            </>
          )}
        </ul>

        <div className="dropdown dropdown-end block md:hidden">
          <div tabIndex={0} role="button" className="btn m-1 text-lg">
            <TfiMenu />
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/allItems">Lost & Found Items</Link>
            </li>

            {!user && (
              <li>
                <Link to="/login">Login</Link>
              </li>
            )}
          </ul>
        </div>

        {user && (
          <div className="dropdown dropdown-end z-50">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div title={user?.displayName} className="w-10 rounded-full">
                <img
                  referrerPolicy="no-referrer"
                  alt="User Profile Photo"
                  src={user?.photoURL}
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="/addItems" className="justify-between">
                  Add Job
                </Link>
              </li>
              <li>
                <Link to="/myItems" className="justify-between">
                  Manage My Items
                </Link>
              </li>
              <li>
                <Link to="/allRecovered" className="justify-between">
                  All Recovered Items
                </Link>
              </li>

              <li className="mt-2">
                <button
                  onClick={logOut}
                  className="bg-gray-200 block text-center"
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
