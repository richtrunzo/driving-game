
var $car = document.querySelector('img');

var data = {
  direction: 'east',
  x: 0,
  y: 0,
  moving: false
};

document.addEventListener('keydown', function (event) {
  if (event.keyCode === 40) {
    data.direction = 'south';
  } else if (event.keyCode === 38) {
    data.direction = 'north';
  } else if (event.keyCode === 37) {
    data.direction = 'west';
  } else if (event.keyCode === 39) {
    data.direction = 'east';
  }
  $car.className = data.direction;
});

document.addEventListener('keydown', function (event) {
  if (event.keyCode === 32 && data.moving === false) {
    data.moving = true;
  } else if (event.keyCode === 32 && data.moving === true) {
    data.moving = false;
  }
});

window.setInterval(drive, 16);

function drive() {
  if (data.moving === true) {
    data.x += 5;
    $car.style.left = data.x + 'px';
  }
}
