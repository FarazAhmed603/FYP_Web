import React from "react";
//import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Avatar from "react-avatar";
import axios from "axios";
import SkillProviderHistoryCard from "../SKillProviderHistoryCard";
import env from "./env";
import UserHistoryHeader from "./UserHistoryHeader";
import Sidebar from "./sidebar";
function SkillProviderProfile(props) {
  const http = "http://" + env.IP + ":4000/";
  let history = useNavigate();
  const location = useLocation();
  console.log(location.state);
  const [data, setData] = useState({});
  const [selectedOption, setSelectedOption] = useState("");

  const id = location.state;
  const Cid = id.currentId;
  const [filteredData, setFilteredData] = useState([]);
  function handleChange(event) {
    setSelectedOption(event.target.value);
    if (event.target.value === "block") {
      userStatusBlock();
    } else if (event.target.value === "delete") {
      userStatusDelete();
    } else if (event.target.value === "verified") {
      userStatusVerify();
    } else if (event.target.value == "unblock") {
      userStatusUnBlock();
    }
  }
  const userStatusUnBlock = () => {
    axios
      .put(http + "userstatus", {
        userstatus: "pending",
        email: data.email,
      })

      .then((response) => {
        //const reader = response.data;
        alert("User unblocked successfully");
        console.log(response);
      })
      .catch((error) => alert(error.response.data.message));
  };
  const userStatusVerify = () => {
    axios
      .put(http + "userstatus", {
        userstatus: "verified",
        email: data.email,
      })

      .then((response) => {
        //const reader = response.data;
        alert("User verified successfully");
        console.log(response);
      })
      .catch((error) => alert(error.response.data.message));
  };
  const userStatusDelete = () => {
    let info = http + "deleteuser/" + Cid;
    // try {
    axios
      .delete(info)
      .then((res) => {
        alert("User Deleted successfully");
        console.log("User deleted sexyfully");

        history("/SkillProviderList");
      })
      .catch((error) => alert(error.response.data.message));
    // } catch (response) {
    //   console.log(response.data.message);
    // }
  };
  const userStatusBlock = () => {
    axios
      .put(http + "userstatus", {
        userstatus: "block",
        email: data.email,
      })

      .then((response) => {
        //const reader = response.data;
        alert("User blocked successfully");
        console.log(response);
      })
      .catch((error) => alert(error.response.data.message));
  };
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(http + `user/${Cid}`);
      const data = await response.json();
      setData(data);
    }
    fetchData();
  }, [Cid]);
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(http + `getcontract`);
      const data = await response.json();

      setFilteredData(
        data.filter(
          (item) =>
            item.userid === id.currentId && item.createdby == "skprovider"
        )
      );
    }
    fetchData();
  }, [Cid]);
  console.log(filteredData);

  return (
    <div>
      <div className="screen-overlay"></div>
      <Sidebar />
      <main className="main-wrap">
        <header className="main-header"></header>
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
                  <h3>{data.firstname}</h3>
                  <p>Skill Provider</p>
                </div>
                <div className="col-xl-4 text-md-end">
                  <select
                    className="form-select w-auto d-inline-block
                  "
                    value={selectedOption}
                    onChange={handleChange}
                  >
                    <option>Actions</option>
                    <option value="delete">Delete User</option>
                    <option value="block">Block User</option>
                    <option value="verified">Verify User</option>
                    <option value="unblock">Unblock User</option>
                  </select>
                </div>
              </div>
              <hr className="my-4"></hr>
              <div className="row g-4">
                <div className="col-sm-6 col-lg-4 col-xl-3">
                  <h6>Contacts</h6>
                  <p>
                    <br />
                    Email: {data.email}
                    <br />
                    phone: {data.phone} <br />
                    Skill: {data.skill}
                  </p>
                </div>
                <div className="col-sm-6 col-lg-4 col-xl-3">
                  <h6>Detail</h6>
                  <p>
                    <br />
                    Description:{data.description}
                    <br />
                    Location: {data.location} <br />
                    Education: {data.education}
                    <br />
                  </p>
                </div>
                <div className="col-sm-6 col-xl-4 text-xl-end"></div>
              </div>
            </div>
            <div className="card mb-4">
              <header className="card-header">
                <h4 className="card-title">User History</h4>
              </header>
              <UserHistoryHeader />

              {filteredData.map((item) => (
                <div key={item._id}>
                  <SkillProviderHistoryCard
                    name={item.firstname}
                    id={item._id}
                    email={item.email}
                    createdby={item.createdby}
                    category={item.category}
                    date={item.jobdate}
                    budget={item.budget}
                    location={item.location}
                    user={item.createdby}
                    description={item.description}
                    title={item.title}
                    worktype={item.worktype}
                  />
                </div>
              ))}
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
