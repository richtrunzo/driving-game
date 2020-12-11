
var $car = document.querySelector('img');

var data = {
  north: $car.className = 'north',
  south: $car.className = 'south',
  west: $car.className = 'west',
  east: $car.className = ''
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
