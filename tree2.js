class Layer{
	constructor(x, y, depth){
		this.x = x ; //not used for this
		this.y = y; //+ random(-10,10);;
		this.depth = depth;
        //console.log('this.depth: ',str(this.depth));
		this.children = [];    // a new child array is created for each node
		this.makeNodes();   //constructing parent constructs child
	}
	
	makeNodes(){
		let f=this.depth;
		let rad= Math.log(10*f) + random(5*f,10*f);
		
		// number of circles grows with d
		let numdots = 2*f+1;
		//let numdots=Math.log(f+1);

		let x=random(d*10, width-d*10);
		let y=random(d*10, height-d*10);
		let ranAng=random(0, Math.PI);
		for (let i=0; i < numdots; i++){
			let rad= Math.log(10*f) + random(5*f,10*f);
			//let x=this.x;
			//let y=this.y;

			var a=i*2*(Math.PI)/numdots + ranAng;
			console.log('angle is: ', a);
			let xval= x - rad*Math.cos(a) ;

			let yval= y - rad*Math.sin(a) ;
			console.log('x and y values are:', xval, yval);
			//let xval=random(0,width);
			//let yval=random(0,height);
			this.children[i] = new kid( xval, yval, this.depth ) ;
			//this.children[i] = new kid( -xval, this.y, d );
			//console.log('kid x value: ', str(this.children[i].x))
			//this.children[i-1] = ellipse(i*width/(2*(d+1)), this.y, 10,10);
		}
		//console.log('this.children.length: ',str(this.children.length));

	}
	
}

class kid{
	constructor(x,y,d){
		this.x= x;
		this.y=y;
		this.depth=d;
		this.drawKid();
	}

	drawKid(){
		noStroke;
		let d= this.depth;
		var c=color((d*d)/5, 255-d*10 , 255-100*Math.exp(1/(d+1),.5));
		fill(c);
		ellipse(this.x, this.y, 10,10);
	}
}