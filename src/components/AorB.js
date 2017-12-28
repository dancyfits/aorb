import React from "react";

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

export default AorB;
