$('.carousel').carousel();

var hamburger = document.getElementById('hamburgerButton');
var header = document.getElementById("header");
var logo = document.getElementById("logo");

hamburgerButton.onclick = () => {
	var line2 = document.getElementById("secondLine").style.display;
	var navWidth = document.getElementById('nav').style.width;

	if (line2 == "none") {
		document.getElementById("firstLine").classList.remove("change1");
		document.getElementById("secondLine").style.display = "block";
		document.getElementById("thirdLine").classList.remove("change2");

	}	else	{
		document.getElementById("firstLine").classList.add("change1");
		document.getElementById("secondLine").style.display = "none";
		document.getElementById("thirdLine").classList.add("change2");
	}
	if (navWidth == "70%") {
		document.getElementById("nav").style.width = "0";
	} else	{
		document.getElementById("nav").style.width = "70%";
	}
	
}

window.onscroll = () => {

  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    header.style.transform = "none";
    header.style.height = "60px";
    logo.style.height = "60px";
    hamburger.style.transform = "none";
    hamburger.style.marginTop = "22px";
  } else {
    header.style.transform = "rotate(-15deg)";
    header.style.height = "120px";
    logo.style.height = "120px";
    hamburger.style = "rotate(15deg)";
    hamburger.style.marginTop = "60px";
  }
}

     