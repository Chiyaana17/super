class helicop{
    constructor(x,y,w,h){
    this.img=loadImage("helicopter.png")
    this.wi=w
    this.he=h
    var properties={
    isStatic:true,
    }
    this.body=Matter.Bodies.rectangle(x,y,w,h,properties)
    Matter.World.add(world,this.body)
}
display(){
    imageMode(CENTER)
   image(this.img,this.body.position.x,this.body.position.y,this.wi,this.he)
}
}