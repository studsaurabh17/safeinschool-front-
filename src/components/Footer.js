const Footer = () => {
  return (
    <div>
      <div className="footerUp text-light" style={{ background: "#194866" }}>
        <div className="container row p-5">
          <div className="col-md-3">
            <img src="{footerLogo}" alt="" />
            <img className="mt-4" src="{bcorpImg}" alt="" width="{150}" />
          </div>
          <div className="col-md-9">
            <section className="">
              <div className="container text-center text-md-start">
                {/*  Grid row */}
                <div className="row">
                  {/*  Grid column */}

                  <div className="col-6 col-sm-3 mb-4">
                    {/*  Links */}
                    <h6 className="text-uppercase fw-bold mb-4">
                      All Solutions
                    </h6>
                    <p>
                      <a href="#!" className="text-reset">
                        Compliance
                      </a>
                    </p>
                    <p>
                      <a href="#!" className="text-reset">
                        Learning
                      </a>
                    </p>
                    <p>
                      <a href="#!" className="text-reset">
                        Certifications
                      </a>
                    </p>
                    <p>
                      <a href="#!" className="text-reset">
                        Resources
                      </a>
                    </p>
                  </div>
                  {/*  Grid column */}
                  {/*  Grid column */}
                  <div className="col-6 col-sm-3 mb-4">
                    {/*  Links */}
                    <h6 className="text-uppercase fw-bold mb-4">Topics</h6>
                    <p>
                      <a href="#!" className="text-reset">
                        Careers
                      </a>
                    </p>
                    <p>
                      <a href="#!" className="text-reset">
                        Higher Education
                      </a>
                    </p>
                    <p>
                      <a href="#!" className="text-reset">
                        Our Partners
                      </a>
                    </p>
                    <p>
                      <a href="#!" className="text-reset">
                        Community
                      </a>
                    </p>
                  </div>
                  {/*  Grid column */}
                  {/*  Grid column */}
                  <div className="col-6 col-sm-3 mb-4">
                    {/*  Links */}
                    <h6 className="text-uppercase fw-bold mb-4">About Us</h6>
                    <p>
                      <a href="#!" className="text-reset">
                        About Us
                      </a>
                    </p>
                    <p>
                      <a href="#!" className="text-reset">
                        News
                      </a>
                    </p>
                  </div>
                  {/*  Grid column */}
                  {/*  Grid column */}
                  <div className="col-6 col-sm-3 mb-md-0 mb-4">
                    {/*  Links */}
                    <h6 className="mb-4">
                      Empowering schools to improve safety.
                    </h6>
                    <button className="btn text-light btn-outline-info rounded-pill px-4 py-2">
                      Get now
                    </button>
                  </div>
                  {/*  Grid column */}
                </div>
                {/*  Grid row */}
              </div>
            </section>
          </div>
        </div>
      </div>
      <div className="footerDown container-fluid row bg-dark text-light align-items-center p-2 m-0">
        <div className="col-md-7">
          Copyright &copy; 2022 SafeInSchool All Rights reserved
        </div>
        <div className="col-md-5">
          <section className="text-light">
            {/*  Facebook */}
            <a
              className="btn btn-floating mx-1 text-light rounded-circle"
              style={{ backgroundColor: "#3b5998" }}
              href="#!"
              role="button"
            >
              <i className="bi bi-facebook fs-4"></i>
            </a>

            {/*  Twitter */}
            <a
              className="btn btn-floating mx-1 text-light rounded-circle"
              style={{ backgroundColor: "#55acee" }}
              href="#!"
              role="button"
            >
              <i className="bi bi-twitter fs-4"></i>
            </a>

            {/*  Google */}
            <a
              className="btn btn-floating mx-1 text-light rounded-circle"
              style={{ backgroundColor: " #dd4b39" }}
              href="#!"
              role="button"
            >
              <i className="bi bi-google fs-4"></i>
            </a>

            {/*  Instagram */}
            <a
              className="btn btn-floating mx-1 text-light rounded-circle"
              style={{ backgroundColor: "red" }}
              href="#!"
              role="button"
            >
              <i className="bi bi-youtube fs-4"></i>
            </a>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Footer;
