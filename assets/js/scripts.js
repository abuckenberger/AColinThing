// Your Scripts
console.log('Hey Browser!');

var words = ['hey', 'whats up', 'hello', 'hola', 'yo'];
var colors = [
  [63, 184, 175],
  [127, 199, 175],
  [218, 216, 167],
  [255, 158, 157],
  [255, 61, 127],
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
  textSize(45);
  text(currentWord, width / 2, height / 2);
}