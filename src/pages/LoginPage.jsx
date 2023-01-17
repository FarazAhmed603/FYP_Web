import React from "react";
// import { Navigate } from "react-router-dom";
// import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
// import { Navigate } from "react-router-dom";

function LoginPage(setAuthorized) {
  let history = useNavigate();
  const [error, setError] = useState("");

  const email = useRef();
  const password = useRef();
  // const getEmail = localStorage.getItem("emailData");
  // const getPassword = localStorage.getItem("passwordData");
  const handleSubmit = () => {
    if (
      email.current.value === "shahswar@gmail.com" &&
      password.current.value === "12345"
    ) {
      localStorage.setItem("emailData", "shahswar@gmail.com");
      localStorage.setItem("passwordData", "12345");
      return history("/Dashboard");
    } else if (
      email.current.value !== "shahswar@gmail.com" &&
      !password.current.value !== "12345"
    ) {
      setError("Incorrect password. Please try again.");
      setTimeout(() => {
        setError('');
      }, 50000);
      return history("/");
    }
  };
  return (
    <div>
      <header className="main-header style-2 navbar">
        <div className="col-brand">
          <a href="index.html" className="brand-wrap">
            <img
              src="assets/imgs/theme/logo.svg"
              className="logo"
              alt="CRAFT Admin Dashboard"
            ></img>
          </a>
        </div>
      </header>
      <section className="content-main mt-80 mb-80">
        <div className="card mx-auto card-login">
          <div className="card-body">
            <h4 className="card-title mb-4">Sign in</h4>
            <form onSubmit={handleSubmit}>
              {error && <p>{error}</p>}
              <div className="mb-3">
                <input
                  className="form-control"
                  placeholder="Username or email"
                  type="email"
                  name="email"
                  id="email"
                  ref={email}
                ></input>
              </div>
              <div className="mb-3">
                <input
                  className="form-control"
                  placeholder="Password"
                  type="password"
                  name="password"
                  id="password"
                  ref={password}
                ></input>
              </div>
              {/* <div className="mb-3">
                  <a href=" "> className="float-end font-sm text-muted"
                    Forgot password?
                  </a>
                  <label className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      checked=""
                    ></input>
                    <span className="form-check-label">Remember</span>
                  </label>
                </div> */}
              <div className="mb-4">
                <button
                  type="submit"
                  className="btn btn-primary w-100"
                  // onClick={() => {
                  //   history("/Dashboard");
                  // }}
                >
                  Login
                </button>
                {error && <p style={{ color: "red" }}>{error}</p>}
              </div>
            </form>
          </div>
        </div>
      </section>
      <footer className="main-footer text-center">
        <p className="font-xs"></p>
        <p className="font-xs mb-30">All rights reserved</p>
      </footer>

      <script src="assets/js/vendors/jquery-3.6.0.min.js"></script>
      <script src="assets/js/vendors/bootstrap.bundle.min.js"></script>
      <script src="assets/js/vendors/jquery.fullscreen.min.js"></script>

      <script src="assets/js/main.js" type="text/javascript"></script>
    </div>
  );
}

export default LoginPage;
