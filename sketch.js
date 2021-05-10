
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground;
var boy, boyImg;
var tree, treeImg;
var stone, stoneImg;
var mango1, mango2, mango3, mango4, mango5, mangoImg;
var elasticConstraint;

function preload()
{
	boyImg = loadImage("boy.png");
	treeImg = loadImage("tree.png");
	stoneImg = loadImage("stone.png");
	mangoImg = loadImage("mango.png");
}

function setup() {
	createCanvas(1200, 600);

	engine = Engine.create();
	world = engine.world;

	ground = new Ground(600, 590, 1200, 20);
	
	tree = new Tree(850, 585);

	stone = new Stone(180, 60, 50);

	mango1 = new Mango(680, 250, 50);
	mango2 = new Mango(780, 200, 50);
	mango3 = new Mango(900, 150, 50);
	mango4 = new Mango(820, 300, 50);
	mango5 = new Mango(1000, 240, 50);

	elasticConstraint = new ElasticConstraint(stone.body,{x:180, y:400});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("green");
  image(boyImg, 150, 350, 200, 300);
  
  detectCollision(stone, mango1);
  detectCollision(stone, mango2);
  detectCollision(stone, mango3);
  detectCollision(stone, mango4);
  detectCollision(stone, mango5);

  ground.display();

  tree.display();

  stone.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();

  drawSprites();
 
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    elasticConstraint.fly();
}

function detectCollision(lstone, lmango){
mangoBodyPosition = lmango.body.position;
stoneBodyPosition = lstone.body.position;

var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);
if(distance<=lmango.r+lstone.r){
	Matter.Body.setStatic(lmango.body, false);
}
}

function keyPressed(){
	if(keyCode === 32){
		Matter.Body.setPosition(stone.body, {x:235, y:420});
		elasticConstraint.attach(stone.body);
	}
}



