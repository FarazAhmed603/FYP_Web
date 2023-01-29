import React from "react";
import axios from "axios";
import env from "./pages/env";
function SkillProviderHistoryCard(props) {
  const http = "http://" + env.IP + ":4000/";
  const handleClick = (event, props) => {
    console.log(props);
    const contractID = props;
    axios
      .delete(http + `deletecontract/${contractID}`)
      .then((response) => {
        alert("Contract Deleted successfully");

        console.log(response.data);
      })
      .catch((error) => {
        alert("Error Deleting Contract");
        console.error(error);
      });
  };
  return (
    <div>
      <table className="table">
        <tbody>
          <tr className="table-header-row">
            <td>{props.title}</td>
            <td>{props.category}</td>
            <td>{props.worktype}</td>
            <td>{props.description}</td>
            <td>{props.date}</td>
            {/* <td>
                            <span className="badge badge-pill badge-soft-success">
                              Paid
                            </span>
                          </td> */}
            <td>
              {/* <i className="material-icons md-payment font-xxl text-muted mr-5"></i>{" "} */}
              {props.budget}
            </td>
            <td>{props.location}</td>
            <td className="text-end">
              <button
                className="btn btn-sm btn-users rounded font-sm mt-15"
                onClick={(event) => handleClick(event, props.id)}
              >
                Delete contract
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
export default SkillProviderHistoryCard;
