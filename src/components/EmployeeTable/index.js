import React from "react";
import "./style.css";

// Component for display needed employees data in table.
function EmployeeTable(props) {
  return (
    <table className="table table-bordered table-dark">
      <thead>
        <tr>
          <th scope="col">Avatar</th>
          <th scope="col">First Name</th>
          <th scope="col">Last Name</th>
          <th scope="col">State</th>
          <th scope="col">Email</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <object data={props.image} type="image/png" style={{ width: "300px", height: "300px" }}>
              <img alt={props.first_name} src="https://robohash.org/adipisciquodducimus.png"/>
            </object>
          </td>
          <td>{props.first_name}</td>
          <td>{props.last_name}</td>
          <td>{props.state}</td>
          <td>{props.email}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default EmployeeTable;
