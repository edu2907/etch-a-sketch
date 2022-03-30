let screen = document.getElementById('screen')
let squareList = []
for(i = 0; i < 256; i++) {
    squareList[i] = document.createElement('div');
    squareList[i].classList.add('square');
    squareList[i].classList.add('num' + i);
    screen.appendChild(squareList[i]);
}