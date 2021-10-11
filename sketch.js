

function setup() {
  createCanvas(600, 200);

  box = createSprite(300,100,50,50)
  box.shapeColor = "yellow"
}

function draw() {
  background("blue");

  if(keyIsDown(UP_ARROW)){
    box.y = box.y - 5;
  }
  if(keyIsDown(DOWN_ARROW)){
    box.y = box.y + 5;
  }
  if(keyIsDown(RIGHT_ARROW)){
    box.x = box.x + 5;
  }
  if(keyIsDown(LEFT_ARROW)){
    box.x = box.x - 5;
  }

  drawSprites();
}