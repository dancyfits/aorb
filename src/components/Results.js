import React from "react";
import { sortBy } from "lodash";

const Results = props => {
  return (
    <div className="results pure-u-1-1 pure-g">
      <h2>Results</h2>
      {sortBy(Object.values(props.items), ["rating"])
        .reverse()
        .map(item => (
          <div key={item.id}>
            <p className="pure-u-1-2">{item.name}</p>
            <p className="pure-u-1-2">{item.rating}</p>
          </div>
        ))}
    </div>
  );
};

export default Results;
