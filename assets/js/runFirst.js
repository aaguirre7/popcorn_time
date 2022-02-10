const apiKimbd = "k_4s8hgj73";
const apiKwmode = "h2LXbCztIcaw7kZ2ENKOWBrMpS0TnqoOccCqFF58";

let Myfavs = [];
  if( localStorage.getItem("myMovies")){
    searchedCities = JSON.parse(localStorage.getItem("citysearch"));
  }

  var container = document.getElementById("container");
  var requestOptions = {
      method: 'GET',
      redirect: 'follow'
  };
  
  fetch('https://imdb-api.com/en/API/MostPopularMovies/k_7hu44uii', requestOptions)
      .then((response) => response.json())
      .then((data) => {
          console.log('data:', data);
          const list = data.items;
          console.log('list:', list);
  
          for (let i = 0; i < 10; i++) {
              var pTag = document.createElement("p");
              pTag.textContent = list[i].title + " (" + list[i].imDbRating + ")";
              container.appendChild(pTag);
  
              var imgTag = document.createElement("img");
              imgTag.setAttribute("src", list[i].image);
              container.appendChild(imgTag);
          }
      })
      .catch(error => {
          console.log('error', error);
      });