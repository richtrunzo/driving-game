
var $car = document.querySelector('img');

var data = {
  north: false,
  south: false,
  west: false,
  east: true,
  x: 0,
  y: 0,
  moving: false
};

document.addEventListener('keydown', function (event) {
  if (event.keyCode === 40) {
    $car.className = 'south';
    data.north = false;
    data.south = true;
    data.east = false;
    data.west = false;
  } else if (event.keyCode === 38) {
    $car.className = 'north';
    data.north = true;
    data.south = false;
    data.east = false;
    data.west = false;
  } else if (event.keyCode === 37) {
    $car.className = 'west';
    data.north = false;
    data.south = false;
    data.east = false;
    data.west = true;
  } else if (event.keyCode === 39) {
    $car.className = '';
  }
});

document.addEventListener('keydown', function (event) {
  if (event.keyCode === 32 && data.moving === false) {
    data.moving = true;
  } else if (event.keyCode === 32 && data.moving === true) {
    data.moving = false;
  }
});

window.setInterval(driveRight, 16);

function driveRight() {
  if (data.moving === true) {
    data.x += 5;
    $car.style.left = data.x + 'px';
  }
}
