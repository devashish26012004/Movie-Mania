const movies = [
  {
    id: 1,
    title: "Inception",
    year: 2010,
    rating: 8.8,
    genre: "Sci-Fi",
    poster:
      "https://www.tallengestore.com/cdn/shop/products/Inception-LeonardoDiCaprio-ChristopherNolan-HollywoodSciFiMoviePoster.jpg?v=1685582030",
  },
  {
    id: 2,
    title: "Interstellar",
    year: 2014,
    rating: 8.6,
    genre: "Sci-Fi",
    poster:
      "https://mir-s3-cdn-cf.behance.net/project_modules/hd/297acd129204217.616629e21fe76.png",
  },
  {
    id: 3,
    title: "The Dark Knight",
    year: 2008,
    rating: 9.0,
    genre: "Action",
    poster:
      "https://rukminim2.flixcart.com/image/480/480/k8xduvk0/poster/j/m/z/medium-the-dark-knight-poster-decorative-wall-poster-wall-d-cor-original-imafqu8euacqngyh.jpeg?q=90",
  },
  {
    id: 4,
    title: "Avengers: Endgame",
    year: 2019,
    rating: 8.4,
    genre: "Superhero",
    poster:
      "https://rukminim2.flixcart.com/image/480/480/xif0q/poster/f/a/r/large-endgame-avengers-endgame-cast-signature-poster-print-in-a3-original-imagjfqzkuqxzxnh.jpeg?q=90",
  },
  {
    id: 5,
    title: "Avatar",
    year: 2009,
    rating: 7.8,
    genre: "Sci-Fi",
    poster:
      "https://i.pinimg.com/originals/fb/0a/a6/fb0aa6466714c2eba8112e0fe21215b4.jpg",
  },
  {
    id: 6,
    title: "Titanic",
    year: 1997,
    rating: 7.9,
    genre: "Romance",
    poster:
      "https://rukminim2.flixcart.com/image/480/640/kz5vwy80/poster/x/p/e/medium-titanic-movie-matte-finish-poster-butcute11853-original-imagb8ccmp46bckj.jpeg?q=90",
  },
  {
    id: 7,
    title: "The Matrix",
    year: 1999,
    rating: 8.7,
    genre: "Sci-Fi",
    poster:
      "https://i.pinimg.com/736x/38/b3/79/38b379e6548b11858ba2eda754272c77.jpg",
  },
  {
    id: 8,
    title: "Joker",
    year: 2019,
    rating: 8.5,
    genre: "Crime",
    poster:
      "https://i.pinimg.com/736x/62/a0/fa/62a0fa9ee388b4ef2cee66e73e68c982.jpg",
  },
  {
    id: 9,
    title: "Shutter Island",
    year: 2010,
    rating: 8.2,
    genre: "Thriller",
    poster:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfVAo3g9Hj-r4ZZ--0wFtaEceCxalWehoIEQ&s",
  },
  {
    id: 10,
    title: "Fight Club",
    year: 1999,
    rating: 8.8,
    genre: "Drama",
    poster:
      "https://i.pinimg.com/736x/bc/2e/72/bc2e72358356f858ee0e6305d3043c71.jpg",
  },
  {
    id: 11,
    title: "The Shawshank Redemption",
    year: 1994,
    rating: 9.3,
    genre: "Drama",
    poster:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQFFDm_qAWO5zYFep7DXTx7lhgC7YOanZhCA&s",
  },
  {
    id: 12,
    title: "Forrest Gump",
    year: 1994,
    rating: 8.8,
    genre: "Drama",
    poster:
      "https://image.tmdb.org/t/p/original/saHP97rTPS5eLmrLQEcANmKrsFl.jpg",
  },
  {
    id: 13,
    title: "The Godfather",
    year: 1972,
    rating: 9.2,
    genre: "Crime",
    poster:
      "https://dessineart.com/cdn/shop/products/Movie-Posters-Black-Frame-The-Godfather-Movie-Poster-Old-Movie-Posters.jpg?v=1642620005",
  },
  {
    id: 14,
    title: "The Wolf of Wall Street",
    year: 2013,
    rating: 8.2,
    genre: "Biography",
    poster: "https://m.media-amazon.com/images/I/61qHVnmegzL.jpg",
  },
  {
    id: 15,
    title: "La La Land",
    year: 2016,
    rating: 8.0,
    genre: "Musical",
    poster:
      "https://i.pinimg.com/736x/8c/20/e2/8c20e2a6b8afc3fc5b8a8d55f9807ce2.jpg",
  },
  {
    id: 16,
    title: "Parasite",
    year: 2019,
    rating: 8.6,
    genre: "Thriller",
    poster:
      "https://images-cdn.ubuy.co.in/6364358337da3701121dc9f4-parasite-2019-movie-poster-24x36-inches.jpg",
  },
  {
    id: 17,
    title: "The Revenant",
    year: 2015,
    rating: 8.0,
    genre: "Adventure",
    poster:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFR0OHp91_HsCOq4oLIh6DLY1wE7270ga2ZQ&s",
  },
  {
    id: 18,
    title: "Whiplash",
    year: 2014,
    rating: 8.5,
    genre: "Drama",
    poster:
      "https://www.vintagemovieposters.co.uk/wp-content/uploads/2021/05/IMG_2086-scaled.jpeg",
  },
  {
    id: 19,
    title: "The Social Network",
    year: 2010,
    rating: 7.7,
    genre: "Biography",
    poster:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxXYlz1UtVy6G_M16tK8IZlWQnFhLNZzEBmw&s",
  },
  {
    id: 20,
    title: "Django Unchained",
    year: 2012,
    rating: 8.4,
    genre: "Western",
    poster:
      "https://m.media-amazon.com/images/I/41SEqQEfijL._AC_UF894,1000_QL80_.jpg",
  },
];

export default movies;
