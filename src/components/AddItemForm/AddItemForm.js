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
      </div>
    );
  }
}

export default AddItemForm;
