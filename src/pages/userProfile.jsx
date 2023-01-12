import React from "react";
import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
function userProfile() {
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
              <NavLink class="menu-link" exact to="/">
                <i className="material-icons md-exit_to_app"></i>
                <span className="text">Logout</span>
              </NavLink>
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
              <div class="input-group">
                <input
                  list="search_terms"
                  type="text"
                  class="form-control"
                  placeholder="Search term"
                ></input>
                <button class="btn btn-light bg" type="button">
                  {" "}
                  <i class="material-icons md-search"></i>
                </button>
              </div>
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
        <footer class="main-footer font-xs">
          <div class="row pb-30 pt-15"></div>
        </footer>{" "}
      </main>
      <script src="assets/js/vendors/jquery-3.6.0.min.js"></script>
      <script src="assets/js/vendors/bootstrap.bundle.min.js"></script>
      <script src="assets/js/vendors/select2.min.js"></script>
      <script src="assets/js/vendors/perfect-scrollbar.js"></script>
      <script src="assets/js/vendors/jquery.fullscreen.min.js"></script>
      <script src="assets/js/main.js" type="text/javascript"></script>
    </div>
  );
}
export default userProfile;
