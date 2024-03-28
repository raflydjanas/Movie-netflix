import axios from "axios";

export const getMovie = async () => {
  try {
    const response = await axios.get(" https://api.tvmaze.com/show");
    const data = await response.data.slice(0, 24);
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
    const response = await axios.get("https://api.tvmaze.com/search/shows?q=popular");
    const data = await response.data;
    return data;
  } catch (error) {
    return [];
  }
};
