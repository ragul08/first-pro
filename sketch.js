var box;

function setup() {
  createCanvas(400,400);
  box = createSprite(200,200,50,50);
  box.shapeColor="blue"
  
}

function draw() 
{
   background(250);
  if (keyIsDown(RIGHT_ARROW)) 
  {
    background("black")
  }

    if (keyIsDown(LEFT_ARROW)) 
  {
    background("yellow")
    
  }
 
    if (keyIsDown(UP_ARROW)) 
  {
   background("green")
   
  }

  if (keyIsDown(DOWN_ARROW)) 
  {
  background("red")
  }

  drawSprites();
}




