
import Foundation from  'https://cdn.jsdelivr.net/npm/foundation-sites@6.7.4/dist/js/foundation.min.js';
const mySearch = document.getElementById("#search-text");
var movieDetails ="";

$(document).();
$(function(searchNow) {
  $('.search')
    .bind('click',function(event){
      $.ajax({url:`https://imdb-api.com/en/API/SearchMovie/${apiKimbd}/${mySearch}`, success:
        function(result){
          movieDetails= result;
        },error: Document.querySelector('a#open-modal').addEventListener('click', function(event) {
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
        })
    });
  });

})