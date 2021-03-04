import React from "react";
import "./style.css";

function SortByName(props) {
  return (
    <div className="sort-btn">
      <h2>
        Sort Employees by Name:
        &nbsp;
        <button
          type="button"
          className="btn btn-primary"
          style={{ marginBottom: "10px" }}
          onClick={() => props.sortByNameAsc()}
        >
          Asc Order
        </button>
        &nbsp;
        <button
          type="button"
          className="btn btn-primary"
          style={{ marginBottom: "10px" }}
          onClick={() => props.sortByNameDesc()}
        >
          Desc Order
        </button>
      </h2>
    </div>
  );
}

export default SortByName;
