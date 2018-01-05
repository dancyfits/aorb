import React from "react";
import { map } from "lodash";

const List = props => {
  const buttonText = props => {
    if (props.showList === true) {
      return "Hide list";
    } else if (props.showList === false) {
      return "Show list";
    }
  };
  return (
    <div className="list">
      <h2>List</h2>
      {Object.values(props.items).length >= 2 && (
        <button onClick={props.toggleShowList} className="toggleListButton">
          <span className="buttonName">{buttonText(props)}</span>
        </button>
      )}
      {props.showList === true && (
        <ul className="listItems">
          {map(props.items, item => (
            <li key={item.id}>
              {item.name}
              <button onClick={() => props.onDelete(item.id)}>✕</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default List;
