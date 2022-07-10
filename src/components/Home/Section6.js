import React from "react";

const Section6 = () => {
  return (
    <div className="container">
      <div className="row p-5">
        <div className="col-md-7">
          <p>Our partners</p>
          <h1 className="text-start heroHeading DMserif">
            Who’s using SafeInSchool?
          </h1>
        </div>
        <div className="col-md-5 text-secondary">
          SafeInSchool is already the platform of choice in thousands of
          schools. We have tie-ups with chains of schools across India and are
          already training millions of students, staff and parents through our
          solutions.
        </div>
      </div>
      <div className="d-flex flex-wrap align-items-center justify-content-evenly mt-4">
        <div className="d-flex flex-column align-items-center">
          <img src="{stat1}" alt="" />
          <h1 className="text-start DMserif">316,000,000+</h1>
          <p className="text-secondary">Users World Wide</p>
        </div>
        <div className="d-flex flex-column align-items-center">
          <img src="{stat2}" alt="" />
          <h1 className="text-start DMserif">1.8 Billion+</h1>
          <p className="text-secondary">Course enrolments</p>
        </div>
        <div className="d-flex flex-column align-items-center">
          <img src="{stat3}" alt="" />
          <h1 className="text-start DMserif">41,000,000+</h1>
          <p className="text-secondary">Courses in 42 languages</p>
        </div>
        <div className="d-flex flex-column align-items-center">
          <img src="{stat4}" alt="" />
          <h1 className="text-start DMserif">179,000+</h1>
          <p className="text-secondary">Moodle sites</p>
        </div>
      </div>
    </div>
  );
};

export default Section6;
