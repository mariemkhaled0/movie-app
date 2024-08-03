import MovieList from "./components/MovieList";
import { useState } from "react";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./components/app.css";
import { useEffect } from "react";
import MovieHeader from "./components/MovieHeader";
import MovieSearch from "./components/MovieSearch";
import { useRef } from "react";
import AddFav from "./components/AddFav";
import RemoveFave from "./components/RemoveFave";
import ShowMovie from "./components/ShowMovie";
function App() {
  const [movies, setMovies] = useState([]);
  const [searchVal, setSearchVal] = useState("stars");
  const [favArray, setfavArray] = useState([]);
  const [showMovieDetails, setShow] = useState();

  const getMovie = async (searchVal) => {
    try {
      const url = `http://www.omdbapi.com/?s=${searchVal}&apikey=ea9613dc`;
      const response = await fetch(url);
      const data = await response.json();
      if (data.Search) {
        setMovies(data.Search);
      }
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMovie(searchVal);
  }, [searchVal]);

  useEffect(() => {
    const favMovies = JSON.parse(
      localStorage.getItem("react-movie-app-favorite")
    );
    setfavArray(favMovies);
  }, []);

  const saveItemToLocalStorage = (item) => {
    localStorage.setItem("react-movie-app-favorite", JSON.stringify(item));
  };

  const handleSearch = (e) => {
    setSearchVal(e);
  };

  const handleAddFav = (movie) => {
    const movieExists = favArray.some(
      (favMovie) => favMovie.imdbID === movie.imdbID
    );
    if (!movieExists) {
      const newMovie = [...favArray, movie];
      setfavArray(newMovie);
      console.log(favArray);
      saveItemToLocalStorage(newMovie);
    }
  };
  const removeFavouriteMovie = (movie) => {
    const newFavouriteList = favArray.filter(
      (favourite) => favourite.imdbID !== movie.imdbID
    );

    setfavArray(newFavouriteList);

    saveItemToLocalStorage(newFavouriteList);
  };

  const showMovie = (movie) => {
    setShow(movie);
    console.log(showMovieDetails);
  };
  const goBack = () => {
    setShow(null);
  };

  return (
    <>
      {showMovieDetails ? (
        <ShowMovie goBack={goBack} showMovieDetails={showMovieDetails} />
      ) : (
        <div className="container-fluid movie-app">
          <div className="row d-flex align-items-center  mt-4 mb-4">
            <MovieHeader heading="movies" />
            <MovieSearch handleSearch={handleSearch} searchVal={searchVal} />
          </div>
          <div className="row">
            <MovieList
              showMovie={showMovie}
              favouriteComponent={AddFav}
              handleAddFav={handleAddFav}
              movies={movies}
            />
          </div>
          <div className="row d-flex align-items-center  mt-4 mb-4">
            <MovieHeader heading="favorites" />
          </div>

          <div className="row">
            <MovieList
              showMovie={showMovie}
              favouriteComponent={RemoveFave}
              handleAddFav={removeFavouriteMovie}
              movies={favArray}
            />
          </div>
        </div>
      )}
    </>
  );
}

export default App;
