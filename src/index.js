import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App, { LIST } from "./App";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<App list={LIST} />, document.getElementById("root"));
registerServiceWorker();
