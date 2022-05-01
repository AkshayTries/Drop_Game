var l="650px";
var obj = document.getElementById("cart");
var score =0;
var tt,ss,pa,pp,newdiv,another_title;
var move_ball=1;
var time=1750;


function mouse_over_play() //function when mouse hovers over play
{	
	setTimeout(function(){

		var c= document.getElementById("title");
		c.setAttribute("style","color:#D8BD8A");
		c.style.transition="ease-in 0.3s";
		document.getElementById("body").style.backgroundColor="#753742";
		document.getElementById("body").transition="ease-in 3s";
	}, 80);
}


function mouse_leaves_play() //function when mouse leaves play
{setTimeout(function(){
	document.getElementById("title").setAttribute("style","font-size:100px");
	document.getElementById("title").transition="ease-in 0.3s";
	document.body.style.backgroundColor="#D8BD8A";
	document.getElementById("body").transition="ease-in 0.3s";
	}, 80);
}

function play_pressed() //function when user hits play
{
	setTimeout(function()
	{
	another_title = document.createElement("span");
	newdiv = document.createElement("span");
	// newdiv.style.display="inline";
	newdiv.innerHTML = "Score: "+score;
	newdiv.style.display="inline";
	newdiv.style.color="#D8BD8A";
	newdiv.style.fontSize="50px";
	newdiv.style.position="absolute";
	newdiv.style.top="10px";
	newdiv.style.left="1000px";
	another_title.innerHTML="the Drop Game";
	another_title.style.position="absolute"
	another_title.style.display="inline";
	another_title.style.fontSize="75px";
	another_title.style.color="#D8BD8A";
	another_title.style.top="0px";
	
	document.body.appendChild(another_title);
	document.body.appendChild(newdiv);
	


	},280);
	
	setTimeout(function(){
	document.getElementById("body").style.backgroundColor="#753742";
	document.getElementById("title").innerHTML='';
	document.getElementById("play").remove();
	document.getElementById("cart").style.display="block";
	make_balls();
	tt=setInterval(come,time);
	}, 250);
}
function come()
{
	var pla = make_balls();
	if(pla==0)
	{
		return 0;
	}

}


function make_balls()  //makes the balls that have to be caught by cart
{

	var x;
	x = Math.floor(Math.random() * 1229) + 1;
	var div = document.createElement("div");
	div.style.backgroundColor="#D8D78F";
	div.style.height="50px";
	div.style.width="50px";
	div.style.borderRadius="500px";
	div.style.border="3px solid black";
	div.style.position="absolute";
	div.style.left=x+"px";
	div.style.top="0px";
	document.body.appendChild(div);
	move_balls(div);
}


function move_balls(div) //moves the balles downwards towards the cart
{
	setInterval(function()
	{
		div.style.top = (div.offsetTop + move_ball) + "px";
		if(div.offsetTop==560)
		{
			game_over(score);
			return 0;
		}
		else if(div.offsetLeft>=(obj.offsetLeft-50) && div.offsetLeft<=(obj.offsetLeft+120))
		{
			if(div.offsetTop>=509 &&div.offsetTop<=540)
			{
				div.remove();
				score++;
				newdiv.innerHTML = "Score: "+score;
			}
		}


	},0.10)
};


function game_over(score)
{

	// div.remove();

	document.write('<br><br><center><div id="score">SCORE:<br>',score,'<br><button id="play-again" onmousedown="location.reload()" >Play Again</button></div></center>');
	ss=document.getElementById("score");
	pa = document.getElementById("play-again");
	pa.style.backgroundColor="#D8BD8A";
	pa.style.color="#753742";
	pa.style.fontSize="80px";
	//	border: 2px solid black;
	//border-radius: 16px;
	pa.style.border="2px solid black";
	pa.style.borderRadius="16px";
	// pa.style.width="200px";
	// pa.style.height="30px";
	ss.style.color="#D8BD8A";
	ss.style.fontSize="100px";
	document.body.style.backgroundColor="#753742";
	clearInterval(tt);


	return 0;
}


document.onkeydown = function myFunction() {
 //player moves cart by pressing left/right
switch (event.keyCode) {
case 37:
    if(obj.offsetLeft<20)
    {
    }
    else
    {
    	obj.style.left = (obj.offsetLeft - 30) + "px";
    }
    break;
case 39:
    if(obj.offsetLeft>1160)
    {
    }
    else
    {
    	obj.style.left = (obj.offsetLeft + 30) + "px";
    }
    break;
}
}









