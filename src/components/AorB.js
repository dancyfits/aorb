import React from "react";

const AorB = ({ items: [a, b], onSelect }) => {
  return (
    <div className="aorb">
      <h2>Choose one</h2>
      <button className="buttonA" key={a.id} onClick={() => onSelect(a, b)}>
        {a.name}
      </button>
      <button className="buttonB" key={b.id} onClick={() => onSelect(b, a)}>
        {b.name}
      </button>
    </div>
  );
};

export default AorB;
