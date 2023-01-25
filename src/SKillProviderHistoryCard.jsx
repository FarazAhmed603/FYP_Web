import React from "react";
function SkillProviderHistoryCard(props)
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
                          <td>{props.title}</td>
                          <td>{props.category}</td>
                          <td>Labor</td>
                          <td>{props.description}</td>
                          <td>{props.date}</td>
                          {/* <td>
                            <span class="badge badge-pill badge-soft-success">
                              Paid
                            </span>
                          </td> */}
                          <td>
                            {/* <i class="material-icons md-payment font-xxl text-muted mr-5"></i>{" "} */}
                            {props.budget}
                          </td>
                          <td>{props.location}</td>
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