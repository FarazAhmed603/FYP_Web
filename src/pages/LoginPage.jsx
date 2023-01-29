import React from "react";
// import { Navigate } from "react-router-dom";
// import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
// import { Navigate } from "react-router-dom";
import axios from "axios";
import env from "./env";

function LoginPage(setAuthorized) {
  let history = useNavigate();

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const http = "http://" + env.IP + ":4000/";

  // const getEmail = localStorage.getItem("emailData");
  // const getPassword = localStorage.getItem("passwordData");
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (email === "shahswar@gmail.com" && password === "12345") {
  //     localStorage.setItem("isLoggedIn", true);
  //     return history("/Dashboard");
  //   } else {
  //     setError("Incorrect email or password");
  //   }
  // };
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(email);
    console.log(password);

    try {
      const response = await axios.post(http + "login", {
        email: email,
        password: password,
      });
      localStorage.setItem("token", response.data.token);
      return history("/Dashboard");
    } catch (err) {
      console.log(err.response.data.message);
      setError("Incorrect email or password");
    }
  };
  useEffect(() => {
    axios.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${localStorage.getItem("token")}`;
  }, []);
  return (
    <div>
      <section className="content-main mt-80 mb-80">
        <div className="card mx-auto card-login">
          <div className="header">
            <img src="assets\imgs\theme\logo.png" alt="logo" class="logo" />
          </div>
          <div className="card-body">
            <h4 className="card-title mb-4">Sign in</h4>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <input
                  className="form-control"
                  placeholder="Username or email"
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                  required
                ></input>
              </div>
              <div className="mb-3">
                <input
                  className="form-control"
                  placeholder="Password"
                  type="password"
                  name="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
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
                <button type="submit" className="btn btn-primary w-100">
                  Login
                </button>
                {error && <p>{error}</p>}
              </div>
            </form>
          </div>
        </div>
      </section>
      <footer className="main-footer text-center">
        {/* <p className="font-xs"></p>
        <p className="font-xs mb-30">All rights reserved</p> */}
      </footer>

      <script src="assets/js/vendors/jquery-3.6.0.min.js"></script>
      <script src="assets/js/vendors/bootstrap.bundle.min.js"></script>
      <script src="assets/js/vendors/jquery.fullscreen.min.js"></script>

      <script src="assets/js/main.js" type="text/javascript"></script>
    </div>
  );
}

export default LoginPage;
