const Engine = Matter.Engine 
const World = Matter.World
const Bodies = Matter.Bodies
var engine, world
var bgImage 
var noofflakes=100
var snowflake;
var snowfall=[];

function preload(){
bgImage = loadImage("snow3.jpg")
}  


function setup() {
  createCanvas(windowWidth, windowHeight);
  engine = Engine.create()
  world = engine.world;

  for(var count=0;count<noofflakes;count++){
    snowflake=new Snow(random(20,windowWidth-20),random(20,windowHeight-20));
    snowfall.push(snowflake);//snowfall=[snowflake1,snowflake2,snowflake3,.....snowflake99]..[0,1,2....99]
  }

 
}

function draw() {
  background(bgImage); 
  Engine.update(engine);
  for(var count=0;count<noofflakes;count++){
    snowfall[count].display();
    snowfall[count].update();
  }

  drawSprites();
}