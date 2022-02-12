$(document).ready(function(){
  $("button").click(function(){
    console.log("this ran");
    
      var mySearch = $("input:text").val();
      console.log(mySearch);
      var imgTag ="";
      var rateTag ="";
      var titleTag = "";
      
         //I switched the url and link for here too// 
      fetch('https://api.watchmode.com/v1/sources/?apiKey='+apiKwmode+'/'+mySearch+'')
        .then((response) => response.json())
        .then((data) => {
          console.log('data:', data);
          const list = data;
          console.log('list:', list);
          $("#movieContainer").append(`<div id="movies1" class="columns is-centered "></div>
          <div id="movies2" class="columns is-centered "></div>`);
            if(data.items >= 1) {
               imgTag = list.image;
               titleTag = list.title;
               rateTag = list.imDbRating;
               $("#movies1").append(`<div class="column box"> 
                   <img src=${imgTag} alt=${titleTag}>
                   <p>${titleTag}</p>
               </div>`);
            }else if(data.expression == "null") {
              document.querySelector('a#open-modal').addEventListener('click', function(event) {
                event.preventDefault();
                var modal = document.querySelector('.modal');
                var html = document.querySelector('html');
                modal.classList.add('is-active');
                html.classList.add('is-clipped');      
                modal.querySelector('.modal-background').addEventListener('click', function(e) {
                e.preventDefault();
                modal.classList.remove('is-active');
                html.classList.remove('is-clipped');
                })
              })
            };
          })
  })
})


const nav = document.querySelector("#navbar-menu");
const burger = document.querySelector("#burger");

burger.addEventListener('click', ()=> {
    nav.classList.toggle("is-active")
    burger.classList.toggle("is-active")
});