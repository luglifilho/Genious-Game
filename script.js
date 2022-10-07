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
        let elementColor = CreateelementColor(order[i])
        lightColor(elementColor, Number(i) +1);
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


 let checkorder = () => {
    for(let i in clickedOrder){
        if(clickedOrder[1] != order[i]){
            GameOver();
            break;
        }
    }
    if(clickedOrder.length == order.length){
        alert(`Pontuação: ${score} \n Você acertou ! Inciando próximo nivel! `);
        nextLevel();
        
    }
 }

 let click =(color) => {
    clickedOrder[clickedOrder.length] = color;
    CreateelementColor(color).classList.add('selected');

    setTimeout(() => {
        CreateelementColor(color).classList.remove('selected');
        checkorder();
    })
  
 }

let CreateelementColor = (color) => {
    if(color == 0){
        return green;
    }else if(color == 1){
        return red;
    }else if( color ==2){
        return yellow;
    }else if (color == 3 ){
        return blue;
    }
}

let nextLevel = () => {
    score++;
    Actualorder();
}

let GameOver =() => {
alert(`Pontuação: ${score} \n você perdeu o jogo \n Clique em Ok para iniciar um novo jogo`);
order = [];
clickedOrder = [];

playGame();
}

let playGame = () => {
    alert("Prepare-se, o jogo vai começar!");
    score = 0;

    nextLevel ();
}

green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);

/*green.addEventListener('click', click(0));
red.addEventListener('click', click(1));
yellow.addEventListener('click', click(2));
blue.addEventListener('click', click(3));
*/
playGame();