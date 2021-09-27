class Layer{
	constructor(x, y, depth){
		this.x = x;
		this.y = y;
		this.depth = depth;
        console.log('this depth: '+str(this.depth));
        console.log('this depth: '+str(MAXDEPTH));
		this.children = []; 
        console.log('this.children.length: '+str(this.children.length));  
		this.makeChildren(); //called whenever a new tree is created
	}
	
	draw(){
        //scale(1,-1);
		//translate(0,-height);
		let c=color(0,255,0,random(50,100));
		fill(c);
		ellipse(this.x, this.y, 20); 
        
        /*
        push();
        stroke(100,100, 100);
        line(this.x, this.y, (this.x)*2*d , this.y - height/16 );  //draw a line between parent and children
        pop();
        */

		
        if (this.children.length > 0){
			for (let i = this.depth ;  i < this.children.length; i++){				
				push();
				stroke(100,100, 100);
				line(this.x, this.y, this.children[i].x, this.children[i].y);  //draw a line between parent and children
				pop();
				this.children[i].draw();                        //draw an ellipse for the child
			}
		} 
	}
/*
	makeChildren(){	
		if (this.depth < MAXDEPTH){
			//console.log('makeChildren executed with this.depth: ',+str(this.depth));
			//if (int(random(0,2))==1 || int(random(0,2))==0){
			this.children.push(new Tree(this.x/ 2, this.y + (height / MAXDEPTH), this.depth + 1));
		
			this.children.push(new Tree(this.x + ((width - this.x) / 2), this.y + (height / MAXDEPTH), this.depth + 1));
		}
	}
	*/
	makeChildren(){
		//if (this.depth < MAXDEPTH){
        if (this.depth < 10){    
			//if (int(random(0,2))==1){
			this.children.push(new Layer(this.x + width/((this.depth)*(8)), this.y + (height / MAXDEPTH), this.depth + 1));
			this.children.push(new Layer(this.x - width/((this.depth)*(8)), this.y + (height / MAXDEPTH), this.depth + 1));
			//this.children.push(new Tree(map(this.x/2, 0, width, width,0), this.y + (height / MAXDEPTH), this.depth + 1));

		}

	}
		//console.log(this.children.length);		
	

}