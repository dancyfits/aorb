import React, { Component } from "react";

class AddItemForm extends Component {
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

export default AddItemForm;
