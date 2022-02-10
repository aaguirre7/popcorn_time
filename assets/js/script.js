
$(document).ready(function(){
  $("button").click(function(){
    console.log("this ran");
    
      var mySearch = $("input:text").val();
      console.log(mySearch);
      $.ajax({url:`https://imdb-api.com/en/API/SearchMovie/${apiKimbd}/${mySearch}`,
      success: function(result){
         $("#container").html("");
        console.log(result);
      },
      error:function(){
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
      })})
    } 
    })
  });
})
var favorites = JSON.parse(localStorage.getItem('favorites')) || [];
// add class 'fav' to each favorite
favorites.forEach(function(favorite) {
  document.getElementById(favorite).className = 'fav';
});
// register click event listener
document.querySelector('.list').addEventListener('click', function(e) {
  var id = e.target.id,
      item = e.target,
      index = favorites.indexOf(id);
  // return if target doesn't have an id (shouldn't happen)
  if (!id) return;
  // item is not favorite
  if (index == -1) {
    favorites.push(id);
    item.className = 'fav';
  // item is already favorite
  } else {
    favorites.splice(index, 1);
    item.className = '';
  }
  // store array in local storage
  localStorage.setItem('favorites', JSON.stringify(favorites));
});

// local storage stores strings so we use JSON to stringify for storage and parse to get out of storage
