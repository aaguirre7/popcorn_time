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
    $("#favsBar").append(`<button class="navbar-item has-text-white has-text-right" onclick="largeDescription(${movieName})" id="${movie}">
    ${movieName}
    </button>`)
};

function removeAmovie (movie,movieName){
    window.localStorage.removeItem(movie,movieName);
    var deleteMovie =document.getElementById(movie)
    deleteMovie.remove();
};