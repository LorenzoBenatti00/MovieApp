const URL_LIST_AVENGERS =
  "http://www.omdbapi.com/?apikey=46a5f494&s=Avengers"
  /*
   Chiama la web api con l'elenco di tutti i contenuti di "Avengers"
   */

  export const listAvengers = () => {
      fetch(URL_LIST_AVENGERS)
      .then((response) => response.json())
      .then((results) => {
          const movies = results.Search;
          console.log(movies);
      });
  };

  /*
Mettere la chiamata alla funzione per l'elenco della serie televisive "Avengers"
   */

const URL_LIST_AVENGERSSERIES =
  "http://www.omdbapi.com/?apikey=46a5f494&s=Avengers&type=series"

  export const listAvengersSeries = () => {
    fetch(URL_LIST_AVENGERSSERIES)
    .then((response) => response.json())
    .then((results) => {
        const series = results.Search;
        console.log(series);
    });
};