import React, { Component } from "react";
import { sampleSize, uniqueId } from "lodash";
import { unset } from "lodash/fp";
import "normalizecss/normalize.css";
import { List, AorB, Results, AddItemForm } from "./components";
import battle from "./logic/battle";

const ToggleButtons = props => {
  const listButtonText = props => {
    if (props.showList === true) {
      return "Hide list";
    } else if (props.showList === false) {
      return "Show list";
    }
  };
  const resultsButtonText = props => {
    if (props.showResults === true) {
      return "Hide results";
    } else if (props.showResults === false) {
      return "Show results";
    }
  };
  return (
    <div className="toggleButtons">
      <button onClick={props.toggleShowResults} className="toggleResultsButton">
        <span className="buttonName">{resultsButtonText(props)}</span>
      </button>
      <button onClick={props.toggleShowList} className="toggleListButton">
        <span className="buttonName">{listButtonText(props)}</span>
      </button>
    </div>
  );
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      showList: true,
      showResults: true
    };
  }

  componentWillMount() {
    localStorage.getItem("data") &&
      this.setState({ data: JSON.parse(localStorage.getItem("data")) });
  }

  componentDidUpdate() {
    localStorage.setItem("data", JSON.stringify(this.state.data));
  }

  handleAdd = name => {
    const id = uniqueId();
    this.setState({
      data: {
        ...this.state.data,
        [id]: { name, rating: 1500, id }
      }
    });
  };

  handleDelete = id => {
    this.setState({
      data: unset(id, this.state.data)
    });
  };

  handleSelect = (winner, loser) => {
    const itemsToUpdate = battle(winner, loser);
    this.updateRatings(itemsToUpdate);
  };

  updateRatings = ([a, b]) => {
    this.setState({
      data: { ...this.state.data, [a.id]: a, [b.id]: b }
    });
  };

  toggleShowList = () => {
    if (this.state.showList === true) {
      this.setState({ showList: false });
    } else if (this.state.showList === false) {
      this.setState({ showList: true });
    }
  };

  toggleShowResults = () => {
    if (this.state.showResults === true) {
      this.setState({ showResults: false });
    } else if (this.state.showResults === false) {
      this.setState({ showResults: true });
    }
  };

  render() {
    const aorbData = sampleSize(this.state.data, 2);
    const hasDataTest = aorbData.length >= 2;
    return (
      <div className="App">
        {hasDataTest && (
          <ToggleButtons
            showList={this.state.showList}
            showResults={this.state.showResults}
            toggleShowList={this.toggleShowList}
            toggleShowResults={this.toggleShowResults}
          />
        )}
        {this.state.showList === true && (
          <div className="column1">
            <List
              items={this.state.data}
              onDelete={this.handleDelete}
              showList={this.state.showList}
              toggleShowList={this.toggleShowList}
            />
            <AddItemForm items={this.state.data} onAdd={this.handleAdd} />
          </div>
        )}

        {hasDataTest && (
          <div className="column2">
            <AorB items={aorbData} onSelect={this.handleSelect} />
          </div>
        )}

        {this.state.showResults === true &&
          hasDataTest && (
            <div className="column3">
              <Results items={this.state.data} />
            </div>
          )}
      </div>
    );
  }
}

export default App;
