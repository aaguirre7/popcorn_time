const apiKimbd = "k_4s8hgj73";
const apiKwmode = "h2LXbCztIcaw7kZ2ENKOWBrMpS0TnqoOccCqFF58";


var container1 = document.getElementById("movieContainer1");
var container2 = document.getElementById("movieContainer2");

fetch('https://imdb-api.com/en/API/MostPopularMovies/k_7hu44uii')
    .then((response) => response.json())
    .then((data) => {
        console.log('data:', data);
        const list = data.items;
        console.log('list:', list);

        for (let i = 0; i < 10; i++) {
          if(i <= 4) {
            var imgTag = document.createElement("img");
            imgTag.setAttribute("src", list[i].image);
            container1.appendChild(imgTag);

            var pTag = document.createElement("p");
            pTag.textContent = list[i].title + " (" + list[i].imDbRating + ")";
            container1.appendChild(pTag);
          }else {
            var imgTag = document.createElement("img");
            imgTag.setAttribute("src", list[i].image);
            container2.appendChild(imgTag);

            var pTag = document.createElement("p");
            pTag.textContent = list[i].title + " (" + list[i].imDbRating + ")";
            container2.appendChild(pTag);
          }
        }
    })
    .catch(error => {
        console.log('error', error);
    });