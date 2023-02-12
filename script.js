//your code here
function randomNumberGenerator() {
	
	document.getElementById("num").innerHTML = Math.floor((Math.random() * 20) + 1);
	var numberGenerated = document.getElementById("num").innerHTML;
	var guessedValue = document.getElementById("guess").value;
	if ((Math.abs(numberGenerated-guessedValue)<=5))
	{
		document.getElementById("respond").innerHTML = "Hot";
	}
	else{
		document.getElementById("respond").innerHTML = "Cold";
	}
	
}
