var color = 'black'

let screen = document.getElementById('screen');
let squareList = [];
for(i = 0; i < 256; i++) {
    squareList[i] = document.createElement('div');
    squareList[i].classList.add('square');
    squareList[i].classList.add('num' + i);
    squareList[i].addEventListener('mouseover', paint);
    squareList[i].addEventListener('mousedown', paint);
    screen.appendChild(squareList[i]);
}


let buttonList = {
    blackColor: document.getElementById('black'),
    whiteColor: document.getElementById('white'),
    rgbColor: document.getElementById('rgb_color')
}
    buttonList.blackColor.addEventListener('click', changeColor)
    buttonList.whiteColor.addEventListener('click', changeColor)
    buttonList.rgbColor.addEventListener('input', changeColor)

function changeColor(event) {
    if(event.type == 'click') {
        color = event.target.id
    }
    else {
        color = event.target.value
    }
}

function paint(event) {
    if(event.buttons == 1 || event.type == 'mousedown') {
       event.target.style.backgroundColor = color;
    }
}