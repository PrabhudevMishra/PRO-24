const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dust1,dust2,dust3,paper,ground;

function setup() {
	createCanvas(800, 600);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(600, 580, 1200, 20);
	paper = new PaperObject(100, 100, 10);
	dust1 = new Dustbin(800, 320, 20, 100);
	dust2 = new Dustbin(1000, 320, 20, 100);
	dust3 = new Dustbin(300, 300, 20, 20);
    //Engine.run(engine);
}


function draw() {
  //rectMode(CENTER);
  background(0);
  Engine.update(engine);

  ground.display();
  dust1.display();
  dust2.display();
  dust3.display();
  paper.display();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:10, y:-20});
	}
}


