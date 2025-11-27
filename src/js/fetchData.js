const fetchMovie = async () => {
  try {
    const response = await fetch("https://api.tvmaze.com/shows?page=1");
    if (!response.ok) {
      throw new Error("Failed to fetch movies");
    }
    const movies = await response.json();
    return movies;
  } catch (err) {
    console.error("Error fetching movies", err);
    return [];
  }
};

export default fetchMovie;
