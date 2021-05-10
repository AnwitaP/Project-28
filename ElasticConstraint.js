class ElasticConstraint{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB;
        this.ElasticConstraint = Constraint.create(options);
        World.add(world, this.ElasticConstraint);
    }

    attach(body){
        this.ElasticConstraint.bodyA = body;
    }

    fly(){
        this.ElasticConstraint.bodyA = null;
        }

    display(){
        if(this.ElasticConstraint.bodyA){
        var pointA = this.ElasticConstraint.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
    
}