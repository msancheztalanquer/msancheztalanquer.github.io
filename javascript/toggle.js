function toggleFactory(section)
{

	return function toggle()
	{

		var inputs = document.getElementsByTagName("section");

		for(var i = 0; i < inputs.length; i++) 
		{
	    	inputs[i].style.display = "none";
		}
		
		console.log
		thisSection = document.getElementById(section);
		thisSection.style.display = "block";
	}
}

window.onload = function() {

	var a = document.getElementById("mylink");

	dis = toggleFactory("dissertation")

	res = toggleFactory("research")

	document.getElementById("about-link").onclick = toggleFactory("about");
	document.getElementById("dissertation-link").onclick = dis;
	document.getElementById("research-link").onclick = toggleFactory("research");
	document.getElementById("cv-link").onclick = toggleFactory("cv");
	document.getElementById("dissertation-about").onclick = dis;
	document.getElementById("research-about").onclick = res;

}