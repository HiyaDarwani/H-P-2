class Wall{
    constructor(x, y, width, height){
        var options = {
            restitution:1,density:2.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options)
        this.width = width;
        this.height = height;
        World.add(world,this.body)
    }
    display(){
        var pos = this.body.position
        rectMode(CENTER)
        fill("red")
        rect(pos.x,pos.y,this.width,this.height)
    }
}