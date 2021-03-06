class Snow{
    constructor(x,y){
        var options = {
            restitution: 1,
            friction: 0,
            isStatic: true
        }
        this.r = 10;
        this.body = Bodies.circle(x,y,this.r,options)
        this.image = loadImage("snow4.png");
        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        noStroke();
        fill ("white");
        image(this.image, 0, 0, this.r);
        pop();
    }
}
