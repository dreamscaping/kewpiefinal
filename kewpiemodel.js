
let kewpie;

function preload() {
  kewpie = loadModel('kewpie.obj',true);

}

function setup() {
  createCanvas(600, 600, WEBGL);
}

function draw() {
  scale(2.5);
  background(255);
  fill(255);
  orbitControl(3);
  rotateY(3.15);
  model(kewpie);

}
