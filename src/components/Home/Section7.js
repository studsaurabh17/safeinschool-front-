import React from "react";

const Section7 = () => {
  return (
    <div className="container row justify-content-center align-items-stretch p-5">
      <div
        className="section7Card1 col text-light p-5 rounded-4 me-sm-4 mb-4"
        style={{ maxWidth: " 450px" }}
      >
        <h1 className="text-start" style={{ fontFamily: "DM Serif Display" }}>
          Ready to go?
        </h1>
        <div className="mx-auto">
          <p className="text-justify">
            Register through easy steps on this website and choose from a host
            of solutions.  
          </p>
          <button className="btn btn-outline-warning border-light text-light fw-bold rounded-pill px-4 mt-4 py-2">
            Get started
          </button>
        </div>
      </div>
      <div
        className="section7Card2 col p-5 rounded-4 mb-4"
        style={{ maxWidth: " 450px" }}
      >
        <h1 className="text-start DMserif">Need advice?</h1>
        <div className="mx-auto">
          <p className="text-justify">
            Have any questions on how SafeInSchool works? Not sure which
            solution is right for you? Call our helpline number and we will be
            happy to answer all your questions.
          </p>
          <button className="btn btn-outline-primary border-dark text-dark fw-bold rounded-pill px-4 mt-4 py-2">
            Call now: +91 XXXXXXXXX
          </button>
          <p className="fst-italic">(Working hours - 10am - 5pm, Mon-Fri)</p>
        </div>
      </div>
    </div>
  );
};

export default Section7;
