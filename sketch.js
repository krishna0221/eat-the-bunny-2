const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var ground;
var rope;
var fruit;
var fruit_cons;
var bg,fruitImg,bunnyImg;
var bunny;
var button;

function preload(){
bg=loadImage("background.png")
fruitImg=loadImage("melon.png")
bunnyImg = loadImage("Rabbit.png")
}
function setup() 
{
  createCanvas(500,700);
  engine = Engine.create();
  world = engine.world;

ground=new Ground(250,690,500,20);
rope = new Rope(7,{x:250,y:30})

var option ={
  density:0.001
}
fruit=Bodies.circle(300,300,20)
Composite.add(rope.body,fruit);

fruit_cons = new Link(rope,fruit)

bunny = createSprite(250,600,10,10);
bunny.addImage(bunnyImg);
bunny.scale=0.3;

button=createImg("cut_btn.png")
button.position(220,30);
button.size(50,50)

button.mouseClicked(drop)

imageMode(CENTER);
  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50)
}

function draw() 
{
  background(51);
  Engine.update(engine);
   image(bg,250,350,500,700);
   image(fruitImg,fruit.position.x,fruit.position.y,60,60);

  ground.display();
  rope.show();

  drawSprites();
  
}

function drop(){
  rope.break();
  fruit_cons.detach();
  fruit_cons = null;
}



