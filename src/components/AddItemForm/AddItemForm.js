import React, { Component } from "react";

class AddItemForm extends Component {
  render() {
    return (
      <div className="addItemForm">
        <form
          onSubmit={e => {
            e.preventDefault();
            this.props.onAdd(this.input.value);
            this.input.value = "";
          }}
        >
          <input
            ref={el => (this.input = el)}
            type="text"
            className="addItemInput"
          />
          <button type="submit" className="addItemSubmit">
            <span className="buttonName">Add Item</span>
          </button>
        </form>
        <p>
          Add things you'd like to compare (i.e. your favorite movies, most
          hated celebrities, etc.). More than one person can add to the list and
          vote on comparisons.
        </p>
      </div>
    );
  }
}

export default AddItemForm;
