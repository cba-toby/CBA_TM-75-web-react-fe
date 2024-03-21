import { Link } from "react-router-dom";

function AdminRegister() {
  return (
    <div className="container">
      <div className="pt-4 pb-2">
        <h5 className="card-title text-center pb-0 fs-4">
          Register to Your Account
        </h5>
        <p className="text-center small">
          Enter your personal details to create account
        </p>
      </div>

      <form className="row g-3 needs-validation" noValidate>
        <div className="col-12">
          <label htmlFor="yourName" className="form-label">
            Họ và tên
          </label>
          <input
            type="name"
            name="name"
            className="form-control"
            id="yourName"
            required
          />
          <div className="invalid-feedback">Please enter your name!</div>
        </div>

        <div className="col-12">
          <label htmlFor="yourUsername" className="form-label">
            Email
          </label>
          <div className="input-group has-validation">
            <span className="input-group-text" id="inputGroupPrepend">
              @
            </span>
            <input
              type="text"
              name="username"
              className="form-control"
              id="yourUsername"
              required
            />
            <div className="invalid-feedback">Please enter your username.</div>
          </div>
        </div>

        <div className="col-12">
          <label htmlFor="yourPassword" className="form-label">
            Mật khẩu
          </label>
          <input
            type="password"
            name="password"
            className="form-control"
            id="yourPassword"
            required
          />
          <div className="invalid-feedback">Please enter your password!</div>
        </div>

        <div className="col-12">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              name="remember"
              value="true"
              id="rememberMe"
            />
            <label className="form-check-label" htmlFor="rememberMe">
              Remember me
            </label>
          </div>
        </div>
        <div className="col-12">
          <button className="btn btn-primary w-100" type="submit">
            Login
          </button>
        </div>
        <div className="col-12">
          <p className="small mb-0">
            Already have an account <Link to="/admin/login">Log in</Link>{" "}
          </p>
        </div>
      </form>
    </div>
  );
}

export default AdminRegister;
