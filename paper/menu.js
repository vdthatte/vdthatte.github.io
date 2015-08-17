var newUL = document.createElement("ul");

var blog = document.createElement("li");
var port = document.createElement("li");
var github = document.createElement("li");
var challengePost = document.createElement("li");
var linkedin = document.createElement("li");

var menuButton = document.getElementById("menu");
var img = "menu";
menuButton.onclick = function(){
	if( img == "menu" ){
		showMenu();
		menuButton.src = "https://maxcdn.icons8.com/iOS7/PNG/25/User_Interface/delete_sign_filled-25.png";
		img = "exit"
	}
	else{
		dissapearMenu();
		menuButton.src = "https://maxcdn.icons8.com/Android/PNG/24/User_Interface/menu-24.png";
		img = "menu";
	}
}

function showMenu(){
	blog.innerHTML = "<a href='blog.html'>BLOG</a>";
	port.innerHTML = "<a href='portfolio.html'>PORTFOLIO</a>";
	github.innerHTML = "<a href='http://github.com/vdthatte'>GITHUB</a>";
	challengePost.innerHTML = "<a href='http://devpost.com/vdThatte'>CHALLENGE POST</a>";
	linkedin.innerHTML = "<a href='https://www.linkedin.com/in/vdthatte'>LINKEDIN</a>";
	blog.style.fontSize = "5vw";
	port.style.fontSize = "5vw";
	github.style.fontSize = "5vw";
	challengePost.style.fontSize = "5vw";
	linkedin.style.fontSize = "5vw";
	document.getElementById("menuList").appendChild(blog);
	document.getElementById("menuList").appendChild(port);
	document.getElementById("menuList").appendChild(github);
	document.getElementById("menuList").appendChild(challengePost);
	document.getElementById("menuList").appendChild(linkedin);
}

function dissapearMenu(){
	blog.innerHTML = "";
	port.innerHTML = "";
	github.innerHTML = "";
	challengePost.innerHTML = "";
	linkedin.innerHTML = "";
	document.getElementById("menuList").appendChild(blog);
	document.getElementById("menuList").appendChild(port);
	document.getElementById("menuList").appendChild(github);
	document.getElementById("menuList").appendChild(challengePost);
	document.getElementById("menuList").appendChild(linkedin);
}