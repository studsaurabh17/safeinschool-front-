import React, { useState } from "react";
import { Link } from "react-router-dom";
import { login, authenticate, isAutheticated } from "../auth/auth";

const Login = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
    error: "",
    loading: false,
    didRedirect: false,
  });

  const { email, password, error, loading, didRedirect } = values;
  const { user } = isAutheticated();

  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: false, loading: true });
    login({ email, password })
      .then((data) => {
        if (data.error) {
          setValues({ ...values, error: data.error, loading: false });
        } else {
          authenticate(data, () => {
            setValues({
              ...values,
              didRedirect: true,
            });
          });
        }
      })
      .catch(console.log("signin request failed"));
  };

  const performRedirect = () => {
    //TODO: do a redirect here
    if (didRedirect) {
      if (user && user.role === "teacher") {
        return <Redirect to="/teacher" />;
      } else {
        return <Redirect to="/student" />;
      }
    }
  };

  if (isAutheticated()) {
    return <Redirect to="/" />;
  }

  const loadingMessage = () => {
    return (
      loading && (
        <div className="alert alert-info">
          <h2>Loading...</h2>
        </div>
      )
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

  const signInForm = () => {
    return (
      <div className="signin mt-5">
        <div className="container bg-white">
          <div className="row align-items-center justify-content-center py-5">
            {/* left column  */}
            <div className="col-md-6 col-sm-12 h-100 p-3 p-sm-5 order-1 order-sm-2">
              <img
                src="https://img.freepik.com/free-vector/learning-concept-illustration_114360-3896.jpg?t=st=1657105458~exp=1657106058~hmac=4342f534927b73c5d78832ef3243d953ca124793fbbdc0adf09b5d9158e1231e&w=740"
                alt=""
                width="100%"
              />
            </div>
            {/* right coulmn  */}
            <div className="col-md-6 col-sm-12 h-100 vh-100 order-2 order-sm-1">
              <div className="d-flex flex-column align-items-center justify-content-between p-3 p-sm-5 h-75">
                <div className="headinfo d-flex flex-column align-items-center">
                  {/* <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhnDz08lUWsDll_7m1NYkHV_U2gNmfvTWCGg&usqp=CAU"
                  alt=""
                  width="150px"
                /> */}
                  <h3 className="text-center fw-bold my-2">SafeInSchool</h3>
                  <p className="text-center" style={{ maxWidth: "450px" }}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Laboriosam sunt voluptates atque!
                  </p>
                </div>
                <form className="w-100 p-3" style={{ maxWidth: " 450px" }}>
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

                  <div className="form-floating mb-4">
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
                  <div className="mb-5 d-flex justify-content-between">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="exampleCheck1"
                      />
                      <label
                        className="form-check-label fs-6 fw-semibold text-secondary"
                        htmlFor="exampleCheck1"
                      >
                        remember me
                      </label>
                    </div>
                    <small>
                      <a href="#" className="fw-semibold text-sm">
                        Forgot password?
                      </a>
                    </small>
                  </div>
                  <button
                    type="submit"
                    className="btn btn-primary w-100 mb-2 py-3 text-white fw-bold rounded-3 shadow-sm"
                    onClick={onSubmit}
                  >
                    Login
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
                    Sign In with Google
                  </button>
                </form>
                <div className="bottom_text">
                  <p>
                    Don't have an account yet ?
                    <a href="#" className="text-link">
                      Sign Up
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

  return (
    <div>
      {loadingMessage()}
      {errorMessage()}
      {signInForm()}
      {performRedirect()}
    </div>
  );
};

export default Login;
