import React from "react";
function UserHistoryCard(props) {
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
          </tr>
        </tbody>
      </table>
    </div>
  );
}
export default UserHistoryCard;
