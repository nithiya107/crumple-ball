
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	
ground=Bodies.rectangle(400,700,800,20,{isStatic:true})
World.add(world,ground)
	dustbin=new Dustbin(600,700)

paper=new Paper(100,200,30)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper.display()
  dustbin.display()
  
  drawSprites();
 
}

function keyPressed(){
	Matter.Body.applyForce(paper.body,paper.body.position,{x:50,y:-25})
}

