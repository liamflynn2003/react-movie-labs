import React from "react";
import PageTemplate from "../components/templateMovieListPage";

const UpcomingMoviesPage = (props) => {
  const toDo = () => true;
  // Get movies from local storage.
  const movies = JSON.parse(localStorage.getItem("upcoming")); 

  return (
    <PageTemplate
      title="Upcoming Movies"
      movies={movies}
    />
  );
};

export default UpcomingMoviesPage;