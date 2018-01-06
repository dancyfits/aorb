import React from "react";
import { sortBy } from "lodash";

const Results = props => {
  return (
    <div className="results">
      <h2>Results</h2>
      <ol>
        {sortBy(Object.values(props.items), ["rating"])
          .reverse()
          .map(item => (
            <li className="result" key={item.id}>
              <span className="itemName">{item.name}</span>
              <span className="itemRating">{item.rating}</span>
            </li>
          ))}
      </ol>
      <button onClick={props.reset}>
        <span className="buttonName">Reset ratings</span>
      </button>
    </div>
  );
};

export default Results;
