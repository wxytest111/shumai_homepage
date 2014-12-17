jQuery(document).ready(function(){

	// Header link fades

	jQuery("#header li").not('.middle').mouseover(function(){
	
		jQuery(this).siblings().not('.middle').addClass("fade");
		
	}).mouseout(function(){
	
		jQuery(this).siblings().not('.middle').removeClass("fade");
		
	});
	
	/**
	 *	Masonry Logic
	 *	For resolutions < 767, Masonry is NOT enabled and the page 
	 *	renders as per CSS. >= 767, the page uses Masonry.
	 *	Responsive ;)
	 */
	
	var 
	jQuerywindow = jQuery(window),
	jQueryblogMasonry = jQuery("#blog"),
	masonryEnabled,
	scale = function () {
		// For mobile situations...
		if (jQuerywindow.outerWidth(true) < 767) {
			if (masonryEnabled === true) {
				jQueryblogMasonry.masonry('destroy');
				masonryEnabled = false;
			}
		}
		
		// For desktop situations...
		else {
			if (masonryEnabled !== true) {
				jQueryblogMasonry.masonry({
					itemSelector: '.post',
					cornerStampSelector: '.pinned',
					columnWidth: 225,
					gutterWidth: 20,
					isResizable: true
				});
				masonryEnabled = true;
			}
		}
	}
	jQuerywindow.resize(scale);
	scale();
	
	jQuery(".post.default, .post.pinned, .post.photo").css("cursor","pointer");
	
	jQuery(".post.default, .post.pinned, .post.photo").click(function(){
	     window.location=jQuery(this).find("a").attr("href");
	     return false;
	});

	// Paralax Homepage Banner

	jQuery("#banner").mousemove(
		function(e){
			/* Work out mouse position */
			var offset = jQuery(this).offset();
			var xPos = e.pageX - offset.left;
			var yPos = e.pageY - offset.top;

			/* Get percentage positions */
			var mouseXPercent = Math.round(xPos / jQuery(this).width() * 100);
			var mouseYPercent = Math.round(yPos / jQuery(this).height() * 100);

			/* Position Each Layer */
			jQuery(this).children('img').each(
				function(){
					var diffX = jQuery('#Parallax').width() - jQuery(this).width();
					var diffY = jQuery('#Parallax').height() - jQuery(this).height();

					var myX = diffX * (mouseXPercent / 1500); //) / 100) / 2;


					var myY = diffY * (mouseYPercent / 1080);


					var cssObj = {
						'left': myX + 'px',
						'top': myY + 'px'
					}
					//jQuery(this).css(cssObj);
					jQuery(this).animate({left: myX, top: myY},{duration: 50, queue: false, easing: 'linear'});

				}
			);

		}
	);
	
	// Scroll to top

	jQuery("a.top").click(function () {
		jQuery('body,html').animate({
			scrollTop: 0
		}, 800);
		return false;
	});
	
	// Contact form
	
	jQuery("input[type=text], textarea").each(function() {
	    var default_value = this.value;
	    jQuery(this).focus(function() {
	        if(this.value == default_value) {
	            this.value = '';
	        }
	    });
	    jQuery(this).blur(function() {
	        if(this.value == '') {
	            this.value = default_value;
	        }
	    });
	});
	
});

jQuery(window).scroll(function() {

	// Pin header on scroll
	   
	var value = jQuery(this).scrollTop();
	
	if ( value > 10 ) {
		jQuery("#header").addClass("pinned");		
	} 
	else {
		jQuery("#header").removeClass("pinned");
	}
});