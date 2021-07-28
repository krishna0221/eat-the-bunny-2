const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;
 var wall1;
 var wall2;
 var rope;
 var jointLink;
var stones = [];


function setup() {
  createCanvas(1200, 800);
  engine = Engine.create();
  world = engine.world;
  frameRate(80);

  wall1 = new Wall(100,height/2+50,200,200)
  wall2 = new Wall(width-100,height/2+50,200,200)
  rope = new Bridge(12,{x:width/2-400,y:height/2})
 var jointPoint = new Wall(width-100,height/2+50,40,20)

Composite.add(rope.body,jointPoint);
jointLink = new Link(rope,jointPoint);

for(var i=0;i<=8;i++){
  var x = random(width/2-200,width/2+300);
  var y = random(-10,140);
  var stone = new Stone(x,y,70,70);
  stones.push(stone);
}
}

function draw() {
  background(51);
  Engine.update(engine);


  wall1.display();
wall2.display();
rope.show();
stone.display();
}
