import React from "react";

const Section3 = () => {
  return (
    <div className="p-2">
      <div className="container texts p-5">
        <p className="fw-semibold text-muted lh-1">Training</p>
        <h1 className="text-start DMserif">
          School safety is not a choice. Get started now. 
        </h1>
        <p className="text-muted lh-1">
          Explore foundational elements of school safety.
        </p>
      </div>
      <div className="row justify-content-evenly py-3 mx-0">
        <div className="product col-md-5 h-75 bg-light rounded-4 mb-4 mx-2 p-4">
          <div>
            <p>
              <span className="quality px-3 mb-2 py-2 d-inline-block rounded-pill text-muted me-2">
                Certifications
              </span>
              <span className="quality px-3 py-2 d-inline-block rounded-pill text-muted me-2">
                Cyber Safety
              </span>
              <span className="quality d-inline-block px-3 py-2 rounded-pill text-muted me-2">
                Cyber Preparedness
              </span>
            </p>

            <div
              className="d-flex align-items-center hoverableText p-2"
              style={{ position: "relative", top: "50%" }}
            >
              <div>
                <h1
                  className="text-start"
                  style={{ fontFamily: "DM Serif Display" }}
                >
                  Certification in Cyber Security in School
                </h1>
                <p>
                  Defend against cybersecurity threats to your school by being
                  prepared. 
                </p>
                <i className="bi bi-arrow-right-circle fs-3"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="product col-md-5 h-75 bg-light rounded-4 mb-4 mx-2 p-4">
          <div>
            <p>
              <span className="quality px-3 mb-2 py-2 d-inline-block rounded-pill text-muted me-2">
                Compliance
              </span>
              <span className="quality px-3 py-2 d-inline-block rounded-pill text-muted me-2">
                NCPCR
              </span>
              <span className="quality d-inline-block px-3 py-2 rounded-pill text-muted me-2">
                Physical Safety
              </span>
            </p>

            <div
              className="d-flex align-items-center hoverableText p-2"
              style={{ position: "relative", top: "50%" }}
            >
              <div>
                <h1
                  className="text-start"
                  style={{ fontFamily: " DM Serif Display" }}
                >
                  SafeInSchool Compliance
                </h1>
                <p>
                  Physical safety covers all aspects of infrastructural
                  preparedness and safety against hazards natural or man-made.
                  Is your school complying with mandatory government norms on
                  physical safety?
                </p>
                <i className="bi bi-arrow-right-circle fs-3"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;
