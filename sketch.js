var car;
var wall;
var speed;
var weight;
var thickness;

function setup(){
  speed=random(223,321);
  weight=random(30,52);
  thickness=Math.round(random(22,83));
  
  createCanvas(1600,400);
  car=createSprite(50,200,50,5);
  
  car.shapeColor="white";
  wall=createSprite(1500,200,thickness,height/2);
  wall.shapeColor="white";
  
  
}
function draw(){
  car.velocityX=speed;
  background("black");
  if(wall.x-car.x<(wall.width+car.width)/2){
    car.velocityX=0;
    var deformation=0.5*speed*weight*speed/thickness*thickness*thickness;
    if(deformation>10){
      wall.shapeColor=color(255,0,0);
  }
  
  if(deformation<10){
    wall.shapeColor=color(0,255,0);
  }
}

  drawSprites();

}
