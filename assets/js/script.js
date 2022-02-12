
$(document).ready(function(){
  $("button").click(function(){
    console.log("this ran");
     var mySearch = $("input:text").val();
     console.log(mySearch);
     fetch('https://imdb-api.com/en/API/SearchMovie/'+apiKimbd+'/'+mySearch+'')
        .then((response) => response.json())
        .then((data) => {
          const list = data.results;
          var listSize =(Object.keys(data.results).length); 
          console.log(listSize);
          console.log('list:', list);
        
     if ((mySearch == "" , listSize == 0)){
       searchError(event);
     }else {

      $("#movieContainer").html('');
       for (let i = 0 ,  x = Math.ceil((listSize / 2)); x < listSize  ; i ++, x ++){
        $("#movieContainer").append(`<div class="tile is-parent is-vertical">
               <article class="tile is-child box is-info">
                   <figure class="image">
                   <img src="${list[i].image}">
                   </figure>
                   <p class="title is-4">${list[i].title}</p>
                   <p class="subtitle">Released Year:${list[i].description}</p>
               </article>
               <article class="tile is-child box is-info">
                   <figure class="image">
                       <img src="${list[x].image}">
                   </figure>
                   <p class="title is-4">${list[x].title}</p>
                   <p class="subtitle">Release Year:${list[x].description}</p> 
               </article>
           </div>`);
           console.log(x)
        }
        }
      });
    })
  });


const nav = document.querySelector("#navbar-menu");
const burger = document.querySelector("#burger");

burger.addEventListener('click', ()=> {
    nav.classList.toggle("is-active")
    burger.classList.toggle("is-active")
});

function searchError(){
    var modal = document.querySelector('.modal');
    var html = document.querySelector('html');
    modal.classList.add('is-active');
    html.classList.add('is-clipped');      
    modal.querySelector('.modal-background').addEventListener('click', function(e) {
    e.preventDefault();
    modal.classList.remove('is-active');
    html.classList.remove('is-clipped');
    });
  }
