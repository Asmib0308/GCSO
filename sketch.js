var car , wall;
var weight , speed;

function preload() {
  car1 = loadImage("car1.png");
  car2 = loadImage("car3.png");
  car3 = loadImage("car4.png");
  mainCar = loadImage("car5.png");
 }

function setup(){
  createCanvas(1200, 520);

  weight = random(400,1500);
  speed  = random(55,99);

  car = createSprite(100,260);
  car.addImage(mainCar);
  car.changeImage(mainCar);
  car.scale = 0.28;
  car.velocityX = speed;

  wall = createSprite(1450,260,50,740);
  wall.shapeColor = ("white");
}

function draw() {
  background("lightblue");  

  textSize(80);
  fill("blue");
  stroke("white");
  strokeWeight(20);
  text("Global Car Safety Organisation",155,80);

  textSize(25);
  fill("green");
  strokeWeight(0);
  text("Green: deformation = < 100 (BEST)",50,440);
  fill("yellow");
  text("Yellow: deformation = < 180 & > 100 (OK OK)",50,470);
  fill("red");
  text("Red: deformation = > 180 (BAD)",50,500)

 if(car.isTouching (wall)){
   car.velocityX = 0;
   var deformation = 0.5 *weight * speed * speed/22509;

   if(deformation > 180){
     car.addImage(car1);
     car.changeImage(car1);
     wall.shapeColor = color(80,80,80);
   }
   if(deformation < 180 && deformation > 100){
     car.addImage(car2);
     car.changeImage(car2);
     wall.shapeColor = color(80,80,80);
   }
   if(deformation < 100){
     car.addImage(car3);
     car.changeImage(car3)
     wall.shapeColor = color(80,80,80);
   }
  }

  drawSprites();
}