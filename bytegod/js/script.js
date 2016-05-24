
			$(".btn-menu").click(function(){
				$(".menu").show();
			});

			$(".btn-close").click(function(){
				$(".menu").hide();
			});



			var offset = $('#menu').offset().top;
			var $meuMenu = $('#menu');
			$(document).on('scroll', function () {
			    if (offset <= $(window).scrollTop()) {
			        $meuMenu.addClass('.fixar');
			    } else {
			        $meuMenu.removeClass('.fixar');
			    }
			});