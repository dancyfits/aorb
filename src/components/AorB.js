import React from "react";

const AorB = ({ items: [a, b], onSelect }) => {
  return (
    <div className="aorb pure-g pure-u-1-1">
      <h2 className="pure-u-1-1">A or B?</h2>
      <button
        className="pure-button pure-u-1-2"
        key={a.id}
        onClick={() => onSelect(a, b)}
      >
        {a.name}
      </button>
      <button
        className="pure-button pure-u-1-2"
        key={b.id}
        onClick={() => onSelect(b, a)}
      >
        {b.name}
      </button>
    </div>
  );
};

export default AorB;
