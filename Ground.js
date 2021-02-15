class Ground {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true,
          density:1
      }
      this.image=loadImage("base.png");
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      imageMode(CENTER);
      image(this.image,pos.x,pos.y,windowWidth,20);

    }
  };

