import React from "react";
import Header from "./components/header/Header";
import "./App.css";
import getData from "./data/mockData";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: getData(),
      searchDuration: undefined,
      resultCount: undefined,
      showResults: false
    };
  }

  filterData = term => {
    let t_start = performance.now();

    // Search results
    const regex = new RegExp(`(${term.toLowerCase()})`, "g");
    const filteredData = getData().filter(data => regex.test(data.description.toLowerCase()));
    const resultCount = filteredData.length;

    // Search duration
    var t_finish = performance.now();
    const searchDuration = t_finish - t_start;
    const searchDurationSeconds = (searchDuration / 1000).toFixed(6);

    this.setState({
      data: filteredData,
      searchDuration: searchDurationSeconds,
      resultCount: resultCount,
      showResults: term.length > 0
    });
  };

  render() {
    return (
      <div className="App">
        <Header search={this.filterData} />
        {this.state.showResults ? (
          <div className="result-container">
            <p>
              About {this.state.resultCount} results (
              {this.state.searchDuration} seconds)
            </p>
            {this.state.data.map((result, index) => {
              return (
                <div className="result" key={index}>
                  <h4>{result.title}</h4>
                  <p className="result-link">{result.link}</p>
                  <p>{result.description}</p>
                </div>
              );
            })}
          </div>
        ) : null}
      </div>
    );
  }
}

export default App;
