import React from "react";
// import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import LatestContractsCard from "../LatestContractCard";

import { NavLink } from "react-router-dom";
function Dashboard({ authorized }) {
  let history = useNavigate();
  // if (!authorized) {
  //   return <Navigate to="/" replace />;
  // }

  const handleLogout = () => {
    localStorage.clear();
    return history("/");
  };
  return (
    <div>
      <div class="screen-overlay"></div>
      <aside class="navbar-aside" id="offcanvas_aside">
        <div class="aside-top">
          <a href="index.html" class="brand-wrap">
            <img
              src="assets/imgs/theme/craftlogo.png"
              class="logo"
              alt="CRFT Dashboard"
            ></img>
          </a>
        </div>
        <nav>
          <ul class="menu-aside">
            <li class="menu-item active">
              <NavLink className="menu-link" exact to="/Dashboard">
                <i className="icon material-icons md-home"></i>
                <span class="text">Dashboard</span>
              </NavLink>
            </li>
            <li class="menu-item has-submenu">
              <NavLink className="menu-link" exact to="/Users">
                <i className="icon material-icons md-shopping_bag"></i>
                <span className="text">users</span>
              </NavLink>
            </li>
            <li class="menu-item has-submenu">
              <NavLink className="menu-link" exact to="/SkillProviderList">
                <i className="icon material-icons md-shopping_cart"></i>
                <span className="text">Approve Skill Provider</span>
              </NavLink>
            </li>

            <li class="menu-item">
              <NavLink className="menu-link" exact to="/History">
                {" "}
                <i class="icon material-icons md-comment"></i>
                <span class="text">History</span>
              </NavLink>
            </li>
          </ul>
          <hr />
          <ul class="menu-aside">
            <li class="menu-item has-submenu">
              <button
                class="menu-link"
                onClick={() => {
                  handleLogout();
                }}
              >
                <i className="material-icons md-exit_to_app"></i>

                <span className="text">Logout</span>
              </button>
            </li>
          </ul>

          <br />
          <br />
        </nav>
      </aside>
      <main class="main-wrap">
        <header class="main-header navbar">
          <div class="col-search">
            <form class="searchform">
              <datalist id="search_terms"></datalist>
            </form>
          </div>
          <div class="col-nav">
            <button
              class="btn btn-icon btn-mobile me-auto"
              data-trigger="#offcanvas_aside"
            >
              <i class="material-icons md-apps"></i>
            </button>
            <ul class="nav">
              <li class="dropdown nav-item">
                <Link
                  class="dropdown-toggle"
                  data-bs-toggle="dropdown"
                  to="#"
                  id="dropdownAccount"
                  aria-expanded="false"
                >
                  <img
                    class="img-xs rounded-circle"
                    src="assets/imgs/people/avatar2.jpg"
                    alt="User"
                  ></img>
                </Link>
                <div
                  class="dropdown-menu dropdown-menu-end"
                  aria-labelledby="dropdownAccount"
                >
                  <div class="dropdown-divider"></div>
                  <Link className="dropdown-item text-danger" to="#">
                    <i className="material-icons md-exit_to_app"></i>Logout
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        </header>
        <section class="content-main">
          <div>
            <h2 class="content-title card-title">Dashboard </h2>
          </div>
          <div class="card mb-4">
            <header class="card-header">
              <h4 class="card-title">Latest Contracts</h4>
              <div class="row align-items-center">
                <div class="col-md-3 col-12 me-auto mb-md-0 mb-3"></div>
                <div class="col-md-2 col-6">
                  <input
                    type="date"
                    value="02.05.2021"
                    class="form-control"
                  ></input>
                </div>
                <div class="col-md-2 col-6">
                  <div class="custom_select">
                    <select class="form-select select-nice">
                      <option selected>Status</option>
                      <option>All</option>
                      <option>Paid</option>
                    </select>
                  </div>
                </div>
              </div>
            </header>
            <LatestContractsCard/>
          </div>
        </section>
        <footer class="main-footer font-xs">
          <div class="row pb-30 pt-15"></div>
        </footer>{" "}
      </main>
      <script src="assets/js/vendors/jquery-3.6.0.min.js"></script>
      <script src="assets/js/vendors/bootstrap.bundle.min.js"></script>
      <script src="assets/js/vendors/select2.min.js"></script>
      <script src="assets/js/vendors/perfect-scrollbar.js"></script>
      <script src="assets/js/vendors/jquery.fullscreen.min.js"></script>
      <script src="assets/js/main.js" type="text/javascript"></script>{" "}
    </div>
  );
}

export default Dashboard;
