var sea 
var ship
var dolphin
var bird 
function preload(){
bigsea=loadImage("sea.png")
shipmove=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
//dol=loadImage("dolphin.png");

}

function setup(){
  createCanvas(400,400);
  sea=createSprite(200,200,100,200)
  sea.scale = 0.3
  sea.addImage("seamove",bigsea)
  sea.velocityX = -2;
  ship=createSprite(150,250,50,20);
  ship.addAnimation("move",shipmove);
  ship.scale = 0.2;
  //dolphin
//dolphin = createSprite(250,200);
  //dolphin.addImage("jump",dol);
  //dolphin.scale = 0.5;

  sea.x = sea.width/2
  edges = createEdgeSprites();
}
function draw() {
  background("grey");
 

  if(sea.x<0){
    sea.x = sea.width/2;
  }
  
 
 
 
 
 
 
 
  drawSprites();
}