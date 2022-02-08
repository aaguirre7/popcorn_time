const apiKimbd = "k_4s8hgj73";
const apiKwmode = "h2LXbCztIcaw7kZ2ENKOWBrMpS0TnqoOccCqFF58";

let Myfavs = [];
  if( localStorage.getItem("myMovies")){
    searchedCities = JSON.parse(localStorage.getItem("citysearch"));
  }

  var showTopMovies = function(movie) {
    // format the github api url
    var apiUrl = "https://imdb-api.com/en/API/MostPopularMovies/" + apiKimbd;
  
    // make a request to the url
    fetch(apiUrl).then(function(response) {
      response.json().then(function(data) {
        console.log(data);
      });
    });
  };
  
  showTopMovies();