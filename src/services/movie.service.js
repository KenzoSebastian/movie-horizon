// https://www.omdbapi.com/?i=tt3896198&apikey=4224b01a&s=batman&page=1

import axios from "axios";

export const getMovies = async (title, callback) => {
  // const page = Math.floor(Math.random() * 10) + 1;
  axios
    .get(`https://www.omdbapi.com/?i=tt3896198&apikey=4224b01a&s=${title}&page=1`)
    .then((res) => {
      callback(res.data.Search);
    });
};

export const getSingleMovie = async (id, callback) => {
  axios
    .get(`https://www.omdbapi.com/?i=${id}&apikey=4224b01a&plot=full`)
    .then((res) => {
      callback(res.data);
    });
};
