$('#scroll-up').css('visibility', 'hidden');

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

$(document).ready(function(){

	$(window).scroll(function(){
		if( $(this).scrollTop() > 1500 ){
			$('#scroll-up').css('visibility', 'visible');;
		} else {
			$('#scroll-up').css('visibility', 'hidden');
		}
	});

});

// funcionalidad de desplazar hacia arriba
const scrollUp = document.querySelector("#scroll-up");

// scroll to top functionality
scrollUp.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  });

  //$('#scroll-up').css('visibility', 'hidden');
  //$('#scroll-up').css('visibility', 'visible');