import { Link, useLocation } from "react-router-dom";
const Login = () => {
  const { pathname } = useLocation();
  const userType =
    "/org-login/" == pathname
      ? "Org "
      : "/emp-login/" == pathname
      ? "Emp "
      : "Guard ";

  document.title = `${userType}Login`;
  return (
    <div className="center">
      <div className="details">
        <div className="recentOrders">
          <div className="container1">
            <main>
              <form className="px-4 py-3" method="post">
                <div className="form-group">
                  <label htmlFor="exampleDropdownFormEmail1">
                    {userType} username
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleDropdownFormEmail1"
                    placeholder="username"
                    name="username"
                    required
                    autoComplete="username"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleDropdownFormPassword1">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleDropdownFormPassword1"
                    placeholder="password"
                    name="password"
                    required
                  />
                </div>
                <p className="alert alert-danger">message</p>
                {"/emp-login/" == pathname ? (
                  <div className="form-group">
                    <Link to="/emp-register/">Register</Link>
                  </div>
                ) : "/org-login/" == pathname ? (
                  <div className="form-group">
                    <Link to="/guard-login/">Guard Login</Link>
                  </div>
                ) : (
                  ""
                )}
                <button type="submit" className="btn btn-primary px-4 submit">
                  Sign in
                </button>
              </form>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
