import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_KEY = process.env.REACT_APP_TMDB_KEY;

const requests = {
  fetchTrending: `/trending/all/week?api_key=${TMDB_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${TMDB_KEY}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${TMDB_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${TMDB_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${TMDB_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${TMDB_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${TMDB_KEY}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${TMDB_KEY}&with_genres=99`,
};

export const fetchTrailer = async (movieId, isTv = false) => {
  const type = isTv ? "tv" : "movie";
  const url = `${BASE_URL}/${type}/${movieId}/videos?api_key=${TMDB_KEY}`;

  try {
    const res = await axios.get(url);
    const trailer = res.data.results.find(
      (v) => v.type === "Trailer" && v.site === "YouTube"
    );
    return trailer?.key || "";
  } catch (err) {
    console.error("Failed to fetch trailer", err);
    return "";
  }
};

export default requests;
