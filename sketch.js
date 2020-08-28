var playerPaddle;

function setup() {
  createCanvas(400, 400);
  playerPaddle = new Paddle();
}

function draw() {
  //clear the screen
  background("white");
  
  //draw the player paddle
   playerPaddle.xPosition = 390;
   playerPaddle.yPosition = mouseY;
   playerPaddle.display();
  
  //draw the computer paddle
  rect(0,160,10,70);
  
  //draw the ball
  rect(185,185,10,10);
}