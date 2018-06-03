// Your Scripts
console.log('Hey Browser!');

var words = ['Check Check', 'Lets get started', 'See - Not a Colin Thing', 'Tough Nuggies', 'Thats another class'];
var colors = [
  [140, 66, 244],
  [109, 34, 214],
  [92, 39, 165],
  [67, 22, 130],
  [52, 8, 114],
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
}