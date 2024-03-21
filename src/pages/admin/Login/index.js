import { Link } from "react-router-dom";

function LoginAdmin() {
  const onSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <div>
      <div className="pt-4 pb-2">
        <h5 className="card-title text-center pb-0 fs-4">
          Login to Your Account
        </h5>
        <p className="text-center small">
          Enter your username & password to login
        </p>
      </div>
      <form className="row g-3 needs-validation" onSubmit={onSubmit}>
        <div className="col-12">
          <label htmlFor="yourUsername" className="form-label">
            Username
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
              placeholder="Username"
            />
            <div className="invalid-feedback">Please enter your username.</div>
          </div>
        </div>

        <div className="col-12">
          <label htmlFor="yourPassword" className="form-label">
            Password
          </label>
          <input
            type="password"
            name="password"
            className="form-control"
            id="yourPassword"
            required
            placeholder="Password"
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
            Don't have account?{" "}
            <Link to="/admin/auth/register"> Create an account</Link>
          </p>
        </div>
      </form>
    </div>
  );
}

export default LoginAdmin;
