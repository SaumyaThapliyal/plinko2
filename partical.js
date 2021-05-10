class Particle {
    constructor(x,y,radius) {
      var options = {

        restitution:0.4
      }
      this.body = Bodies.circle(x,y,radius,options);
      this.color = color(random(0,255),random(0,255),random(0,255))
      this.radius = radius;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      ellipseMode(CENTER);
      fill(this.color);
      ellipse(pos.x, pos.y, 2*this.radius , 2*this.radius);
    }
  };