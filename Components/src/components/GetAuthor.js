import React from "react";
import { name } from "faker";

const GetAuthor = () => {
  return (
    <a href="/" className="author">
      {name.findName()}
    </a>
  );
};

export default GetAuthor;
