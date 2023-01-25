import React from "react";
import { useNavigate } from "react-router-dom";
import {useState} from "react";
function SkillProviderCard(props)
{
    let history = useNavigate();
    const [currentId] = useState(props.id);
  
  
  function handleClick() {
    if (currentId) {
      history('/SkillProviderProfile', { state: { currentId: currentId } });
      console.log(currentId);
        
      
    } else {
      console.log("No user selected");
    }
  }
    return(
        <div>
            <div className="card-body">
              <div className="table-responsive">
                <table className="table table-hover">
                  <thead>
                    <tr>
                      <th>Users</th>
                      <th>Email</th>
                      <th>Status</th>
                      <th>Skill</th>
                      <th className="text-end"> Action </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td width="40%">
                        <div className="left">
                          <img
                            src="assets/imgs/people/avatar1.jpg"
                            className="img-sm img-avatar"
                            alt="Userpic"
                          ></img>
                        </div>
                        <div className="info pl-3">
                          <h6 className="mb-0 title">{props.name}</h6>
                          <small className="text-muted">{props.id}</small>
                        </div>
                      </td>
                      <td>{props.email}</td>
                      <td>
                        <span className="badge rounded-pill alert-success">
                          {props.status}
                        </span>
                      </td>
                      <td>{props.skill}</td>
                      <td className="text-end">
                        <button
                          className="btn btn-sm btn-brand rounded font-sm mt-15"
                          onClick={() => {
                            handleClick();
                          }}
                        >
                          View details
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

        </div>
    )
}
export default SkillProviderCard;