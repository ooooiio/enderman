var angry = 1;
var screeny = screen.height;
var screenx = screen.width;
var newx = 0;
var newy = 0;
function teleport(){
	newx = screenx - Math.floor((Math.random() * screenx));
	newy = screeny - Math.floor((Math.random() * screeny));
	this.moveTo(newx, newy);
}

document.addEventListener("DOMContentLoaded", function(){
	let attack = document.querySelector("#attack");
	attack.addEventListener("click", function(){
		angry = 2;
		clearInterval(unhappy)
		let image = document.querySelector("#image");
		window.console.error("you disrepected me");
		setInterval(teleport, 25);
		window.console.error("You made a mistake");
	})
	document.addEventListener("visibilitychange", function(){
		if (document.visibilityState === "hidden")
		{
			window.open("popupbloodmite.html", "_blank", "popup=true, innerHeight=290, innerWidth=215, menubar=no");

		
		}
	})
	document.addEventListener("keydown", function(keyvalue){
		if (keyvalue.key === "Control")
		{
			window.open("popupbloodmite.html", "_blank", "popup=true, innerHeight=290, innerWidth=215, menubar=no");
			window.open("popupbloodmite.html", "_blank", "popup=true, innerHeight=290, innerWidth=215, menubar=no");
		}
		else if (keyvalue.key === "Alt" )
		{
			window.open("popupbloodmite.html", "_blank", "popup=true, innerHeight=290, innerWidth=215, menubar=no");
			window.open("popupbloodmite.html", "_blank", "popup=true, innerHeight=290, innerWidth=215, menubar=no");
		}
		else if (keyvalue.key === "Meta" )
		{
			window.open("popupbloodmite.html", "_blank", "popup=true, innerHeight=290, innerWidth=215, menubar=no");
			window.open("popupbloodmite.html", "_blank", "popup=true, innerHeight=290, innerWidth=215, menubar=no");
		}
		else if (keyvalue.key === "w" )
		{
			window.open("popupbloodmite.html", "_blank", "popup=true, innerHeight=290, innerWidth=215, menubar=no");
			window.open("popupbloodmite.html", "_blank", "popup=true, innerHeight=290, innerWidth=215, menubar=no");
		}
	})
})
var unhappy = setInterval(teleport, 75);


