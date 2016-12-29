//bug: the dot 

//this variable decreases its value during recursive calls
var time=settime;

//this variable tells whether clock should work or not
var working=true;

//In case of correct answer, this function resets the clock
function resettime()
{
	time=settime;
	document.getElementById("clockcase").style.animation="60s spinnow infinite linear";
	document.getElementById("clock").style.animation="60s negspin infinite linear";
}

function pauseclock()
{
	working=false;
	time++;//this is done to fix a bug
}

//For the time being alert boxes are shown, the clock rotation is paused
function pauseclockrotation()
{
    document.getElementById("clockcase").style.animation="none";
	document.getElementById("clock").style.animation="none";
}


//This function is called recursively to display seconds on the html page
function starttimer()
{
	document.getElementById("clock").innerHTML=time;
	time--;
	if(working)
	{
	if(time<0)//to stop the clock when all the time is exhausted
	{
		pauseclockrotation();
		lost(index);//the player loses in this condition
	}
	else if(time<10)//for this condition, a couple of animations and sound effects are introduced
	{
		setTimeout(starttimer,1000);//This is God!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
		
		//animation effects
		document.getElementById("hurryup").style.visibility="visible";
		document.getElementById("clock").style.color='#b31010';
		if(time%2==0)
		{
			document.getElementById("hurryup").style.color='#b31010';
		}
		else
		{	document.getElementById("hurryup").style.color='#ffc86f'; 	
		}
		
		//plays sound effect for the last 8sec
		if(time<8)
		{
			playticktok();
		}
	}
	else//no special animation effects when time > 10sec
	{
		setTimeout(starttimer,1000);
	}
	}//end of if working block
}
