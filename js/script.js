var coverImage = document.getElementById("cover-image");
var coverImageTransitionStringValue = "15s";

var fWHeader = document.getElementsByTagName("h3")[0];
var fWHeaderTransDelay = 1000;
var fWHeaderTransTime = "3s";
var fWHeaderMaxOpacity = 1;

var fWContainers = document.getElementsByClassName("featured-work-container");
var fWContainersTransitionTime = "1s";
var fWContainersTransitionTF = "ease-in";


//////////////////////////////////////////////////////////////////////////////


var setElements = function() {
	coverImage.style.transform = "scale(1.2)";
	coverImage.style.webkitTransform = "scale(1.2)";
	coverImage.style.mozTransform = "scale(1.2)";
	hideFWHeader();
	hideFWContainers("translateX(-500%)");
}();

document.body.addEventListener("load", initAnimations());

function initAnimations() {
	window.setTimeout(function() {
		animateCoverImage(coverImageTransitionStringValue);
		showFWContainers(fWContainersTransitionTime);
		showFWHeader(fWHeaderTransTime, fWHeaderMaxOpacity);
	}, 0);
}

function animateCoverImage(coverImageTransitionStringValue) {
	coverImage.style.transition = coverImageTransitionStringValue;
	coverImage.style.webkitTransition = coverImageTransitionStringValue;
	coverImage.style.mozTransition = coverImageTransitionStringValue;
		coverImage.style.transform = "scale(1)";
		coverImage.style.webkitTransform = "scale(1)";
		coverImage.style.mozTransform = "scale(1)";
	
	window.setTimeout(function() {
		coverImage.style.transition = "0s";
		coverImage.style.webkitTransition = "0s";
		coverImage.style.mozTransition = "0s";
	}, function() {
		var val = parseInt(coverImageTransitionStringValue);
		val = val * 1000;
		return val;
	}());
}

function showFWHeader(transitionStringValue, opacityValue) {
	window.setTimeout(function() {
		fWHeader.style.transition = transitionStringValue;
		fWHeader.style.webkitTransition = transitionStringValue;
		fWHeader.style.mozTransition = transitionStringValue;
		fWHeader.style.opacity = opacityValue;
		window.setTimeout(function() {
			fWHeader.style.transition = "0s";
			fWHeader.style.webkitTransition = "0s";
			fWHeader.style.mozTransition = "0s";
		}, function() {
			var val = parseInt(transitionStringValue);
			val = val * 1000;
			return val;
		}());
	}, fWHeaderTransDelay);
}

function hideFWHeader() {
	fWHeader.style.opacity = "0";
}

function hideFWContainers(transformStringValue) {
	for (i = 0; i < fWContainers.length; i++) {
		fWContainers[i].style.transform = transformStringValue;
		fWContainers[i].style.webkitTransform = transformStringValue;
		fWContainers[i].style.mozTransform = transformStringValue;
	}
}

function showFWContainers(transitionStringValue) {
	for (i = 0; i < fWContainers.length; i++) {
		var delayShift = function() {
			var iVal = i;
			window.setTimeout(function() {
				fWContainers[iVal].style.transitionTimingFunction = fWContainersTransitionTF;
				fWContainers[iVal].style.webkitTransitionTimingFunction = fWContainersTransitionTF;
				fWContainers[iVal].style.mozTransitionTimingFunction = fWContainersTransitionTF;
				fWContainers[iVal].style.transition = transitionStringValue;
				fWContainers[iVal].style.webkitTransition = transitionStringValue;
				fWContainers[iVal].style.mozTransition = transitionStringValue;
				fWContainers[iVal].style.transform = "translateX(0)";
				fWContainers[iVal].style.webkitTransform = "translateX(0)";
				fWContainers[iVal].style.mozTransform = "translateX(0)";
			}, function() {
				var val = parseInt(transitionStringValue);
				val = val * 1000 * iVal;
				return val;
			}());
		}();
	}
	window.setTimeout(function() {
		for (j = 0; j < fWContainers.length; j++) {
			console.log(j);
			fWContainers[j].style.transition = "0s";
			fWContainers[j].style.webkitTransition = "0s";
			fWContainers[j].style.mozTransition = "0s";
		}
	}, function() {
		var val = parseInt(transitionStringValue);
		val = val * fWContainers.length * 1000;
		return val;
	}());
}