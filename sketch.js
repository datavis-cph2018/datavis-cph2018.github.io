function setup() {
  createCanvas(600,400);
}

function draw() {
  background("green");
  //this circle will follow my mouse
  fill("gray");
  ellipse(mouseX,mouseY,40,40);
  fill("blue");
  ellipse(100,200,100,100);
  fill("orange");
  textSize(32); // big text
  text("happy copenhagen", 50, 100);
}
