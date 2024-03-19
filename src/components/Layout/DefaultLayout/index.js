import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";

function DefaultLayout() {
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