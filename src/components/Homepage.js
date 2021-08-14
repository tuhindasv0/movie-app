import React, { useEffect, useState } from "react";

import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from "../config/config";

import noImage from "../images/no_image.jpg";
import { useMovieFetch } from "../hooks/uesMovieFetch";
import HeroImage from "./HeroImage";
import Grid from "./Grid";
import Thumb from "./Thumb";

const Homepage = () => {
  const { displayMovies, error, loading } = useMovieFetch();

  console.log(displayMovies.results);

  return (
    <>
      {displayMovies.results[0] ? (
        <HeroImage
          image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${displayMovies.results[0][0].backdrop_path}`}
          title={displayMovies.results[0][0].original_title}
          text={displayMovies.results[0][0].overview}
        />
      ) : null}
      {displayMovies.results[0] ? (
        <Grid header={"Popular Movies"}>
          {displayMovies.results[0].map((movie) => (
            <Thumb
              key={movie.id}
              clickable
              image={
                movie.poster_path
                  ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
                  : noImage
              }
              movieId={movie.id}
            ></Thumb>
          ))}
        </Grid>
      ) : null}
    </>
  );
};

export default Homepage;
