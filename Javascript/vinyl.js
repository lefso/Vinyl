
/* funksjon som får vinylplaten til å spinne */
var looper;
var degrees = 0;
function rotateAnimation(element,speed){
    var el = document.getElementById(element);
    if(navigator.userAgent.match("Chrome")){
        el.style.WebkitTransform = "rotate("+degrees+"deg)";
					} 
					else if(navigator.userAgent.match("Firefox")){
						el.style.MozTransform = "rotate("+degrees+"deg)";
					} 
					else if(navigator.userAgent.match("MSIE")){
						el.style.msTransform = "rotate("+degrees+"deg)";
					} 
					else if(navigator.userAgent.match("Opera")){
						el.style.OTransform = "rotate("+degrees+"deg)";
					} else {
						el.style.transform = "rotate("+degrees+"deg)";
					}
						looper = setTimeout('rotateAnimation(\''+element+'\','+speed+')',speed);
						degrees++;
					if(degrees > 359){
						degrees = 1;
					}
					}

rotateAnimation("liten_logo",30);