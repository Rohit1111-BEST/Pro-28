class Paper {
    constructor(x, y ) {
        var options = {
          'restitution':0.8,
          'friction':1.0,
          'density':0.3 
        }
        this.body = Bodies.circle(x, y,40, options);
        this.image= loadImage("paper.png")
        this.radius=40;
       World.add(world,this.body)
      }
      display(){
        var pos=this.body.position
        var angle=this.body.angle
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);

        image(this.image, 0, 0, this.radius, this.radius);
        pop();
      }
    }
