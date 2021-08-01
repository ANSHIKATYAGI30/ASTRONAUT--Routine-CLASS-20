//const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

//let engine;
let world;

var bg ;
var sleep,brush,gym, bath;
var eat,drink,move;
var astronaut;
var Edges;

function preload(){
bg = loadImage("Images/iss.png");
sleep= loadImage("Images/sleep.png");
brush = loadImage("Images/brush.png");
gym= loadImage("Images/gym1.png", "Images/gym2.png","Images/gym11.png", "Images/gym12.png");
eat= loadImage("Images/eat1.png", "Images/eat2.png");
drink= loadImage("Images/drink1.png", "Images/drink2.png");
move= loadImage("Images/move.png", "Images/move1.png");
bath= loadImage("Images/bath1.png", " Images/bath2.png");
}

function setup() {
  createCanvas(600,400);
 
  //engine= Engine.create();
 // world= engine.world();
  
 
  
  astronaut= createSprite(400, 170, 50, 90);
  astronaut.addAnimation("sleeping", sleep);
  astronaut.scale= 0.1;
  
  rectMode(CENTER);
}

function draw() {
  background(bg); 
  //Engine.update(engine);
  
  if (keyDown ("UP_ARROW")) {
    astronaut.addAnimation("brushing", brush);
    astronaut.changeAnimation("brushing");
    astronaut.y= 250;
    astronaut.velocityX = 0;
    astronaut.velocityY= 0;
  }

  if (keyDown("DOWN_ARROW")){
    astronaut.addAnimation("Gymming", gym);
    astronaut.changeAnimation("Gymming");
    astronaut.y= 250;
    astronaut.velocityx= 0;
    astronaut.velocityY= 0;
  }

    if (keyDown("RIGHT_ARROW")){
      astronaut.addAnimation ("bathing", bath);
      astronaut.changeAnimation("bathing");
      astronaut.y= 250;
      astronaut.velocityX = 0; 
      astronaut.velocityY= 0;
    }
    
      if (keyDown("LEFT_ARROW")){
        astronaut.addAnimation("eating", eat);
        astronaut.changeAnimation("eating");
        astronaut.y= 250;
        astronaut.velocityX = 0;
        astronaut.velocityY= 0;
      }

      if (keyDown("M")){
        astronaut.addAnimation("Moving", move);
        astronaut.changeAnimation("Moving");
        astronaut.y= 250;
        astronaut.velocityX = 0;
        astronaut.velocityY= 0;
      }
      
      //Edges = createEdgeSprites();
      //astronaut.bounceOff(Edges);
      
       drawSprites();
       }



