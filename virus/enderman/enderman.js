document.addEventListener("DOMContentLoaded", function(){
	let summon = document.querySelector("#summon");
	summon.addEventListener("click", function(){
		window.open("popup.html", "_blank", "popup=true, innerHeight=290, innerWidth=215, menubar=no");
	})
	let summonwhite = document.querySelector("#summonwhite");
	summonwhite.addEventListener("click", function(){
		window.open("popupwhite.html", "_blank", "popup=true, innerHeight=290, innerWidth=215, menubar=no");
	})
	let bloodsummon = document.querySelector("#summonblood");
	bloodsummon.addEventListener("click", function(){
		window.open("popupblood.html", "_blank", "popup=true, innerHeight=290, innerWidth=215, menubar=no");
	})	
})