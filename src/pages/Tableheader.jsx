import React from "react";
function Tableheader() {
  return (
    <table className="table">
      <tr class="table-header-row">
        <th>Users</th>
        <th>Email</th>
        <th>Status</th>
        <th>Registered</th>
        <th className="text-end"> Action </th>
      </tr>
    </table>
  );
}
export default Tableheader;
