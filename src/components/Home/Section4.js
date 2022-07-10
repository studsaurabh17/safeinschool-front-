import React from "react";

const Section4 = () => {
  return (
    <div className="px-2 px-sm-5 py-5" style={{ background: " #194866" }}>
      <div className="container">
        <div className="text-light" style={{ maxWidth: "650px" }}>
          <p className="fs-5" style={{ marginBottom: " -3px" }}>
            Topics
          </p>
          <h1
            className="heroSubHeading lh-1"
            style={{ fontFamily: "DM Serif Display" }}
          >
            What is the “Whole School Approach” and “Multi-sectoral approach” to
            school safety?
          </h1>
          <p>
            School safety is not just about physical infrastructure but it
            encompasses psychosocial wellbeing, early intervention and advocacy.
          </p>
        </div>
      </div>
      <div className="container d-flex justify-content-evenly flex-wrap mt-5">
        <div
          className="section4Card bg-light rounded-4 mb-4 mx-2 p-4"
          style={{ maxWidth: "350px" }}
        >
          <div>
            <p>
              <span className="quality px-3 py-2 d-inline-block rounded-pill text-muted me-2">
                Trainings
              </span>
              <span className="quality d-inline-block px-3 py-2 rounded-pill text-muted me-2">
                POCSO
              </span>
              <span className="quality d-inline-block px-3 py-2 rounded-pill text-muted me-2">
                Sexual abuse
              </span>
            </p>
            <div
              className="d-flex align-items-center hoverableText p-2"
              style={{ position: "relative", top: " 50%" }}
            >
              <div>
                <p>
                  Evaluate if the existing safeguards against child sexual abuse
                  are sensitive enough to listen to voices of children.
                </p>
                <i className="bi bi-arrow-right-circle fs-3"></i>
              </div>
            </div>
          </div>
        </div>
        <div
          className="section4Card bg-light rounded-4 mb-4 mx-2 p-4"
          style={{ maxWidth: "350px" }}
        >
          <div>
            <p>
              <span className="quality px-3 py-2 d-inline-block rounded-pill text-muted me-2">
                Compliance 
              </span>
              <span className="quality d-inline-block px-3 py-2 rounded-pill text-muted me-2">
                Emotional safety
              </span>
              <span className="quality d-inline-block px-3 py-2 rounded-pill text-muted me-2">
                Anti-bullying committee
              </span>
            </p>
            <div
              className="d-flex align-items-center hoverableText p-2"
              style={{ position: "relative", top: " 50%" }}
            >
              <div>
                <p>
                  See how an anti-bullying committee in school is much more than
                  statutory guidance. 
                </p>
                <i className="bi bi-arrow-right-circle fs-3"></i>
              </div>
            </div>
          </div>
        </div>
        <div
          className="section4Card bg-light rounded-4 mb-4 mx-2 p-4"
          style={{ maxWidth: "350px" }}
        >
          <div>
            <p>
              <span className="quality px-3 py-2 d-inline-block rounded-pill text-muted me-2 mb-2">
                Topics 
              </span>
              <span className="quality d-inline-block px-3 py-2 rounded-pill text-muted me-2">
                Fire safety 
              </span>
              <span className="quality d-inline-block px-3 py-2 rounded-pill text-muted me-2">
                Awareness
              </span>
            </p>
            <div
              className="d-flex align-items-center hoverableText p-2"
              style={{ position: "relative", top: " 50%" }}
            >
              <div>
                <p>A spotlight on Fire Safety: Fire Safety Awareness Team </p>
                <i className="bi bi-arrow-right-circle fs-3"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button className="btn btn-outline-type2 fw-bold rounded-pill px-4 mt-4 py-3">
        <span className="d-inline-block">
          View all topics
          <i className="bi bi-arrow-right ms-2 fs-6 pt-1"></i>
        </span>
      </button>
    </div>
  );
};

export default Section4;
