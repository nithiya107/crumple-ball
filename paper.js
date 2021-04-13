class Paper{
    constructor(x,y,r){
        this.x=x
        this.y=y
        this.r=r
        var options={
            isStatic:false,
            restitution:0.3,friction:0.5,density:1.2
        }
        this.body=Bodies.circle(x,y,r/2,options)
        World.add(world,this.body)
    }
    display(){
        var pos=this.body.position;
        push()
        translate(pos.x,pos.y)
        ellipseMode(RADIUS)
        fill("blue")
       ellipse(0,0,this.r,this.r)
        pop()
    }
}