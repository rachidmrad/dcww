// JavaScript Document



// ipod bug fix
if (navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i)) {
    var viewportmeta = document.querySelector('meta[name="viewport"]');
    if (viewportmeta) {
        viewportmeta.content = 'width=device-width, minimum-scale=1.0, maximum-scale=1.0, initial-scale=1.0';
        document.body.addEventListener('gesturestart', function () {
            viewportmeta.content = 'width=device-width, minimum-scale=0.25, maximum-scale=1.6';
        }, false);
    }
}
//END



var toggleState = 0;
$(document).ready(function(){
		
		var menuButton = document.getElementById('hamburger');
		menuButton.onclick = function(){toggleSlide();};
		
	function toggleSlide(){
		if (toggleState === 0) {
			
			TweenMax.to(slideNavigation, 0.5, {left: '35%'});
			toggleState = 1;
		} else {
			
			TweenMax.to(slideNavigation, 0.7, {left: '100%'});
			toggleState = 0;
		}
	};
	
});



