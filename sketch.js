/* 
1) Exhibit the number of dots as a function of clicks
2) Uses color spectrum ( red -> brown) to indicate "age" of cells

*/


var layers=[];
var d=0;
var yDivisions=20;

function setup() {
	createCanvas(windowWidth, windowHeight);
	//console.log('width, height: ' + str(width) + ','+str(height));
	background(100);
	button = createButton("draw");
	button.position(width-50, height-50);
	button.mousePressed(drawCirc);
}

function draw() {

}


function drawCirc(){
	//scale(1,-1);
	//translate(0,-height+50);
	console.log('width, height: ', str(width), str(height));

	layers.push(new Layer(mouseX, mouseY, d));
	
	var r=layers.length-1;

	console.log('d and nodes in top layer : ', str(d), str(layers[r].children.length));
	

	d +=1;     //d = depth is the 'x' value for whatever function you are modelling
	
}

function connect(node){
	var r=layers.length-1;
	for (let ers in layers[r-1].children){
		color(0,255,255);
		strokeWeight(.2);
		line(node.x, node.y,layers[r-1].children[ers].x,layers[r-1].children[ers].y);
	}
}