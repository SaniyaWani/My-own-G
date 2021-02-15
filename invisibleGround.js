class invisibleGround {
    constructor(x,y,width,height) {
      var options = {
          'isStatic': true,
          'density':1
      }
      this.image=loadImage("base.png");
      this.body = Bodies.rectangle(x,y,width,height,options);
      
      
      World.add(world, this.body);
    }
    display(){
     //var pos =this.body.position;
     //var width = this.body.width;
     //var height = this.body.height;
     //rectMode(CENTER);
     //rect(pos.x,pos.y,width,height);

    }
  };
















