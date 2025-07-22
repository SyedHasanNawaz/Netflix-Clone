import axios from "./axios";

const API_KEY = "748bca334321bfd20f5e7aae54c32dd5";

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
};

export const fetchTrailer = async (movieId, isTv = false) => {
  const type = isTv ? "tv" : "movie";
  const url = `/${type}/${movieId}/videos?api_key=748bca334321bfd20f5e7aae54c32dd5`;

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
