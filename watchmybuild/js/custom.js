
		// Demo - Swiping module
		var swiper = new Swiper('.swiper-container', {
			pagination: '.swiper-pagination',
			slidesPerView: 'auto',
			paginationClickable: true,
			grabCursor: true,
			cssWidthAndHeight: true,
			visibilityFullFit: true,
			freeMode: true
		});
   
		// Demo - Zooming module
		$('#slider-preview').smoothZoom({
			responsive: false,
			responsive_maintain_ratio: true,
			width: '100%',
			max_WIDTH: '',
			max_HEIGHT: '',
			zoom_BUTTONS_SHOW: 'NO',
			pan_BUTTONS_SHOW: 'NO',
			pan_LIMIT_BOUNDARY: 'NO',
			pan_LIMIT_BOUNDARY: true,
			background_COLOR: '#202020',
			zoom_MAX: 150,
			initial_ZOOM: 50
			
		});
	 
		  // Waypoints for menu transitions throughout page
          var waypoints = $('.data-waypoint').waypoint(function(direction) {
              if($(this.element).data('waypoint'))
			  {
				  var current = $(this.element).data('waypoint');
				  $("header nav ul a").removeClass('active');
				  $("header nav ul").find("a[href='#" + current + "']").addClass('active');
			  }
            });

		new WOW().init();
     
		// Waypoints for menu transitions in clicks
	  	$(function() {
			var videoplayer = '<video autoplay loop style="background-image:url(img/laptop-bg-1.jpg);">'+
					  '<source src="vid/wmb-preview-small.webm" type="video/webm">' +
					  'Your browser does not support the video tag.' +
					'</video>';
			$('#video-player').html(videoplayer);
		  $('a[href*="#"]:not([href="#"])').click(function() {
			if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			  var target = $(this.hash);
			  target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			  if (target.length) {
				  setTimeout(function(){
					  var current = target.selector;
					  $("header nav ul a").removeClass('active');
					  $("header nav ul").find("a[href='" + current + "']").addClass('active');
				  },550);
				$('html, body').animate({
				  scrollTop: target.offset().top
				}, 500);
				return false;
			  }
			}
		  });
		});
	  