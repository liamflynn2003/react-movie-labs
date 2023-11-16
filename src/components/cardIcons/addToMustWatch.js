import React, { useContext } from "react";
import { MoviesContext } from "../../contexts/moviesContext";
import IconButton from "@mui/material/IconButton";
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd'

const AddToMustWatchIcon = ({ movie }) => {
  const context = useContext(MoviesContext);

  const handleAddToMustWatch = (e) => {
    e.preventDefault();
    console.log("Adding to must watch:", movie);
    context.addToMustWatch(movie);
  };

  return (
    <IconButton aria-label="add to watchlist" onClick={handleAddToMustWatch}>
      <PlaylistAddIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default AddToMustWatchIcon;