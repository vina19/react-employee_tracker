import React from "react";
import "./style.css";

function EmployeeCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <object data={props.image} type="image/png">
          <img
            alt={props.first_name}
            src="https://robohash.org/adipisciquodducimus.png"
          />
        </object>
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
