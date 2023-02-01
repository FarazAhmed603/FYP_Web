import React from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import UsersCard from "./UsersCard";
import { useState, useEffect } from "react";
import axios from "axios";
import Tableheader from "./Tableheader";
import env from "./env";
import Sidebar from "./sidebar";
function Users() {
  const [filteredDataSource, setFilteredDataSource] = useState([]);
  const [masterDataSource, setMasterDataSource] = useState([]);
  const [search, setSearch] = useState("");
  const http = env.IP;
  const [filteredData, setFilteredData] = useState([]);
  const [selectedOption, setSelectedOption] = useState("");

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(http + `users`);
      const data = await response.json();

      setMasterDataSource(
        data.filter((item) => item.email !== "craft.fus@gmail.com")
      );

      setFilteredDataSource(
        data.filter((item) => item.email !== "craft.fus@gmail.com")
      );
    }
    fetchData();
  }, []);
  function handleChange(event) {
    setSelectedOption(event.target.value);
  }
  const filter = filteredDataSource.filter((item) => {
    if (selectedOption === "block") {
      return item.userstatus === selectedOption;
    } else if (selectedOption === "pending") {
      return item.userstatus === selectedOption;
    } else if (selectedOption === "verified") {
      return item.userstatus === selectedOption;
    } else {
      return item;
    }
  });

  // console.log(filteredDataSource);

  const searchFilterFunction = (text) => {
    // Check if searched text is not blank
    if (text) {
      // Inserted text is not blank
      // Filter the masterDataSource
      // Update FilteredDataSource
      const newData = masterDataSource.filter(function (item) {
        const itemData = item.firstname
          ? item.firstname.toUpperCase()
          : "".toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredDataSource(newData);
      setSearch(text);
    } else {
      // Inserted text is blank
      // Update FilteredDataSource with masterDataSource
      setFilteredDataSource(masterDataSource);
      setSearch(text);
    }
  };

  return (
    <div>
      <div className="screen-overlay"></div>
      <Sidebar />
      <main className="main-wrap">
        <header className="main-header navbar"></header>
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
                    onChange={(e) => searchFilterFunction(e.target.value)}
                    value={search}
                  />
                </div>
                <div className="col-lg-2 col-md-3 col-6">
                  <select
                    className="form-select"
                    value={selectedOption}
                    onChange={handleChange}
                  >
                    <option>Status</option>
                    <option value="verified">verified</option>
                    <option value="block">Blocked</option>
                    <option value="pending">pending</option>
                    <option value="all">Show all</option>
                  </select>
                </div>
              </div>
            </header>
            <Tableheader />
            <div>
              {filter.map((item) => (
                <div key={item._id}>
                  <UsersCard
                    name={item.firstname}
                    id={item._id}
                    email={item.email}
                    status={item.userstatus}
                    description={item.description}
                    number={item.phone}
                  />
                  {/* <p>{item.name}</p> */}
                  {/* <p>{item.description}</p> */}
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
export default Users;
