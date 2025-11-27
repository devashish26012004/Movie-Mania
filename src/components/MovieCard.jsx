const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card w-xs rounded-2xl p-3 bg-[#e0e0e0] shadow-md cursor-pointer hover:translate-y-[-7px] transform transition duration-200 hover:shadow-xl hover:bg-gray-300">
      <div className="poster h-48 w-full">
        <img
          src={movie.image.medium}
          alt="image.jpg"
          className="w-full h-full object-cover rounded-2xl"
        />
      </div>
      <div className="movie-details mt-2.5 ml-3">
        <h1 className="text-lg font-bold">{movie.name.toUpperCase()}</h1>
        <p className="opacity-50">{}</p>
        <p className="font-light">Genre : {movie.genres.join(", ")}</p>
        <p className="font-light">IMDB Rating : {movie.rating.average}</p>
      </div>
    </div>
  );
};

export default MovieCard;
