var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var boxBottom, boxRightSide, boxLeftSide;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.15

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	boxBottomSprite=createSprite(width/2, height-50, 200, 20);
	boxBottomSprite.shapeColor=("red");

	boxLeftSprite=createSprite(500, height-90, 20, 100);
	boxLeftSprite.shapeColor=("red");

	boxRightSprite=createSprite(300, height-90, 20, 100);
	boxRightSprite.shapeColor=("red");

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {isStatic:true});
	World.add(world, packageBody);
	
	boxBottom = Bodies.rectangle (width/2, 640, 200, 20, {isStatic: true});
	World.add(world, boxBottom);

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);
	
	 

	 Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  keyPressed();
  drawSprites();

}

function keyPressed() {
	if (keyCode === DOWN_ARROW) {

	Matter.Body.setStatic(packageBody,false)
   packageBody_options ={
	'restitution':0,
	'friction':0,
	'density':0
	}
	}

   }