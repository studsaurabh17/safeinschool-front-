import React from 'react'

const Testimonial = () => {
  return (
    <div className="home-testimonial py-5 container-fluid">
      <div className="row p-3 p-sm-5 text-light">
        <div className="col-md-7">
          <p>Testimonials</p>
          <h1
            className="text-start heroHeading"
            style={{ fontFamily: "DM Serif Display" }}
          >
            What our customers say
          </h1>
        </div>
        <div className="col-md-5">
          Hear from teachers, trainers, and leaders in the learning space about
          how Moodle empowers them to provide quality online learning
          experiences.
        </div>
      </div>
      <div
        id="carouselExampleIndicators "
        className="carousel slide"
        data-bs-ride="true"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active bg-warning"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
            className="bg-warning"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            className="bg-warning"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="3000">
            <div
              className="d-sm-flex align-items-stretch justify-content-center mx-auto"
              style={{ maxWidth: " 800px" }}
            >
              <div style={{ maxWidth: " 550px" }}>
                <img
                  src="images/03-Azadi-92-2-min-600x764.jpg"
                  alt=""
                  width="100%"
                />
              </div>
              <div className="d-sm-flex justify-content-center align-items-center bg-light p-3">
                <div
                  className="px-3 py-1"
                  style={{ maxWidth: " 550px", textAlign: " justify" }}
                >
                  <h4 className="text-start lh-sm fs-sm-1 Dmserif">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Amet rem pariatur animi perferendis est ut reprehenderit vel
                    ipsa, iure consequuntur. Atque repellat explicabo illum
                    pariatur?
                  </h4>
                  <h5 className="fw-bold lh-1 mt-4">John Doe</h5>
                  <p className="text-secondary">
                    Learning & Development Officer
                  </p>
                </div>
                <div className="p-3">
                  <img
                    src="images/10-Dearborn.jpg"
                    style={{ width: " 50px", height: " 50px" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Testimonial