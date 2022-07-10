const Section2 = () => {
  return (
    <div className="section2 text-light p-5">
      <div className="w-sm-50">
        <p className="fs-5" style={{ marginBottom: " -3px" }}>
          Latest release
        </p>
        <h1 style={{ fontFamily: "DM Serif Display" }}>
          SafeInSchool 1 is here
        </h1>
        <p style={{ maxWidth: " 450px" }}>
          The beta version of SafeInSchool is finally here! Built for school
          management, students, teachers, non-teaching staff, parents and more.
          Start with these tools to learn more about what our app can do to make
          your school safer than ever.  
        </p>
        <button className="btn text-light border-light btn-outline-type2 fw-bold rounded-pill px-4 mt-4 py-2">
          Explore features <i className="bi bi-arrow-right ms-2 fs-6 pt-1"></i>
        </button>
      </div>
    </div>
  );
};

export default Section2;
