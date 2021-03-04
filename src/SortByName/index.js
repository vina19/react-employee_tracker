import React from "react";

function SortByName(props) {
  return (
    <div>
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => props.sortByNameAsc()}
      >
        Asc Order
      </button>
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => props.sortByNameDesc()}
      >
        Desc Order
      </button>
    </div>
  );
}

export default SortByName;
