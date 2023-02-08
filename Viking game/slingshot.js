class Slingshot{
    //constraint class - elastic connection between 2 bodies 
    //in this program, connection is between rock body and point on screen
    constructor(a,b){
        var options ={
            bodyA:a,
            pointB:b,
            length:10,
            //elasticity
            stiffness:0.04,
        }
        this.pointB = b;
        this.sling = Constraint.create(options);
        World.add(world,this.sling);
    }
    display(){
        //creating a line between bodyA and pointB (4 parameters, x,y-start,x,y-end)
        line(
            this.sling.bodyA.position.x,
            this.sling.bodyA.position.y,
            this.pointB.x,
            this.pointB.y
        )
    }
}