import React from "react";
function UserHistoryHeader() {
  return (
    <table className="table">
      <tbody>
        <tr className="table-header-row">
          <th>Title</th>
          <th>Category</th>
          <th>Work Type</th>
          <th>Description</th>
          <th>Job Date</th>
          <th>Budget</th>
          <th>Location</th>
          <th>Actions</th>
        </tr>
      </tbody>
    </table>
  );
}
export default UserHistoryHeader;
