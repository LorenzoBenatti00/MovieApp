/*
const URL_LIST_AVENGERS =
  "http://www.omdbapi.com/?apikey=46a5f494&s=Avengers"
  
   Chiama la web api con l'elenco di tutti i contenuti di "Avengers"
   

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
*/

import {BASE_URL} from "./config.js"

export const apiList = (s, type) => {
  const url = BASE_URL + `s=${s}&type=${type}`;
  fetch(url)
  .then((response) => response.json())
  .then((result) => {
    const items = result.Search;
    viewItems(items);
  });
};

/** Estrapola ogni elemento dell'array e stampa le proprietà
* @param {array di movie/serie/game} items 
*/
const viewItems = (items) => {
//1. Ciclare l'array
  items.map((item) => {
//2. Estrapolare ogni item
//  3. Estrapolare solo le proprietà che ci servono (title, poster, type)
// Comando .map per ciclare gli array
  console.group(item.Title);
  console.log(item.Year);
  console.log(item.Type);
  console.group(item.Poster);
  console.groupEnd();
})
};