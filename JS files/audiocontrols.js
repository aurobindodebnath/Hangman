//the audio effect when the cursor hovers over any button
function playhover()
{
			document.getElementById("hover").play();
}

//the audio effect when a correct word is guessed
function playcorrect()
{			document.getElementById("correct").play();
 		//for the case if correct word is guessed with 8 or less seconds remaining
			document.getElementById("ticktok").pause();
			document.getElementById("ticktok").currentTime=0;
}

//the audio effect when a wrong word is guessed
function playwrong()
{
	document.getElementById("wrong").play();
}

//the tick tok of the clock during the last 8 seconds
function playticktok()
{
	document.getElementById("ticktok").play();	
}

//the sound effect when the player wins the game
function playyouwon()
{
	document.getElementById("youwon").play();		
}