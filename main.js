canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

img_width = 300;
img_height = 100;

var img_image;

img_x = 100;
img_y = 100;

function uploading() {
	//console.log(img_image)
	ctx.drawImage(imgimage, 0, 100, 500, 200);
}

function add() {
	imgimage = new Image();
	imgimage.src = img_image;
	imgimage.onload = uploading();
	//console.log(img_image)
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);

		if((keyPressed >=97 && keyPressed<=122) || (keyPressed >=65 && keyPressed<=90)){

			alphabetkey();
			document.getElementById("d1").innerHTML="You pressed Alphabet Key";
			console.log("alphabet key");
	}

	else{

		otherkey();
		document.getElementById("d1").innerHTML="You pressed symbol or other key";
	}
}

function alphabetkey()
{
	img_image="Alpkey.png";
	add();

}
function numberkey()
{
	
}
function arrowkey()
{
}
function specialkey()
{
	
}
function otherkey()
{
	img_image="otherkey.png";
	add();
}