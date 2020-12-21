
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
var bob1,bob2,bob3,bob4,bob5;





function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	 bob1 = new Bob(200,450,40);

	 Engine.run(engine);


	
  
}


function draw() {
	rectMode(CENTER);
	background(230);

  //drawSprites();
  bob1.display();
 
}



