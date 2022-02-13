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
                <article id="${list[i].id}" class="tile is-child box is-info ">
                    <figure class="image">
                    <img src="${list[i].image}">
                    </figure>
                    <p class="title is-4">${list[i].title}</p>
                    <p class="subtitle">Released Year:${list[i].description}</p>
                    <script type="text/javascript">
                      $(document).ready(function() {
                          $("#${list[i].id}").click(function(){
                            largeDescription("${list[i].id}");
                          });
                      });
                      </script>
                </article>
                <article id="${list[i].id}" class="tile is-child box is-info ">
                    <figure class="image">
                        <img src="${list[x].image}">
                    </figure>
                    <p class="title is-4">${list[x].title}</p>
                    <p class="subtitle">Release Year:${list[x].description}</p>
                    <script type="text/javascript">
                      $(document).ready(function() {
                          $("#${list[x].id}").click(function(){
                            largeDescription("${list[x].id}");
                          });
                      }); 
                      </script>
                </article>
         </div>`);
              console.log(x)
              }
            }
        });
    })
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
  function largeDescription(movie){
    
      console.log(movie);
    ;
        $("#movieContainer").html('');
         $("#movieContainer").append(`<div class="tile is-parent"> 
                <article class="tile is-child box is-info">
                  <figure id="poster" class="image joceyln">
                    <img src="https://imdb-api.com/en/API/Report/${apiKimbd}/${movie}"
                    width:'auto'
                    height: 'auto'
                    style="width: auto; height: 75rem;">
                  </figure>
                </article>
              </div>`)      
  }