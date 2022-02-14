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
            checkMoviecontainer();
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
              <article id="${list[x].id}" class="tile is-child box is-info ">
                  <figure class="image">
                  <img src="${list[x].image}">
                  </figure>
                  <p class="title is-4">${list[x].title}</p>
                  <p class="subtitle">Released Year:${list[x].description}</p>
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
    fetch('https://imdb-api.com/en/API/Title/'+apiKimbd+'/'+movie+'/Posters,Ratings,Trailer,Wikipedia')
      .then((response) => response.json())
      .then((data) => {
        const list = data;
        var listSize = (Object.keys(data.starList).length);
        $("#mymovies").html('');
        $("#mymovies").append(`<div class="tile is-flex-mobile is-parent">
         <article class="tile is-child notification">
           <div class="content">
             <figure class="image">
                 <img src="${list.image}">
               </figure>
           </div>
          </article>
              <div id= "save" ></div>
          </div>
          <div class="tile is-vertical is-8">
           <div class="tile">
             <div class="tile is-parent is-vertical">
               <article class="tile is-child is-flex-mobile notification">
                 <p class="title">${list.title}</p>
                 <ul class="subtitle">
                  <li><strong>Year:</strong> ${list.year} </li>
                  <li><strong>Release Day:</strong> ${list.releaseDate}</li>
                  <li><strong>Run Time:</strong> ${list.runtimeMins} mins</li>
                  <li><strong>Genres:</strong> ${list.genres}</li>
                  <li><strong>Content Rating:</strong> ${list.contentRating}</li>
                 </ul>
               </article>
               <article class="tile is-child notification is-hidden-mobile">
                 <p class="title">Description:</p>
                 <p class="subtitle">${list.plot}</p>
               </article>
               <article class="tile is-child notification is-hidden-mobile">
                 <p class="title">Director: ${list.directors}</p>
                 <p class="subtitle"> Stars in this movie: </p>  
                 <article class="is-parent" id="stars"></article>
               </article>
             </div>
           </div>
           <div class="tile is-parent">
           <article class="tile is-child notification is-hidden-mobile">
             <p class="title">Where to Watch</p>
             <ol class="content" id="streaming">
               <!-- Content -->
             </ol>
           </article>
          </div>
           </div>`)
        
        
        for (x =0 ; x < listSize ; x ++){
          $("#stars").append(`
          <figure id="actors" class="box image is-16x16">
          <p class="title">${list.actorList[x].name}</p>
          <p class="subtitle"><strong>As:</strong>${list.actorList[x].asCharacter}</p>
            <img src="${list.actorList[x].image}">
          </figure>`)

        };
        fetch('https://api.watchmode.com/v1/search/?apiKey=h2LXbCztIcaw7kZ2ENKOWBrMpS0TnqoOccCqFF58&search_field=imdb_id&search_value='+movie+'')
      .then((response) => response.json())
      .then((data) => {
        var movieWm= data.title_results;
        var movieId= movieWm[0].id;
        console.log(movieWm);
        fetch('https://api.watchmode.com/v1/title/'+movieId+'/sources?apiKey=h2LXbCztIcaw7kZ2ENKOWBrMpS0TnqoOccCqFF58')
      .then((response) => response.json())
      .then((data) =>{
        var fulllist = data;
        var listSize = (Object.keys(data).length);

        for (x = 0; x< listSize -1 , x<6; x++)
          if ( fulllist[x].region == "US"){
            $("#streaming").append(` 
              <li><a href="${fulllist[x].web_url}">${fulllist[x].web_url}</a></li>`)
            }
      });
        
       });
        
  });

}
function checkMoviecontainer (){
  var movieContainer =document.getElementById(movieContainer);
  if(movieContainer){}
  else{
    $("#mymovies").html("");
    $("#mymovies").append(`<div class="tile is-vertical is-11">
    <div id="movieContainer" class="tile is-block-tablet is-flex-desktop container">
      </div>
    </div>
    `)
  };
}
