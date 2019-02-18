import React from "react";
import { image } from "faker";

const getIMG = () => {
  return (
    <a href="/" className="avatar">
      <img alt="avatar" src={image.avatar()} />
    </a>
  );
};

export default getIMG;
