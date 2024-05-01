import axios from "axios";

export const getMovie = async (limit, offset) => {
  try {
    const response = await axios.get(" https://api.tvmaze.com/show");
    const data = await response.data.slice(offset, offset + limit);
    return data;
  } catch (error) {
    return [];
  }
};

export const getMovieDetails = async (id) => {
  try {
    const response = await axios.get(`https://api.tvmaze.com/shows/${id}`);
    const data = await response.data;
    console.log("🚀 ~ getMovieDetails ~ data:", data);
    return data;
  } catch (error) {
    return [];
  }
};

export const getMovieHero = async () => {
  try {
    const response = await axios.get(" https://api.tvmaze.com/show");
    const data = await response.data.slice(0, 5);
    return data;
  } catch (error) {
    return [];
  }
};

export const getPopularMovie = async () => {
  try {
    const response = await axios.get("https://api.tvmaze.com/shows");
    const data = await response.data.slice(100, 124);
    return data;
  } catch (error) {
    return [];
  }
};

export const searchMovies = async (query) => {
  try {
    const response = await axios.get(`https://api.tvmaze.com/search/shows?q=${query}`);
    const data = await response.data;
    return data;
  } catch (error) {
    return [];
  }
};
