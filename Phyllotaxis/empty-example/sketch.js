var n = 0;
var c = 8;

function setup() {
  createCanvas(1600, 800);
  angleMode(DEGREES);
  colorMode(HSB);
  background(0);

}

function draw() {
  //Any number works just fine
  //137.7 and 137.3 are the default two for the plant

  //XP: 64 and 24 and 37 are nice

  var a = n * 137.3;
  var r = c * sqrt(n);

  var x = r * cos(a) + width / 2;
  var y = r * sin(a) + height / 2;

  fill(n % 256, 255, 255);
  noStroke();
  ellipse(x, y, 8, 8);


  n++;
}