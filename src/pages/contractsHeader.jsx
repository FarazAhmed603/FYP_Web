import React from "react";
function Contractheader() {
  return (
    <table className="table">
      <tbody>
        <tr className="table-header-row">
          {/* <th>contract ID</th> */}
          <th>Created By</th>
          <th>Category</th>
          <th>Title</th>
          <th>Description</th>
          <th>Date</th>
          <th>Budget</th>
          <th>Payment Status</th>
          <th>Location</th>
          <th>Action</th>
        </tr>
      </tbody>
    </table>
  );
}
export default Contractheader;
