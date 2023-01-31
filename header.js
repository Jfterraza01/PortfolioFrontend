// funcionalidad que permite que el header se haga grande o diminuto
$(document).ready(function(){

	$(window).scroll(function(){
		if( $(this).scrollTop() > 50 ){
			$('header').addClass('header2');
		} else {
			$('header').removeClass('header2');
		}
	});

});