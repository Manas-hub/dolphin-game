var dolphin , dolphinimg
var oceanimg
var crydolphin , crydolphinimg
var happydolphin , happydolphinimg
var hunter1 , hunter2 , hunter3 , hunterimg
var man , manimg , manimgright
var bulletGroup1 , bulletGroup2  , bulletGroup3 , bulletimg
var box
var score= 0
gamestate = 0
var life = 5
function preload()
{
	manimg=loadImage("superhero.png")
	manimgright=loadImage("superheroright.png")
	oceanimg=loadImage("ocean.jpg")
}

function setup() {
	createCanvas(displayWidth - 200 , displayHeight - 200);

	bulletGroup1=new Group()
	bulletGroup2=new Group()
	bulletGroup3=new Group()
	
	man=createSprite(width/2,height/2+150,50,50);
	man.addImage(manimg)
	
	dolphin=createSprite(width/2,height/2+210,10,10);

	box=createSprite(displayWidth-300,displayHeight-300,100,50);

	hunter1=createSprite(10,10,10,10);
	hunter2=createSprite(displayWidth-10,10,10,10);
	hunter3=createSprite(width/2,10,10,10);

	dolphin.visible=false
	man.visible=false
	hunter1.visible=false
	hunter2.visible=false
	hunter3.visible=false
}


function draw() {
if (gamestate === 0){
	welcomepage();

}

else if (gamestate===1) {

    background(oceanimg)

	dolphin.visible=true
	man.visible=true
	hunter1.visible=true
	hunter2.visible=true
	hunter3.visible=true
	console.log(gamestate)

  if(bulletGroup1.isTouching(man))
  {
	  score = score+1;
  }
  if(bulletGroup2.isTouching(man))
  {
	  score = score+1;
  }
  if(bulletGroup3.isTouching(man))
  {
	  score = score+1;
  }

 Bullet1();
 Bullet2();
 Bullet3();

 if(bulletGroup1.isTouching(dolphin) || bulletGroup2.isTouching(dolphin) || bulletGroup3.isTouching(dolphin) )
 life = life-1;
}

if (life === 0){
	gamestate === 2
}

if (score === 200){
    gamestate === 3
}	

else if (gamestate === 3){
	win();
}

else if (gamestate === 2){
    end();
}


drawSprites();

text("score ="+score,displayWidth - 300 , displayHeight - 300);
}

function keyPressed() {
 if(keyCode  === 37) {
	man.addImage(manimg)
	man.scale=0.3
    man.velocityX=man.velocityX-2;
  }
  if(keyCode === 39){
	  man.addImage(manimgright)
	  man.scale=0.7
	  man.velocityX=man.velocityX+2
  }

}

function Bullet1(){
if (frameCount % 200 === 0){
var random1=random(-3,3);
var random2=random(2,4);	
var bullet=createSprite(hunter1.x,hunter1.y,5,5)
bulletGroup1.add(bullet);
bullet.velocityX=random1;
bullet.velocityY=random2;

}

}

function Bullet2(){
	if (frameCount % 1250 === 0){
	var random1=random(-6,6);
	var random2=random(5,3);
	var bullet=createSprite(hunter2.x,hunter2.y,5,5)
	bulletGroup2.add(bullet);
	bullet.velocityX=random1;
	bullet.velocityY=random2;
	
	}
	
	}

	function Bullet3(){
		if (frameCount % 3000 === 0){
		var random1=random(-5,6);
		var random2=random(6,4);
		var bullet=createSprite(hunter3.x,hunter3.y,5,5)	
		bulletGroup3.add(bullet);
		bullet.velocityX=random1;
		bullet.velocityY=random2;
		
		}
		
		}

	function welcomepage(){
		background ("white")
		textSize(35);
        fill("red")
		text ("The Dolphin Game",displayWidth/4,10);

		box.shapeColor="blue";
		textSize(50);
		fill("blue");
	    text("Next",displayWidth/2-40,displayHeight/2-10);

		if (mousePressedOver (box)){
			box.destroy();
			gamestate = 1;
		}
	

		}	

	function end(){
		textSize(60);
		fill("red");
        text("GameOver",displayWidth/4,displayHeight/2);
		}

	function end(){
			textSize(60);
			fill("red");
			text("YouWin",displayWidth/4,displayHeight/2);
			}


