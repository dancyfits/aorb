import React from "react";
import { map } from "lodash";

const List = props => {
  return (
    <div className="list">
      <h2>List</h2>
      <ul className="listItems">
        {map(props.items, item => (
          <li key={item.id}>
            {item.name}
            <button onClick={() => props.onDelete(item.id)}>✕</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
