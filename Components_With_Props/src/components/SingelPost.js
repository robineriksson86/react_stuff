import React from "react";

const SingelPost = props => {
  return (
    <div className="ui container comments">
      <div className="comment">
        <a href="/" className="avatar">
          <img alt="avatar" src={props.imgUrl} />
        </a>
        <div className="content">
          <a href="/" className="author">
            {props.name}
          </a>
          <div className="metadata">
            <span className="date">Date: {props.date}</span>
          </div>
          <div className="text">{props.post}</div>
        </div>
      </div>
    </div>
  );
};

export default SingelPost;
