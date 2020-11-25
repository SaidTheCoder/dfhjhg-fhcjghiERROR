const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var bg,b1;
var canon,canonI;
//var bomb, bombI;
var score = 0;

function preload(){
bg = loadImage("images/background.gif")

bombI = loadImage("images/bombImg.png")

canonI = loadImage("images/CanonImg.png")
}


function setup() {
  createCanvas(1800,800);
  engine = Engine.create();
    world = engine.world;

    
 //lane 1
    brick1=new Brick(1175,700,70,70)
    brick2=new Brick(1250,700,70,70)
    brick3=new Brick(1325,700,70,70)
    brick4=new Brick(1400,700,70,70)
    brick5=new Brick(1475,700,70,70)
    brick6=new Brick(1550,700,70,70)
    brick7=new Brick(1625,700,70,70)
  //lane 2
    brick8=new Brick(1175,600,70,70)
    brick9=new Brick(1250,600,70,70)
    brick10=new Brick(1325,600,70,70)
    brick11=new Brick(1400,600,70,70)
    brick12=new Brick(1475,600,70,70)
    brick13=new Brick(1550,600,70,70)
    brick14=new Brick(1625,600,70,70)
//lane 3
    brick15=new Brick(1175,500,70,70)
    brick16=new Brick(1250,500,70,70)
    brick17=new Brick(1325,500,70,70)
    brick18=new Brick(1400,500,70,70)
    brick19=new Brick(1475,500,70,70)
    brick20=new Brick(1550,500,70,70)
    brick21=new Brick(1625,500,70,70)
//lane 4
    brick22=new Brick(1250,400,70,70)
    brick23=new Brick(1325,400,70,70)
    brick24=new Brick(1400,400,70,70)
    brick25=new Brick(1475,400,70,70)
    brick26=new Brick(1550,400,70,70)
//lane 5
    brick27=new Brick(1325,400,70,70)
    brick28=new Brick(1400,400,70,70)
    brick29=new Brick(1475,400,70,70)

    crown1=new Crown(1000,250,40,35)
    ground = new Ground(900,780,1800,20)

    //canon=new Canon(200,750,210,120)

    bomb1 = new Bomb(275,750,50,50)

}

function draw() {
  background(bg);  
  Engine.update(engine);

canon = createSprite(200,720,210,120)
canon.addImage(canonI)
canon.scale = 0.4

  brick1.display();
  brick2.display();
  brick3.display();
  brick4.display();
  brick5.display();
  brick6.display();
  brick7.display();
  brick8.display();
  brick9.display();
  brick10.display();
  brick11.display();
  brick12.display();
  brick13.display();
  brick14.display();
  brick15.display();
  brick16.display();
  brick17.display();
  brick18.display();
  brick19.display();
  brick20.display();
  brick21.display();
  brick22.display();
  brick23.display();
  brick24.display();
  brick25.display();
  brick26.display();
  brick27.display();
  brick28.display();
  brick29.display();

  crown1.display();

  //canon.display();

  ground.display();

  bomb1.display();

  textSize(35);
  fill ("black")
  text("Score : "+score,200,40 )


  drawSprites();
}

function keyPressed(){
	if(keyCode===32){
		Matter.Body.applyForce(bomb1.body,bomb1.body.position,{x:mouseX,y:mouseY})
	}
}