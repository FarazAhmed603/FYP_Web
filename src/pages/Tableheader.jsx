import React from "react";
function Tableheader() {
  return (
    <div className="table-responsive">
      <table className="table table-hover">
        <thead className="table-responsive table thead">
          <tr>
            <th className="align-middle" scope="col">
              Users
            </th>
            <th className="align-middle" scope="col">
              Email
            </th>
            <th className="align-middle" scope="col">
              Status
            </th>
            <th className="align-middle" scope="col">
              Registered
            </th>
            <th className="text-end"> Action </th>
          </tr>
        </thead>
      </table>
    </div>
  );
}
export default Tableheader;
