var garden,rabbit;
var gardenImg,rabbitImg;
var apples, applesImg;
var leaves, leavesImg;
var lives; 

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  applesImg = loadImage("apple.png");
  leavesImg = loadImage("leaf.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  rabbit.x = mouseX

  spawnApples();

  spawnLeaves();

  drawSprites();
}

function spawnApples() {
  if(frameCount%Math.round(random(60,80)) === 0) {
    apples = createSprite(200,-10,10,10);
    apples.addImage(applesImg);
    apples.scale = 0.04;
    apples.velocityY = 3;
    apples.x = Math.round(random(10,390));
  }
}

function spawnLeaves() {
  if(frameCount%Math.round(random(50,80)) === 0) {
    leaves = createSprite(200,-10,10,10);
    leaves.addImage(leavesImg);
    leaves.scale = 0.04;
    leaves.velocityY = 2;
    leaves.x = Math.round(random(10,390));
  }
}
  
