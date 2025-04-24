import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Main from "../layout/Main";
import PrivateRoute from "./PrivateRoute";
import Login from "../pages/Login";
import Register from "../pages/Register";

import AddItems from "../pages/AddItems";
import AllItems from "../pages/AllItems";
import MyItems from "../pages/MyItems";
import UpdateItems from "../pages/UpdateItems";
import ItemDeatils from "../pages/ItemDeatils";
import AllRecovered from "../pages/AllRecovered";
import DynamicTitle from "../components/DynamicTitle";
import Error from "../components/Error";
import Dashboard from "../pages/Dashboard";
import UserDetails from "../components/dashboard/UserDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: (
          <DynamicTitle title="Home-Reconnect Hub">
            <Home />
          </DynamicTitle>
        ),
      },
      {
        path: "/login",
        element: (
          <DynamicTitle title="Login">
            <Login />
          </DynamicTitle>
        ),
      },
      {
        path: "/register",
        element: (
          <DynamicTitle title="Register">
            <Register />
          </DynamicTitle>
        ),
      },
      {
        path: "/allItems",
        element: (
          <DynamicTitle title="AllItems">
            <AllItems />
          </DynamicTitle>
        ),
      },
      // recover route
      {
        path: "/items/:id",
        element: (
          <PrivateRoute>
            <DynamicTitle title="ItemDeatils">
              <ItemDeatils />
            </DynamicTitle>
          </PrivateRoute>
        ),
      },
      {
        path: "/addItems",
        element: (
          <PrivateRoute>
            <DynamicTitle title="AddItems">
              <AddItems />
            </DynamicTitle>
          </PrivateRoute>
        ),
      },

      {
        path: "/myItems",
        element: (
          <PrivateRoute>
            <DynamicTitle title="MyItems">
              <MyItems />
            </DynamicTitle>
          </PrivateRoute>
        ),
      },
      {
        path: "/updateItems/:id",
        element: (
          <PrivateRoute>
            <DynamicTitle title="UpdateItems">
              <UpdateItems />
            </DynamicTitle>
          </PrivateRoute>
        ),
      },
      {
        path: "/allRecovered",
        element: (
          <PrivateRoute>
            <DynamicTitle title="Allrecovered">
              <AllRecovered />
            </DynamicTitle>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard",
        element: (
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        ),
        children: [
          {
            path: "settings",
            element: <UserDetails />,
          },
        ],
      },
    ],
  },
]);

export default router;
