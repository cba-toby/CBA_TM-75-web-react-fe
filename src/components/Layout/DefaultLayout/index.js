import { Outlet, Navigate } from "react-router-dom";
import { useStateContext } from "../../../context/ContextProvider";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { useState } from "react";

function DefaultLayout() {
  const [toggleSidebar, setToggleSidebar] = useState(false)
  const { user, token, setUser, setToken } = useStateContext();

  if (!token) {
    return <Navigate to="/admin/auth/login" />;
  }

  const handleToggleSidebar = () => {
    setToggleSidebar(!toggleSidebar)
  }

  return (
    <div className={toggleSidebar ? "toggle-sidebar" : ""}>
      <Header toogle={ handleToggleSidebar }/>
      <div className="container">
        <Sidebar />
        <div className="content">
          <main>
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
}

export default DefaultLayout;
