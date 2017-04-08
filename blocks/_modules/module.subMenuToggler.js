/*******************************************************
					MODULE subMenuToggler
*******************************************************/
(function($) {
	"use strict";
	
	var methods = {

		init : function(params) {
			var options = $.extend({
				speed: 100
			}, params);

			var $nav = $(this);
			var $topmenu = $nav.find(".main-nav__topmenu");
			var $submenu = $nav.find(".main-nav__submenu");
			var $link = $topmenu.find(".main-nav__link--isTopMenu");
			var $icon = $nav.find(".main-nav__icon");

			$link.on("click", function(e) {
				//console.log("click");
				e.preventDefault();
				$submenu.toggleClass("main-nav__submenu--isActive");
				$icon.toggleClass("main-nav__icon--isOpen");
			});
		}
	};

	$.fn.subMenuToggler = function(method) {
		if ( methods[method] ) {
			return methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
		} else if ( typeof method === 'object' || ! method ) {
			return methods.init.apply( this, arguments );
		} else {
			$.error('Метод "' + method + '" в плагине не найден');
		}
	};
})(jQuery);