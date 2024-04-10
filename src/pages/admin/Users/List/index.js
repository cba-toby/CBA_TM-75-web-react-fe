import { useEffect, useState } from "react";
import axiosClient from "../../../../axios-client";
import { Link } from "react-router-dom";

function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = () => {
    setLoading(true);
    axiosClient
      .get("/admin/users")
      .then(({ data }) => {
        console.log(data);
        setLoading(false);
        setUsers(data.data);
      })
      .catch((error) => {
        setLoading(false);
      });
  };

  const onDeleteUser = (id) => {
    if (window.confirm("Are you sure?")) {
      axiosClient
        .delete(`/admin/users/destroy/${id}`)
        .then(() => {
          getUsers();
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <div>
      <h1>User admin</h1>
      <Link to="/admin/users/create"> Add user </Link>
      <div className="container">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Table with stripped rows</h5>
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
                    <td colSpan="5" class="text-center">
                      Loading...
                    </td>
                  </tr>
                </tbody>
              )}

              {!loading && (
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
              )}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Users;
