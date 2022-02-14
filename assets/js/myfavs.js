

function existingFav (movie){
    var myMovie  = movie;
    var myFav    = localStorage.getItem(myMovie);
     if (myFav){
        $("#mySaves").append(`<div class = "buttons">
        <button  id="saveMe" class="button is-link is-rounded is-focused">
            Save to my Favorites
        </button>
        <button id="removeMe" class="button is-danger is-rounded is-focused">
            Remove from Favorites
        </button>
      </div>`)
    } else {$("#mySaves").append(`<div class = "buttons">
    <button  id="saveMe" class="button is-link is-rounded is-focused">
        Save to my Favorites
    </button>
  </div>`)
    }
}

function saveAmovie(movie,movieName){
    window.localStorage.setItem(movie,movieName); 
    var myMovies = [],
    movies = Object.keys(localStorage),
    index1 = movies.length;
    var index2 = index1;
    var index3 = index1;
    $("#favsBar").html("");
    if( index2 > 0 ){
      while (index2 --){
        myMovies.push(localStorage.getItem(movies[index2]));
      }
      for (x =0 ; x< index3 ; x++){
        $("#favsBar").append(`<button class="navbar-item has-text-white has-text-right" id="${myMovies}">
        ${myMovies[x]}
        </button>`);
      }
    }
};

function removeAmovie (movie,movieName){
    window.localStorage.removeItem(movie,movieName);
    var myMovies = [],
    movies = Object.keys(localStorage),
    index1 = movies.length;
    var index2 = index1;
    var index3 = index1;
    $("#favsBar").html("");
    if( index2 > 0 ){
      while (index2 --){
        myMovies.push(localStorage.getItem(movies[index2]));
      }
      for (x =0 ; x< index3 ; x++){
        $("#favsBar").append(`<button class="navbar-item has-text-white has-text-right" id="${myMovies}">
        ${myMovies[x]}
        </button>`);
      }
    }
 
};