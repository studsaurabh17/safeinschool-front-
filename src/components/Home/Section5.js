const Section5 = () => {
  return (
    <div>
      <div className="container row p-5 align-items-center">
        <div className="col-md-6 p-1 p-sm-5 mb-5">
          <p>Our community</p>
          <h1 className="text-start heroSubHeading DMserif">
            Safe schools are growing in numbers.
          </h1>
          <div className="mx-auto">
            <p className="text-justify text-secondary">
              SafeInSchool is more than just a platform for school safety – it's
              a community of educators, trainers, learners, parents and children
              apart from other stakeholders who are committed to making schools
              in India safer.
            </p>
            <p className="text-justify text-secondary">
              As more and more schools sign-up for our solutions, we are
              creating India’s most comprehensive school safety platform that is
              leading to homogenization of the safety process across all
              stakeholders by making them a part of each process.   
            </p>
            <button className="btn btn-outline-type1 fw-bold rounded-pill px-4 mt-4 py-3">
              Meet The SafeInSchool Community
              <i className="bi bi-arrow-right ms-2 fs-6 pt-1"></i>
            </button>
          </div>
        </div>
        <div className="col-md-6">
          <div className="d-flex flex-wrap">
            <div
              className="item d-flex flex-column mx-auto border rounded-4 p-4 mb-3"
              style={{ maxWidth: "250px" }}
            >
              <img
                src="item1"
                alt=""
                style={{ marginTop: "-50px", marginBottom: "40px" }}
              />
              <div>
                <small>School Management </small>
                <h2 className="text-start DMserif">Compliance Orientation</h2>
                <p>
                  Access topics and resources on how to set up and comply with
                  guidelines.
                </p>
              </div>
            </div>
            <div
              className="item d-flex flex-column mx-auto border rounded-4 p-4 mb-3"
              style={{ maxWidth: "250px" }}
            >
              <img
                src="item1"
                alt=""
                style={{ marginTop: " -50px", marginBottom: "40px" }}
              />
              <div>
                <h2 className="text-start DMserif">Parents for safety</h2>
                <p>
                  Are you a parent who is concerned about school safety? Get
                  involved and see how you can help audit safety at school
                  through our app.
                </p>
              </div>
            </div>
            <div
              className="item d-flex flex-column mx-auto border rounded-4 p-4 mb-3"
              style={{ maxWidth: "250px" }}
            >
              <img
                src="item1"
                alt=""
                style={{ marginTop: "-50px", marginBottom: "40px" }}
              />
              <div>
                <h2 className="text-start DMserif">SafeInSchool Academy</h2>
                <p>
                  Get experts to train your students and staff on how to become
                  a safer school.
                </p>
              </div>
            </div>
            <div
              className="item d-flex flex-column mx-auto border rounded-4 p-4 mb-3"
              style={{ maxWidth: "250px" }}
            >
              <img
                src="item1"
                alt=""
                style={{ marginTop: "-50px", marginBottom: "40px" }}
              />
              <div>
                <h2 className="text-start DMserif">Safety Certifications</h2>
                <p>
                  Get certified in a host of safety topics, access resources,
                  training and much more.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section5