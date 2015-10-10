var newUL = document.createElement("ul");

var blog = document.createElement("li");
var port = document.createElement("li");
var github = document.createElement("li");
var challengePost = document.createElement("li");
var linkedin = document.createElement("li");

var menuButton = document.getElementById("menu");
var img = "menu";

menuButton.onclick = function(){
	console.log(menuButton.src);
	if( img == "menu" ){
		showMenu();
		menuButton.src = "https://maxcdn.icons8.com/iOS7/PNG/25/User_Interface/delete_sign_filled-25.png";
		img = "exit";
	}
	else{
		dissapearMenu();
		menuButton.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAACAElEQVRoQ+3Z7U0DMQwGYGcC2IAyAWWDMjlsAExA2QAmCDJKpKrqxe9rO+qpuvtLcfKcE+fjitzIU27EIRtkbZncMrJlZNIboIdWrfVeRJ5E5LuUcszsV611JyIPIvJZSvlhYlOQWuteRF5FRDHa0Esp5YNpcOm30dgw5Kyh3p8UTEZsCLLQUAomK7YJMRoKYTJjDyFtYn+1OWFNBWqYgYjTF/U4KgAW5NAmt4WgMkMiemwtLG9LHbEgWg61Kt2hEquaORG/IrIflXt0juibCGMCiINV5k2IZqJ1IISZidA+QpAopg3LvpCio1SHk5mJHgyGBDH677obQB8KQWWk98A5zFCA/o5GuCCBzCAYF8INmYRxI0KQZEwIEYYkYcKIFEgQk4LIhrDrhLZPbTRH1YJaRy4Fcq7Yp6FSMCFIAqKDwhg3JBGRgnFBJiDCGBoyERHCUBAnQkusPuHzTErVCiD0uKxP6DxjbdSgjEQQ/WTn3DXD1cyEZCD625yJQS4f3jMPRQHMs/vyodbKXgdBeycnJnQdpMdTvXFHKg6EcA4zjb1zX9ARO1sKQWKg2OZkBzBQQ0vl0xhmcGwIMsDADY3WgQUMFRuGXMBQDVkL2hmGjk1BGkYLgH65Ok769PZ/3zz105v1Vq/5dzoj1+xsyqZxrYDery0ja8vQlpG1ZeQPb6JQQmOLdfMAAAAASUVORK5CYII=";
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
	blog.style.listStyleType = "none";
	port.style.fontSize = "5vw";
	port.style.listStyleType = "none";
	github.style.fontSize = "5vw";
	github.style.listStyleType = "none";
	challengePost.style.fontSize = "5vw";
	challengePost.style.listStyleType = "none";
	linkedin.style.fontSize = "5vw";
	linkedin.style.listStyleType = "none";
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