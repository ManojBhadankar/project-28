
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Render = Matter.Render;
var dustbinObject, paperObject,groundObject,chain
var world;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	paperObject=new paper(200,350,70);
	groundObject=new ground(width/2,670,width,20);
	dustbinObject=new dustbin(1200,650);
	chain = new launcher(paperObject.body,{x:180,y:250});
	//Create a Ground
	

	var render = Render.create({
	  element: document.body,
	  engine: engine,
	  options: {
	    width: 1600,
	    height: 700,
	    wireframes: false
	  }
	});

	Engine.run(engine);
	Render.run(render);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 
  
  paperObject.display();
  groundObject.display();
  dustbinObject.display();
  

}

function mouseDragged() {
	Matter.Body.setPosition(paperObject.body,{x:mouseX,y:mouseY});

}
function mouseReleased(){
	chain.fly()
}





