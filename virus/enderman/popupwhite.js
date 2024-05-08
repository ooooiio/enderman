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
		window.console.error("I will get you for that");
		setInterval(teleport, 75);
		window.console.error("You made a mistake");
	})
})
var unhappy = setInterval(teleport, 125);


