
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
		let image = document.querySelector("#image");
		image.src = "angryenderman.png";
		
	})

})
happy = setInterval(teleport, 250);
