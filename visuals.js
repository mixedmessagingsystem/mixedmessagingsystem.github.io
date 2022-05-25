
// código para los visuales


function izquierda() {

push();

  
  var bruit = 0.0001;
  var bruit_size = noise(millis() * bruit) * 70;

  var bruitX = 0.00001;
  var bruit_x = noise(millis() * bruitX) * width/2;
  
  var bruitY = 0.00002;
  var bruit_y = noise(millis() * bruitY) * height;
  
  translate(bruit_x, bruit_y);
  stroke(0);
  fill(255, 170, 255);
  ellipse(0, 0, bruit_size, bruit_size);

pop();

}


function derecha() {

push();

  
  var bruit = 0.0001;
  var bruit_size = noise(millis() * bruit) * 70;

  var bruitX = 0.00001;
  var bruit_x = noise(millis() * bruitX) * width/2;
  
  var bruitY = 0.00002;
  var bruit_y = noise(millis() * bruitY) * height;
  
  translate(width/2 + bruit_x, bruit_y);
  stroke(0);
  fill(0, 170, 255);
  ellipse(0, 0, bruit_size, bruit_size);

pop();

}

function telon(){
    fill(0);
    rect(0, 0, width, height);
}

