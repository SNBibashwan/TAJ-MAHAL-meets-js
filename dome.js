
class Dome{
    constructor(x,y,radius)
    {
        this.body = ellipse(x,y,radius);
        this.radius = radius;
        this.x = x;
        this.y = y;
        
    }

    display()
    {
        //var pos = this.body.position;
        fill(255);
        stroke("black");
        strokeWeight(2);
        fill("#EFEFB8");
        ellipseMode(RADIUS);
        ellipse(this.x,this.y,this.radius);
    }
}