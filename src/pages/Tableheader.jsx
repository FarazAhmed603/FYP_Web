import React from "react";
function Tableheader() {
  return (
    <table className="table">
      <tbody>
        <tr className="table-header-row">
          <th>Users</th>
          <th>Email</th>
          <th>Status</th>
          <th>phone</th>
          <th className="text-end"> Action </th>
        </tr>
      </tbody>
    </table>
  );
}
export default Tableheader;
