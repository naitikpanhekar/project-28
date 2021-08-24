class Slingshot{
    constructor(bodyA,pointB){
        var option = {
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.04,
            length:10
        }

        this.slingshot = constraint.create(options);
        this.pointB = pointB;
        World.add(world,this.slingshot);
    }

    display(){
        var pos = this.slingshot.bodyA.position;
        var posB = this.pointB;

        push();
        strokeWeight(3);
        line(posA.x,posA.y,posB.x,posB,y);
        pop();
    }
}