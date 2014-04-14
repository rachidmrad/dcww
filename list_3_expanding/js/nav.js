// Mobile nav JavaScript Document

window.onload = setTimeout(function(){
    $('#arrow').bind("click", expandNav);
	$('#arrow2').bind("click", expandSubNav);
}, 10);


var toggle = 0;
var toggle2 = 0;
var throttleTimeout;

function expandNav() {
	if (toggle == 0) {
		TweenLite.to(arrow, 0.5, {rotation: '540px'});
		TweenLite.to(nav, 0.5, {height: '210px'});	
		toggle=1;
	} else {
		TweenLite.to(arrow, 0.5, {rotation: '0deg'});
		TweenLite.to(arrow2, 0.5, {rotation: '0deg'});
		TweenLite.to(dropDowner, 0.5, {height: '35px'});
		TweenLite.to(dropDown, 0.5, {scaleY: 0, autoAlpha: 0, transformOrigin: "left top", onComplete: function(){$('#dropDown').css('display', 'none');}});
		TweenLite.to(nav, 0.5, {height: '35px'});	
		toggle=0;	
	}
}

function expandSubNav() {
	TweenLite.to(dropDown, 0.5, {scaleY: 0, transformOrigin: "left top"});
	if (toggle2 == 0) {
		TweenLite.to(arrow2, 0.5, {rotation: '540px'});
		$('#dropDown').css('display', 'block');
		TweenLite.to(dropDowner, 0.5, {height: '347px'});
		TweenLite.to(nav, 0.5, {height: '543px'});	
		TweenLite.to(dropDown, 0.5, {scaleY: 1, autoAlpha: 1, transformOrigin: "left top"});	
		toggle2=1;
	} else {
		TweenLite.to(arrow2, 0.5, {rotation: '0deg'});
		TweenLite.to(dropDowner, 0.5, {height: '35px'});
		TweenLite.to(dropDown, 0.5, {scaleY: 0, autoAlpha: 0, transformOrigin: "left top", onComplete: function(){$('#dropDown').css('display', 'none');}});
		TweenLite.to(nav, 0.5, {height: '210px'});
		toggle2=0;	
	}
}

if (jQuery.browser.mobile == false) {

//reset nav on resize
$(window).bind( 'resize', function() {
		// IE fires multiple resize events while you are dragging the browser window which
		// causes it to crash if you try to update the scrollpane on every one. So we need
		// to throttle it to fire a maximum of once every 50 milliseconds...
	if (!throttleTimeout) {
		throttleTimeout = setTimeout(function() { 
			TweenLite.to(nav, 0.2, {height: '35px'});
			TweenLite.to(dropDowner, 0.2, {height: '35px'});	 
			TweenLite.to(arrow, 0.2, {rotation: '0deg'});
			TweenLite.to(arrow2, 0, {rotation: '0deg'});
			TweenLite.to(dropDown, 0, {scaleY: 1, autoAlpha: 1, transformOrigin: "left top"}); 
			$('#dropDown').css('display', 'none');
			toggle2=0;	
			toggle=0; 
			throttleTimeout = null;
			}, 50);
	}
});

}

//hover alternate functionality for touchscreens
document.getElementById('desktopHoverController').onclick=function(){
		window.location = 'solutions.html';
};	

