import { Outlet, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useStateContext } from "../../../context/ContextProvider";
import Header from "./Header";
import Sidebar from "./Sidebar";
import axiosClient from "../../../axios-client";

function DefaultLayout() {
  const [toggleSidebar, setToggleSidebar] = useState(false);
  const { user, token, notification, setUser, setToken } = useStateContext();

  useEffect(() => {
    if (token) {
      axiosClient.get("admin/user").then(({ data }) => {
        setUser(data);
      });
    }
  }, [token]);

  if (!token) {
    return <Navigate to="/admin/auth/login" />;
  }

  const handleToggleSidebar = () => {
    setToggleSidebar(!toggleSidebar);
  };

  return (
    <div className={toggleSidebar ? "toggle-sidebar" : ""}>
      <Header toogle={handleToggleSidebar} />
      <Sidebar />
      <main id="main" className="main">
        {notification && (
          <div
            class="alert alert-success alert-dismissible fade show"
            role="alert"
          >
            {notification}
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="alert"
              aria-label="Close"
            ></button>
          </div>
        )}
        <Outlet />
      </main>
    </div>
  );
}

export default DefaultLayout;
