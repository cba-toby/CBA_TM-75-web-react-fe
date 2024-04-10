import { useEffect, useState } from "react";
import axiosClient from "../../../../axios-client";
import { Link } from "react-router-dom";
import { useStateContext } from "../../../../context/ContextProvider";
import ReactPaginaet from "react-paginate";
import PaginationComponent from "../../../../components/Pagination";

function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const { setNotification } = useStateContext();
  const [currentPage, setCurrentPage] = useState(1);
  const [pageCount, setPageCount] = useState(10);
  const [search, setSearch] = useState("");
  const [searchTimeout, setSearchTimeout] = useState(null);

  useEffect(() => {
    getUsers(currentPage);
  }, []);

  const handlePageChange = (selectedItem) => {
    const newPage = selectedItem.selected + 1;
    setCurrentPage(newPage);
    getUsers(newPage);
  };

  const getUsers = (page = currentPage, searchValue = null) => {
    let url = `/admin/users?page=${page}`;
    if (searchValue) {
      url += `&search=${searchValue}`;
    }
    axiosClient
      .get(url)
      .then(({ data }) => {
        setLoading(false);
        setUsers(data.data);
        setPageCount(data.meta.last_page);
        setCurrentPage(data.meta.current_page);
      })
      .catch((error) => {
        setLoading(false);
      });
  };

  const handleSearch = (value) => {
    setSearch(value);
    setLoading(true);
    clearTimeout(searchTimeout);
    const timeout = setTimeout(() => getUsers(null, value), 1000);
    setSearchTimeout(timeout);
  };

  const onDeleteUser = (id) => {
    if (window.confirm("Are you sure?")) {
      axiosClient
        .delete(`/admin/users/destroy/${id}`)
        .then(() => {
          getUsers();
          setNotification("User was successfully deleted");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <div>
      <h1>User admin</h1>
      <div className="container">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">List User</h5>
            <div className="datatable-top">
              {/* Seach box */}
              <div className="datatable-search">
                <input
                  className="datatable-input"
                  placeholder="Search..."
                  type="search"
                  title="Search within table"
                  value={search}
                  onChange={(ev) => {
                    handleSearch(ev.target.value);
                  }}
                />
              </div>

              {/* Pagination  */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "right",
                  alignItems: "center",
                }}
              >
                <PaginationComponent
                  pageCount={pageCount}
                  currentPage={currentPage - 1}
                  handlePageChange={handlePageChange}
                />
              </div>
            </div>
            <table className="table table-striped">
              <thead>
                <tr>
                  <th scope="col">#ID</th>
                  <th scope="col">Tên</th>
                  <th scope="col">Email</th>
                  <th scope="col">Create Date</th>
                  <th scope="col">Active</th>
                </tr>
              </thead>

              {loading && (
                <tbody>
                  <tr>
                    <td colSpan="5" className="text-center">
                      <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                      </div>
                    </td>
                  </tr>
                </tbody>
              )}

              {!loading && (
                <>
                  <tbody>
                    {Array.isArray(users) &&
                      users.map((user) => (
                        <tr key={user.id}>
                          <th scope="row">{user.id}</th>
                          <td>{user.name}</td>
                          <td>{user.email}</td>
                          <td>{user.created_at}</td>
                          <td>
                            <Link
                              to={`/admin/users/${user.id}`}
                              className="btn btn-outline-secondary"
                            >
                              Edit
                            </Link>
                            &nbsp;
                            <button
                              onClick={(ev) => onDeleteUser(user.id)}
                              className="btn btn-outline-danger"
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </>
              )}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Users;
