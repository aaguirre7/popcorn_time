
var movieDetails =[];

$(document).ready(function(){
  var movieSearched =function (){
    var mySearch = "300"; //JSON.stringify(document.getElementById('search-text'));
    //clears container for use 
    $("#container").html("");

    $.ajax({url:`https://imdb-api.com/en/API/SearchMovie/#{apiKimbd}/300`,

    success: function(result){
      console.log(result);

    },

    error: function(xhr, ajaxOptions, thrownError){
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
        })

      });
      }
    })
  };
})

//document.querySelector('a#open-modal').addEventListener('click', function(event) {
//  event.preventDefault();
//  var modal = document.querySelector('.modal');  // assuming you have only 1
//  var html = document.querySelector('html');
//  modal.classList.add('is-active');
//  html.classList.add('is-clipped');

//  modal.querySelector('.modal-background').addEventListener('click', function(e) {
//    e.preventDefault();
//    modal.classList.remove('is-active');
//    html.classList.remove('is-clipped');
//  })