/*******************************************************
					MODULE topMenuToggler
*******************************************************/
(function($) {
	"use strict";
	
	var methods = {

		init : function(params) {
			var options = $.extend({
				speed: 400
			}, params);

			var $topmenu = $(".main-nav");
			var $submenu = $(".main-nav__submenu");
			
			$(this).on("click", function() {
				$topmenu.slideToggle(options.speed);
				$(this).toggleClass("menu-btn--isActive");
				if ($submenu.hasClass("main-nav__submenu--isActive")) {
					$submenu.removeClass("main-nav__submenu--isActive");
				}
			});
		}
	};

	$.fn.topMenuToggler = function(method) {
		if ( methods[method] ) {
			return methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
		} else if ( typeof method === 'object' || ! method ) {
			return methods.init.apply( this, arguments );
		} else {
			$.error('Метод "' + method + '" в плагине не найден');
		}
	};
})(jQuery);