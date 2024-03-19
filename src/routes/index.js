import { createBrowserRouter } from "react-router-dom";
import AdminHome from "../pages/Admin/Home"
import UserHome from "../pages/User/Home";
import AdminLogin from "../pages/Admin/Login";

import { DefaultLayout } from "../components/Layout"
// Public routes
const publicRoutes = createBrowserRouter([
    {
        path: "/admin",
        element: <DefaultLayout />,
        children: [
            {
                path: "home",
                element: <AdminHome />, 
            },
            {
                path: "login",
                element: <AdminLogin />,
            },
        ],
    },
    {
        path: "/",
        element: <UserHome />,
    },
])

const privateRoutes = [

]

export { publicRoutes, privateRoutes }