
class Triangle{
    constructor(x1,y1,x2,y2,x3,y3)
    {
        this.body = triangle(x1,y1,x2,y2,x3,y3);
        
        this.x1 = x1;
        this.y1 = y1;
        this.x2 = x2;
        this.y2 = y2;
        this.x3 = x3;
        this.y3 = y3;
        
    }

    display()
    {
        //var pos = this.body.position;
        fill(255);
        stroke("black");
        strokeWeight(2);
        fill("#EFEFB8");
        //triangleMode(CENTER);
        triangle(this.x1,
            this.y1,
            this.x2,
            this.y2,
            this.x3,
            this.y3);
    }
}