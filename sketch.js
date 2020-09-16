var  paper,paperBody;
var  ground, dustbin;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;







function preload()
{
	
}

function setup() {
	createCanvas(800, 500);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	ground=new Ground(width/2, height-35, width,10);
	dustbin1 = new Dustbin(420,height-50, 70,10);
	dustbin2 = new Dustbin(460,height-80,10,50);
	dustbin3 = new Dustbin(380,height-80,10,50);
  paper = new Paper(100,100);
  launcher = new Launcher(paper.body,{x:100,y:100});

	



}


function draw() {
  rectMode(CENTER);
  background(255);
  Engine.update(engine)


  ground.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  paper.display();
  launcher.display();


 
}

/*function keyPressed() {

 if (keyCode === UP_ARROW) {
	
    // Look at the hints in the document and understand how to make the package body fall only on
    Matter.Body.applyForce(paper.body,paper.body.position,{x:9.5,y:-9.5});
  }
}*/



function mouseDragged(){
  Matter.Body.setPosition(paper.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  launcher.releasePaper();
}