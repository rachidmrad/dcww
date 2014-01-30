// JavaScript Document

/**
* ScrollFix v0.1
* http://www.joelambert.co.uk
*
* Copyright 2011, Joe Lambert.
* Free to use under the MIT license.
* http://www.opensource.org/licenses/mit-license.php
*/

var ScrollFix = function(elem) {
// Variables to track inputs
var startY, startTopScroll;

elem = elem || document.querySelector(elem);

if(!elem)
return;

elem.addEventListener('touchstart', function(event){
startY = event.touches[0].pageY;
startTopScroll = elem.scrollTop;

if(startTopScroll <= 0)
elem.scrollTop = 1;

if(startTopScroll + elem.offsetHeight >= elem.scrollHeight)
elem.scrollTop = elem.scrollHeight - elem.offsetHeight - 1;
}, false);
};


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
		var scrollable = document.getElementById("slideNavigation");
		new ScrollFix(scrollable);
		
		var menuButton = document.getElementById('menuButton');
		menuButton.onclick = function(){toggleSlide();};
		
	function toggleSlide(){
		var currentWidth = $('#wrapper').width();					   
		var slidingWidth = -(currentWidth - 28);
		if (toggleState === 0) {
			TweenLite.to(mainContent, 0.5, {left: slidingWidth + 'px'});
			
			TweenLite.to(wrapper, 0, {height: '100%'});
			TweenLite.to(mainContent, 0, {height: '100%'});
			
			
			TweenLite.to(slideNavigation, 0.5, {left: '0%'});
			toggleState = 1;
		} else {
			TweenLite.to(mainContent, 0.7, {left: '0%'});	
			
			TweenLite.to(wrapper, 0, {height: 'auto'});
			TweenLite.to(mainContent, 0, {height: 'auto'});
			
			TweenLite.to(slideNavigation, 0.7, {left: '50%'});
			toggleState = 0;
		}
	};
	
	
// ipad orientation change fix for the navigation
window.addEventListener("orientationchange", function() {
		if (toggleState === 1) {
            TweenLite.to(mainContent, 0.7, {left: '0%'});	
			TweenLite.to(slideNavigation, 0.7, {left: '50%'});
			TweenLite.to(wrapper, 0, {height: 'auto'});
			TweenLite.to(mainContent, 0, {height: 'auto'});
			toggleState = 0;
		}
        }, false);

});



