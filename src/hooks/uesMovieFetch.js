import { useState, useEffect } from "react";
import API from "../config/API";

const initialState = {
  page: 0,
  results: [],
  total_pages: 0,
  total_results: 0,
};

export const useMovieFetch = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [displayMovies, setDisplayMovies] = useState(initialState);

  const fetchMovies = async (page, searchTerm = "") => {
    try {
      setError(false);
      setLoading(true);
      const movies = await API.fetchMovies(searchTerm, page);

      setDisplayMovies((prev) => ({
        ...movies,
        results:
          page > 1 ? [...prev.results, ...movies.results] : [movies.results],
      }));
    } catch (error) {
      setError(true);
    }
    setLoading(false);
  };
  useEffect(() => {
    fetchMovies(1);
  }, []);

  return { displayMovies, error, loading };
};
