
$(document).ready(function(){
  $("button").click(function(){
    console.log("this ran");
    
      var mySearch = $("input:text").val();
      console.log(mySearch);
      $.ajax({url:`https://imdb-api.com/en/API/SearchMovie/${apiKimbd}/${mySearch}`,
      success: function(result){
         $("#container").html("");
        console.log(result);
        $("#container").append(`<div class="row time-block" data-time="">
        <div class="col-sm col-md-2 hour">
                <p>AM</p>
        </div>
        <div class="col-sm co;-md-8 d-flex description">
            <textarea></textarea>
        </div><div class="col-sm con-md-2 saveBtn">
                <i class="far fa-save fa-2x"></i>
            </div></>
        </div>`);
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

