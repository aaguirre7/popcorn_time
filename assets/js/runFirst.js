const apiKimbd = "k_4s8hgj73";
const apiKwmode = "h2LXbCztIcaw7kZ2ENKOWBrMpS0TnqoOccCqFF58";
loadHome();
burger();

function favorites (){
const Myfavs = [];
  if( localStorage.getItem("myMovies")){
    movies = JSON.parse(localStorage.getItem("movieId"));
  } 
}
function loadHome (){
  fetch('https://imdb-api.com/en/API/MostPopularMovies/'+apiKimbd+'')
      .then((response) => response.json())
      .then((data) => {
          console.log('data:', data);
          const list = data.items;
          console.log('list:', list);
          for (let i = 0 , x = 5; i < 5; i++ , x ++) {
               $("#movieContainer").append(`<div class="tile is-parent is-vertical">
               <article id="${list[i].id}" class="tile is-child box is-info ">
                   <figure class="image">
                   <img src="${list[i].image}">
                   </figure>
                   <p class="title is-4">${list[i].title}</p>
                   <p class="subtitle">Release Year:${list[i].imDbRating}</p>
                   <script type="text/javascript">
                     $(document).ready(function() {
                         $("#${list[i].id}").click(function(){
                           largeDescription(${list[i].id});
                         });
                     });
                   </script>
               </article>
               <article id="${list[i].id}" class="tile is-child box is-info ">
                   <figure class="image">
                       <img src="${list[x].image}">
                   </figure>
                   <p class="title is-4">${list[x].title}</p>
                   <p class="subtitle">Release Year:${list[x].imDbRating}</p>
                   <script type="text/javascript">
                     $(document).ready(function() {
                         $("#${list[x].id}").click(function(){
                           largeDescription(${list[x].id});
                         });
                     }); 
               </article>
           </div>`)
          }

    })
      .catch(error => {
          console.log('error', error);
      });
}
function burger (){
    const nav = document.querySelector("#navbar-menu");
    const burger = document.querySelector("#burger");

    burger.addEventListener('click', ()=> {
        nav.classList.toggle("is-active")
        burger.classList.toggle("is-active")
    });
}


