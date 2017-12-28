import React, { Component } from "react";
import { sampleSize } from "lodash";
import "purecss";
import { List, AorB, Results, AddItemForm } from "./components";

export const LIST = [
  { name: "Kung Fu Panda", rating: 0, id: 1 },
  { name: "Perfume", rating: 0, id: 2 },
  { name: "Gattaca", rating: 0, id: 3 },
  { name: "Spirited Away", rating: 0, id: 4 },
  { name: "Oldboy", rating: 0, id: 5 },
  { name: "Fight Club", rating: 0, id: 6 },
  { name: "Office Space", rating: 0, id: 7 },
  { name: "The Bourne Identity", rating: 0, id: 8 },
  { name: "Twelve Monkeys", rating: 0, id: 9 }
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: props.list
    };
  }

  handleAdd = name => {
    this.setState({
      list: [
        ...this.state.list,
        { name, rating: 0, id: this.state.list.length + 1 }
      ]
    });
  };

  incrementRating = id => {
    this.setState({
      list: this.state.list.map(
        item => (item.id === id ? { ...item, rating: item.rating + 1 } : item)
      )
    });
  };

  /*

  aVsB = (winningId, losingId) => {
    r1 = 10^(winningId.rating/400);
    r2 = 10^(losingId.rating/400);

    e1 = r1/(r1 + r2);
    e2 = r2/(r1 + r2);

    winnerNewRating = winningId.rating + K * (1 - e1)
    loserNewRating = losingId.rating + K * (0 - e2)
  }

  */

  render() {
    return (
      <div className="App pure-g">
        <div className="header pure-u-1-1">
          <h1>A or B?</h1>
        </div>
        <List items={this.state.list} />
        <AddItemForm items={this.state.list} onAdd={this.handleAdd} />
        <AorB
          items={sampleSize(this.state.list, 2)}
          onSelect={this.incrementRating}
        />
        <Results items={this.state.list} />
      </div>
    );
  }
}

export default App;
