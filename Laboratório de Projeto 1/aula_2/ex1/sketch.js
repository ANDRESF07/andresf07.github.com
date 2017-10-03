
//* ATENÇÃO !! Letras Maiúsculas/Minúsculas *//

function setup() 
{
  createCanvas (windowWidth, windowHeight);

  // colorMode (HSB, 360, 100, 100, 100);
}


function draw() 
{

 // frameRate ( int(random(1,60)) ); // velocidade 
 // print ( int (frameRate()) );

  background( random(0, 255), random(0, 255), random(0, 255) );

  fill (255); // cor do rectangulo 
  stroke (0, 255, 0); // cor do contorno 
  strokeWeight (8); // traçado *//
  rectMode (CENTER); // alinhamento do rectangulo 
  noFill (); //eliminar o preenchimento 
  rect (width/2, height/2, 250, 250); // rectangulo (é semppre desenhado no canto superior esquerdo)
 
  fill (0, 255, 0); // para alterar as definicoes da ellipse separa da formula anterior 
  noFill (); // eliminar o preenchimento 
  ellipseMode (CORNER); //alinhamento da ellipse 
  ellipse (width/2, height/2, 200, 200); // ellipse (é sempre desenhada apartir do centro)
  line (0, 0, width, height); // linha 

  strokeWeight (15);
  point (637, 225); // pontos 
  point (899, 225);
  point (637, 520);
  point (899, 520);
}


function windowResized() 
{
  resizeCanvas (windowWidth, windowHeight);
}
