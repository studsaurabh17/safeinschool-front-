import { Link } from "react-router-dom";

const AddCourse = () => {
  return (
    <div
      className="container p-3 py-5"
      style={{ maxWidth: "900px", minHeight: "100vh" }}
    >
      <div className="d-flex align-items-center justify-content-between">
        <h1 className="DMserif">Add a New Course</h1>
        <Link to="/dashboardteacher/course">
          <button className="btn btn-outline-primary">Show course</button>
        </Link>
      </div>
      <form>
        {/* course info  */}
        <div>
          <h4
            data-bs-toggle="collapse"
            data-bs-target="#General"
            aria-expanded="false"
            aria-controls="collapseExample"
            className="DMserif"
          >
            <i className="bi bi-caret-right-fill me-2"></i> General
          </h4>
          <div className="collapsen p-3" id="General">
            <div className="mb-3 d-flex ">
              <label htmlFor="name">Course Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="course Name"
              />
            </div>
            <div className="mb-3 d-flex">
              <label htmlFor="name">Course Category</label>
              <select
                className="form-select"
                aria-label="Default select example"
              >
                <option selected>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <div className="mb-3 row">
              <div className="col">
                <label htmlFor="name">Course Start Date</label>
                <input
                  type="date"
                  name="courseStartDate"
                  className="form-control"
                />
              </div>
              <div className="col">
                <label htmlFor="name">Course End Date</label>
                <input
                  type="date"
                  name="courseStartDate"
                  className="form-control"
                />
              </div>
            </div>
          </div>
        </div>
        <hr />
        {/* ---- */}
        <div>
          <h4
            data-bs-toggle="collapse"
            data-bs-target="#Description"
            aria-expanded="false"
            aria-controls="collapseExample"
            className="DMserif"
          >
            <i className="bi bi-caret-right-fill me-2"></i> Description
          </h4>
          <div className="collapse p-3" id="Description">
            <div>
              <label htmlFor="description" className="fw-semibold">
                Course summary
              </label>
              <textarea
                className="form-control"
                name="description"
                id=""
                cols="30"
                rows="10"
              ></textarea>
            </div>
            <div className="mt-2">
              <label htmlFor="formFileLg" class="form-label fw-semibold">
                Course Image
              </label>
              <input
                class="form-control form-control-lg"
                id="formFileLg"
                type="file"
              />
            </div>
          </div>
        </div>
        <hr />
        <div>
          <h4
            data-bs-toggle="collapse"
            data-bs-target="#Format"
            aria-expanded="false"
            aria-controls="collapseExample"
            className="DMserif"
          >
            <i className="bi bi-caret-right-fill me-2"></i> Course Format
          </h4>
          <div className="collapse p-3" id="Format">
            <div className="mb-3 d-flex">
              <label htmlFor="name">Course sections</label>
              <select
                className="form-select"
                aria-label="Default select example"
              >
                <option value="1" selected>
                  One
                </option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <div className="mt-2">
              <p htmlFor="formFileLg" class="form-label fw-semibold">
                Heading of Each section
              </p>
              <div className="d-flex align-items-center">
                <label htmlFor="section">section&nbsp;1</label>
                <input class="form-control ms-3" type="text" />
              </div>
              <div className="d-flex align-items-center mt-2">
                <label htmlFor="section">section&nbsp;2</label>
                <input class="form-control ms-3" type="text" />
              </div>
              <div className="d-flex align-items-center mt-3">
                <label htmlFor="section">section&nbsp;3</label>
                <input class="form-control ms-3" type="text" />
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div>
          <h4
            data-bs-toggle="collapse"
            data-bs-target="#SectionUpload"
            aria-expanded="false"
            aria-controls="collapseExample"
            className="DMserif"
          >
            <i className="bi bi-caret-right-fill me-2"></i> Section Upload
          </h4>
          <div className="collapse p-3" id="SectionUpload">
            <div className="mt-2">
              <p htmlFor="formFileLg" class="form-label fw-semibold">
                Content of Each section
              </p>
              {/* section1  */}
              <div className="mb-3">
                <h5 className="fw-semibold bg-light p-3 text-secondary">
                  Section1
                </h5>
                <div className="bg-light p-3 rounded">
                  <div>
                    <p>Upload Video</p>
                    <input
                      type="file"
                      accept=" video/*"
                      id="formFile"
                      className="form-control"
                    />
                  </div>
                  <div className="mt-3">
                    <p>Course Text</p>
                    <textarea
                      name="sec1Content"
                      className="form-control"
                      id=""
                      cols="30"
                      rows="10"
                    ></textarea>
                  </div>
                </div>
              </div>
              {/* section2  */}
              <div className="mb-3">
                <h5 className="fw-semibold bg-light p-3 text-secondary">
                  Section2
                </h5>
                <div className="bg-light p-3 rounded">
                  <div>
                    <p>Upload Video</p>
                    <input
                      type="file"
                      accept=" video/*"
                      id="formFile"
                      className="form-control"
                    />
                  </div>
                  <div className="mt-3">
                    <p>Course Text</p>
                    <textarea
                      name="sec1Content"
                      className="form-control"
                      id=""
                      cols="30"
                      rows="10"
                    ></textarea>
                  </div>
                </div>
              </div>
              {/* section3  */}
              <div className="mb-3">
                <h5 className="fw-semibold bg-light p-3 text-secondary">
                  Section3
                </h5>
                <div className="bg-light p-3 rounded">
                  <div>
                    <p>Upload Video</p>
                    <input
                      type="file"
                      accept=" video/*"
                      id="formFile"
                      className="form-control"
                    />
                  </div>
                  <div className="mt-3">
                    <p>Course Text</p>
                    <textarea
                      name="sec1Content"
                      className="form-control"
                      id=""
                      cols="30"
                      rows="10"
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
        {/* ---- */}
        <button className="btn btn-primary fw-semibold">Create</button>
      </form>
    </div>
  );
};

export default AddCourse;
