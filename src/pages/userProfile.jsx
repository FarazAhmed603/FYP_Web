import React from "react";
// import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Avatar from "react-avatar";
import UserHistoryCard from "./UserHistoryCard";
import { useAlert } from "react-alert";
import { AlertProvider } from "react-alert";
import env from "./env";
import UserHistoryHeader from "./UserHistoryHeader";
import Sidebar from "./sidebar";
function UserProfile(props) {
  const [selectedOption, setSelectedOption] = useState("");
  const location = useLocation();
  const http = env.IP;
  //console.log(location.state);
  const [data, setData] = useState({});
  let isAllowed = true;
  const id = location.state;
  const [filteredData, setFilteredData] = useState([]);

  let history = useNavigate();
  function handleChange(event) {
    setSelectedOption(event.target.value);
    if (event.target.value === "block") {
      userStatusBlock();
    } else if (event.target.value === "delete") {
      userStatusDelete();
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

  const userStatusDelete = () => {
    console.log(id.currentId);

    let info = http + "deleteuser/" + id.currentId;
    // try {
    axios
      .delete(info)
      .then((res) => {
        alert("User Deleted successfully");
        console.log("User deleted sexyfully");

        history("/users");
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
        alert("User Blocked successfully");
        console.log(response);
      })
      .catch((error) => alert(error.response.data.message));
  };
  async function fetchData() {
    const response = await fetch(http + `user/${id.currentId}`);
    const data = await response.json();
    setData(data);
  }
  useEffect(() => {
    fetchData();
  }, [id]);
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(http + `getcontract`);
      const data = await response.json();

      setFilteredData(
        data.filter(
          (item) => item.userid === id.currentId && item.createdby === "client"
        )
      );
    }
    fetchData();
  }, [id.currentId]);
  // console.log(filteredData);

  return (
    <div>
      <div className="screen-overlay"></div>
      <Sidebar />
      <main className="main-wrap">
        <header className="main-header navbar"></header>
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
                  <p>{data.id}</p>
                </div>
                <div className="col-xl-4 text-md-end">
                  <select
                    className="form-select w-auto d-inline-block"
                    value={selectedOption}
                    onChange={handleChange}
                  >
                    <option>Actions</option>
                    <option value="delete">Delete User</option>
                    <option value="block">Block User</option>
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
                    phone: {data.phone}
                    <br />
                    Skill: {data.skill}
                  </p>
                </div>
                <div className="col-sm-6 col-lg-4 col-xl-3">
                  <h6>Detail</h6>
                  <p>
                    <br />
                    Description: {data.description} <br />
                    Location: {data.location} <br />
                    Education: {data.education}
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
              <div>
                {filteredData.map((item) => (
                  <div key={item._id}>
                    <UserHistoryCard
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
export default UserProfile;
