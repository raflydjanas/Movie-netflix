import axios from "axios";

export const getMarvelMovie = async () => {
  try {
    const response = await axios.get("http://www.omdbapi.com/?apikey=53e2f0f1&s=marvel");
    const data = await response.data.Search;
    return data;
  } catch (error) {
    return [];
  }
};
