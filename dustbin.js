class Dustbin{
    constructor(x,y){
        this.x=x
        this.y=y
        this.width=200
        this.height=100
        this.thickness=20
        this.bottomBody=Bodies.rectangle(x,y,this.width,this.thickness,{isStatic:true})
        this.leftBody=Bodies.rectangle(x-100,y-50,this.thickness,this.height,{isStatic:true})
        this.rightBody=Bodies.rectangle(x+100,y-50,this.thickness,this.height,{isStatic:true})
        World.add(world,this.bottomBody)
        World.add(world,this.leftBody)
        World.add(world,this.rightBody)
    }
    display(){
var posB=this.bottomBody.position
var posL=this.leftBody.position
var posR=this.rightBody.position
push()
translate(posB.x,posB.y)
rectMode(CENTER)
rect(0,0,this.width,this.thickness)
pop()
push()
translate(posL.x,posL.y)
rectMode(CENTER)
rect(0,0,this.thickness,this.height)
pop()
push()
translate(posR.x,posR.y)
rectMode(CENTER)
rect(0,0,this.thickness,this.height)
pop()

    }
}