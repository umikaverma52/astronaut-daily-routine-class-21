var bg, bgImg
var astronaut,astronautImg;
var bath,brush,gym,move,eat,drink,sleep 

function preload(){
bath=loadAnimation("images/bath1.png","images/bath2.png");
brush=loadAnimation("images/brush.png");
gym=loadAnimation("images/gym1.png","images/gym2.png","images/gym11.png","images/gym12.png");
move=loadAnimation("images/move.png","images/move1.png",);
eat=loadAnimation("images/eat1.png","images/eat2.png");
drink=loadAnimation("images/drink1.png","images/drink2.png");
sleep=loadAnimation("images/sleep.png");
}

function setup() {
  createCanvas(400, 400);
  astronaut=createSprite(200,200);
astronaut.addAnimation("sleep",sleep);
astronaut.scale=0.1;
}

function draw() {
  background(220);

  if (keyDown("UP_ARROW")){
    astronaut.addAnimation("brush",brush);
    astronaut.changeAnimation("brush")
    astronaut.y=350;
    astronaut.velocityY=0;
    astronaut.velocityX=0;
  }

  if (keyDown("DOWN_ARROW")){
    astronaut.addAnimation("gym",gym);
    astronaut.changeAnimation("gym");
    astronaut.y=350;
    astronaut.velocityY=0;
    astronaut.velocityX=0;
  }

  if(keyDown("RIGHT_ARROW")){
  astronaut.addAnimation("eat",eat);
  astronaut.changeAnimation("eat");
  astronaut.y=350;
  astronaut.velocityX=0;
  astronaut.velocityY=0;
  }

  if (keyDown("LEFT_ARROW")){
    astronaut.addAnimation("bath",bath);
    astronaut.changeAnimation("bath");
    astronaut.y=350;
    astronaut.velocityY=0;
    astronaut.velocityX=0;
  }

  if (keyDown("m")){
    astronaut.addAnimation("move",move);
    astronaut.changeAnimation("move");
    astronaut.velocityY=1;
    astronaut.velocityX=1;
    
  }


  drawSprites();
}
