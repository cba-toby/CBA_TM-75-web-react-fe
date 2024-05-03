import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axiosClient from "../../../../axios-client";
import { useStateContext } from "../../../../context/ContextProvider";
import TextInput from "../../../../components/Input/TextInput";

function UserForm() {
  let { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState(null);
  const [userOld, setUserOld] = useState(null);
  const { setNotification } = useStateContext();
  const [isRequired, setIsRequired] = useState(true);
  const [isRequiredPassword, setIsRequiredPassword] = useState(true);
  const [user, setUser] = useState({
    id: null,
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  useEffect(() => {
    if (id) {
      setIsRequiredPassword(false);
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
          setNotification("");
          setNotification({
            type: "success",
            data: "User was successfully updated",
          });
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
          setNotification("");
          setNotification({
            type: "success",
            data: "User was successfully created",
          });
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
        <h1>{!!user.id ? `CẬP NHẬT USER: ${userOld.name}` : "TẠO MỚI USER"}</h1>
      </div>
      <div className="container">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Biểu mẫu</h5>
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
                <TextInput
                  label="Tên đăng nhập"
                  value={user.name}
                  onChange={(value) => setUser({ ...user, name: value })}
                  placeholder="Name"
                  isRequired={isRequired}
                />
                <TextInput
                  label="Email"
                  value={user.email}
                  onChange={(value) => setUser({ ...user, email: value })}
                  placeholder="Email"
                  isRequired={isRequired}
                />
                <TextInput
                  label="Mật khẩu"
                  value={user.password}
                  onChange={(value) => setUser({ ...user, password: value })}
                  placeholder="Password"
                  type="password"
                  isRequired={isRequiredPassword}
                />
                <TextInput
                  label="Xác nhận mật khẩu"
                  value={user.password_confirmation}
                  onChange={(value) =>
                    setUser({ ...user, password_confirmation: value })
                  }
                  placeholder="Password Confirmation"
                  type="password"
                  isRequired={isRequiredPassword}
                />
                <div className="text-center">
                  <button type="submit" className="btn btn-primary">
                    Submit
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
