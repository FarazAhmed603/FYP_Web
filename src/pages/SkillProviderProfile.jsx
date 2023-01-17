import React from "react";
//import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Avatar from "react-avatar";
import SkillProviderHistoryCard from "../SKillProviderHistoryCard";
function SkillProviderProfile() {
  return (
    <div>
      <div className="screen-overlay"></div>
      <aside className="navbar-aside" id="offcanvas_aside">
        <div className="aside-top">
          <a href="index.html" className="brand-wrap">
            <img
              src="assets/imgs/theme/craftlogo.png"
              className="logo"
              alt="CRFT Dashboard"
            ></img>
          </a>
        </div>
        <nav>
          <ul className="menu-aside">
            <li className="menu-item active">
              <NavLink className="menu-link" exact to="/Dashboard">
                <i className="icon material-icons md-home"></i>
                <span className="text">Dashboard</span>
              </NavLink>
            </li>
            <li className="menu-item has-submenu">
              <NavLink className="menu-link" exact to="/Users">
                <i className="icon material-icons md-shopping_bag"></i>
                <span className="text">users</span>
              </NavLink>
            </li>
            <li className="menu-item has-submenu">
              <NavLink className="menu-link" exact to="/SkillProviderList">
                <i className="icon material-icons md-shopping_cart"></i>
                <span className="text">Approve Skill Provider</span>
              </NavLink>
            </li>

            <li className="menu-item">
              <NavLink className="menu-link" exact to="/History">
                {" "}
                <i className="icon material-icons md-comment"></i>
                <span className="text">History</span>
              </NavLink>
            </li>
          </ul>
          <hr />
          <ul className="menu-aside">
            <li className="menu-item has-submenu">
              <NavLink className="menu-link" exact to="/">
                <i className="material-icons md-exit_to_app"></i>
                <span className="text">Logout</span>
              </NavLink>
            </li>
          </ul>

          <br />
          <br />
        </nav>
      </aside>
      <main className="main-wrap">
        <header className="main-header navbar">
          <div className="col-search">
            <form className="searchform">
              <div className="input-group">
                <input
                  list="search_terms"
                  type="text"
                  className="form-control"
                  placeholder="Search term"
                ></input>
                <button className="btn btn-light bg" type="button">
                  {" "}
                  <i className="material-icons md-search"></i>
                </button>
              </div>
              <datalist id="search_terms"></datalist>
            </form>
          </div>
          <div className="col-nav">
            <button
              className="btn btn-icon btn-mobile me-auto"
              data-trigger="#offcanvas_aside"
            >
              <i className="material-icons md-apps"></i>
            </button>
            <ul className="nav">
              <li className="dropdown nav-item">
                <Link
                  className="dropdown-toggle"
                  data-bs-toggle="dropdown"
                  to="#"
                  id="dropdownAccount"
                  aria-expanded="false"
                >
                  <img
                    className="img-xs rounded-circle"
                    src="assets/imgs/people/avatar2.jpg"
                    alt="User"
                  ></img>
                </Link>
                <div
                  className="dropdown-menu dropdown-menu-end"
                  aria-labelledby="dropdownAccount"
                >
                  <div className="dropdown-divider"></div>
                  <Link className="dropdown-item text-danger" to="#">
                    <i className="material-icons md-exit_to_app"></i>Logout
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        </header>
        <section className="content-main">
          <div className="card mb-4">
            {/* <div
              className="card-header bg-primary"
              style={{ height: "150px" }}
            ></div> */}
            <div className="card-body">
              <div className="row">
                <div
                  className="col-xl col-lg flex-grow-0"
                  // style={{flex-basis:'230px'}}
                >
                  <div
                    className="img-thumbnail shadow w-100 bg-white position-relative text-center"
                    // style="height:190px; width:200px; margin-top:-120px"
                  >
                    <img
                      src="assets/imgs/brands/brand-3.jpg"
                      className="center-xy img-fluid"
                      alt="Logo Brand"
                    ></img>
                  </div>
                </div>
                <div>
                  <Avatar
                    googleId="118096717852922241760"
                    size="100"
                    round={true}
                  />
                </div>
                <div className="col-xl col-lg">
                  <h3>Shahswar</h3>
                  <p>Skill Provider</p>
                </div>
                <div className="col-xl-4 text-md-end">
                  <select className="form-select w-auto d-inline-block">
                    <option>Actions</option>
                    <option>Delete User</option>
                    <option>Block User</option>
                    <option>Verify User</option>
                  </select>
                </div>
              </div>
              <hr className="my-4"></hr>
              <div className="row g-4">
                <div className="col-sm-6 col-lg-4 col-xl-3">
                  <h6>Contacts</h6>
                  <p>
                    <br />
                    Email: info@example.com <br />
                    phone: 03000000
                  </p>
                </div>
                <div className="col-sm-6 col-lg-4 col-xl-3">
                  <h6>Detail</h6>
                  <p>
                    <br />
                    Description:
                    <br />
                    Skill:
                  </p>
                </div>
                <div className="col-sm-6 col-xl-4 text-xl-end"></div>
              </div>
            </div>
            <div class="card mb-4">
              <header class="card-header">
                <h4 class="card-title">User History</h4>
              </header>
              <SkillProviderHistoryCard/>
            </div>
          </div>
        </section>
        <footer className="main-footer font-xs">
          <div className="row pb-30 pt-15"></div>
        </footer>
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
export default SkillProviderProfile;
