import { Link } from "react-router-dom";
const ShowCourse = () => {
  return (
    <div
      className="container p-3 py-5"
      style={{ maxWidth: "900px", minHeight: "100vh" }}
    >
      <div className="d-flex align-items-center justify-content-between">
        <h1 className="DMserif">My Courses</h1>
        <Link to="/dashboardteacher/add">
          <button className="btn btn-outline-primary">Add course</button>
        </Link>
      </div>
      <div className="rounded-3 shadow-sm p-0" style={{ overflow: "hidden" }}>
        <div className="p-4  py-5 d-flex justify-content-between bg-light align-items-center">
          <div>
            <h4>Object-oriented javascript</h4>
            <p className="btn btn-light border">course</p>
          </div>
          <button className="btn shadow bg-white px-3">
            <i className="bi bi-arrow-right fs-2"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShowCourse;
