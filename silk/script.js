let anchor1;  //change!
let anchor2;

let startX;
let startY;
let endX;
let endY;

let deltaStartX;
let deltaStartY;
let deltaEndX;
let deltaEndY;

let r;
let g;
let b;

function setup() {
  anchor1 = (windowHeight*1.4)/2;
  anchor2 = windowHeight/2;
  createCanvas(anchor1*2, anchor2*2);

  startX = random(width);
  startY = random(height);
  endX = random(width);
  endY = random(height);
  
  const range = 10;
  deltaStartX = random(-range, range);
  deltaStartY = random(-range, range);
  deltaEndX = random(-range, range);
  deltaEndY = random(-range, range);
  
  noFill();
  background(255,245,235);
  frameRate(20);
}

function draw() {
  
  // draw a line
  stroke(255, 170, 100, 75);
  //line(startX, startY, endX, endY);
  // bezier(x_anchor1, y_anchor1, x_control1, y_control1, 
  //        x_control2, y_control2, x_anchor2, y_anchor2)
  bezier(anchor1, anchor2, startX, startY, endX, endY, anchor1, anchor2);
  
  // move a bit
  startX += deltaStartX/3;
  startY += deltaStartY/3;
  endX += deltaEndX/3;
  endY += deltaEndY/3;
  
  if(startX < 0 || startX > width){
    deltaStartX *= -1;
  }
  
  if(startY < 0 || startY > height){
    deltaStartY *= -1;
  }
  
  if(endX < 0 || endX > width){
    deltaEndX *= -1;
  }
  
  if(endY < 0 || endY > height){
    deltaEndY *= -1;
  }
}
