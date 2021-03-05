import React, { Component } from "react";
import EmployeeTable from "./components/EmployeeTable/index";
import Title from "./components/Title/index";
import Wrapper from "./components/Wrapper/index";
import SortByName from "./components/SortByName/index";
import FilterByState from "./components/FilterByState/index";

class App extends Component {
  state = {
    results: [],
    apiUsers: []
  };

  // When the component mounts, load the next dog to be displayed
  componentDidMount() {
    fetch("https://random-data-api.com/api/users/random_user?size=20")
      .then((response) => response.json())
      .then((res) => {
        this.apiUsers = res;
        this.setState({ results: res })
      })
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

  handleInputChange = event => {
    let newUsers = this.apiUsers.filter((data) => {
      console.log(data.address.state);
      let searchValue = data.address.state.toLowerCase();
      return searchValue.indexOf(event.target.value) !== -1;
    });
    this.setState({ results:newUsers });
  };

  render() {
    return (
      <div>
        <Title>Employee Tracker</Title>
          <FilterByState 
            // https://stackoverflow.com/questions/58030249/how-to-filter-an-array-with-fetched-data-in-react-js
            handleInputChange={this.handleInputChange.bind(this)}
          />
          <SortByName 
            sortByNameAsc={this.handleSortAsc} 
            sortByNameDesc={this.handleSortDesc}
          />
        <Wrapper>
          {this.state.results.map((result) => (
            <EmployeeTable
              id={result.id}
              key={result.id}
              image={result.avatar}
              first_name={result.first_name}
              last_name={result.last_name}
              state={result.address.state}
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
