const menu = document.getElementById("dropdown");

const hideMenu = (event)=>{
	document.getElementById("nav").style.display="";
	menu.onclick = showMenu;
	event.target.style.transform = "rotate(0deg)";
}
const showMenu = (event) =>{
	document.getElementById("nav").style.display="flex";
	menu.onclick = hideMenu;
	event.target.style.transform = "rotate(180deg)";
}

menu.onclick = showMenu;
