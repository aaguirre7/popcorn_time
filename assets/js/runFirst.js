// Javascript for everything that appears when you first load the page.
const apiKimbd = "k_4s8hgj73";
const apiKwmode = "h2LXbCztIcaw7kZ2ENKOWBrMpS0TnqoOccCqFF58";
loadHome();
favorites();
// function to add favorites to local storage
function favorites (){
  var myMovies = [],
  movies = Object.keys(localStorage),
  index1 = movies.length;
  var movieKey =[];
  var index2 = index1;
  var index3 = index1;
  if( index2 > 0 ){
    while (index2 --){
      myMovies.push(localStorage.getItem(movies[index2]));
      movieKey.push(localStorage.key(movies[index2]))
      
    }
    console.log(movieKey);
    for (x =0 ; x< index3 ; x++){
      $("#favsBar").append(`<button class="navbar-item has-text-white has-text-right" id="${movieKey[x]}">
      ${myMovies[x]}
      </button>`);
    }
  }
 console.log("movie array", myMovies); 
}
// function that loads the currently trending top 10 movies in the US.
function loadHome (){
  $("#mymovies").html('');
  $("#mymovies").append(`<div class="tile is-vertical is-11">
    <div id="movieContainer" class="tile is-block-tablet is-flex-desktop container">
      </div>
    </div>
    `)
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




