
var $car = document.querySelector('img');

var data = {
  north: $car.className = 'north',
  south: $car.className = 'south',
  west: $car.className = 'west',
  east: $car.className = '',
  x: 0,
  y: 0,
  moving: false
};

document.addEventListener('keydown', function (event) {
  if (event.keyCode === 40) {
    $car.className = data.south;
  } else if (event.keyCode === 38) {
    $car.className = data.north;
  } else if (event.keyCode === 37) {
    $car.className = data.west;
  } else if (event.keyCode === 39) {
    $car.className = data.east;
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
