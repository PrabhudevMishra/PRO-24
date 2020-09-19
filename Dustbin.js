class Dustbin {
    constructor(x, y, width, height){
    var options = {
      isStatic:true,
		  restituition:0.3,
		  friction:0.5,
		  density: 1.2
      }
    this.body = Bodies.rectangle(0, 0, width, height,options);
    this.width = width;
    this.height = height;

    World.add(world, this.body);
}

display(){
   var pos = this.body.position;
   translate(pos.x, pos.y);
   rectMode(CENTER);
   rect(0, 0, this.width, this.height);
  }
}
