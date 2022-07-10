const Courses = () => {
  return (
    <div className="container p-3" style={{ maxWidth: "900px" }}>
      <h2>My Programs</h2>
      <div className="rounded-3 shadow-sm p-0" style={{ overflow: "hidden" }}>
        <div className="p-4 d-flex justify-content-between bg-light align-items-center">
          <div>
            <h4>Object-oriented javascript</h4>
            <p className="btn btn-light border">course</p>
          </div>
          <button className="btn shadow bg-white px-3">
            <i className="bi bi-arrow-right fs-2"></i>
          </button>
        </div>
        <div className="p-4 bg-secondary bg-opacity-25 ">
          <div className="progress">
            <div
              className="progress-bar progress-bar-striped progress-bar-animated"
              role="progressbar"
              aria-valuenow="75"
              aria-valuemin="0"
              aria-valuemax="100"
              style={{ width: "25%" }}
            ></div>
          </div>
          <p className="fw-semibold">25%</p>
        </div>
      </div>
    </div>
  );
};

export default Courses;
