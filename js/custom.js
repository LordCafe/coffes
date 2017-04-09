(function($){

	$(document).ready(function(){
		var delay = $.Deferred();

		$(".coffe_header").typed({
			strings: [" Hello...", "... Oh my."],
			typeSpeed: 0,
			callback :function(){
				delay.resolve();
			},
		});


		delay.done( function(){
			$(".coffe_footer").typed({
				strings :['  se me acabo el cafe','.... o no!'],
				typeSpeed :2,
			});
		});


});// end ready

})(jQuery);