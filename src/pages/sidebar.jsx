import React from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { IoMdOptions } from "react-icons/io";

function Sidebar() {
  let history = useNavigate();
  const location = useLocation();
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      history("/");
    }
  }, [history, location]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    history("/");
  };

  return (
    <div>
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
            <li className="menu-item ">
              <NavLink className="menu-link" exact="true" to="/Dashboard">
                <i className="icon material-icons md-home"></i>
                <span className="text">Dashboard</span>
              </NavLink>
            </li>
            <li className="menu-item ">
              <NavLink className="menu-link" exact="true" to="/Users">
                <i className="icon material-icons md-account_circle"></i>
                <span className="text">users</span>
              </NavLink>
            </li>
            <li className="menu-item">
              <NavLink className="menu-link" exact="true" to="/History">
                <i className="icon material-icons md-account_circle"></i>
                <span className="text">Skill Providers</span>
              </NavLink>
            </li>
            <li className="menu-item ">
              <NavLink
                className="menu-link"
                exact="true"
                to="/SkillProviderList"
              >
                <i className="icon material-icons md-check_box"></i>
                <span className="text">Verify Skill Provider</span>
              </NavLink>
            </li>
          </ul>
          <hr />
          <ul className="menu-aside">
            <li onClick={handleLogout} className="menu-item">
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
    </div>
  );
}
export default Sidebar;
