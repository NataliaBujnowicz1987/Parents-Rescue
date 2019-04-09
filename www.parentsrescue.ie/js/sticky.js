$(document).ready(function(){    // when the document is ready performs the functions below
	var NavY = $('nav').offset().top;	// reads the top div .nav
	
	var stickyNav = function () {	// function StickyNav
	var ScrollY = $(window).scrollTop();  // reads the top of the current value of the page (scroll)

	if (ScrollY > NavY) {	// compares the value of the top (Y) scroll and .nav
			$('nav').addClass('sticky');  // if user scrolls more that top .nav then function adds the class 'sticky' - in effect, the menu is sticks to the top edge
	} else {
		$('nav').removeClass('sticky'); // otherwise, if the scroll is smaller than the highest .nav, then the "sticky" class does nothing
	}
	};
	// calls function
	stickyNav();
	
	$(window).scroll(function() {
			stickyNav();
	});
});