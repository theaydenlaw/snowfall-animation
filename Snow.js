class Snow{
    constructor(x,y){
      var options={
        friction:0.05,
        frictionAir:0.3,
        density:0.2
      }
    this.snow=Bodies.circle(x,y,30,options);
    this.image=loadImage("snow4.webp");
    this.radius=30;
    World.add(world,this.snow);
    this.velocity=this.snow.velocity;
    }
display(){
    var pos=this.snow.position ;
    //push ();
   // translate (pos.x,pos.y);
    image(this.image,pos.x,pos.y,this.radius)
    //pop ();

}
update(){
    if(this.snow.position.y>windowHeight){
        Matter.Body.setPosition (this.snow,{x:random(20,windowWidth-20),y:random(20,windowHeight-20)})
        Matter.Body.setVelocity(this.snow,this.velocity)
    }
}

}