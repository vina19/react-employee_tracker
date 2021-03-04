import React from "react";
import "./style.css";

function FilterByState(props) {
    return (
        <form>
          <h2>Enter the state name to filter Employees by their state!</h2>
          <div className="row">
            <div className="form-group col-md-4">
              <input onChange={props.handleInputChange} value={props.state} id="exampleFormControlInput5" type="email" placeholder="Filter Employees By State" className="form-control form-control-underlined"/>
            </div>
          </div>
        </form>
    );
};

export default FilterByState;