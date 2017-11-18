import "./css/main.scss";



// установливаем обработчик события resize
	$( window ).resize(function() {
		console.log('width', $( window ).width());

		var mobileWidth = $( window ).width() < 740;

		console.log('mobileWidth', mobileWidth);

		if ( mobileWidth ) {
			mySlider();  // вызовем событие слайдер
		}
	  
	});

	// вызовем событие resize
	$(window).resize();

	function mySlider() {
		var controls = document.querySelectorAll('.controls');

		for(var i=0; i<controls.length; i++){
		    controls[i].style.display = 'inline-block';
		}

		var slides = document.querySelectorAll('.product_galery .item_gallery');
		var currentSlide = 0;
		var slideInterval = setInterval(nextSlide,3000);

		function nextSlide(){
		    goToSlide(currentSlide+1);
		}

		function previousSlide(){
		    goToSlide(currentSlide-1);
		}

		function goToSlide(n){
		    slides[currentSlide].className = 'item_gallery';
		    currentSlide = (n+slides.length)%slides.length;
		    slides[currentSlide].className = 'item_gallery showing';
		}

		var playing = true;

		function playSlideshow(){
		    playing = true;
		    slideInterval = setInterval(nextSlide,2000);
		}

		var next = document.getElementById('next');
		var previous = document.getElementById('previous');

		next.onclick = function(){
		    nextSlide();
		};

		previous.onclick = function(){
		    previousSlide();
		};
	}
