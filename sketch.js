
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var monkey;

function preload()
{
	bgImage=loadImage("bg.png");
	tree = loadImage("tree.png");
	
}

function setup() {
	createCanvas(windowWidth, windowHeight);


	engine = Engine.create();
	world = engine.world;
	

	//invisible ground.
	iground1  = new invisibleGround (750,  windowHeight-270,windowWidth,20);
	
	//ground.
	ground1  = new Ground (750,  windowHeight-250, windowWidth,20);
	
    //banana.
	banana1 = new banana (90,windowHeight-500,35);
	banana2 = new banana (350,windowHeight-500,35);
	banana3 = new banana (170,windowHeight-480,35);
	banana4 = new banana (250,windowHeight-580,35);
	banana5 = new banana (200,windowHeight-500,35);
    banana6 = new banana (325,windowHeight-525,35);
    banana7 = new banana (230,windowHeight-450,35);
	banana8 = new banana (250,windowHeight-500,35);
	
	//monkey.
	monkey = new Monkey(450,350,10,10);
 
	//stone.
	stone = new Stone(400,350,10);
	rope = new SlingShot (stone.body,{x:400,y:350});

	


	Engine.run(engine);
  
}


function draw() {
	Engine.update(engine)
	rectMode(CENTER);
	background(bgImage);
	image(tree,-10,90,500,400);
	monkey.display();
	iground1.display();
	ground1.display();
	
	banana1.display();
	banana2.display();
	banana3.display();
	banana4.display();
	banana5.display(); 
	banana6.display(); 
	banana7.display(); 
	banana8.display(); 

	 stone.display();
	 rope.display();

	 detectCollision(stone,banana1);
  detectCollision(stone,banana2);
  detectCollision(stone,banana3);
  detectCollision(stone,banana4);
  detectCollision(stone,banana5);
  detectCollision(stone,banana6);
  detectCollision(stone,banana7);
  detectCollision(stone,banana8);

  detectCollision1(banana1,monkey);
 detectCollision1(banana2,monkey);
 detectCollision1(banana3,monkey);	
 detectCollision1(banana4,monkey);	
 detectCollision1(banana5,monkey);
 detectCollision1(banana6,monkey);
 detectCollision1(banana7,monkey);  
 detectCollision1(banana8,monkey);
  drawSprites();
}

// function keyPressed(){
// 	console.log("hi");
// if(keyCode==32){
// 	console.log("hi");
// 	Matter.Body.applyForce(monkey.body, monkey.body.position,{x:0,y:-50});
// }
// }

function keyPressed(){
	if(keyIsDown(RIGHT_ARROW)){
		console.log("right arrow");
	monkey.moveRMonkey();	
	}
	else if(keyIsDown(LEFT_ARROW)){
		console.log("left arrow");

	monkey.moveLMonkey();
	}
	 else if(keyCode==32){
	 	rope.attach(stone.body);
	 }
	 else if(keyCode === 38){
		 console.log("up arrow");
		 Matter.Body.setVelocityY(
			 -4);
       // Matter.Body.applyForce(monkey.body,monkey.body.position,{x:0,y:-1});
    }
}



 function mouseDragged(){
 	Matter.Body.setPosition(stone.body,{x: mouseX, y: mouseY});
    } 
    function mouseReleased()
    {
 	     rope.fly();
    }

	function detectCollision(object1,object2) {
		pos1 = object1.body.position;
		pos2 = object2.body.position;
	
		var distance = dist(pos1.x,pos1.y,pos2.x,pos2.y);
		if(distance<=object1.r+object2.r){
			Body.setStatic(object2.body,false);
		
		}
	}

	 function detectCollision1(object1,object2) {
	 	posi1 = object1.body.position;
	 	posi2 = object2.body.position;
	 	var distance = dist(posi1.x,posi1.y,posi2.x,posi2.y);
		 console.log(distance);
		 console.log("difference" +object1.r+object2.width)
	 	if(distance<=50){
			 console .log("touched");
	 		//Body.visibility
	 	//var	Visibility = Visibility - 5;
	 	//	tint(255,Visibility);
		 alert("you won");
	     textSize(36);
	      text("You Win",displayWidth/2,displayHeight/2)
	 	}
	 }

