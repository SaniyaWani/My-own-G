class banana {
    constructor(x,y,r){
        var options = {
            'isStatic':true,
            'restitution':0,
            'friction':1,
            'density':1
        }
        this.x=x;
		this.y=y;
		this.r=r;
   
       this.image = loadImage("banana.png");
       this.body=Bodies.circle(x,y,r,options);
       
       World.add(world,this.body);
   
   
    }
   display(){
        var position=this.body.position;
        imageMode(CENTER);
       image(this.image,position.x,position.y,70,70);
   
   
   
   }
   
   
   
   }