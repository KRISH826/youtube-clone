/** @format */

import axios from "axios";

const BASE_URL = "https://youtube138.p.rapidapi.com";

const options = {
  method: "GET",
  params: { hl: "en", gl: "US" },
  headers: {
    "X-RapidAPI-Key": "26d312bcbfmsh1fb128c4e7d40dcp1671d0jsna0089118df06",
    "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
  },
};

export const fetchDataFromApi = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  return data;
};
