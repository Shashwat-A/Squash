// to change the game state 
var gChange = 1;

//variables for game states
var SERVE = 1
var PLAY = 2;
var END = 0;
var gameState = SERVE;

//variablesfor sprite
var ball,paddle;

//variables for Images
var ballImg, paddleImg;

function preload() {
  
  ballImg = loadImage("ball.png");
  
  paddleImg = loadImage("paddle.png");
  
}
function setup() {
  var rand = random(4 , 7);

  createCanvas(400, 400);
  
  //create ball with images and velocity
  ball = createSprite(50,200,10,10);
  ball.addImage(ballImg);
  //ball.velocityY = 3
  
  // make the paddle with image
  paddle = createSprite(385,200, 10, 10);
  paddle.addImage(paddleImg);
  
}

function draw() {
  background(205,153,0);
  
  //give the conditions to change the gameState
  if (gChange === 1) {
   gameState = SERVE; 
  }
  
  if (gChange === 2) {
   gameState = PLAY; 
  }
  
  if (gChange === 0) {
     gameState = END; 
  }
  
//make the edges and make the ball bounce off edges and paddle
  edge = createEdgeSprites ();
  ball.bounceOff(edge[0]);
  ball.bounceOff(edge[3]);
  ball.bounceOff(edge[2]);
  ball.bounceOff(paddle);
  paddle.collide(edge[2]);
  paddle.collide(edge[3]); 
    
  if (gameState === PLAY) {
   
    if(keyDown(UP_ARROW)){
      paddle.y = paddle.y - 15;
    }
    
    if (keyDown(DOWN_ARROW)) {
     paddle.y = paddle.y + 15; 
    }
    
    if (ball.x > 400) {
      reset();
    }
    
  }
    
  if(keyDown(DOWN_ARROW))
  {
    /* what should happen when you press the UP Arrow Key */
  }
  drawSprites();
  
  if (gameState === SERVE) {
    textSize(18);
    fill("red");
    textFont("Georgia");
    text("Use the arrow keys to conrol the paddle",40,180);
    text("Press space to serve",120,200);
    
    if (keyWentDown("space")) {
      gChange = 2;    
    }
    
    if (keyWentDown("space")) {
      ball.velocityY = random(7,10);
      ball.velocityX = random(7,10);
  }
    
  }
}

function reset () {
  ball.y = 200;
  ball.x = 50;
  ball.velocityY = 0;
  ball.velocityX = 0;
  gChange = 1;
  paddle.x = 200;
}

function explosion() {
  ball.velocityY = random(-9,9); 
}
