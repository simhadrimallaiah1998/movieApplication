const fetch = require("node-fetch");

const url =
  "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc";
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ODFiYTE2M2JkZTRhNGEwYjNiMzgyZTkxMmRhMzcwNyIsInN1YiI6IjY1ZmMyZjRjMDQ3MzNmMDE0YWU2NGE4ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fRE9z1jVxeFWw264QTCjVP0OV-esiyyXSmtm7soQwp4",
  },
};

fetch(url, options)
  .then((res) => res.json())
  .then((json) => console.log(json))
  .catch((err) => console.error("error:" + err));
