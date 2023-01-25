import React from "react";
import header from "./pages/contractsHeader";
function LatestContractsCard(props) {
  return (
    <div>
      <table className="table">
        <tr className="table-header-row">
          {/* <td>{props.id}</td> */}
          <td>{props.user}</td>
          <td>{props.category}</td>
          <td>{props.title}</td>
          <td>{props.description}</td>
          <td>{props.date}</td>
          <td>RS {props.budget}</td>
          <td>
            <span class="badge badge-pill badge-soft-success">Paid</span>
          </td>
          <td>
            {/* <i class="material-icons md-payment font-xxl text-muted mr-5"></i>{" "} */}
            {props.location}
          </td>
          {/* <td>
                          <a href="#" class="btn btn-xs">
                            {" "}
                            View details
                          </a>
                        </td> */}
        </tr>
      </table>
    </div>
  );
}
export default LatestContractsCard;
