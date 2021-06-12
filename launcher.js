class launcher { 
    constructor(bodyA,pointB){
        var options = {
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.04,
            length:10
}
 this.launcher1 = Constraint.create(options);
  this.pointB = pointB;

 World.add(world,this.launcher1);
        }

    fly(){
        this.launcher1.bodyA=null;
    }
 diplay(){
     if(this.launcher1.bodyA){

     
     var pointA = this.launcher1.bodyA.position;
     var pointB = this.pointB;
     strokeWeight(0.1);
     line(pointA.x,pointA.y,pointB.x,pointB.y);
     }
 }
}