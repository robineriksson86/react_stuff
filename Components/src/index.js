import React from "react";
import ReactDOM from "react-dom";
import Posts from "./components/Posts";

const App = () => {
  return <Posts />;
};

ReactDOM.render(<App />, document.querySelector("#root"));
