const apiKimbd = "k_4s8hgj73";
const apiKwmode = "h2LXbCztIcaw7kZ2ENKOWBrMpS0TnqoOccCqFF58";


  
  var container1 = document.getElementById("movieContainer1");
  var container2 = document.getElementById("movieContainer2");
  var imgTag ="";
  var rateTag ="";
  var titleTag = "";
  fetch('https://imdb-api.com/en/API/MostPopularMovies/k_4s8hgj73'+apiKimbd+'')
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


      $(function(){
        $("#ADD").on("click", function(){
              
           try {
             $(this).attr('disabled',true);
             
             var data= $(this).closest("p").attr("id"); 
             var Myfavs=JSON.parse(localStorage.getItem("favprop"));
             if (favprop == null){
               Myfavs =[];
             
              }
             if(Myfavs !=null){
               for (var j =0; j <Myfavs.length; j++){
                
                  if (data == Myfavs [j]){

                       alert("this property is already in your fav");
                       Myfavs =[]

                  }
                }
              }

            }
          
      