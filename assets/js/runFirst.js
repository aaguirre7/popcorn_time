// js for everything that appears when you first load the page.

// 2 API keys for both of the API's used in the app
const apiKimbd = "k_4s8hgj73";
const apiKwmode = "h2LXbCztIcaw7kZ2ENKOWBrMpS0TnqoOccCqFF58";
loadHome();

// function to add favorites to local storage
function favorites (){
const Myfavs = [];
  if( localStorage.getItem("myMovies")){
    movies = JSON.parse(localStorage.getItem("movieId"));
  } 
}
// function that loads the currently trending top 10 movies in the US.
function loadHome (){
  fetch('https://imdb-api.com/en/API/MostPopularMovies/'+apiKimbd+'')
      .then((response) => response.json())
      .then((data) => {
          console.log('data:', data);
          const list = data.items;
          console.log('list:', list);
          // create a for loop to only show the first 10 of the top 250 most popular movies
          for (let i = 0 , x = 5; i < 5; i++ , x ++) {
               $("#movieContainer").append(`<div class="tile is-parent is-vertical">
               <article id="${list[i].id}" class="tile is-child box is-info ">
                   <figure class="image">
                   <img src="${list[i].image}">
                   </figure>
                   <p class="title is-4">${list[i].title}</p>
                   <p class="subtitle">Imdb Rating:${list[i].imDbRating}</p>
                   <script type="text/javascript">
                     $(document).ready(function() {
                         $("#${list[i].id}").click(function(){
                           largeDescription("${list[i].id}");
                         });
                     });
                   </script>
               </article>
               <article id="${list[x].id}" class="tile is-child box is-info">
                   <figure class="image">
                       <img src="${list[x].image}">
                   </figure>
                   <p class="title is-4">${list[x].title}</p>
                   <p class="subtitle">Imdb Rating:${list[x].imDbRating}</p>
                   <script type="text/javascript">
                     $(document).ready(function() {
                         $("#${list[x].id}").click(function(){
                           largeDescription("${list[x].id}");
                         });
                     });
                     </script>
               </article>
           </div>`)
          }

    })
    // error handling
      .catch(error => {
          console.log('error', error);
      });
}




