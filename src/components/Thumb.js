import React from "react";
import { Image } from "../style/TumbeStyle";

const Thumb = ({ clickable, image, movieId }) => (
  <Image src={image} alt="movie-thumb"></Image>
);

export default Thumb;
