const apiKimbd = "k_4s8hgj73";
const apiKwmode = "h2LXbCztIcaw7kZ2ENKOWBrMpS0TnqoOccCqFF58";

let Myfavs = [];
  if( localStorage.getItem("myMovies")){
    searchedCities = JSON.parse(localStorage.getItem("citysearch"));
  } 

  fetch('https://imdb-api.com/en/API/MostPopularMovies/'+apiKimbd+'')
      .then((response) => response.json())
      .then((data) => {
          console.log('data:', data);
          const list = data.items;
          console.log('list:', list);
          for (let i = 0 , x = 5; i < 5; i++ , x ++) {
               $($("#movieContainer")).append(`<div class="tile is-parent is-vertical">
               <article class="tile is-child box is-info">
                   <figure class="image">
                   <img src="${list[i].image}">
                   </figure>
                   <p class="title is-4">${list[i].fullTitle}</p>
                   <p class="subtitle">Rating:${list[i].imDbRating}</p>
               </article>
               <article class="tile is-child box is-info">
                   <figure class="image">
                       <img src="${list[x].image}">
                   </figure>
                   <p class="title is-4">${list[x].fullTitle}</p>
                   <p class="subtitle">Rating:${list[x].imDbRating}</p> 
               </article>
           </div>`)
          }

    })
      .catch(error => {
          console.log('error', error);
      });
