import React from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
// import { Navigate } from "react-router-dom";
function SkillProviderList() {
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
        <section class="content-main">
          <div class="content-header">
            <h2 class="content-title">Users list</h2>
          </div>
          <div class="card mb-4">
            <header class="card-header">
              <div class="row gx-3">
                <div class="col-lg-4 col-md-6 me-auto">
                  <input
                    type="text"
                    placeholder="Search..."
                    class="form-control"
                  />
                </div>
                <div class="col-lg-2 col-md-3 col-6">
                  <select class="form-select">
                    <option>Status</option>
                    <option>Active</option>
                    <option>Disabled</option>
                    <option>Show all</option>
                  </select>
                </div>
                <div class="col-lg-2 col-md-3 col-6">
                  <select class="form-select">
                    <option>Show 20</option>
                    <option>Show 30</option>
                    <option>Show 40</option>
                  </select>
                </div>
              </div>
            </header>
            <div class="card-body">
              <div class="table-responsive">
                <table class="table table-hover">
                  <thead>
                    <tr>
                      <th>Users</th>
                      <th>Email</th>
                      <th>Status</th>
                      <th>Registered</th>
                      <th class="text-end"> Action </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td width="40%">
                        <a href="#" class="itemside">
                          <div class="left">
                            <img
                              src="assets/imgs/people/avatar1.jpg"
                              class="img-sm img-avatar"
                              alt="Userpic"
                            ></img>
                          </div>
                          <div class="info pl-3">
                            <h6 class="mb-0 title">Shahswar</h6>
                            <small class="text-muted">User ID: #439</small>
                          </div>
                        </a>
                      </td>
                      <td>Shahswar@gmail.com</td>
                      <td>
                        <span class="badge rounded-pill alert-success">
                          Active
                        </span>
                      </td>
                      <td>08.07.2020</td>
                      <td class="text-end">
                        <Link
                          to="/userProfile"
                          class="btn btn-sm btn-brand rounded font-sm mt-15"
                        >
                          View details
                        </Link>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div class="pagination-area mt-15 mb-50">
            <nav aria-label="Page navigation example">
              <ul class="pagination justify-content-start">
                <li class="page-item active">
                  <a class="page-link" href="#">
                    01
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">
                    02
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">
                    03
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link dot" href="#">
                    ...
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">
                    16
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">
                    <i class="material-icons md-chevron_right"></i>
                  </a>
                </li>
              </ul>
            </nav>
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
      <script src="assets/js/main.js" type="text/javascript"></script>
    </div>
  );
}
export default SkillProviderList;
