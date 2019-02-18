import React from "react";
import { hacker, date } from "faker";

const fakeDate = () => {
  let thefakedate = date
    .recent()
    .toISOString()
    .substring(0, 10);

  let test = "Date: ";

  return test + thefakedate;
};

const GetMetadata = () => {
  return (
    <React.Fragment>
      <div className="metadata">
        <span className="date">{fakeDate()}</span>
      </div>
      <div className="text">{hacker.phrase()}</div>
    </React.Fragment>
  );
};

export default GetMetadata;
