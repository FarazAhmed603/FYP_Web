import React from "react";
// import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import LatestContractsCard from "../LatestContractCard";
import { useEffect, useState } from "react";
import env from "./env";
import Contractheader from "./contractsHeader";
import Sidebar from "./sidebar";

import { NavLink } from "react-router-dom";
function Dashboard() {
  // if (!authorized) {
  //   return <Navigate to="/" replace />;
  // }
  const http = "http://" + env.IP + ":4000/";

  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(http + "getcontract");
      const data = await response.json();
      setData(data);
    }
    fetchData();
  }, []);
  return (
    <div>
      <div class="screen-overlay"></div>
      <Sidebar />
      <main class="main-wrap">
        <header class="main-header"></header>
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
            <Contractheader />
            <div>
              {data.map((item) => (
                <div key={item.id}>
                  <LatestContractsCard
                    name={item.firstname}
                    id={item._id}
                    email={item.email}
                    createdby={item.createdby}
                    category={item.category}
                    date={item.jobdate}
                    budget={item.budget}
                    location={item.location}
                    user={item.createdby}
                    userid={item.userid}
                    title={item.title}
                    description={item.description}
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
      <script src="assets/js/main.js" type="text/javascript"></script>{" "}
    </div>
  );
}

export default Dashboard;
