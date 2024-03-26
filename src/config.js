export const imageUrl = (pageNumber) => {
  return `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${pageNumber}&sort_by=popularity.desc`;
};

export const trailerUrl = (trailer_id) => {
  return `https://api.themoviedb.org/3/movie/${trailer_id}/videos?language=en-US`;
};

export const APIKEY = "481ba163bde4a4a0b3b382e912da3707";
