$(document).ready(function(){

    $("input,textarea").jqBootstrapValidation({
        preventSubmit: true,
        submitError: function($form, event, errors) {
            // additional error messages or events
        },

        filter: function() {
            return $(this).is(":visible");
        },
    });

	$("#testimonial-slider").owlCarousel({
	    paginationSpeed : 800,      
	    singleItem:true,
	    autoPlay: 8000,
	});

	$("#customer-logos").owlCarousel({
  		autoPlay: 3000,
  		items : 7,
  		itemsDesktop : [1199,5],
  		itemsDesktopSmall : [979,5],
  	});
    
    $("#product-features-slider").owlCarousel({
	    paginationSpeed : 800,      
	    singleItem:true,
	    autoPlay: 8000,
	});
    
	$(".fancybox").fancybox();

});
