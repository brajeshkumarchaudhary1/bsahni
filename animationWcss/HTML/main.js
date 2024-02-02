

let navbar = document.getElementById("navbar");
let menu = document.getElementById("menu");
let isOpen = false;
let badymain = document.getElementById("badyMain");
var search = document.getElementById("search-head");

menu.addEventListener('click', function navbarfuc() {
	menu.classList.toggle("openmenu");
	isOpen = !isOpen;
	badymain.classList.toggle("backopacity");

	if (isOpen) {
	navbar.classList.toggle("hidenav");

	} else {
		navbar.classList.toggle("hidenav");
		
	}
	// Tab to edit
});



function searchIpt(){
	search.style.display = "block";
	// Tab to edit
}

function badyMain() {
		search.style.display = "none";
		isOpen = !isOpen;
		if (isOpen) { 
		
			
		} 
}






