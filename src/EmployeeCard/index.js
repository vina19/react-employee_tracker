import React from "react";

function EmployeeCard(props) {
  return (
    <div>
        <li>
            <strong>Name:</strong> {props.first_name} {props.last_name}
        </li>
    </div>
  );
};

export default EmployeeCard;
