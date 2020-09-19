const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dust1,dust2,dust3;


//function preload()
//{
	
//}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	var options = {
		isStatic:true,
		restituition:0.3,
		friction:0.5,
		density: 1.2
	}

	//Create the Bodies Here.
	dust1 = new Dustbin(300,100,20,20);
	paperObject = Bodies.circle(20,20,5,(options));

	//Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
 
  dust1.display();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.body.applyForce(paperObject.body,paperObject.body.position,{x:85, y:85});
	}
}


