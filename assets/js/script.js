
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