import React from "react";

function EmployeeCard(props) {
  return (
    <div className="card">
      <div className="img-container">
          <img
            alt={props.first_name}
            src={props.image}
          />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.first_name} {props.last_name}
          </li>
          <li>
            <strong>Location:</strong> {props.location}
          </li>
          <li>
            <strong>Phone:</strong> {props.phone}
          </li>
          <li>
            <strong>Email:</strong> {props.email}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default EmployeeCard;
