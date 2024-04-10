import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axiosClient from "../../../../axios-client";

function UserForm() {
  let { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState(null);
  const [user, setUser] = useState({
    id: null,
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });
  const [userOld, setUserOld] = useState(null);

  useEffect(() => {
    if (id) {
      setLoading(true);
      axiosClient
        .get(`/admin/users/show/${id}`)
        .then(({ data }) => {
          setLoading(false);
          setUser(data);
          setUserOld(data);
        })
        .catch((error) => {
          setLoading(false);
        });
    }
  }, [id]);

  const onSubmit = (e) => {
    e.preventDefault();
    if (user.id) {
      axiosClient
        .put(`/admin/users/update/${user.id}`, user)
        .then((data) => {
          navigate("/admin/users");
          setErrors(null);
        })
        .catch((error) => {
          const { response } = error;
          if (response.status === 422) {
            setErrors(response.data.errors);
          }
        });
    } else {
      axiosClient
        .post("/admin/users", user)
        .then((data) => {
          navigate("/admin/users");
          setErrors(null);
        })
        .catch((error) => {
          const { response } = error;
          if (response.status === 422) {
            setErrors(response.data.errors);
          }
        });
    }
  };

  return (
    <>
      <div className="pagetitle">
        {user.id && <h1>Cập nhật User: {userOld.name}</h1>}
        {!user.id && <h1>Tạo User mới</h1>}
        <nav>
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="index.html">test1</a>
            </li>
            <li className="breadcrumb-item">test2</li>
            <li className="breadcrumb-item active">test3</li>
          </ol>
        </nav>
      </div>
      <div className="container">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Danh Mục</h5>
            {loading && <p>Loading...</p>}
            {errors && (
              <div style={{ color: "red" }}>
                {Object.keys(errors).map((key) => (
                  <p key={key}>{errors[key][0]}</p>
                ))}
              </div>
            )}
            {!loading && (
              <form onSubmit={onSubmit}>
                <div className="row mb-3">
                  <label
                    htmlFor="inputText"
                    className="col-sm-2 col-form-label"
                  >
                    Tên đăng nhập
                  </label>
                  <div className="col-sm-10">
                    <input
                      value={user.name}
                      onChange={(ev) =>
                        setUser({ ...user, name: ev.target.value })
                      }
                      placeholder="Name"
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="row mb-3">
                  <label
                    htmlFor="inputText"
                    className="col-sm-2 col-form-label"
                  >
                    Email
                  </label>
                  <div className="col-sm-10">
                    <input
                      value={user.email}
                      onChange={(ev) =>
                        setUser({ ...user, email: ev.target.value })
                      }
                      placeholder="Email"
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="row mb-3">
                  <label
                    htmlFor="inputText"
                    className="col-sm-2 col-form-label"
                  >
                    Mật khẩu
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="password"
                      onChange={(ev) =>
                        setUser({ ...user, password: ev.target.value })
                      }
                      placeholder="Password"
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="row mb-3">
                  <label
                    htmlFor="inputText"
                    className="col-sm-2 col-form-label"
                  >
                    Xác nhận mật khẩu
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="password"
                      onChange={(ev) =>
                        setUser({
                          ...user,
                          password_confirmation: ev.target.value,
                        })
                      }
                      placeholder="Password Confirmation"
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="text-center">
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                  &nbsp;
                  <button type="reset" className="btn btn-secondary">
                    Reset
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default UserForm;
