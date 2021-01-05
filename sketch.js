const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var engine, world;
var ground, ball;
var box1,box2,base;
var ball;

function setup(){
    var canvas = createCanvas(900,400);
    engine = Engine.create();
    world = engine.world;

  base = new Ground();  
  stand1 = new Stand(390,300,250,10);
  stand2 = new Stand(700,200,200,10);   
block1 = new Block(300,275,30,40);
block2 = new Block(330,275,30,40);
block3 = new Block(360,275,30,40);
block4 = new Block(390,275,30,40);
block5 = new Block(420,275,30,40);
block6 = new Block(450,275,30,40);
block7 = new Block(480,275,30,40);

block1b = new Block(330,235,30,40);
block2b= new Block(360,235,30,40);
block3b = new Block(390,235,30,40);
block4b = new Block(420,235,30,40);
block5b = new Block(450,235,30,40);

block1c = new Block(360,195,30,40);
block2c = new Block(390,195,30,40);
block3c = new Block(420,195,30,40);

block1d = new Block(390,155,30,40);


//stand2
block1a = new Block(640,175,30,40);
block2a = new Block(670,175,30,40);
block3a = new Block(700,175,30,40);
block4a = new Block(730,175,30,40);
block5a = new Block(760,175,30,40);

block1e = new Block(670,135,30,40);
block2e = new Block(700,135,30,40);
block3e = new Block(730,135,30,40);
block4e = new Block(700,95,30,40);

ball = Bodies.circle(50,200,20);
World.add(world,ball);
slingshot = new Slingshot(this.ball,{x:100,y:200})
    
}

function draw(){
    background("lightgreen");
    Engine.update(engine);
    rectMode(CENTER);
    
  fill ("brown");
    base.display();
    fill ("grey");
    
    stand1.display();
    stand2.display();
    fill ("blue");
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    fill ("red");
    block1a.display();
    block3a.display();
    block4a.display();
    block5a.display();
    block2a.display();
    slingshot.display();
    fill ("yellow");
    block1b.display();
    block2b.display();
    block3b.display();
    block4b.display();
    block5b.display();
    fill ("green");
    block1c.display();
    block2c.display();
    block3c.display();
    block1d.display();
    fill ("purple");
    block1e.display();
    block2e.display();
    block3e.display();
    fill ("white");
    block4e.display();

    
circle(ball.position.x,ball.position.y,40);
}
function mouseDragged(){ 
  Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY}); 
}

function mouseReleased(){ 
  slingshot.fly(); 
}

function keyPressed(){
  if(keyCode === 32){
    slingshot.attach(this.ball);
  }
}
