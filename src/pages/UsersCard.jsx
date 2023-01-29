import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
function UserCard(props) {
  let history = useNavigate();
  const [currentId] = useState(props.id);

  function handleClick() {
    if (currentId) {
      history("/UserProfile", { state: { currentId: currentId } });
    } else {
      console.log("No user selected");
    }
  }

  return (
    <div>
      <table className="table">
        <tbody>
          <tr className="table-header-row">
            <td width="20%">
              <div className="left">
                <img
                  src="assets/imgs/people/avatar1.jpg"
                  className="img-sm img-avatar"
                  alt="Userpic"
                ></img>
              </div>
              <div className="info pl-3">
                <h6 className="mb-0 title">{props.name}</h6>
                <small className="text-muted">{props.id}</small>
              </div>
            </td>
            <td>{props.email}</td>
            <td>
              <span className="badge rounded-pill alert-success">
                {props.status}
              </span>
            </td>
            <td>08.07.2020</td>
            <td className="text-end">
              <button
                className="btn btn-sm btn-users rounded font-sm mt-15"
                onClick={() => {
                  handleClick();
                }}
              >
                View details
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
export default UserCard;
