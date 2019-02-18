import React from "react";
import ReactDOM from "react-dom";
import ApprovalCard from "./components/ApprovalCard";
import SingelPost from "./components/SingelPost";
import { hacker, name, date, image } from "faker";

const fakeDate = () => {
  let thefakedate = date
    .recent()
    .toISOString()
    .substring(0, 10);

  return thefakedate;
};

const App = () => {
  return (
    <React.Fragment>
      <ApprovalCard />
      <SingelPost
        name={name.findName()}
        post={hacker.phrase()}
        date={fakeDate()}
        imgUrl={image.avatar()}
      />
      <SingelPost
        name={name.findName()}
        post={hacker.phrase()}
        date={fakeDate()}
        imgUrl={image.avatar()}
      />
      <SingelPost
        name={name.findName()}
        post={hacker.phrase()}
        date={fakeDate()}
        imgUrl={image.avatar()}
      />
    </React.Fragment>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
