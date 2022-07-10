import React, { useState } from "react";
import { Link } from "react-router-dom";
import { register } from "../auth/auth";

const Register = () => {
  const [value, values] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    // coursecode:""
  });

  const { firstname, lastname, email, password } = values;

  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: false });
    register({ firstname, lastname, email, password })
      .then((data) => {
        if (data.error) {
          setValues({ ...values, error: data.error, success: false });
        } else {
          setValues({
            ...values,
            fullName: "",
            contactNo: "",
            password: "",
            error: "",
            success: true,
          });
        }
      })
      .catch(console.log("Error in registertion"));
  };

  const registertionForm = () => {
    return (
      <div className="signup mt-5">
        <div className="container bg-white">
          <div className="row align-items-center justify-content-center py-5">
            <div className="col-md-6 col-sm-12 h-100 px-3">
              <img
                src="https://img.freepik.com/free-vector/happy-sporty-readers-among-books_74855-6518.jpg?t=st=1657105458~exp=1657106058~hmac=7957ffb5a4dfedb5d2c481bdc8f3d706654321c92f14b0b19f9311e002ff5607&w=740"
                alt=""
                width="100%"
              />
            </div>
            <div className="col-md-6 col-sm-12 h-100">
              <div className="d-flex flex-column align-items-center p-3 p-sm-5">
                <div className="headinfo d-flex flex-column align-items-center">
                  <h3 className="text-center fw-bold my-2">SafeInSchool</h3>
                  <p className="text-center fs-2 fw-bold">
                    <span className="border-bottom border-5 border-warning">
                      Create{" "}
                    </span>
                    an Account
                  </p>
                </div>
                <form className="w-100 p-3" style={{ maxWidth: "450px" }}>
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control bg-light border-0 shadow-sm"
                      id="floatingInput"
                      placeholder="name@example.com"
                    />
                    <label
                      htmlFor="floatingInput"
                      onChange={handleChange(fullName)}
                    >
                      Full Name
                    </label>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      type="tel"
                      className="form-control bg-light border-0 shadow-sm"
                      id="floatingInput"
                      placeholder="name@example.com"
                    />
                    <label
                      htmlFor="floatingInput"
                      onChange={handleChange(contactNo)}
                    >
                      Contact No.
                    </label>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      type="email"
                      className="form-control bg-light border-0 shadow-sm"
                      id="floatingInput"
                      placeholder="name@example.com"
                    />
                    <label
                      htmlFor="floatingInput"
                      onChange={handleChange(email)}
                    >
                      Email address
                    </label>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      type="password"
                      className="form-control bg-light border-0 shadow-sm"
                      id="floatingPassword"
                      placeholder="Password"
                    />
                    <label
                      htmlFor="floatingPassword"
                      onChange={handleChange(password)}
                    >
                      Password
                    </label>
                  </div>
                  <div className="mb-3 d-flex justify-content-end">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="exampleCheck1"
                      />
                      <small
                        className="form-check-label fw-semibold text-secondary"
                        htmlFor="exampleCheck1"
                      >
                        Show password
                      </small>
                    </div>
                  </div>
                  <div className="form-floating mb-5">
                    <select
                      className="form-select border-0 shadow-sm bg-light"
                      id="floatingSelectGrid"
                    >
                      <option value="student" className="">
                        Student
                      </option>
                      <option value="student" className="">
                        Teacher
                      </option>
                      <option value="institution" className="">
                        institution
                      </option>
                    </select>
                    <label htmlFor="floatingSelectGrid">Select your role</label>
                  </div>
                  <button
                    type="submit"
                    className="btn btn-primary w-100 mb-2 py-3 text-white fw-bold rounded-3 shadow-sm"
                    onClick={onSubmit}
                  >
                    Register
                  </button>
                  <button
                    type="submit"
                    className="btn w-100 py-3 fw-semibold text-secondary bg-white rounded-3 shadow-sm border-0"
                    style={{ backgroundColor: "royalblue" }}
                  >
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR43Wmhdy1tqgJABRfNQ-qtn-eKtqCSzZQ9Og&usqp=CAU"
                      alt=""
                      width="30px"
                      className="me-2"
                    />
                    Sign Up with Google
                  </button>
                </form>
                <div className="bottom_text">
                  <p>
                    Already have an account ?
                    <a href="#" className="text-link">
                      Sign In
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const successMessage = () => {
    return (
      <div className="row">
        <div className="col-md-6 offset-sm-3 text-left">
          <div
            className="alert alert-success"
            style={{ display: success ? "" : "none" }}
          >
            New account was created successfully.
            <Link to="/signin">Login Here</Link>
          </div>
        </div>
      </div>
    );
  };

  const errorMessage = () => {
    return (
      <div className="row">
        <div className="col-md-6 offset-sm-3 text-left">
          <div
            className="alert alert-danger"
            style={{ display: error ? "" : "none" }}
          >
            {error}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      {successMessage()}
      {errorMessage()}
      {registertionForm()}
    </div>
  );
};

export default Register;
