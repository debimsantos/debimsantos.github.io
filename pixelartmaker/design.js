$(document).ready(function() {

  document.getElementById('sizePicker').addEventListener('submit', function(evt) {
  evt.preventDefault();
  let height = document.getElementById('inputHeight').value;
  let width = document.getElementById('inputWidth').value;
  makeGrid(height, width);
})

function makeGrid(n, m) {
  //add reset function here
  for (let x = 1; x <= n; x++){
    let tr = document.createElement('tr');
      for (let y = 1; y <= m; y++){
      let td = document.createElement('td');
      tr.appendChild(td);
    }
    let table = document.getElementById('pixelCanvas');
    table.appendChild(tr);
  }
}
//addColor function
  //let td = document.querySelector('td');

  table.addEventListener('click', function(evt) {
    evt.preventDefault();
    addColor();
  });

  function addColor() {
    let color = document.getElementById('#colorPicker').value;
    let td = document.querySelectorAll('td');
    td.style.backgroundColor = color;
  }

//removeColor function for doubleclick
  table.addEventListener('dblclick', function(evt) {
    evt.preventDefault();
    removeColor();
  });

  function removeColor() {
    let td = document.querySelectorAll('td');
    td.style.backgroundColor = null;
  };

//makeGrid();
//addColor();
//removeColor();
