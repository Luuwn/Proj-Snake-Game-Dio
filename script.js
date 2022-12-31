let canvas = document.getElementById('snake'),
    context = canvas.getContext('2d'),
    box = 32;

let snake = [];
snake[0] = {
    x: 7.5 * box,
    y: 7.5 * box
}

let direction = "right";

function criarBG() {
    context.fillStyle = "lightgreen"
    context.fillRect(0, 0, 16 * box, 16 * box);
}

function crairCobrinha(){
    for(i=0; i<snake.length; i++){
        context.fillStyle = "green";
        context.fillRect(snake[i].x, snake[i].y, box, box);
    }
}

criarBG();
crairCobrinha();