import { Outlet, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useStateContext } from "../../../context/ContextProvider";
import Header from "./Header";
import Sidebar from "./Sidebar";
import axiosClient from "../../../axios-client";


function DefaultLayout() {
  const [toggleSidebar, setToggleSidebar] = useState(false)
  const { user, token, setUser, setToken } = useStateContext();

  useEffect(() => {
    // axiosClient.get('auth/user')
    //   .then(({data}) => {
    //      setUser(data)
    //   })
  }, []);

  if (!token) {
    return <Navigate to="/admin/auth/login" />;
  }

  const handleToggleSidebar = () => {
    setToggleSidebar(!toggleSidebar)
  }


  return (
    <div className={toggleSidebar ? "toggle-sidebar" : ""}>
      <Header toogle={ handleToggleSidebar }/>
      <Sidebar />
          <main id="main" className="main">
            <Outlet />
          </main>
    </div>
  );
}

export default DefaultLayout;
