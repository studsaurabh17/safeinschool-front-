import Navbar from "../Navbar";

const CourseOverview = () => {
  return (
    <div>
      <div className="container my-5 mx-auto" style={{ maxWidth: "900px" }}>
        <h1 className="DMserif">Object-Oriented Javascript</h1>
        <div className="progress mt-3">
          <div
            className="progress-bar progress-bar-striped progress-bar-animated mt"
            role="progressbar"
            aria-valuenow="75"
            aria-valuemin="0"
            aria-valuemax="100"
            style={{ width: "15%" }}
          ></div>
        </div>

        {/* Previous Progress section or the start section  */}
        <div className="p-4 bg-light shadow-sm rounded d-flex justify-content-between mt-4 align-items-center">
          <div>
            <small>PICK UP WHERE YOU LEFT OFF / START THE COURSE</small>
            <h4 className="fw-bold mt-2">Objects In Depth</h4>
          </div>
          <button className="btn btn-outline-primary btn-sm px-4 py-2 fw-semibold">
            RESUME <i className="bi bi-arrow-right"></i>
          </button>
        </div>

        {/* Lessons in course  */}
        <div className="mt-5">
          <h5>Lessons</h5>
          <ul className="mt-4">
            {/* Single lesson  */}
            <li>
              <div className="p-4 bg-light shadow-sm rounded d-flex justify-content-between  align-items-start">
                <div style={{ maxWidth: "500px" }}>
                  <h5 className="fw-semibold">Objects In Depth</h5>
                  <small className="lh-1">
                    Functions are one of most important data structures. Learn
                    what a "first-class function" is, learn about scope, dig
                    into closures, and use immediately-invoked function
                    expressions for private state
                  </small>
                </div>
                <small className="ms-3">1 hour remaining</small>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CourseOverview;
