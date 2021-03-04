import React, { Component } from "react";
import EmployeeCard from "./EmployeeCard/index";
import Title from "./Title/index";
import Wrapper from "./Wrapper/index";
import SortByName from "./SortByName/index";

class App extends Component {
  state = {
    results: []
  };

  // When the component mounts, load the next dog to be displayed
  componentDidMount() {
    fetch("https://random-data-api.com/api/users/random_user?size=20")
      .then((response) => response.json())
      .then((res) => this.setState({ results: res }))
      .catch((err) => console.log(err));
  };

  // https://www.florin-pop.com/blog/2019/07/sort-table-data-with-react/
  handleSortAsc = () => {
    let ascName = this.state.results.sort((a, b) => a.first_name > b.first_name ? 1 : -1)
    this.setState({ascName});
  };

  handleSortDesc = () => {
    let descName = this.state.results.sort((a, b) => a.first_name < b.first_name ? 1 : -1)
    this.setState({descName});
  };

  render() {
    return (
      <div>
        <Wrapper>
          <Title>Employee Tracker</Title>
          <SortByName 
            sortByNameAsc={this.handleSortAsc} 
            sortByNameDesc={this.handleSortDesc}
          />
          {this.state.results.map((result) => (
            <EmployeeCard
              id={result.id}
              key={result.id}
              image={result.avatar}
              first_name={result.first_name}
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
