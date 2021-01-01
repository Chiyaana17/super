class package1{
    constructor(x,y,w,h){
    this.img=loadImage("package.png")
    this.wi=w
    this.he=h
    var properties={
    restitution:0.55,
    isStatic:true
    }
    this.body=Matter.Bodies.rectangle(x,y,w,h,properties)
    Matter.World.add(world,this.body)
}
display(){
   imageMode(CENTER)
   image(this.img,this.body.position.x,this.body.position.y,this.wi,this.he)
}}