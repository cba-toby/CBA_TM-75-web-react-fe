import { createBrowserRouter } from "react-router-dom";
import AdminHome from "../pages/admin/Home";
import UserHome from "../pages/user/Home";
import AdminLogin from "../pages/admin/Login";
import AdminRegister from "../pages/admin/Register";

import { DefaultLayout } from "../components/Layout";
import { LoginLayout } from "../components/Layout";
// Public routes
const publicRoutes = createBrowserRouter([
  {
    path: "/admin",
    children: [
      {
        path: "login",
        element: <LoginLayout />,
        children: [
          {
            path: "",
            element: <AdminLogin />,
          },
        ],
      },
      {
        path: "register",
        element: <AdminRegister />,
      },
      {
        path: "",
        element: <DefaultLayout />,
        children: [
          {
            path: "home",
            element: <AdminHome />,
          },
        ],
      },
    ],
  },
  {
    path: "/",
    element: <UserHome />,
  },
]);

const privateRoutes = [];

export { publicRoutes, privateRoutes };
