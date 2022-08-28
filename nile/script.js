var points = [];
var mult = 0.0035;

function setup() {
  createCanvas(windowHeight*1.4, windowHeight);
  background(255,245,235);
  angleMode(DEGREES);
  noiseDetail(1);

  var density = windowWidth/19;
  var space = width/density;

  for (var x = 0; x <width; x += space) {
    for (var y = 0; y < height; y += space) {
      var p = createVector(x + random(-10, 10), y + random(10, 10));
      points.push(p);
    }
  }
  frameRate(15);
}

function draw() {
  noStroke();
  fill(110, 162, 194);

  for (var i = 0; i < points.length; i++) {
    var angle = map(noise(points[i].x * mult, points[i].y * mult), 0, 1, 0, 720);
    points[i].add(createVector(cos(angle), sin(angle)));

    if (dist(width/2, height/2, points[i].x, points[i].y) < windowHeight/2.5) {
      ellipse(points[i].x, points[i].y, 1)
    }
  }
}
