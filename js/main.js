$('.carousel').carousel();

var hamburger = document.getElementById('hamburgerButton');

hamburgerButton.onclick = () => {
	var line2 = document.getElementById("secondLine").style.display;


	if (line2 == "none") {
		document.getElementById("firstLine").classList.remove("change1");
		document.getElementById("secondLine").style.display = "block";
		document.getElementById("thirdLine").classList.remove("change2");

	}	else	{
		document.getElementById("firstLine").classList.add("change1");
		document.getElementById("secondLine").style.display = "none";
		document.getElementById("thirdLine").classList.add("change2");
	}
	
}

     