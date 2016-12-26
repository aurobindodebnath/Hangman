//bug: the dot 


var time=60;

function pauseclockrotation()
{
		document.getElementById("clockcase").style.animation="none";
		document.getElementById("clock").style.animation="none";
}

function resettime()
{
	time=60;
	document.getElementById("clockcase").style.animation="60s spinnow infinite linear";
	document.getElementById("clock").style.animation="60s negspin infinite linear";
}


function ss()
{
	document.getElementById("clock").innerHTML=time;
	time--;
	if(time<0)
	{
		pauseclockrotation();
		lost(index);
	}
	else if(time<10)
	{
		setTimeout(ss,1000);
		document.getElementById("hurryup").style.visibility="visible";
		document.getElementById("clock").style.color='#d63c3c';
		if(time%2==0)
		{
			document.getElementById("hurryup").style.color='#d63c3c';
		}
		else
		{	document.getElementById("hurryup").style.color='#ffc86f'; 	
		}
	}
	else{
		setTimeout(ss,1000);
	}
}
