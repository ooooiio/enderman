document.addEventListener("DOMContentLoaded", function(){
	let summon = document.querySelector("#summon");
	summon.addEventListener("click", function(){
		window.open("popup.html", "_blank", "popup=true, innerHeight=290, innerWidth=215, menubar=no")
	})
	
})