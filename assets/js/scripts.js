// Your Scripts

var words = ['Check Check', 'Lets get started', 'See - Not a Colin Thing', 'Tough Nuggies', 'Thats another class'];
var colors = [
  [140, 66, 244],
  [109, 34, 214],
  [92, 39, 165],
  [67, 22, 130],
  [52, 8, 114],
];

var angle = 0.0;
var offset = 100;
var scalar = 15;
var speed = 0.75;
var colors = [
  [150, 30, 100],
  [200, 20, 75],
  [218, 10, 100],
  [255, 158, 157],
  [255, 61, 127],
  [255, 50, 110],
  [255, 30, 90],
  [100, 0, 25],
];

function setup() {
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER, CENTER);
  frameRate(3);
}

function draw() {
  var currentIndex = frameCount % colors.length;
  var currentColor = colors[currentIndex];
  var currentWord = words[currentIndex];
  background(currentColor);
  fill(255);
  textSize(100);
  text(currentWord, width / 2, height / 2);
    
    var currentIndex = frameCount % colors.length;
  var currentColor = colors[currentIndex];
  var x = offset + cos(angle) * scalar;
  var y = offset + sin(angle) * scalar;
  ellipse( mouseX, mouseY, x, y);
  angle += speed;
  fill(currentColor);
  strokeWeight(.1);
}