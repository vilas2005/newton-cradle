class Roof
{
    constructor(x,y,width,height){
        var ground_options={
            isStatic:true,
            restitution:3  
        }
        this.body = Bodies.rectangle(x,y,width,height,ground_options);
        this.width=width;
        this.height=height;

        World.add(world,this.body);
    }
    display(){
        var post = this.body.position;
        rectMode(CENTER);
        fill("brown");
        rect(post.x,post.y,this.width,this.height);
    }
}