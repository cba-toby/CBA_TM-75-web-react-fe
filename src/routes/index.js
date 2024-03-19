import { createBrowserRouter } from "react-router-dom";
import AdminHome from "../pages/admin/Home";
import UserHome from "../pages/user/Home";

import { DefaultLayout } from "../components/Layout"
// Public routes
const publicRoutes = createBrowserRouter([
    {
        path: "/admin",
        element: 
         <DefaultLayout />,
        children: [
            {
                path: "admin",
                element: <AdminHome />, 
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