const table = document.getElementById('pixelCanvas');
let color = document.getElementById('colorPicker').value;
//var height, width, color;

  //event handler for size input
  document.getElementById('sizePicker').addEventListener('submit', function(evt) {
  evt.preventDefault();
  let height = document.getElementById('inputHeight').value;
  let width = document.getElementById('inputWidth').value;
  makeGrid(height, width);
})
//makeGrid function loop
function makeGrid(n, m) {
  //to do: add reset function here
  table.innerHTML = '';

  for (let x = 1; x <= n; x++){
    let tr = document.createElement('tr');
      for (let y = 1; y <= m; y++){
      let td = document.createElement('td');
      tr.appendChild(td);
    }
    // here used to be the let table dec
    table.appendChild(tr);
  }
}
  // add color to td function
function addColor() {
  table.addEventListener('click', function(evt){
    //evt.preventDefault();
    let color = document.getElementById('colorPicker').value;
    if (evt.target.nodeName == 'TD'){
      evt.target.style.backgroundColor = color;
      }
    });
}
  addColor();
  // remove color for double click action
  function clearColor() {
    table.addEventListener('dblclick', function(evt){
    //evt.preventDefault();
    if (evt.target.nodeName == 'TD'){
      evt.target.style.backgroundColor = '';
      }
    });
}
  clearColor();
