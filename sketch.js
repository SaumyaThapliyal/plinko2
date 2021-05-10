const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var score = 0;
var turn = 0;

var ground;
var particle;
var plinkos = [];
var divisions = [];

var gameState = "start";

var divisionHeight = 300;

function setup() {
  createCanvas(725,800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(400,790,800,20);
  for(var k = 0; k <=width; k = k+80){
    divisions.push(new Division (k,height-divisionHeight/2,10,divisionHeight))
  }

  for(var k = 40; k <=width; k = k+50){
    plinkos.push(new Plinko (k,75,10))
  }

  for(var k = 15; k <=width; k = k+50){
    plinkos.push(new Plinko (k,175,10))
  }

  for(var k = 40; k <=width; k = k+50){
    plinkos.push(new Plinko (k,275,10))
  }

  for(var k = 15; k <=width; k = k+50){
    plinkos.push(new Plinko (k,375,10))
  }

}

function draw() {
  background(0,0,0);  
  textSize (30);
  text("SCORE: "+score,20,40);
  fill("white");

  text(" 500 ",5,550);
  text(" 500 ",85,550);
  text(" 500 ",165,550);
  text(" 300 ",245,550);
  text(" 300 ",325,550);
  text(" 300 ",405,550);
  text(" 200 ",485,550);
  text(" 200 ",565,550);
  text(" 200 ",645,550);

  fill("yellow");
  line(0,500,725,500);

  Engine.update(engine);
  ground.display();

  if(particle != null){
    particle.display();
    console.log(mouseX);
    if(particle.body.position.y >760){
      
      if (particle.body.position.x <240){
        score = score+500
        particle = null;
        if(turn >=5)gameState = "end";
       }

       else if (particle.body.position.x <475 && particle.body.position.x >275){
        score = score+300
        particle = null;
        if(turn >=5)gameState = "end";
       }

       else if (particle.body.position.x <726 && particle.body.position.x >476){
        score = score+200
        particle = null;
        if(turn >=5)gameState = "end";
       }
       
    }
  }

  for(var j = 0; j < divisions.length; j++){

    divisions[j].display();
  }

  for(var j = 0; j < plinkos.length; j++){

    plinkos[j].display();
  }

 
}

function mousePressed(){
  if(gameState !== "end"){
    turn++;
    particle = new Particle(mouseX,10,10);
  }
}