import React from "react";

function EmployeeTable(props) {
  return (
    <table class="table table-bordered table-dark">
      <thead>
        <tr>
          <th scope="col">Avatar</th>
          <th scope="col">First Name</th>
          <th scope="col">Last Name</th>
          <th scope="col">Location</th>
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
          <td>{props.location}</td>
          <td>{props.email}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default EmployeeTable;
