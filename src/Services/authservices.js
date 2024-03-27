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
