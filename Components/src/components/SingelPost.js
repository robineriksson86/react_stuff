import React from "react";
import GetIMG from "./GetIMG";
import GetAuthor from "./GetAuthor";
import GetMetadata from "./GetMetadata";

const SingelPost = () => {
  return (
    <div className="ui container comments">
      <div className="comment">
        <GetIMG />
        <div className="content">
          <GetAuthor />
          <GetMetadata />
        </div>
      </div>
    </div>
  );
};

export default SingelPost;
