class Paper{
    constructor (x,y,width,height){
        var options = {
            isStatic:false,
            'restitution':0.3,
            'density':1.2,
            'friction':0.5

        }

        this.Image = loadImage("paper.png")
        this.Body = Bodies.rectangle(x,y,width,height,options) 
        this.width = width;
        this.height = height;
        World.add(world,this.Body)
    }
    display(){
        var pos = this.Body.position;

        image(this.Image,150,575,100,100)
        
    }
}