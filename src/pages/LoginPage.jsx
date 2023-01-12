import React from "react";
// import { Navigate } from "react-router-dom";
// import { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginPage(setAuthorized) {
  let history = useNavigate();
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  // const handleSubmit = (event) => {
  //   event.preventDefault();

  //   // Get the form values
  //   const form = event.target;
  //   const email = form.elements.email.value;
  //   const password = form.elements.password.value;

  //   // Hard-coded values for email and password
  //   const correctEmail = "shahswar@gmail.com";
  //   const correctPassword = "shahswar";

  //   if (email === correctEmail && password === correctPassword ) {

  //     setIsLoggedIn(true);
  //     setAuthorized(true);
  //   }
  //   if (isLoggedIn) {
  //     return <Navigate from="/" to="/Dashboard" />;
  //   }
  // };
//ihdfsjd
  return (
    <div>
      <header class="main-header style-2 navbar">
        <div class="col-brand">
          <a href="index.html" class="brand-wrap">
            <img
              src="assets/imgs/theme/logo.svg"
              class="logo"
              alt="CRAFT Admin Dashboard"
            ></img>
          </a>
        </div>
      </header>
      <section class="content-main mt-80 mb-80">
        <div class="card mx-auto card-login">
          <div class="card-body">
            <h4 class="card-title mb-4">Sign in</h4>
            <form>
              {/* {error && <p>{error}</p>} */}
              <div class="mb-3">
                <input
                  class="form-control"
                  placeholder="Username or email"
                  type="email"
                  name="email"
                  id="email"
                ></input>
              </div>
              <div class="mb-3">
                <input
                  class="form-control"
                  placeholder="Password"
                  type="password"
                  name="password"
                  id="password"
                ></input>
              </div>
              {/* <div class="mb-3">
                  <a href=" "> class="float-end font-sm text-muted"
                    Forgot password?
                  </a>
                  <label class="form-check">
                    <input
                      type="checkbox"
                      class="form-check-input"
                      checked=""
                    ></input>
                    <span class="form-check-label">Remember</span>
                  </label>
                </div> */}
              <div class="mb-4">
                <button
                  type="submit"
                  class="btn btn-primary w-100"
                  onClick={() => {
                    history("/Dashboard");
                  }}
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
      <footer class="main-footer text-center">
        <p class="font-xs"></p>
        <p class="font-xs mb-30">All rights reserved</p>
      </footer>

      <script src="assets/js/vendors/jquery-3.6.0.min.js"></script>
      <script src="assets/js/vendors/bootstrap.bundle.min.js"></script>
      <script src="assets/js/vendors/jquery.fullscreen.min.js"></script>

      <script src="assets/js/main.js" type="text/javascript"></script>
    </div>
  );
}

export default LoginPage;
