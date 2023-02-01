import React from "react";
import Sidebar from "./sidebar";
import env from "./env";
import { useState, useEffect } from "react";
import Tableheader from "./Tableheader";
import SkillProviderCard from "./SkillProviderCard";
function History() {
  const http = env.IP;

  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(http + `users`);
      const data = await response.json();

      setFilteredData(
        data.filter(
          (item) =>
            Array.isArray(item.skill) &&
            item.skill.length > 0 &&
            item.userstatus === "verified"
        )
      );
    }
    fetchData();
  }, []);

  console.log(filteredData);
  return (
    <div>
      <div className="screen-overlay"></div>
      <Sidebar />
      <main className="main-wrap">
        <header className="main-header navbar"></header>
        <section className="content-main">
          <div className="content-header">
            <h2 className="content-title">Skill Provider list</h2>
          </div>
          <div className="card mb-4">
            <header className="card-header">
              <div className="row gx-3">
                {/* <div className="col-lg-4 col-md-6 me-auto">
                  <input
                    type="text"
                    placeholder="Search..."
                    className="form-control"
                  />
                </div> */}
                {/* <div className="col-lg-2 col-md-3 col-6">
                  <select className="form-select">
                    <option>Status</option>
                    <option>Active</option>
                    <option>Disabled</option>
                    <option>Show all</option>
                  </select>
                </div> */}
              </div>
            </header>
            <Tableheader />
            <div>
              {filteredData.map((item) => (
                <div key={item._id}>
                  <SkillProviderCard
                    name={item.firstname}
                    id={item._id}
                    email={item.email}
                    createdby={item.createdby}
                    category={item.category}
                    date={item.jobdate}
                    skill={item.skill}
                    status={item.userstatus}
                    number={item.phone}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
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
export default History;
