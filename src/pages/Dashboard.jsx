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
  const http = env.IP;
  console.log(http);
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
      <div className="screen-overlay"></div>
      <Sidebar />
      <main className="main-wrap">
        <header className="main-header"></header>
        <section className="content-main">
          <div>
            <h2 className="content-title card-title">Dashboard </h2>
          </div>
          <div className="card mb-4">
            <header className="card-header">
              <h4 className="card-title">All Contracts History</h4>
              <div className="row align-items-center">
                <div className="col-md-3 col-12 me-auto mb-md-0 mb-3"></div>
                {/* <div className="col-md-2 col-6">
                  <input
                    type="date"
                    value="02.05.2021"
                    className="form-control"
                  ></input>
                </div> */}
                <div className="col-md-2 col-6">
                  <div className="custom_select">
                    <select className="form-select select-nice">
                      <option>Status</option>
                      <option value="all">All</option>
                      <option value="paid">Paid</option>
                    </select>
                  </div>
                </div>
              </div>
            </header>
            <Contractheader />
            <div>
              {data.map((item) => (
                <div key={item._id}>
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
