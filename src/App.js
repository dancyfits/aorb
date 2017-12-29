import React, { Component } from "react";
import { sampleSize } from "lodash";
import { unset } from "lodash/fp";
import "purecss";
import { List, AorB, Results, AddItemForm } from "./components";
import battle from "./logic/battle";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {}
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
    const id = Object.values(this.state.data).length + 1;
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

  render() {
    const aorbData = sampleSize(this.state.data, 2);
    const hasDataTest = aorbData.length >= 2;
    return (
      <div className="App pure-g">
        <div className="header pure-u-1-1">
          <h1>A or B?</h1>
        </div>
        <List items={this.state.data} onDelete={this.handleDelete} />
        <AddItemForm items={this.state.data} onAdd={this.handleAdd} />
        {hasDataTest && <AorB items={aorbData} onSelect={this.handleSelect} />}
        {hasDataTest && <Results items={this.state.data} />}
      </div>
    );
  }
}

export default App;
