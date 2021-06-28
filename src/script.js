var paintcanvas = document.getElementById("canvas1");
var context = paintcanvas.getContext("2d");
var color = 'black';
var radius = 50;
// only paint if mouse is  being dragged (moved while the button is pressed)
var isPainting = false;

function setWidth (value) {
  if (isNumeric(value)) {
    context.canvas.width = value;
  }
}

function setHeight (value) {
  if (isNumeric(value)) {
    context.canvas.height = value;
  }
}

function startPaint() {
  isPainting = true;
}

function doPaint(x, y) {
  if (isPainting) {
    paintCircle(x, y);
  }
}

function endPaint() {
  isPainting = false;
}

function changeColor(newColor) {
  color = newColor;
}

function clearCanvas () {
  context.clearRect(0, 0, paintcanvas.width, paintcanvas.height);
}

function resizeBrush(newSize) {
  radius = newSize;
  document.getElementById("sizeOutput").value = newSize; 
}

function paintCircle (x, y) {
    // make sure to start a new circle each time
    context.beginPath();
    // draw circle using a complete (2*PI) arc around given point
    context.arc(x, y, radius, 0, Math.PI * 2, true);
    context.fillStyle = color;
    context.fill();
}
// verify the given value is actually a number
function isNumeric (value) {
  // standard JavaScript function to determine whether a string is an illegal number (Not-a-Number)
  return !isNaN(value);
}
