let gridSize = 256
let pixelList = [];
let pixelSize = 40
const screen = document.getElementById('screen');
function createGrid() {
    for (i = 0; i < gridSize; i++) {
        pixelList[i] = document.createElement('div');
        pixelList[i].classList.add('square');
        pixelList[i].classList.add('num' + i);
        pixelList[i].addEventListener('mouseover', paint);
        pixelList[i].addEventListener('mousedown', paint);
        pixelList[i].style.width = `${pixelSize}px`
        pixelList[i].style.height = `${pixelSize}px`
        screen.appendChild(pixelList[i]);
    }
}
createGrid(gridSize)
function paint(event) {
    if (event.buttons == 1 || event.type == 'mousedown') {
        event.target.style.backgroundColor = color;
    }
}

let buttonList = {
    blackColor: document.getElementById('black'),
    whiteColor: document.getElementById('white'),
    rgbColor: document.getElementById('rgb_color')
}
buttonList.blackColor.addEventListener('click', changeColor)
buttonList.whiteColor.addEventListener('click', changeColor)
buttonList.rgbColor.addEventListener('input', changeColor)
buttonList.rgbColor.addEventListener('change', changeColor)
let color = 'black'
function changeColor(event) {
    if (event.type == 'click') {
        color = event.target.id
    }
    else {
        color = event.target.value
    }
}

function clean() {
    for (i = 0; i < pixelList.length; i++) {
        pixelList[i].style.backgroundColor = 'white'
    }
}

function resize(newSize) {
    gridSize = newSize**2
    for(i = 0; i < pixelList.length; i++) {
        screen.removeChild(pixelList[i])
    }
    pixelList = []
    pixelSize = (640*newSize)/gridSize
    createGrid()
}