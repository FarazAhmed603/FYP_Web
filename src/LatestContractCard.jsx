import React from "react";
import header from "./pages/contractsHeader";
import env from "./pages/env";
import axios from "axios";
function LatestContractsCard(props) {
  const http = env.IP;
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
            {/* <td>{props.id}</td> */}
            <td>
              <div className="info pl-3">
                <h6 className="mb-0 title">{props.user}</h6>
                <small className="text-muted">{props.userid}</small>
              </div>
            </td>
            <td>{props.category}</td>
            <td>{props.title}</td>
            <td>{props.description}</td>
            <td>{props.date}</td>
            <td>RS {props.budget}</td>
            <td>
              <span className="badge badge-pill badge-soft-success">Paid</span>
            </td>
            <td>
              {/* <i class="material-icons md-payment font-xxl text-muted mr-5"></i>{" "} */}
              {props.location}
            </td>
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
export default LatestContractsCard;
