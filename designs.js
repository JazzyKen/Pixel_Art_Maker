// Select color input
const colorPicker = document.getElementById('colorPicker');
// Select size input
const height = document.getElementById('inputHeight');
const width = document.getElementById('inputWidth');
const pixelCanvas = document.getElementById('pixelCanvas');
const form = document.getElementById('sizePicker');

// When size is submitted by the user, call makeGrid()

form.addEventListener('submit', function(event) {
	pixelCanvas.innerHTML = '';
	event.preventDefault();
	makeGrid();
})

pixelCanvas.addEventListener('click', function(pick) {
	if (pick.target.nodeName === 'TD') {
		pick.target.style.backgroundColor = colorPicker.value;
	}
})

function makeGrid() {
	for (i = 0; i < height.value; i++) {
		const row = pixelCanvas.insertRow(0);
		for (let j = 0; j < width.value; j++) {
			row.insertCell(0);
		}
	}
}
