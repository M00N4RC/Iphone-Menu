let MENU = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {

  background(255);
  fill(0, 255, 0);
  rect(50, 50, 200, 75);
  fill(255, 0, 255);
  rect(50, 200, 200, 75);
  fill(255, 0, 0);
  rect(50, 350, 200, 75);
  textSize(50)
  fill(255);
  text('START', 70, 106);
  text('EXIT', 94, 406);
  textSize(26);
  text('INSTRUCTIONS', 52, 248);
  
  if (MENU == 1) {
    background(0, 255, 0)
    fill(0)
    textSize(20)
    text('Right Click to return to MENU', 525, 30)
    if (mouseButton == RIGHT) {
      MENU = 0
    }
  }
}
function mouseClicked() {
  if (MENU == 0) {
    if (mouseX < 200 && mouseX > 50) {
      if (mouseY < 125 && mouseY > 50) {
        MENU = 1
      }
    }
  }
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}