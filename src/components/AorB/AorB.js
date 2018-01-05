import React from "react";

const AorB = ({ items: [a, b], onSelect }) => {
  return (
    <div className="aorb">
      <h2>Choose one</h2>
      <button className="buttonA" key={a.id} onClick={() => onSelect(a, b)}>
        <span className="buttonName">{a.name}</span>
      </button>
      <button className="buttonB" key={b.id} onClick={() => onSelect(b, a)}>
        <span className="buttonName">{b.name}</span>
      </button>
      <p>
        Pick which of these two you favor (or disfavor, depending on how you
        want the list ranked). You will see the same items more than once. The
        more you vote, the more accurate the results are.
      </p>
    </div>
  );
};

export default AorB;
