function loadComplete(){
	console.log("window loaded successfully");
}

document.onscroll = function() {
	console.log("scrolling");
}

var blog_button = document.getElementById("menu_li");
var about_button = document.getElementById("menu_li");
var contact_button = document.getElementById("menu_li");
var portfolio_button = document.getElementById("menu_li");

menu_button.onClick() = function(){
	window.onscrollBy();
}

window.onload = function() {
	//include all the javascript functions here.
	loadComplete();
	window.scrollBy(0,80);
}