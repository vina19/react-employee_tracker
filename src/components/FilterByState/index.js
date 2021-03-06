import React from "react";
import "./style.css";

// https://medium.com/crobyer/search-filter-with-react-js-88986c644ed5
// Component for filtering employees data by state with input on change method.
function FilterByState(props) {
    return (
        <form>
          <h2>Enter the state name below to filter employees by their state!</h2>
          <div className="row">
            <div className="form-group col-md-4">
              <input onChange={props.handleInputChange} id="filter-by-state" type="search" placeholder="Filter Employees By State" className="form-control form-control-underlined"/>
            </div>
          </div>
        </form>
    );
};

export default FilterByState;