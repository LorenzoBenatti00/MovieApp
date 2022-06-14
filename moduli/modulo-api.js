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

import { BASE_URL, CONTENT_TYPE } from "./config.js"

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

const viewItems = (items) => {                                              !!!!!!!!!!!Vecchia lezione!!!!!!!!!!!!!!!!
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
**/

const viewItems = (items) => {
  //Mi posiziono dove voglio mettere l'elenco dei movies
  const element = document.getElementById("movies");
  //Ciclare l'array
  items.map((item) => {
    //Creo il movie all'interno del DOM
    element.appendChild(createHTMLMovie(item));
  });
};

const createHTMLMovie = (movie) => {
  //Creo un tag P vuoto
  const para = document.createElement("p");
  //Creo un testo con il titolo del movie
  const node = document.createTextNode(movie.Title);
  //Inserisco dentro al tag P il testo
  para.appendChild(node);

  return para;

};

//CHIAMATE SITO TIPO NETFLIX
export const apiList1 = (t,type,indice) => {
  const url1 = BASE_URL + `t=${t}&type=${type}`;
  fetch(url1)
    .then((response) => response.json())
    .then((result) => {
      viewItems1(result,indice);
    });
};

const viewItems1 = (items1,indice) => {
  console.log(indice);
  const element = document.getElementById("card-"+indice);
    element.appendChild(createHTMLMovie1(items1));
};

const createHTMLMovie1 = (movie) => {
  //Creo un tag P vuoto
  const para1 = document.createElement("p");
  para1.className="titolo";
  para1.innerHTML = movie.Title + '<br>' + '<h5>' + 'Anno:'+ ' ' + movie.Year + '</h5>' + '<br>' + '<h5>' + 'Regista:'+ ' ' + movie.Director + '</h5>' + '<br>' + '<h5>' + 'Durata:'+ ' ' + movie.Runtime + '</h5>';
 

  return para1;
  

};
