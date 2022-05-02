
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
  orbitControl(10);
  rotateZ(3.15);
  model(kewpie);

}
