import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg shadow-sm  bg-white"
      style={{ zIndex: "100" }}
    >
      <div className="container-fluid pb-3 px-4">
        <Link className="navbar-brand" to="/">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhnDz08lUWsDll_7m1NYkHV_U2gNmfvTWCGg&usqp=CAU"
            alt=""
            width="120px"
          />
        </Link>
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mt-3 mb-lg-0 fw-semibold">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Solutions
              </a>
              <ul
                className="dropdown-menu border-0 shadow"
                aria-labelledby="navbarDropdown"
              >
                <li>
                  <Link to="/solutions/siscompliance" className="dropdown-item">
                    SIS Compliance
                  </Link>{" "}
                </li>
                <li>
                  <Link to="/solutions/sislearning" className="dropdown-item">
                    SIS Learning
                  </Link>
                </li>
                <li>
                  <Link
                    to="/solutions/siscertifications"
                    className="dropdown-item"
                  >
                    SIS Certifications
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link to="partners" className="nav-link">
                Partners
              </Link>
            </li>
            <li className="nav-item">
              <Link to="about" className="nav-link">
                About us
              </Link>
            </li>

            <li className="nav-item">
              <Link to="community" className="nav-link">
                Community
              </Link>
            </li>
            <li className="nav-item">
              <Link to="contact" className="nav-link">
                Contact us
              </Link>
            </li>
          </ul>
          <div className="d-flex align-items-center justify-content-between">
            <div className="me-2">
              <button className="border-0 bg-white">
                <i className="bi bi-search fs-4"></i>
              </button>
            </div>
            <div className="me-2">
              <button className="btn btn-primary rounded-pill px-4 ">
                <Link
                  to="/register"
                  style={{ textDecoration: "inherit", color: "inherit" }}
                >
                  <span className="btn-text">Register</span>
                </Link>
              </button>
            </div>
            <div className="me-2">
              <button className="btn btn-outline-primary rounded-pill px-4 ">
                <Link
                  to="login"
                  style={{ textDecoration: "inherit", color: "inherit" }}
                >
                  <span className="btn-text">Login</span>
                </Link>
              </button>
            </div>
            <div>
              <button className="border-0 bg-white">
                <i className="bi bi-person-circle fs-3"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
