class Particle {
  constructor(x, y, r) {
    var options = {
       isStatic:false,
        restitution:0.4
        
    }
   //this.x=x
   //this.y=y
    this.r=r


    this.body = Bodies.circle(x,y,this.r, options);
    this.color=color(random(0,255),random(0,255), random(0,255))
    World.add(world, this.body);
    //World.add(world,this.color)
   
  }
  display(){
    
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    //rotate(angle);
     //this.body.position.x = mouseX;
  //this.body.position.y = mouseY;
   noStroke();
   fill(this.color)
    ellipseMode(RADIUS);
    //fill(255);
   ellipse(0,0, this.r, this.r);
    pop();
  }
};

