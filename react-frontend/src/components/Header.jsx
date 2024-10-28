import logo from "/img/faceRecognition.png";
import SearchBar from "./SearchBar";
import { Link, useLocation } from "react-router-dom";
import { LuLogOut } from "react-icons/lu";
const Header = () => {
  const navLinks = [
    { name: "Home", url: "/" },
    { name: "Org Login", url: "/org-login/" },
    { name: "Employees Login", url: "/emp-login/" },
    { name: "About Us", url: "/about-us/" },
  ];
  const dashboardLinks = [
    { name: "Employees Dashboard", url: "/emp-dashboard/" },
    { name: "Guards Dashboard", url: "/guard-dashboard/" },
  ];
  const { pathname } = useLocation();
  const isDashboard =
    pathname == dashboardLinks[0].url || pathname == dashboardLinks[1].url;
  return (
    <header>
      <nav className="navbar navbar-expand-lg fixed-top mask-custom shadow-1 p-3">
        <Link className="navbar-brand mr-4" to="/">
          <img src={logo} alt="logo" width="80" />
        </Link>
        <button
          className="navbar-toggler pr-20"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <svg width="40" height="40" viewBox="0 0 50 50">
            <path d="M 0 9 L 0 11 L 50 11 L 50 9 Z M 0 24 L 0 26 L 50 26 L 50 24 Z M 0 39 L 0 41 L 50 41 L 50 39 Z"></path>
          </svg>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav">
            {navLinks.map((link) => (
              <li
                className={`nav-item link-animate ${
                  link.url == pathname && "active"
                }`}
                key={link.name}
              >
                <Link className="nav-link" to={link.url}>
                  {link.name}
                </Link>
              </li>
            ))}
            {isDashboard && (
              <li className="nav-item dropdown link-animate">
                <Link
                  className="nav-link dropdown-toggle"
                  to="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Dashboard
                </Link>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  {dashboardLinks.map((link) => (
                    <Link
                      className="dropdown-item"
                      to={link.url}
                      key={link.name}
                    >
                      {link.name}
                    </Link>
                  ))}
                  <div className="dropdown-divider"></div>
                  <Link className="dropdown-item" to="/guard-register/">
                    Gaurd Register
                  </Link>
                </div>
              </li>
            )}
          </ul>
          {isDashboard && <SearchBar></SearchBar>}
          <span className="nav-item">
            <button className="btn py-1 mx-1">
              <Link className="nav-link " to="#">
                <LuLogOut />
              </Link>
            </button>
          </span>
        </div>
      </nav>
    </header>
  );
};

export default Header;
