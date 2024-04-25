import { useState } from "react";
import React from "react";
import { useLocation, Link } from "react-router-dom";

const breadcrumbs = {
  "/admin/users/create": [
    { label: "Trang chủ", link: "/admim" },
    { label: "Người dùng", link: "/admin/users" },
    { label: "Tạo mới", link: "/admin/users/create", active: true },
  ],
  "/admin/users": [
    { label: "Trang chủ", link: "/admin" },
    { label: "Người dùng", link: "/admin/users", active: true },
  ],
  "/admin/category/create": [
    { label: "Trang chủ", link: "/admin" },
    { label: "Danh mục", link: "/admin/category" },
    { label: "Tạo mới", link: "/admin/category/create", active: true },
  ],
  "/admin/category": [
    { label: "Trang chủ", link: "/admin" },
    { label: "Danh mục", link: "/admin/category", active: true },
  ],
};

function Breadcrumbs() {
  const location = useLocation();
  const path = location.pathname;
  const type = "";

  const breadcrumbsList = !breadcrumbs[path] ? [] : breadcrumbs[path] ;

  return (
    <nav>
      <ol className="breadcrumb">
        {breadcrumbsList.map((item, index) => (
          <li
            key={index}
            className={`breadcrumb-item ${item.active ? "active" : ""}`}
          >
            {item.active ? (
              <span>{item.label}</span>
            ) : (
              <Link to={item.link}>{item.label}</Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export default Breadcrumbs;
