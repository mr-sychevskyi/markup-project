$(function () {

	$('.navbar-toggle').on("click", function(e) {
		e.preventDefault();
		
		if ( $('.hero-section').hasClass('is-open') ) {
			$('.main-navigation').hide('400');
			$('.navbar-toggle').removeClass('collapsed');
			$('.hero-section').removeClass('is-open');
		} else { 
			$('.main-navigation').show('400');
			$('.navbar-toggle').addClass('collapsed');
			$('.hero-section').addClass('is-open');
		}
	});

});