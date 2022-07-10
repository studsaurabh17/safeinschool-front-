import { useState } from "react";
import { Link } from "react-router-dom";
const Sidebar = () => {
  const [sidebartoggle, setSidebartoggle] = useState(false);
  const toggleHandler = () => {
    setSidebartoggle(!sidebartoggle);
  };
  if (sidebartoggle) {
    return (
      <div
        style={{
          position: "absolute",
          left: "0",
          width: "250px",
          height: "100vh",
        }}
      >
        <div className="bg-primary bg-opacity-25 d-flex justify-content-between p-2">
          <h4 className="fw-semibold">Concepts</h4>
          <button className="btn btn-outline-primary" onClick={toggleHandler}>
            close
          </button>
        </div>
        <div>
          <ol className="d-flex flex-column  justify-content-between lh-lg ">
            <li>
              <Link
                to="/home"
                style={{ textDecoration: "inherit", color: "inherit" }}
              >
                Introduction
              </Link>
            </li>
            <li>
              <Link
                to="/home"
                style={{ textDecoration: "inherit", color: "inherit" }}
              >
                Create and Modify properties
              </Link>
            </li>
            <li>
              <Link
                to="/home"
                style={{ textDecoration: "inherit", color: "inherit" }}
              >
                Invoking Objects methods
              </Link>
            </li>
          </ol>
        </div>
      </div>
    );
  } else {
    return (
      <div
        style={{
          position: "absolute",
          left: "0",
          width: "250px",
        }}
      >
        <button
          onClick={() => setSidebartoggle(true)}
          className="btn btn-warning m-3"
        >
          show
        </button>
      </div>
    );
  }
};

export default Sidebar;
