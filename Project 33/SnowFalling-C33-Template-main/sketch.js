const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;


var engine, world;
var boy;

var Snow = [];
var maxSnow=100;

function preload(){
  backgroundImg = loadImage("snow1.jpg");

  boyImg = loadImage("download.png");
}


function setup() {
  var canvas = createCanvas(1200,600);
  canvas.position(15,70);

  
  engine = Engine.create();
  world = engine.world;


  boy = createSprite(800, 475, 50, 50);
  boy.addImage("boy",boyImg);
  boy.scale = 0.6;

  if(frameCount % 150 === 0){

    for(var i=0; i<maxSnow; i++){
        Snow.push(new createSnow(random(0,1200), random(0,600)));
    }

}

}
  

function draw() {
  background(backgroundImg);  


  for(var i = 0; i<maxSnow; i++){
    Snow[i].showDrop();
    Snow[i].updateY()
    
}

  drawSprites();
}

