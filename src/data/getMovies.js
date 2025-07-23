import data from "./movies.json";

const getMovies = () =>
  new Promise((resolve, reject) => {
    //get the data from JSON file as response
    //Add 2 secs delay to the promise
    let timer = setTimeout(() => {
      resolve(data);
    }, 2000);
  });

export default getMovies;
