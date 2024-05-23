import { Link } from "react-router-dom";
import NavItem from "./NavigationItem";
import { useStateContext } from "../../../../context/ContextProvider";

function Sidebar() {
  const { user } = useStateContext();
  const isUser = user.role == process.env.REACT_APP_USER_ROLE;

  const postsLinks = [
    { to: "/admin/posts", label: "Danh sách" },
    { to: "/admin/posts/create", label: "Tạo mới" },
  ];

  const postsAdditionalLinks = isUser
    ? []
    : [{ to: "/admin/public-posts", label: "Công khai" }];

  const postsFinalLinks = [...postsLinks, ...postsAdditionalLinks];

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
        {!isUser && (
          <NavItem
            name="category"
            title="Danh mục"
            icon="bi bi-pencil-square"
            links={[
              { to: "/admin/category", label: "Danh sách" },
              { to: "/admin/category/create", label: "Tạo mới" },
            ]}
          />
        )}
        {/* Post */}
        <NavItem
          name="post"
          title="Bài viết"
          icon="bi bi-file-earmark-medical-fill"
          links={postsFinalLinks}
        />

        {/* User */}
        {!isUser && (
          <NavItem
            name="user"
            title="Người dùng"
            icon="bi bi-people-fill"
            links={[
              { to: "/admin/users", label: "Danh sách" },
              { to: "/admin/users/create", label: "Tạo mới" },
            ]}
          />
        )}
         <NavItem
            name="contact"
            title="Liên hệ"
            icon="bi bi-envelope"
            links={[
              { to: "/admin/contacts", label: "Danh sách" },
            ]}
          />
      </ul>
    </aside>
  );
}

export default Sidebar;
