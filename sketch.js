let x;
let y;
let xspeed;
let yspeed;

let dvd;

let r, g, b;

let ding1;
let ding2;
let ding3;
let this_dot;
let choo_choo;

function preload() {
  dvd = loadImage("dvd_logo.png");

  this_dot = loadSound("this_dot.wav");
  ding1 = loadSound("jump.mp3");
  ding2 = loadSound("die.mp3");
  ding3 = loadSound("checkPoint.mp3");

}

function setup() {
  createCanvas(800, 600);
  x = random(width);
  y = random(height);

  xspeed = 5;
  yspeed = 5;

  pickColor();


}

function pickColor() {
  r = random(150, 256);
  g = random(150, 256);
  b = random(150, 256);
}

function draw() {
  background(0);

  this_dot.play();

  //rect(x, y, 80, 60);
  //Draw the Dvd logo
  tint(r, g, b);
  image(dvd, x, y);


  x = x + xspeed;
  y = y + yspeed;

  if (x + dvd.width >= width) {
    xspeed = -xspeed;
    x = width - dvd.width;
    ding1.play();
    ding2.play();
    pickColor();
  } else if (x <= 0) {
    xspeed = -xspeed;
    x = 0;
    ding1.play();
    pickColor();
  }

  if (y + dvd.height >= height) {
    yspeed = -yspeed;
    y = height - dvd.height;
    ding1.play();
    ding3.play();
    pickColor();
  } else if (y <= 0) {
    yspeed = -yspeed;
    y = 0;
    ding2.play();
    pickColor();
  }
}