class Tree{
	constructor(x, y, depth){
		this.x = x;
		this.y = y;
		this.depth = depth;
		this.children = [];   
		this.makeChildren();   //called whenever a new tree is created
	}
	
	draw(){
		
		let c=color(0,255,0,random(50,100));
		fill(c);
		ellipse(this.x, this.y, map(this.depth, 1, MAXDEPTH, 20, 1));
		if (this.children.length > 0){
			for (let c of this.children){				
				push();
				stroke(100,100, 100);
				line(this.x, this.y, c.x, c.y);  //draw a line between parent and children
				pop();
				c.draw();                        //draw an ellipse for the child
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
		if (this.depth < MAXDEPTH){
			//if (int(random(0,2))==1){
			this.children.push(new Tree(this.x + width/((this.depth)*(8)), this.y + (height / MAXDEPTH), this.depth + 1));
			this.children.push(new Tree(this.x - width/((this.depth)*(8)), this.y + (height / MAXDEPTH), this.depth + 1));
			//this.children.push(new Tree(map(this.x/2, 0, width, width,0), this.y + (height / MAXDEPTH), this.depth + 1));

		}

	}
		//console.log(this.children.length);		
	

}