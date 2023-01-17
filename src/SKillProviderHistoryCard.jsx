import React from "react";
function SkillProviderHistoryCard()
{
    return(
        <div>
            <div class="card-body">
                <div class="table-responsive">
                  <div class="table-responsive">
                    <table class="table align-middle table-nowrap mb-0">
                      <thead class="table-light">
                        <tr>
                          <th scope="col" class="text-center"></th>
                          <th class="align-middle" scope="col">
                            Title
                          </th>
                          <th class="align-middle" scope="col">
                            Category
                          </th>
                          <th class="align-middle" scope="col">
                            Work Type
                          </th>
                          <th class="align-middle" scope="col">
                            Description
                          </th>
                          <th class="align-middle" scope="col">
                            Job Date
                          </th>
                          <th class="align-middle" scope="col">
                            Budget
                          </th>
                          <th class="align-middle" scope="col">
                            Location
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td class="text-center"></td>
                          <td>i want to have labor work</td>
                          <td>Labor</td>
                          <td>Labor</td>
                          <td>abcsefghijkdhhsjhdjshjdshjdhsjdhjshdjshd</td>
                          <td>07 Oct, 2021</td>
                          {/* <td>
                            <span class="badge badge-pill badge-soft-success">
                              Paid
                            </span>
                          </td> */}
                          <td>
                            {/* <i class="material-icons md-payment font-xxl text-muted mr-5"></i>{" "} */}
                            5000
                          </td>
                          <td>Lahore</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

        </div>
    )
}
export default SkillProviderHistoryCard;