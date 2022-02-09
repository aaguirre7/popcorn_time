const apiKimbd = "k_4s8hgj73";
const apiKwmode = "h2LXbCztIcaw7kZ2ENKOWBrMpS0TnqoOccCqFF58";


var requestOptions = {
  method: 'GET',
  redirect: 'follow'
};
 
fetch('https://imdb-api.com/en/API/MostPopularMovies/k_4s8hgj73', requestOptions)
  .then(response => response.json())
  .then(response => {
    const list = response.data;

    list.map((items) => {
      const name = items.title;
      const poster = items.image;
      const movie = `<li><img src=$`
    })
  })
  .catch(error => {
    console.log('error', error);
  });
