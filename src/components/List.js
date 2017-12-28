import React from "react";

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

export default List;
