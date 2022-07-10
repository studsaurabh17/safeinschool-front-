import heroImg from "../../images/04-meditate-600x764.jpg";
const Hero = () => {
  return (
    <div className="py-5 my-5">
      <div className="container p-5 row justify-content-center">
        <div className="col-md-7">
          <h1 className="text-start heroHeading DMserif">
            School safety, made easy for everyone
          </h1>
        </div>
        <div className="col-md-4 p-3">
          <div className="mx-auto">
            <p className="text-justify text-secondary">
              SafeInSchool Learning is a one-stop junction for topics, training,
              resources and guidance on aspects of school safety created by
              school-system leaders for the K-12 community. 
            </p>
            <button className="btn btn-outline-type1 fw-bold rounded-pill px-4 mt-4 py-2">
              Get Moodle <i className="bi bi-arrow-right ms-2 fs-6 pt-1"></i>
            </button>
          </div>
        </div>
      </div>
      <div className="heroMain p-5" style={{ background: " #fff8f1" }}>
        <div className="row justify-content-evenly align-items-center">
          <div className="col-md-6">
            <div
              className="rounded-5 p-0 m-0 imageContainer"
              style={{ overflow: "hidden", maxWidth: " 500px" }}
            >
              <img src={heroImg} className="meditateImg" alt="" width="100%" />
            </div>
            <button className="playbtn btn btn-warning rounded-circle px-3 py-1">
              <i className="bi bi-play text-light"></i>
            </button>
          </div>
          <div className="col-md-5">
            <p className="lh-1 text-muted fw-bold">SIS Compliance</p>
            <h1
              className="text-start heroSubHeading lh-1 DMserif"
              style={{ marginTop: " -10px" }}
            >
              Building a deeply embedded safety culture in schools through
              government compliances 
            </h1>
            <p className="text-secondary mt-4">
              At SafeInSchool, we strive to help schools adhere to Government of
              India mandated school safety and security standards through a
              one-of-a-kind technology solution. The solution offers
              location-specific compliance tools which help schools to follow
              school safety guidelines and stay accountable. 
            </p>
            <p className="text-secondary">
              With the power of these tools, the school administration is
              empowered with an easy-to-use interface that not only lets them
              check their safety standards but also provides all the information
              they need. What’s more? The system has engaging audio-video and
              interactive modules for better understanding.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
