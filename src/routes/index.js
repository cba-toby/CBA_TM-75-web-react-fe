import { Navigate, createBrowserRouter } from "react-router-dom";
import AdminHome from "../pages/admin/Home";
import UserHome from "../pages/user/Home";
import AdminLogin from "../pages/admin/Login";
import AdminRegister from "../pages/admin/Register";

import { DefaultLayout } from "../components/Layout";
import { LoginLayout } from "../components/Layout";
import Page404 from "../components/Layout/Page404";

import Category from "../pages/admin/Category/List";
import CategoryForm from "../pages/admin/Category/Form";

import User from "../pages/admin/Users/List";
import UserForm from "../pages/admin/Users/Form";
// Public routes
const publicRoutes = createBrowserRouter([
  {
    path: "/admin",

    children: [
      // Login and Register
      {
        path: "auth",
        element: <LoginLayout />,
        children: [
          {
            path: "login",
            element: <AdminLogin />,
          },
          {
            path: "register",
            element: <AdminRegister />,
          },
        ],
      },

      // Dashboard
      {
        path: "",
        element: <DefaultLayout />,
        children: [
          {
            path: "",
            element: <Navigate to="home" />,
          },
          {
            path: "home",
            element: <AdminHome />,
          },
          {
            path: "users",
            element: <User />,
          },
          {
            path: "users/create",
            element: <UserForm key="userCreate" />,
          },
          {
            path: "users/:id",
            element: <UserForm key="userUpdate" />,
          },
          {
            path: "category/list",
            element: <Category />,
          },
          {
            path: "category/create",
            element: <CategoryForm />,
          },
        ],
      },
    ],
  },

  // User
  {
    path: "/",
    element: <UserHome />,
  },
  {
    path: "*",
    element: <Page404 />,
  },
]);

const privateRoutes = [];

export { publicRoutes, privateRoutes };
