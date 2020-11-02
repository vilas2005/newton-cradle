
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;




function setup() {
	createCanvas(1600, 700);	


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.\
	roof = new Roof(width/2,height/4,width/7,20);

	bob1 = new Bob(720,675,40);
	bob2 = new Bob(760,675,40);
	bob3 = new Bob(800,675,40);	
	bob4 = new Bob(840,675,40);
	bob5 = new Bob(880,675,40);

	rope1 = new Rope(bob1.body,roof.body,-80,0);
	rope2 = new Rope(bob2.body,roof.body,-40,0);
	rope3 = new Rope(bob3.body,roof.body,0,0);
	rope4 = new Rope(bob4.body,roof.body,40,0);
	rope5 = new Rope(bob5.body,roof.body,80,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  Engine.update(engine);
  background(500);
  keyPressed();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  roof.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
     drawSprites();
 
}

 
function keyPressed(){
	if(keyCode === UP_ARROW)
	{
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-10,y:-10});
	}
}

