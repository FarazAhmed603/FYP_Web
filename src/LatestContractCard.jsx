import React from "react";
function LatestContractsCard()
{
    return(
        <div>
            <div class="card-body">
              <div class="table-responsive">
                <div class="table-responsive">
                  <table class="table align-middle table-nowrap mb-0">
                    <thead class="table-light">
                      <tr>
                        <th scope="col" class="text-center">
                          <div class="form-check align-middle">
                            <input
                              class="form-check-input"
                              type="checkbox"
                              id="transactionCheck01"
                            ></input>
                            <label
                              class="form-check-label"
                              for="transactionCheck01"
                            ></label>
                          </div>
                        </th>
                        <th class="align-middle" scope="col">
                          contract ID
                        </th>
                        <th class="align-middle" scope="col">
                          Skill Provider Name
                        </th>
                        <th class="align-middle" scope="col">
                          Date
                        </th>
                        <th class="align-middle" scope="col">
                          Total
                        </th>
                        <th class="align-middle" scope="col">
                          Payment Status
                        </th>
                        <th class="align-middle" scope="col">
                          Payment Method
                        </th>
                        <th class="align-middle" scope="col">
                          View Details
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td class="text-center">
                          <div class="form-check">
                            <input
                              class="form-check-input"
                              type="checkbox"
                              id="transactionCheck02"
                            ></input>
                            <label
                              class="form-check-label"
                              for="transactionCheck02"
                            ></label>
                          </div>
                        </td>
                        <td></td>
                        <td>Shahswar</td>
                        <td>07 Oct, 2021</td>
                        <td>RS 1400</td>
                        <td>
                          <span class="badge badge-pill badge-soft-success">
                            Paid
                          </span>
                        </td>
                        <td>
                          <i class="material-icons md-payment font-xxl text-muted mr-5"></i>{" "}
                          easy pesa
                        </td>
                        {/* <td>
                          <a href="#" class="btn btn-xs">
                            {" "}
                            View details
                          </a>
                        </td> */}
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

        </div>
    )
}
export default LatestContractsCard;