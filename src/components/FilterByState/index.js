import React from "react";
import "./style.css";

function FilterByState() {
    return (
        <form>
          <h2>Enter the state name to filter Employees by their state!</h2>
          <div className="row">
            <div className="form-group col-md-4">
              <input id="exampleFormControlInput5" type="email" placeholder="Filter Employees By State" className="form-control form-control-underlined"/>
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn-primary btn-block shadow-sm">Filter</button>
            </div>
          </div>
        </form>
    );
};

export default FilterByState;