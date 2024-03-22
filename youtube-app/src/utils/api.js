/** @format */

import axios from "axios";

const BASE_URL = "https://youtube138.p.rapidapi.com";

const options = {
  method: "GET",
  params: { hl: "en", gl: "US" },
  headers: {
    "X-RapidAPI-Key": "1aac9bf61amshcbb33f7897e8826p115748jsne3f7d1e9504b",
    "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
  },
};

export const fetchDataFromApi = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  return data;
};
