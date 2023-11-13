import { useEffect, useState } from "react";
import {getUpcomingMovies} from '../api/tmdb-api'

const useUpcomingMovie = id => {
  const [movie, setMovie] = useState(null);
  useEffect(() => {
    getUpcomingMovies(id).then(upcomingMovie => {
      setMovie(movie);
    });
  }, [id]);
  return [movie, setMovie];
};

export default useUpcomingMovie;