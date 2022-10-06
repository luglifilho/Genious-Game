let order =[];
let clickedOrder = [];
let score = 0;

const blue = document.querySelectorAll('.blue');
const red = document.querySelectorAll('.red');
const green = document.querySelectorAll('.green');
const yellow = document.querySelectorAll('.yellow');

let Actualorder = () => {
    let colorOrder = Math.floor(Math.random() * 4);
    order[order.length] = colorOrder;
    clickedOrder =[];

    for(let i in order){
        let elementColor = createElement(order[i])
        lightColor(elementColor, Number(i)+1);
    }
 }

 let lightColor = (element, number) => {
    time = time * 500;
    setTimeout(() => {
        element.classList.add('selected');
    }, tempo -250);
    setTimeout(() => {
        element.classList.remove('selected')
    });
 }
