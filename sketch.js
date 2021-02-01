//namespacing
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var myEngine, myWorld;

function setup() {
  myEngine = Engine.create();
  myWorld = myEngine.world;
  createCanvas(400,400);

  //JSON 
  var ground_options = {
    isStatic: true
  }
  ground = Bodies.rectangle(200,390,200,20,ground_options);
  World.add(myWorld,ground);

  var ball_options = {
    restitution:1.0
  }
  ball = Bodies.circle(200,100,20,ball_options);
  World.add(myWorld,ball);

  //console.log(object);
  //createSprite(400, 200, 50, 50);
  
}

function draw() {
Engine.update(myEngine);

  background(255,255,255);  
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,200,20);
 
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);
  //rect(200,200,50,50);
  text(mouseX+","+mouseY, mouseX,mouseY);
  //drawSprites();
}