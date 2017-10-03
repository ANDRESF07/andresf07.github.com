
function setup() 
{
  createCanvas (windowWidth, windowHeight);
  colorMode(HSB, 360, 100, 100, 100);

  background(0, 0, 100);
}


function draw() 
{
    map (mouseX, 0, width, 0, 360);
    stroke( map (mouseX, 0, width, 0, 360), 100, 100 ); 
    strokeWeight( abs(mouseX-pmouseX) + abs(mouseY-pmouseY) ); //*ocupa o ecrã inteiro uniformemente 
    line(mouseX, mouseY, pmouseX, pmouseY);
}


function mousePressed() 
{
  if (mouseButton === LEFT)
  {
    background (0, 0, 100);
  }
}

function keyPressed() 
{
  if (key === 'C' || key === 'c' || keyCode === ENTER)
  {
    background (0, 0, 100);
  }
}

function windowResized()
{
  reziseCanvas (windowWidth, windowHeight);
}