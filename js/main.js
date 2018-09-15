//Объект с данными об игре
var game = {
    isRunning: false,
    score: 0,
    sizeX: 40,
    sizeY: 40,
}
//объект змейки
var snake = {
    body: [[0,0],[0,1],[0,2],[0,3]],
    direction: "down",
    colour: "#ffff00",
    speed: 200,
  
}





var field = document.querySelector(".field"); //заполняем поле
for (var i = 0; i < game.sizeY; i++) {
    var fieldRow = document.createElement("div");
    fieldRow.classList.add("fieldRow");

    for (var j = 0; j < game.sizeX; j++) {
        var cell = document.createElement("div");
        cell.classList.add("cell");
        cell.classList.add("x" + j + "y" + i);
        fieldRow.appendChild(cell);

    }
    field.appendChild(fieldRow);
}


function drawSnake() {
    for (i in snake.body) {
        document.querySelector(".x" + snake.body[i][0] + "y" + snake.body[i][1]).classList.add("snake"); //отрисовываем змейку
    }
}
drawSnake();
addEventListener("keydown", function (e) { //смена направления движения по клавишам
    //    console.log(e.key);
    switch (e.key) {
        case "ArrowUp":
            if (snake.direction != "down")
                snake.direction = "up";
            break;
        case "ArrowLeft":
            if (snake.direction != "right")
                snake.direction = "left";
            break;
        case "ArrowRight":
            if (snake.direction != "left")
                snake.direction = "right";
            break;
        case "ArrowDown":
            if (snake.direction != "up")
                snake.direction = "down";
            break;
        case "Enter":
            game.isRunning = !game.isRunning;
            console.log("game is running: "+game.isRunning);
            break;
    }
    //    console.log(snake.direction);
})

//function move() {
//    var headX = snake.body[0][0];
//    var headY = snake.body[0][1];
//    var tailX = snake.body[snake.body.length - 1][0];
//    var tailY = snake.body[snake.body.length - 1][1];
//
//    switch (snake.direction) {
//        case "up":
//            document.querySelector(".x" + headX + "y" + headY).classList.remove("snake");
//            document.querySelector(".x" + headX + "y" + (headY - 1)).classList.add("snake");
//            snake.body[0] = [headX, headY - 1];
//            break;
//        case "down":
//            document.querySelector(".x" + headX + "y" + headY).classList.remove("snake");
//            document.querySelector(".x" + headX + "y" + (headY + 1)).classList.add("snake");
//            snake.body[0] = [headX, headY + 1];
//            break;
//        case "left":
//            document.querySelector(".x" + headX + "y" + headY).classList.remove("snake");
//            document.querySelector(".x" + (headX - 1) + "y" + headY).classList.add("snake");
//            snake.body[0] = [headX - 1, headY];
//            break;
//        case "right":
//            document.querySelector(".x" + headX + "y" + headY).classList.remove("snake");
//            document.querySelector(".x" + (headX + 1) + "y" + headY).classList.add("snake");
//            snake.body[0] = [headX + 1, headY];
//            break;
//    }
//    
//    
//    console.log("move");
//}
function move() {
    var newHeadPosition;
    switch (snake.direction) {
        case "up":
            newHeadPosition = [snake.body[0][0], snake.body[0][1] - 1];
            break;
        case "down":
            newHeadPosition = [snake.body[0][0], snake.body[0][1] + 1];
            break;
        case "left":
            newHeadPosition = [snake.body[0][0] - 1, snake.body[0][1]];
            break;
        case "right":
            newHeadPosition = [snake.body[0][0] + 1, snake.body[0][1]];
            break;

    }
    document.querySelector(".x"+snake.body[snake.body.length-1][0]+"y"+snake.body[snake.body.length-1][1]).classList.remove("snake");
    for (i = snake.body.length - 1; i > 0; i--) {
        snake.body[i] = snake.body[i - 1];
    }
    snake.body[0] = newHeadPosition;
    
    drawSnake();

    console.log("move");
}



setInterval(move, snake.speed);
