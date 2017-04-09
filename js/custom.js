(function($){

	function tell_me( ) {
		var self = this ;

		this.begin = function ( ) {
			console.log('works ..!');
		}

		this.inter = function ( ) {
			console.log('works ..!');
		}
		this.end = function ( ) {
			console.log('works ..!');
		}


		this.execute = function ( name  ) {
			if( typeof self[ name ] === 'function'){
				self[name]();
			}else{
				console.log( 'not work ...', name );
			}
		}

		return this;
	}



	$(document).ready(function(){
		var delay = $.Deferred();
		var history = new tell_me();

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

		var types = jQuery('.type');

		wait_type( types, 0  );        

		function wait_type ( $dom, key ){
			var current = jQuery($dom[key]);
			var total_length = $dom.length;
			var current_key = key +1;

			if(current_key <= total_length){

				var type = current.attr('data-type');
				var array = type.split('||');
				var callback = current.attr('data-callback');
				history.execute( callback );		

				current.typed({
					strings : array,
					typeSpeed :2,
				
					callback : function(){
						

						if( current_key <= total_length ){
							//console.log( key , current_key );
							wait_type($dom , current_key );
						}
					}
				});



			}

		}

});// end ready





})(jQuery);