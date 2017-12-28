import React, { Component } from "react";
import { sampleSize } from "lodash";
import "purecss";

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

  onItemChange = e => {
    this.setState({ name: e.target.value });
  };

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

const List = props => {
  return (
    <div className="list pure-u-1-1">
      <h2>List</h2>
      <ul className="listItems">
        {props.items.map(item => <li key={item.id}>{item.name}</li>)}
      </ul>
    </div>
  );
};

class AddItemForm extends React.Component {
  render() {
    return (
      <div className="addItemForm">
        <form
          className="pure-form"
          onSubmit={e => {
            e.preventDefault();
            this.props.onAdd(this.input.value);
          }}
        >
          <input ref={el => (this.input = el)} type="text" />
          <button type="submit" className="pure-button">
            Add Item
          </button>
        </form>
      </div>
    );
  }
}

const AorB = props => {
  return (
    <div className="aorb pure-g pure-u-1-1">
      <h2 className="pure-u-1-1">A or B?</h2>
      {props.items.map(item => (
        <button
          className="pure-button pure-u-1-2"
          key={item.id}
          onClick={() => props.onSelect(item.id)}
        >
          {item.name}
        </button>
      ))}
    </div>
  );
};

const Results = props => {
  return (
    <div className="results pure-u-1-1 pure-g">
      <h2>Results</h2>
      {props.items.map(item => (
        <div key={item.id}>
          <p className="pure-u-1-2">{item.name}</p>
          <p className="pure-u-1-2">{item.rating}</p>
        </div>
      ))}
    </div>
  );
};

export default App;
