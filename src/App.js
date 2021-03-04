import React, { Component } from "react";
import EmployeeCard from "./EmployeeCard/index";

class App extends Component {
  state = {
    results: [],
  };

  // When the component mounts, load the next dog to be displayed
  componentDidMount() {
    fetch("https://random-data-api.com/api/users/random_user?size=10")
      .then((response) => response.json())
      .then((res) => this.setState({ results: res }))
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div>
          {this.state.results.map((result) => (
            <EmployeeCard
              fist_name={result.first_name}
              last_name={result.last_name}
            />
          ))}
      </div>
    );
  };
};

export default App;
