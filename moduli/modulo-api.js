const URL_LIST_AVENGERS =
  "http://www.omdbapi.com/?apikey=46a5f494&s=Avengers"

  export const listAvengers = () => {
      fetch(URL_LIST_AVENGERS)
      .then((response) => response.json())
      .then((results) => {
          const movies = results.Search;
          console.log(movies);
      });
  };