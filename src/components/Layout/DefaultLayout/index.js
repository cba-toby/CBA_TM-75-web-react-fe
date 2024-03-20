import { Outlet, Navigate } from "react-router-dom";
import { useStateContext } from "../../../context/ContextProvider";
import Header from "./Header";
import Sidebar from "./Sidebar";

function DefaultLayout() {
  const { user, token, setUser, setToken, notification } = useStateContext();

  if (!token) {
    return <Navigate to="/admin/login" />;
  }
  return (
    <div>
      <Header />
      <div className="container">
        <Sidebar />
        <div className="content">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default DefaultLayout;
