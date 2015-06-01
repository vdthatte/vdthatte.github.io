function loadComplete(){
	console.log("window loaded successfully");
}

document.onscroll = function() {
	console.log("scrolling");
}


window.onload = function() {
	//include all the javascript functions here.
	loadComplete();
	window.scrollBy(0,80);
}