var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var pack
var img
function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
	//img=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
    /*helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6*/

	/*groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)*/


	engine = Engine.create();
	world = engine.world;


	//ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	// World.add(world, ground);1
	Engine.run(engine);
  pack = new package1((width/2)-20,150,70,70)
  h1 = new helicop(400,150,330,170)
  ground = new ground1(width/2,height-75,width,10)
 box1=new box((width/2)-20,height-95,200,20)
 box2=new box(280,height-135,20,100)
 box3=new box(480,height-135,20,100)
}
function draw() {
  rectMode(CENTER);
  background(0);
  drawSprites();
  textSize(20)
  fill(255)
  text(mouseX+","+mouseY,mouseX,mouseY)
 pack. display()
 h1.display()
 ground.display()
 box1.display()
 box2.display()
 box3.display()
}
 function keyPressed(){
	 if (keyCode==DOWN_ARROW){
		 console.log("a")
		Matter.Body.setStatic(pack.body,false)
	 }
 }



