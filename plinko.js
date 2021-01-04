class Plinko {
    constructor(x, y, r) {
      var options = {
          isStatic:true,
          'restitution':0,
          'friction':1,
          'density':1.2
      }
     this.x=x
     this.y=y
      this.r=r

      this.body = Bodies.circle(this.x, this.y, this.r, options);
  
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      //var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
       //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
     // rotate(angle);
      ellipseMode(RADIUS);
      fill(255);
     ellipse(0,0, this.r, this.r);
      pop();
    }
  };
  