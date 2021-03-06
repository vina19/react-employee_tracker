import React, { Component } from "react";
import EmployeeTable from "./components/EmployeeTable/index";
import Title from "./components/Title/index";
//import Wrapper from "./components/Wrapper/index";
import SortByName from "./components/SortByName/index";
import FilterByState from "./components/FilterByState/index";

class App extends Component {

  // results state to hold the employees data.
  // apiUsers state to hold the employees data to be filtered by state.
  state = {
    results: [],
    apiUsers: []
  };

  // When the component mounts, fetch the API users data,
  // then change the response to json format,
  // then set the apiUsers state with the results from fetching the API users data,
  // and set the state of results to the results from fetching the API users data.
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
  // Handling sorting name in ascending order.
  handleSortAsc = () => {
    let ascName = this.state.results.sort((a, b) => a.first_name > b.first_name ? 1 : -1)
    this.setState({ascName});
  };

  // Handling sorting name in descending order.
  handleSortDesc = () => {
    let descName = this.state.results.sort((a, b) => a.first_name < b.first_name ? 1 : -1)
    this.setState({descName});
  };

  // Handling the filtering employees data by its state.
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
      </div>
    );
  };
};

export default App;
