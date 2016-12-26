//the case of space
//displaying player name
//using proper data structure for questionaire
//goto newgame, quit button


//variables used are: selword, index, guessword,l, dash, i, selpic, matchfound, dashleft, x

var to_go=20;//this variable stores the score of the player

var selword= new Array('SUPERMAN', 'BATMAN', 'SPIDERMAN', 'IRONMAN', 'JOKER','CATWOMAN','WOLVERINE','THOR','WONDERWOMAN','AQUAMAN','HERCULES','HULK','FLASH','DEADPOOL',
					   'HAWKMAN','ZATANNA','STARFIRE','VIXEN','RAVEN','ORION');

//randomly select an index, then the word and then displaying it in div in dashes
var index=Math.floor(Math.random()*20);
var guessword=selword[index].split("");
var l= guessword.length;
var dash= new Array();
for(i=0;i<l;i++)
{
	dash[i]='_';
}


	var picsel=0;//used to select the picture
function lost(y)
{
	alert('YOU LOSE\n\nThe word was '+selword[y]+'\n'); //losing condition
	location.reload();
}

//this function is called each time a button is pressed
	function ls(x)
	{
		var matchfound=false;
		//checks for the letter in the whole array dash
		for(i=0;i<l;i++)
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
		for(i=0;i<l;i++)
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
			alert('CORRECT\n');
			to_go--;
			document.getElementById("exactscore").innerHTML=to_go;
			if(to_go==0)
			{
				alert("CONGRATULATIONS!\n YOU WON");
				location.reload();
			}
		//all the reset conditions
			picsel=0;
			//enable all buttons
			for(i=0;i<26;i++)
				document.buttons.elements[i].disabled=false;
			
			//reset image,time and chances
			document.getElementById('image').src="Images/1.png";
			document.getElementById("exactchance").innerHTML=6-picsel;
			document.getElementById("hurryup").style.color='#ffc86f';
		    document.getElementById("hurryup").style.visibility="hidden";
		    document.getElementById("clock").style.color="black";
			resettime();
			
			//reset index for next word
			if(index==19)
				index=0;
			else
				index++;
			//get the new word printed
			guessword=selword[index].split("");
			l= guessword.length;
			dash= new Array();
			for(i=0;i<l;i++)
			{
				dash[i]='_';
			}
			document.getElementById('word').innerHTML=dash.join(" ");
				
		}

		//changes the picture	
		if(!matchfound)//executed only when matchfound is false, ie, no match of letter is found
		{
			picsel++;
			document.getElementById("exactchance").innerHTML=6-picsel;
			if((6-picsel)<2)
				document.getElementById("chance").innerHTML="Chance left";
			switch(picsel)
			{
				case 1:
					document.getElementById('image').src="Images/2.png";
					break;
				case 2:
					document.getElementById('image').src="Images/3.png";
					break;
				case 3:
					document.getElementById('image').src="Images/4.png";
					break;
				case 4:
					document.getElementById('image').src="Images/5.png";
					break;
				case 5:
					document.getElementById('image').src="Images/6.png";
					break;
				case 6:
					document.getElementById('image').src="Images/7.png";
					pauseclockrotation();
					lost(index);
					break;
				default:
					document.getElementById('image').src="Images/1.png";
			}
		}
	} // end of ls function