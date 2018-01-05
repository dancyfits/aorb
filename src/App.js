import React, { Component } from "react";
import { sampleSize, uniqueId } from "lodash";
import { unset } from "lodash/fp";
import "normalizecss/normalize.css";
import { List, AorB, Results, AddItemForm } from "./components";
import battle from "./logic/battle";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      showList: true
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

  render() {
    const aorbData = sampleSize(this.state.data, 2);
    const hasDataTest = aorbData.length >= 2;
    return (
      <div className="App">
        <div className="column1">
          <List
            items={this.state.data}
            onDelete={this.handleDelete}
            showList={this.state.showList}
            toggleShowList={this.toggleShowList}
          />
          <AddItemForm items={this.state.data} onAdd={this.handleAdd} />
        </div>

        {hasDataTest && (
          <div className="column2">
            <AorB items={aorbData} onSelect={this.handleSelect} />
          </div>
        )}

        {hasDataTest && (
          <div className="column3">
            <Results items={this.state.data} />
          </div>
        )}
      </div>
    );
  }
}

export default App;
