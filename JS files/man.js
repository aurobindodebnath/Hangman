
//When a new word is prompted, this function resets all animations and visibilities of the man object
function resetman()
{
	document.getElementById("body").style.visibility="hidden";
	document.getElementById("body").style.animation="none";
	document.getElementById("leg1").style.visibility="hidden";
	document.getElementById("leg1").style.animation="none";
	document.getElementById("leg2").style.visibility="hidden";
	document.getElementById("leg2").style.animation="none";
	document.getElementById("hand1").style.visibility="hidden";
	document.getElementById("hand1").style.animation="none";
	document.getElementById("hand2").style.visibility="hidden";
	document.getElementById("hand2").style.animation="none";
	document.getElementById("head").style.visibility="hidden";			
	document.getElementById("head").style.animation="none";	
}

//In case a wrong letter is guessed this function makes the corresponding changes in the man object
function maneffect(q)
{
	switch(picsel)
		{
			case 1:
				document.getElementById("head").style.visibility="visible";
				document.getElementById("head").style.animation="1s animan 1 ease";				
				break;
			case 2:
				document.getElementById("body").style.visibility="visible";
				document.getElementById("body").style.animation="1s animan2 1 linear";				
				break;
			case 3:
				document.getElementById("hand1").style.visibility="visible";
				document.getElementById("hand1").style.animation="1s animan4 1 linear";				
				break;
			case 4:
				document.getElementById("hand2").style.visibility="visible";
				document.getElementById("hand2").style.animation="1s animan3 1 linear";				
				break;
			case 5:
				document.getElementById("leg1").style.visibility="visible";
				document.getElementById("leg2").style.visibility="visible";
				document.getElementById("leg1").style.animation="1s animan 1 linear";
				document.getElementById("leg2").style.animation="1s animan 1 linear";				
				break;
			case 6:
				document.getElementById("eye1").style.visibility="hidden";
				document.getElementById("eye2").style.visibility="hidden";				
				pauseclockrotation();
				lost(index);
		}
}
