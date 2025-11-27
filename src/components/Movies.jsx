import Navbar from "./Navbar";
import movies from "../lib/moviesData";
import MovieCard from "./MovieCard";
import Footer from "./Footer";
import { useEffect, useState } from "react";
import fetchMovie from "../js/fetchData";
import MovieCardTwo from "./MoviesCardTwo";

const Movies = () => {
  // const [movies, setMovies] = useState([]);

  // useEffect(() => {
  //   async function getData() {
  //     let result = await fetchMovie();
  //     console.dir(result);
  //     setMovies(result);
  //   }
  //   getData();
  // }, []);

  return (
    <>
      <div>
        <Navbar />
        <h1 className="text-center font-bold text-4xl mt-8">Movies</h1>
        <div className="flex flex-wrap gap-5 mb-24 mt-10 mx-20 justify-evenly">
          {movies.map((movie, key) => {
            return <MovieCardTwo movie={movie} key={key} />;
          })}
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Movies;
