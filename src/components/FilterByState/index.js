import React from "react";

function FilterByState() {
    return (
        <form>
          <div className="row mb-4">
            <div className="form-group col-md-9">
              <input id="exampleFormControlInput5" type="email" placeholder="Filter Employees By State" className="form-control form-control-underlined"/>
            </div>
            <div className="form-group col-md-3">
              <button type="submit" className="btn btn-primary rounded-pill btn-block shadow-sm">Search</button>
            </div>
          </div>
        </form>
    );
};

export default FilterByState;