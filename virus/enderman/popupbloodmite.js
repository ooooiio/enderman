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
		window.console.error("Boss will get you for that");
		setInterval(teleport, 125);
		window.console.error("You made a mistake");
	})
	document.addEventListener("visibilitychange", function(event){
		if (document.visibilityState === "hidden")
		{
			window.open("popupbloodmite.html", "_blank", "popup=true, innerHeight=290, innerWidth=215, menubar=no");
		
		}
	})
})
var unhappy = setInterval(teleport, 250);


