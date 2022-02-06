const mySearch = document.getElementById("#search-text");

function movieSearch (){
    
}
$(document).ready(function(){
    for (var i = 9; i <= 17; i ++){
        if (i <= 11){
            var t1 = i + ":00 "
            $('.flex-use').append(`<div class="row time-block" data-time="${i}">
                    <div class="col-sm col-md-2 hour">
                            <p>${t1}AM</p>
                    </div>
                    <div class="col-sm co;-md-8 d-flex description">
                        <textarea></textarea>
                    </div><div class="col-sm con-md-2 saveBtn">
                            <i class="far fa-save fa-2x"></i>
                        </div></>
                </div>`);
            }
    }
};

