//якорь
$(document).ready(function(){
    $('.main__regis-arrow').click( function(){ 
	var scroll_el = $(this).attr('href'); 
        if ($(scroll_el).length != 0) { 
	    $('html, body').animate({ scrollTop: $(".footer").offset().top }, 1500); 
        }
	    return false; 
    });
});

//счетчик
var counter = 89;
function timer() {

	counter--;
	document.getElementById("count").innerHTML = counter;
	if (counter == 0) {
		return false;
	}
	setTimeout("timer()", 1000);
}