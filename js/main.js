//Объект с данными об игре
var game = {
    isRunning: false,
    score: 0,
    sizeX: 40,
    sizeY: 40,
}
//объект змейки
var snake = {
    body: [[0, 0]],
    direction: "down",
    colour: "#ffff00",
    speed: 200,

}
var snakeTimer, foodTimer;




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
            if (game.isRunning === false) {
                snakeTimer = setInterval(move, snake.speed);
                foodTimer = setInterval(addFood, 3000);
                console.log("game is running..");
            } else {
                clearInterval(snakeTimer);
                clearInterval(foodTimer);
                console.log("game is paused");
            }
            game.isRunning = !game.isRunning;
            break;
    }
    //    console.log(snake.direction);
})


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
    ///////////////////////проверка на проигрыш//
    if (document.querySelector(".x" + newHeadPosition[0] + "y" + newHeadPosition[1]) === null || document.querySelector(".x" + newHeadPosition[0] + "y" + newHeadPosition[1]).classList[2]==="snake") {
        game.isRunning = false;
        clearInterval(snakeTimer);
        clearInterval(foodTimer);
        alert("Вы проиграли, ваш счет: "+game.score);
    }
    /////////////////////////////////////////////
    document.querySelector(".x" + snake.body[snake.body.length - 1][0] + "y" + snake.body[snake.body.length - 1][1]).classList.remove("snake");
    for (i = snake.body.length - 1; i > 0; i--) {
        snake.body[i] = snake.body[i - 1];
    }
    snake.body[0] = newHeadPosition;


    ////////////////////////Eating////////////
    if (document.querySelector(".x" + snake.body[snake.body.length - 1][0] + "y" + snake.body[snake.body.length - 1][1]).classList[2] === "food") {
        snake.body.push([snake.body[snake.body.length - 1][0], snake.body[snake.body.length - 1][1]]);
        document.querySelector(".x" + snake.body[snake.body.length - 1][0] + "y" + snake.body[snake.body.length - 1][1]).classList.remove("food");
        game.score++;
    }
    ////////////////////////


    drawSnake();

    console.log(document.querySelector(".x" + newHeadPosition[0] + "y" + newHeadPosition[1]).classList);
}

function addFood() {
    var randX, randY;
    randX = Math.floor(Math.random() * game.sizeX);
    randY = Math.floor(Math.random() * game.sizeY);
    if (document.querySelector(".x" + randX + "y" + randY).classList[2] !== "snake") {
        document.querySelector(".x" + randX + "y" + randY).classList.add("food");
    }
}
