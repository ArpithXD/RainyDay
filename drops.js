class createDrop {
    constructor(x,y,radius) {
        var options = {
            isStatic: false,
            friction: 0.3,
            restitution: 0.01,
            density: 1.2
        }              
        this.body = Bodies.circle(x,y,radius,options);   
        this.radius = radius;    
        World.add(world,this.body);
    }

    updateY() {
        if(this.rain.position.y > height) {
            Matter.Body.setPosition(this.body, {x: random(0,400), y: random(0,400)});
        }
    }

    showDrop() {
        fill("blue");
        ellipseMode(RADIUS);
        ellipse(this.body.position.x,this.body.position.y,this.radius,this.radius);
    }
}