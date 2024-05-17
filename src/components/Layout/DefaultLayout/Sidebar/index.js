import { Link } from "react-router-dom";
import NavItem from "./NavigationItem";

function Sidebar() {
  return (
    <aside id="sidebar" className="sidebar">
      <ul className="sidebar-nav" id="sidebar-nav">
        <li className="nav-item">
          <Link className="nav-link" to="/admin/">
            <i className="bi bi-grid"></i>
            <span>Dashboard</span>
          </Link>
        </li>
        {/* Category */}
        <NavItem
          name="category"
          title="Danh mục"
          icon="bi bi-pencil-square"
          links={[
            { to: "/admin/category", label: "Danh sách" },
            { to: "/admin/category/create", label: "Tạo mới" },
          ]}
        />
        {/* Post */}
        <NavItem
          name="post"
          title="Bài viết"
          icon="bi bi-file-earmark-medical-fill"
          links={[
            { to: "/admin/posts", label: "Danh sách" },
            { to: "/admin/posts/create", label: "Tạo mới" },
            { to: "/admin/public-posts", label: "Công khai" },
          ]}
        />
        {/* User */}
        <NavItem
          name="user"
          title="Người dùng"
          icon="bi bi-people-fill"
          links={[
            { to: "/admin/users", label: "Danh sách" },
            { to: "/admin/users/create", label: "Tạo mới" },
          ]}
        />
      </ul>
    </aside>
  );
}

export default Sidebar;
