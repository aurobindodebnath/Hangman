
//variable used to select the cases in the switch statement
var t=0;


//when the quit button is pressed
function closewindow()
{
	window.close();
}

//The rule sheet appears with this animation
function rulesheetvisible()
{
	document.getElementById("rulesheet").style.animation="2s sheetslide 1 ease";
	document.getElementById("rulesheet").style.visibility="visible";
}

//The animation of each letter of Hangman is controlled using this function
function f()
{
	t++;
	switch(t)
	{
		case 1:
			document.getElementById("H").style.animation="2s ani 1 ease-in";
			document.getElementById("H").style.visibility="visible";
			setTimeout(f,500);
			break;
		case 2:
			document.getElementById("A").style.animation="2s ani 1 ease-in";
	   		document.getElementById("A").style.visibility="visible";
			setTimeout(f,500);
			break;
		case 3:
			document.getElementById("N").style.animation="2s ani 1 ease-in";
	   		document.getElementById("N").style.visibility="visible";
			setTimeout(f,500);
			break;
		case 4:
			document.getElementById("G").style.animation="2s ani 1 ease-in";
	   		document.getElementById("G").style.visibility="visible";
			setTimeout(f,500);
			break;
		case 5:	
			document.getElementById("M").style.animation="2s ani 1 ease-in";
	  		document.getElementById("M").style.visibility="visible";
			setTimeout(f,500);
			rulesheetvisible();
			break;
		case 6:
			document.getElementById("A2").style.animation="2s ani 1 ease-in";
			document.getElementById("A2").style.visibility="visible";
			setTimeout(f,500);
			break;
		case 7:
			document.getElementById("N2").style.animation="2s ani 1 ease-in";
			document.getElementById("N2").style.visibility="visible";
			setTimeout(f,500);
			break;
	}
}

