import React from "react";

const MovieList = ({ ...props }) => {
  const FavouriteComponent = props.favouriteComponent;
  return (
    <div className="d-flex flex-row ">
      {props.movies.map((movie, index) => (
        <div
          key={index}
          className="d-flex image-container justify-content-start m-4"
        >
          <img src={movie.Poster} alt="img" />
          <div
            onClick={() => {
              props.handleAddFav(movie);
            }}
            className="overlay d-flex align-items-center justify-content-center"
          >
            <FavouriteComponent />
          </div>
          <button
            onClick={() => {
              props.showMovie(movie);
            }}
            className="show-btn"
          >
            show
          </button>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
