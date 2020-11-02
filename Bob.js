class Bob {
    constructor(x,y,r) {
      var options = {
          restitution:1,
          friction:0,
          density:0.8,
          isStatic:false
      }
      this.body = Bodies.circle(x, y,20, options);
      this.width = 50;
      this.height = 50;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle=this.body.angle;
      // pos.x = mouseX;
      // pos.y = mouseY;
      push();
      translate(pos.x,pos.y);
      ellipseMode(CENTER);
      strokeWeight(4);
      stroke("black");
      fill("blue");
      ellipse(0,0, this.width, this.height);
      pop();
    }
  }