const mySearch = document.getElementById("#search-text");;
document.querySelector('a#open-modal').addEventListener('click', function(event) {
    event.preventDefault();
    var modal = document.querySelector('.modal');  // assuming you have only 1
    var html = document.querySelector('html');
    modal.classList.add('is-active');
    html.classList.add('is-clipped');
  
    modal.querySelector('.modal-background').addEventListener('click', function(e) {
      e.preventDefault();
      modal.classList.remove('is-active');
      html.classList.remove('is-clipped');
    });
  });

$(function() {
    $('#searchBtn').on("submit", function(e) {
      e.preventDefault()
      mySearch = document.getElementById("#search-text");
      $(document).ready (function(){
    var searchMovie = function(mySearch){
        $.ajax({url:`https://imdb-api.com/en/API/SearchMovie/${apiKimbd}/${mySearch}`})
        
    }
  })
    console.log(searchMovie);
})
})
  

