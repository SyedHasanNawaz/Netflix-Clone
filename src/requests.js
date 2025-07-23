import axios from "axios";

// Proxy base URL through Netlify Function
const BASE_URL = "/.netlify/functions/api";

const requests = {
  fetchTrending: `/trending/all/week`,
  fetchNetflixOriginals: `/discover/tv?with_networks=213`,
  fetchTopRated: `/movie/top_rated`,
  fetchActionMovies: `/discover/movie?with_genres=28`,
  fetchComedyMovies: `/discover/movie?with_genres=35`,
  fetchHorrorMovies: `/discover/movie?with_genres=27`,
  fetchRomanceMovies: `/discover/movie?with_genres=10749`,
  fetchDocumentaries: `/discover/movie?with_genres=99`,
};

export const fetchTrailer = async (movieId, isTv = false) => {
  const type = isTv ? "tv" : "movie";
  const url = `${BASE_URL}/${type}/${movieId}/videos`;

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
