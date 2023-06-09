let move, x;

function setup() {
  createCanvas(600, 600);
  move = 2;
  x = 0;
}

function draw() {
  background(255, 0, 0);

  makePicture(100);

  displayGreeting("Happy Holidays 2021!!");
}

function makePicture(size) {
  stroke(0);
  fill(102, 51, 0);
  rect(width / 2 - size / 4, height - size, size / 2, size);
  fill(0, 255, 0);
  triangle(
    width / 2,
    height - 3 * size,
    width / 2 + size,
    height - size,
    width / 2 - size,
    height - size
  );
  triangle(
    width / 2,
    height - 3.5 * size,
    width / 2 + size * 0.8,
    height - 2 * size,
    width / 2 - size * 0.8,
    height - 2 * size
  );
  triangle(
    width / 2,
    height - 4 * size,
    width / 2 + size / 2,
    height - 3 * size,
    width / 2 - size / 2,
    height - 3 * size
  );
  fill(random(255), random(255), random(255));
  ellipse(width / 2 - size, height - size, size / 10, size / 10);
  fill(random(255), random(255), random(255));
  ellipse(width / 2 + size, height - size, size / 10, size / 10);
  fill(random(255), random(255), random(255));
  ellipse(width / 2 - size * 0.8, height - 2 * size, size / 10, size / 10);
  fill(random(255), random(255), random(255));
  ellipse(width / 2 + size * 0.8, height - 2 * size, size / 10, size / 10);
  fill(random(255), random(255), random(255));
  ellipse(width / 2 - size / 2, height - 3 * size, size / 10, size / 10);
  fill(random(255), random(255), random(255));
  ellipse(width / 2 + size / 2, height - 3 * size, size / 10, size / 10);
  fill(random(200, 255), random(200, 255), random(100));
  noStroke();
  triangle(
    width / 2,
    height - 4.2 * size,
    width / 2 + size / 10,
    height - 4 * size,
    width / 2 - size / 10,
    height - 4 * size
  );
  triangle(
    width / 2,
    height - 3.95 * size,
    width / 2 + size / 10,
    height - 4.15 * size,
    width / 2 - size / 10,
    height - 4.15 * size
  );
}

function displayGreeting(greeting) {
  fill(random(100, 200), random(200, 255), random(255));
  textSize(32);
  if (x + textWidth(greeting) >= width) {
    move = -2;
  }

  if (x <= 0) {
    move = 2;
  }

  x += move;
  let textHeight = textAscent() - textDescent();

  text(greeting, x, 2 * textHeight);
}
