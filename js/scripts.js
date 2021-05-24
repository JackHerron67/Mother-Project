
const futuroDescription = "futuroDescription futuroDescription futuroDescription futuroDescription futuroDescription futuroDescription futuroDescription futuroDescription futuroDescription futuroDescription futuroDescription futuroDescription futuroDescription futuroDescription futuroDescription futuroDescription futuroDescription futuroDescription futuroDescription futuroDescription futuroDescription futuroDescription futuroDescription futuroDescription futuroDescription futuroDescription futuroDescription futuroDescription futuroDescription futuroDescription futuroDescription futuroDescription futuroDescription futuroDescription futuroDescription futuroDescription futuroDescription futuroDescription futuroDescription futuroDescription futuroDescription futuroDescription futuroDescription futuroDescription futuroDescription futuroDescription futuroDescription futuroDescription futuroDescription futuroDescription futuroDescription futuroDescription futuroDescription futuroDescription futuroDescription futuroDescription futuroDescription futuroDescription futuroDescription futuroDescription ";
const excursionDescription= "excursionDescription excursionDescription excursionDescription excursionDescription excursionDescription excursionDescription excursionDescription excursionDescription excursionDescription excursionDescription excursionDescription excursionDescription excursionDescription excursionDescription excursionDescription excursionDescription excursionDescription excursionDescription excursionDescription excursionDescription excursionDescription excursionDescription excursionDescription excursionDescription excursionDescription excursionDescription excursionDescription excursionDescription excursionDescription excursionDescription excursionDescription excursionDescription excursionDescription excursionDescription excursionDescription excursionDescription ";
const teaDescription= "teaDescription teaDescription teaDescription teaDescription teaDescription teaDescription teaDescription teaDescription teaDescription teaDescription teaDescription teaDescription teaDescription teaDescription teaDescription teaDescription teaDescription teaDescription teaDescription teaDescription teaDescription teaDescription teaDescription teaDescription teaDescription teaDescription teaDescription teaDescription teaDescription teaDescription teaDescription teaDescription teaDescription teaDescription teaDescription teaDescription teaDescription teaDescription teaDescription teaDescription teaDescription teaDescription teaDescription teaDescription teaDescription teaDescription teaDescription teaDescription teaDescription teaDescription teaDescription teaDescription teaDescription teaDescription teaDescription teaDescription teaDescription teaDescription teaDescription teaDescription teaDescription teaDescription teaDescription teaDescription teaDescription teaDescription teaDescription teaDescription teaDescription teaDescription ";
const desmotoDescription= "desmotoDescription desmotoDescription desmotoDescription desmotoDescription desmotoDescription desmotoDescription desmotoDescription desmotoDescription desmotoDescription desmotoDescription desmotoDescription desmotoDescription desmotoDescription desmotoDescription desmotoDescription desmotoDescription desmotoDescription desmotoDescription desmotoDescription desmotoDescription desmotoDescription desmotoDescription desmotoDescription desmotoDescription desmotoDescription desmotoDescription desmotoDescription desmotoDescription desmotoDescription desmotoDescription desmotoDescription desmotoDescription desmotoDescription desmotoDescription desmotoDescription desmotoDescription desmotoDescription desmotoDescription desmotoDescription desmotoDescription desmotoDescription desmotoDescription desmotoDescription desmotoDescription desmotoDescription desmotoDescription desmotoDescription desmotoDescription desmotoDescription desmotoDescription desmotoDescription desmotoDescription desmotoDescription desmotoDescription desmotoDescription desmotoDescription desmotoDescription desmotoDescription desmotoDescription desmotoDescription desmotoDescription desmotoDescription desmotoDescription desmotoDescription desmotoDescription ";
const futuro = ["Futuro", futuroDescription, "personal-project.html"];
const excursion = ["Excursion", excursionDescription, "excursion.html"];
const tea = ["Tea Cozy", teaDescription, "tea-cozy.html"];
const desmoto = ["Desmoto", desmotoDescription, "desmoto.html"];
const websites = [futuro, excursion, tea, desmoto];
let webSelector = 0;
const makeWebsite = website =>{
	document.getElementById("website-container").innerHTML = "<embed src=" + website[2] +">";
	document.getElementById("site-link").innerHTML = "<a href=" + website[2] +">Visit Site</a>";
	document.getElementById("description").innerHTML = website[1];
	document.getElementById("project-name").innerHTML = website[0];
}
const displayNextWebsite = () =>{
	if(webSelector===3){
		webSelector = 0;
	}
	else{
		webSelector+=1;
	}
	
	
	makeWebsite(websites[webSelector]);
}
const displayPreviousWebsite = () =>{
	if(webSelector===0){
		webSelector = 3;
	}
	else{
		webSelector-=1;
	}
	makeWebsite(websites[webSelector]);
	
}
makeWebsite(websites[0]);
document.getElementById("right").onclick = displayNextWebsite;
document.getElementById("left").onclick = displayPreviousWebsite;