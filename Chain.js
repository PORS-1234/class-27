class Chain{
constructor(bodyA,bodyB){
    var options= {
        bodyA: bodyA,
        bodyB: bodyB,
        length:10,
        stiffness:0.04
    
    
    
        }
        this.chain= Constraint.create(options);
    
        World.add(world,this.chain);
}
  display(){
    stroke ("red")
    strokeWeight(4);
    line (this.chain.bodyA.position.x,this.chain.bodyA.position.y, this.chain.bodyB.position.x,this.chain.bodyB.position.y); //line(x1,y1,x2,y2);


  }

}
