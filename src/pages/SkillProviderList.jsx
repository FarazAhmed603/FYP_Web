import React from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// import { Navigate } from "react-router-dom";
function SkillProviderList() {
  let history = useNavigate();
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
              <NavLink className="menu-link" exact="true" to="/Dashboard">
                <i className="icon material-icons md-home"></i>
                <span className="text">Dashboard</span>
              </NavLink>
            </li>
            <li className="menu-item has-submenu">
              <NavLink className="menu-link" exact="true" to="/Users">
                <i className="icon material-icons md-shopping_bag"></i>
                <span className="text">users</span>
              </NavLink>
            </li>
            <li className="menu-item has-submenu">
              <NavLink
                className="menu-link"
                exact="true"
                to="/SkillProviderList"
              >
                <i className="icon material-icons md-shopping_cart"></i>
                <span className="text">Approve Skill Provider</span>
              </NavLink>
            </li>

            <li className="menu-item">
              <NavLink className="menu-link" exact="true" to="/History">
                <i className="icon material-icons md-comment"></i>
                <span className="text">History</span>
              </NavLink>
            </li>
          </ul>
          <hr />
          <ul className="menu-aside">
            <li className="menu-item has-submenu">
              <NavLink className="menu-link" exact="true" to="/">
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
          <div className="content-header">
            <h2 className="content-title">Users list</h2>
          </div>
          <div className="card mb-4">
            <header className="card-header">
              <div className="row gx-3">
                <div className="col-lg-4 col-md-6 me-auto">
                  <input
                    type="text"
                    placeholder="Search..."
                    className="form-control"
                  />
                </div>
                <div className="col-lg-2 col-md-3 col-6">
                  <select className="form-select">
                    <option>Status</option>
                    <option>Active</option>
                    <option>Disabled</option>
                    <option>Show all</option>
                  </select>
                </div>
                <div className="col-lg-2 col-md-3 col-6">
                  <select className="form-select">
                    <option>Show 20</option>
                    <option>Show 30</option>
                    <option>Show 40</option>
                  </select>
                </div>
              </div>
            </header>
            <div className="card-body">
              <div className="table-responsive">
                <table className="table table-hover">
                  <thead>
                    <tr>
                      <th>Users</th>
                      <th>Email</th>
                      <th>Status</th>
                      <th>Registered</th>
                      <th className="text-end"> Action </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td width="40%">
                        <div className="left">
                          <img
                            src="assets/imgs/people/avatar1.jpg"
                            className="img-sm img-avatar"
                            alt="Userpic"
                          ></img>
                        </div>
                        <div className="info pl-3">
                          <h6 className="mb-0 title">Shahswar</h6>
                          <small className="text-muted">User ID: #439</small>
                        </div>
                      </td>
                      <td>Shahswar@gmail.com</td>
                      <td>
                        <span className="badge rounded-pill alert-success">
                          Active
                        </span>
                      </td>
                      <td>08.07.2020</td>
                      <td className="text-end">
                        <button
                          className="btn btn-sm btn-brand rounded font-sm mt-15"
                          onClick={() => {
                            history("/SkillProviderProfile");
                          }}
                        >
                          View details
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
        <footer className="main-footer font-xs">
          <div className="row pb-30 pt-15"></div>
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
