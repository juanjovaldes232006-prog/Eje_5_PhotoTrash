let imgs = [];
let cont1 = 0, cont2 = 0, cont3 = 0, cont4 = 0;

function preload() {
  for (let i = 1; i <= 20; i++) {
    imgs[i - 1] = loadImage("assets/Inte" + i + ".jpeg");
  }
}

function setup() {
  let canvas = createCanvas(800, 600);
  canvas.style('display', 'block');
  canvas.style('margin', 'auto');
  canvas.style('margin-top', '50px');
  background(0);
  image(imgs[0], 0,   0,   400, 300);
  image(imgs[1], 400, 0,   400, 300);
  image(imgs[2], 0,   300, 400, 300);
  image(imgs[3], 400, 300, 400, 300);
}

function draw() {
}

function mousePressed() {

  if (mouseX > 0 && mouseX < 400 && mouseY > 0 && mouseY < 300) {
    noTint();
    tint(random(255), random(255), random(255));
    let ran = random(-50, 50);
    image(imgs[cont1 % 20], 0, 0, 400 + ran, 300 + ran);
    cont1++;
    if (cont1 >= 20) cont1 = 0;
  }

  if (mouseX > 400 && mouseX < 800 && mouseY > 0 && mouseY < 300) {
    noTint();
    tint(random(255), random(255), random(255));
    let ran = random(-50, 50);
    image(imgs[cont2 % 20], 400, 0, 400 + ran, 300 + ran);
    cont2++;
    if (cont2 >= 20) cont2 = 0;
  }

  if (mouseX > 0 && mouseX < 400 && mouseY > 300 && mouseY < 600) {
    noTint();
    tint(random(255), random(255), random(255));
    let ran = random(-50, 50);
    image(imgs[cont3 % 20], 0, 300, 400 + ran, 300 + ran);
    cont3++;
    if (cont3 >= 20) cont3 = 0;
  }

  if (mouseX > 400 && mouseX < 800 && mouseY > 300 && mouseY < 600) {
    noTint();
    tint(random(255), random(255), random(255));
    let ran = random(-50, 50);
    image(imgs[cont4 % 20], 400, 300, 400 + ran, 300 + ran);
    cont4++;
    if (cont4 >= 20) cont4 = 0;
  }
}