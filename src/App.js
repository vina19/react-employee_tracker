import React, { Component } from "react";
import EmployeeCard from "./EmployeeCard/index";
import Title from "./Title/index";
import Wrapper from "./Wrapper/index";

class App extends Component {
  state = {
    results: [],
  };

  // When the component mounts, load the next dog to be displayed
  componentDidMount() {
    fetch("https://random-data-api.com/api/users/random_user?size=20")
      .then((response) => response.json())
      .then((res) => this.setState({ results: res }))
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div>
        <Wrapper>
          <Title>Employee Tracker</Title>
          {this.state.results.map((result) => (
            <EmployeeCard
              id={result.id}
              key={result.id}
              image={result.avatar}
              fist_name={result.first_name}
              last_name={result.last_name}
              location={result.address.state}
              phone={result.phone_number}
              email={result.email}
            />
          ))}
        </Wrapper>
      </div>
    );
  };
};

export default App;
