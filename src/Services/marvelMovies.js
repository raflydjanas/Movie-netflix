import axios from "axios";

export const getMarvelMovie = async () => {
  try {
    const response = await axios.get("https://api.tvmaze.com/shows");
    const data = await response.data.slice(150, 180);
    return data;
  } catch (error) {
    return [];
  }
};
