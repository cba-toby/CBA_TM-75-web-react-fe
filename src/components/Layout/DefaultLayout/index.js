import Header from "./Header";
import Sidebar from "./Sidebar";

function DefaultLayout() {
    return ( 
        <div>
            <Header />
            <div className="container">
                <Sidebar />
                <div className="content">
                    <h2>Default Layout</h2>
                </div>
            </div>
        </div>
     );
}

export default DefaultLayout;