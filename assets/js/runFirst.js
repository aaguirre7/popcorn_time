const apiKimbd = "k_4s8hgj73";
const apiKwmode = "grNQT3JM71oDY92KK9jI0edlD2kYxoLdykcDEDiN";


  
  var container1 = document.getElementById("movieContainer1");
  var container2 = document.getElementById("movieContainer2");
  var imgTag ="";
  var rateTag ="";
  var titleTag = "";
       //I switched my api key and the link//
  fetch('https://api.watchmode.com/v1/sources/?apiKey='+apiKwmode+'')
      .then((response) => response.json())
      .then((data) => {
          console.log('data:', data);
          const list = data.items;
          console.log('list:', list);
          $("#movieContainer").append(`<div id="movies1" class="columns is-centered "></div>
          <div id="movies2" class="columns is-centered "></div>`);
          for (let i = 0; i < 10; i++) {
            if(i <= 4) {
               imgTag = list[i].image;
               titleTag = list[i].title;
               rateTag = list[i].imDbRating;
               
               $("#movies1").append(`<div class="column box"> 
                   <img src=${imgTag} alt=${titleTag}>
                   <p>${titleTag}</p>
               </div>`);
            }else {
              imgTag = list[i].image;
              titleTag = list[i].title;
              rateTag = list[i].imDbRating;
              $("#movies2").append(`<div class="column box"> 
                  <img src=${imgTag} alt=${titleTag}>
                  <p>${titleTag}</p>
              </div>`);
            }
          }
          console.log(imgTag);
          console.log(titleTag);
          console.log(rateTag);

    })
      .catch(error => {
          console.log('error', error);
      })


   