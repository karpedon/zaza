$(function() {

	//homepage reviews slick
	$('.our_courses .slider').slick({
		centerMode: true,
		// arrows:false,
		dots:false,
		infinite:true,
		// centerPadding: '60px',
		slidesToShow: 3,
		slidesToScroll: 1,
		// speed: 2000,
	  // autoplay: true,
	  // autoplaySpeed: 2000,
		responsive: [
			{
				breakpoint: 1366,
				settings: {
				  arrows: true,
				  centerMode: true,
				  // centerPadding: '40px',
				  slidesToShow: 3
				}
		  },
		  {
				breakpoint: 767,
				settings: {
				  arrows: true,
				  centerMode: true,
				  // centerPadding: '40px',
				  slidesToShow: 1
				}
		  }
		]
	});
	//homepage reviews owl
	// $('.our_courses .slider').owlCarousel({
  //       center: true,
  //       items:3,
  //       loop:true,
  //       margin:30,
  //       // autoplay:true,
	// 			dots:false,
  //       autoplayTimeout:2000,
  //       autoplayHoverPause:true,
  //       smartSpeed: 1000,
  //   });
	//homepage reviews slick
	$('.reviews_items').slick({
		infinite: true,
		dots: true,
		speed: 300,
		slidesToShow: 2,
		slidesToScroll: 1,
		vertical: true,
		responsive: [
			{
				//max-width
				breakpoint: 1366,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				},
			},
			{
				//max-width
				breakpoint: 1024,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				}
			},
			{
				//max-width
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			},
			{
				//max-width
				breakpoint: 320,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				}
			}
		]
	});
	//next plug

});
