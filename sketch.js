
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var particles=[];
var plinkos= [];
var divisions=[];

var engine,world;
var ground;
var divisionHeight=300;
var score=0;
var particle;
var turn=0;
var gameState="start";
var count=0;

function setup() {
  createCanvas(480,800);

 engine=Engine.create();
world=engine.world;

  ground= new Ground(490,795,5000,10);

  for(var j=40;j<=width;j=j+50){
    plinkos.push(new Plinko(j,175,10))
}
for(var j=20;j<=width-10;j=j+50){
  plinkos.push(new Plinko(j,375,10))
}

  for(var k=0; k<=width; k=k+80){
    divisions.push(new Division(k,height-divisionHeight/2,10,divisionHeight))
  
    }

 
}

function draw() {
  background(0);  
  fill("white")
  text("SCORE: "+score,10,40)
  Engine.update(engine);
  
    drawSprites();
    text("500",30,600);
    text("300",110,600);
    text("100",190,600);
    text("100",270,600);
    text("200",350,600);
    text("500",430,600);

ground.display();

for(j=0; j<plinkos.length;j++){
  plinkos[j].display();
  
  }
  

for(k=0;k<divisions.length;k++){

divisions[k].display();

}

if(mousePressed()){
  particles.push(new Particle(random(width/2-10, width/2+10), 10,10))

  }


for(var t=0; t<particles.length;t++){

  particles[t].display();
}


if(particle!==null)
{

  particle.display();

if(particle.body.position.y>760){

  if(particle.body.position.x<300){

    score=score+500
    particle=null;
    if(count>=5) 
    gameState="end"
    
  }

  else if(particle.body.position.x>300&&particle.body.position.x<600){
    score=score+300
    particle=null;
    if(count>=5) 
    gameState="end"

  }
}


}







}

function mousePressed(){
  

   if (gameState!=="end"){
count++;
particle=new Particle(mouseX,10,10,10)


   }
  


}