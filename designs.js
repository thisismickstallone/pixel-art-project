

var height = document.getElementById('inputHeight');
var width = document.getElementById('inputWidth');
var docColor = document.getElementById('colorPicker');
var canvas = document.getElementById('pixelCanvas');
var size = document.getElementById('sizePicker');

function makeGrid(event) {
  canvas.innerHTML = ''; // Resets Grid
  for (var x = 1; x <= height.value; x += 1) {
    var row = document.createElement("tr");
    canvas.appendChild(row);
    for (var y = 1; y <= width.value; y += 1) {
      var col = document.createElement("td");
      row.appendChild(col);
    }
  }
  event.preventDefault();
  bgColor();
}

function bgColor() {
  var cells = document.getElementsByTagName('td');
  for (var i = 0; i < cells.length; i += 1) {
    cells[i].addEventListener('click', function(event) {
      var cell = event.target;
      cell.style.backgroundColor = docColor.value;
    });
  }
}

size.addEventListener('submit', makeGrid);
