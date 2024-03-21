import axios from "axios";

export const getMovie = async () => {
  const response = await axios.get(" https://api.tvmaze.com/show");
  const data = await response.data;
  const dataSlice = data.slice(0, 24);
  // console.log(dataSlice);
  return dataSlice;
};
