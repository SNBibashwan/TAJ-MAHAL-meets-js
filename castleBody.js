

class Wall{
    constructor(x,y,width,height)
    {
        var options = {
            isStatic: true
        }
        this.body = rect(x,y,width,height,options);
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
        this.color = "#EFEFB8";
        
    }

    


display(){
   
    rectMode(CENTER);
    
    stroke("black");
    strokeWeight(2);
    fill(this.color);
    rect(this.x, this.y, this.width, this.height);

    
    
}

}