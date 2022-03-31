let screen = document.getElementById('screen')
let squareList = []
for(i = 0; i < 256; i++) {
    squareList[i] = document.createElement('div');
    squareList[i].classList.add('square');
    squareList[i].classList.add('num' + i);
    squareList[i].addEventListener('mouseover', paint)
    squareList[i].addEventListener('click', paint)
    screen.appendChild(squareList[i]);
}

function paint(event) {
    console.log(event)
    if(event.buttons == 1 || event.type == 'click') {
       event.target.style.backgroundColor = 'black' 
    }
}

