//to work on: the case of space
//to work on: displaying player name
//to work on: controls to work on sound volume

//All the global variables
var picsel=0;//used to select the picture
var selword=allwords;
var index;
var dash=new Array();

//function to set playername
function player()
{
	pauseclockrotation();
    var user = prompt("Enter your name:","");
    if (user != "" && user!= null)
	{
		document.getElementById("playername").innerHTML=user;
    }
	else
	{
		document.getElementById("playername").innerHTML="--";		
	}
	resettime();
}


//splice function to update the array
function updatearray()
{
	selword.splice(index,1);
}

//randomly selects an index, then the word and then displays it in html page in dashes
function selectword()
{
	index=Math.floor(Math.random()*selword.length);
	guessword=selword[index].split("");
	dash=new Array();//this fixes a bug hopefully
	for(i=0;i<guessword.length;i++)
	{
		dash[i]='_';
	}
	showhintbutton();//shows the hint button, updates the hint text and hides it
	document.getElementById('word').innerHTML=dash.join(" ");
	document.getElementById("exactscore").innerHTML=selword.length;
}


//reset everything in case of correct answer
function reseteverything()
{		
	picsel=0;
	document.getElementById("chance").innerHTML="Chances left";//just for gramatical reasons
	//enable all buttons
	for(i=0;i<26;i++)
		document.buttons.elements[i].disabled=false;
	//reset image,time and chances
	resetman();
	document.getElementById("exactchance").innerHTML=6-picsel;
	document.getElementById("hurryup").style.color='#ffc86f';
    document.getElementById("hurryup").style.visibility="hidden";
    document.getElementById("clock").style.color="black";
	resettime();
	selectword();
}

//reload in case of wrong answer
function lost(y)
{
	playwrong();//sound effect
	pauseclock();
	hideallhint();
	alert('YOU LOSE\n\nThe word was '+selword[y]+'\n') //losing condition
	//diable all buttons
	for(i=0;i<26;i++)
		document.buttons.elements[i].disabled=true;
	document.getElementById("dead").style.visibility="visible";
}

//this function is called each time an alphabet button is pressed
function main(x)
{
	var matchfound=false;
	//checks for the letter in the whole array dash
	for(i=0;i<guessword.length;i++)
	{
		if(x==guessword[i])
		{
			dash[i]=x;//modifies the array dash
			matchfound=true;
		}
	}
	//prints the updated array dash
	document.getElementById('word').innerHTML=dash.join(" ");

	//checks if all letters done	
	var dashleft=false;
	for(i=0;i<guessword.length;i++)
	{
		if(dash[i]=='_')
		{
			dashleft=true;
		}
	}
	
	//correct condition if dashleft remains false
	if(!dashleft)
	{
		pauseclockrotation();
		playcorrect();//sound effect
		alert('CORRECT\n');
		updatearray();
		document.getElementById("exactscore").innerHTML=selword.length;
		if(selword.length==0)//win condition
		{
			playyouwon();
			alert("CONGRATULATIONS!\n YOU WON");
			window.location.href="index.html";
		}
		reseteverything();//all the reset conditions
	}
	
	//changes the picture	
	if(!matchfound)//executed only when no match of letter is found
	{
		picsel++;
		document.getElementById("exactchance").innerHTML=6-picsel;
		
		if((6-picsel)<2)//just for gramatical reasons
			document.getElementById("chance").innerHTML="Chance left";

		maneffect(picsel);
	}
} // end of main function