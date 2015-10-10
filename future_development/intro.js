var newHeading = document.createElement("h3");
var newParagraph = document.createElement("p");

var thatte = document.getElementById("name");
var github = document.getElementById("github");
var linkedin = document.getElementById("linkedin");
var facebook = document.getElementById("facebook");

thatte.onmouseover = function(){
	newHeading.innerHTML = "About me";
	newHeading.style.borderTop = "thick solid #FFFFFF";
	newParagraph.innerHTML = "I'm am Vidyadhar";
	document.getElementById("description").appendChild(newHeading);
	document.getElementById("description").appendChild(newParagraph);
};
thatte.onmouseout = function(){
	newHeading.innerHTML = "";
	newHeading.style.borderTop = "none";
	newParagraph.innerHTML = "";
	document.getElementById("description").appendChild(newHeading);
	document.getElementById("description").appendChild(newParagraph);
};

github.onmouseover = function(){
	newHeading.innerHTML = "You can find all my projects here.";
	newHeading.style.borderTop = "thick solid #FFFFFF";
	newParagraph.innerHTML = "All the code I've ever written, a little less than that is here.";
	document.getElementById("description").appendChild(newHeading);
	document.getElementById("description").appendChild(newParagraph);
};
github.onmouseout = function(){
	newHeading.innerHTML = "";
	newHeading.style.borderTop = "none";
	newParagraph.innerHTML = "";
	document.getElementById("description").appendChild(newHeading);
	document.getElementById("description").appendChild(newParagraph);
};

facebook.onmouseover = function(){
	newHeading.innerHTML = "About me";
	newHeading.style.borderTop = "thick solid #FFFFFF";
	newParagraph.innerHTML = "I'm am Vidyadhar";
	document.getElementById("description").appendChild(newHeading);
	document.getElementById("description").appendChild(newParagraph);
};
facebook.onmouseout = function(){
	newHeading.innerHTML = "";
	newHeading.style.borderTop = "none";
	newParagraph.innerHTML = "";
	newHeading.style.borderTop = "none";
	document.getElementById("description").appendChild(newHeading);
	document.getElementById("description").appendChild(newParagraph);
};

linkedin.onmouseover = function(){
	newHeading.innerHTML = "You can find all my projects here.";
	newHeading.style.borderTop = "thick solid #FFFFFF";
	newParagraph.innerHTML = "All the code I've ever written, a little less than that is here.";
	document.getElementById("description").appendChild(newHeading);
	document.getElementById("description").appendChild(newParagraph);
};
linkedin.onmouseout = function(){
	newHeading.innerHTML = "";
	newHeading.style.borderTop = "none";
	newParagraph.innerHTML = "";
	document.getElementById("description").appendChild(newHeading);
	document.getElementById("description").appendChild(newParagraph);
};


