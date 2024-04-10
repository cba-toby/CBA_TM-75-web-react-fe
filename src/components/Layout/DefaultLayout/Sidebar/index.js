import { Link } from "react-router-dom";

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

        <li className="nav-item">
          <a
            className="nav-link collapsed"
            data-bs-target="#components-nav"
            data-bs-toggle="collapse"
            href="#"
          >
            <i className="bi bi-menu-button-wide"></i>
            <span>Components</span>
            <i className="bi bi-chevron-down ms-auto"></i>
          </a>
          <ul
            id="components-nav"
            className="nav-content collapse "
            data-bs-parent="#sidebar-nav"
          >
            <li>
              <a href="components-alerts.html">
                <i className="bi bi-circle"></i>
                <span>Alerts</span>
              </a>
            </li>
            <li>
              <a href="components-accordion.html">
                <i className="bi bi-circle"></i>
                <span>Accordion</span>
              </a>
            </li>
          </ul>
        </li>

        <li className="nav-item">
          <a
            className="nav-link collapsed"
            data-bs-target="#categories-nav"
            data-bs-toggle="collapse"
            href="#"
          >
            <i className="bi bi-menu-button-wide"></i>
            <span>Danh mục</span>
            <i className="bi bi-chevron-down ms-auto"></i>
          </a>
          <ul
            id="categories-nav"
            className="nav-content collapse "
            data-bs-parent="#sidebar-nav"
          >
            <li>
              <Link to="/admin/category/list">
                <i className="bi bi-circle"></i>
                <span>Danh sách</span>
              </Link>
            </li>
            <li>
              <Link to="/admin/category/create">
                <i className="bi bi-circle"></i>
                <span>Tạo mới</span>
              </Link>
            </li>
          </ul>
        </li>

        <li className="nav-item">
          <a
            className="nav-link collapsed"
            data-bs-target="#users-nav"
            data-bs-toggle="collapse"
            href="#"
          >
            <i className="bi bi-menu-button-wide"></i>
            <span>Người dùng</span>
            <i className="bi bi-chevron-down ms-auto"></i>
          </a>
          <ul
            id="users-nav"
            className="nav-content collapse "
            data-bs-parent="#sidebar-nav"
          >
            <li>
              <Link to="/admin/users">
                <i className="bi bi-circle"></i>
                <span>Danh sách</span>
              </Link>
            </li>
            <li>
              <Link to="/admin/users/create">
                <i className="bi bi-circle"></i>
                <span>Tạo mới</span>
              </Link>
            </li>
          </ul>
        </li>

        <li className="nav-item">
          <a className="nav-link collapsed" href="pages-blank.html">
            <i className="bi bi-file-earmark"></i>
            <span>Blank</span>
          </a>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
