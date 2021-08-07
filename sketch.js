var fixedRect, movingRect;
var car, wall;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = false;
  fixedRect.velocityX = -2
  movingRect = createSprite(400,400,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = false;
  movingRect.velocityX = 2
  car = createSprite(200,500,40,20)
  car.velocityX = 1  
  car.shapeColor = "blue"
  wall = createSprite(500,500,50,100)
  wall.shapeColor = "blue"
}

function draw() {
  background(0,0,0);  
//console.log(isTouching());
if(isTouching(car,wall)){
  car.shapeColor = "red";
  wall.shapeColor = "red";
  car.velocityX = 0
}
else{
  car.shapeColor = "blue";
  wall.shapeColor = "blue";
}
bounceOff(movingRect,fixedRect)
  drawSprites();
}

